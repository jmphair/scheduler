import { useState, useEffect } from "react";
import axios from "axios";
import { updateSpots } from "helpers/selectors";

/** This custom hook returns a number of helper functions that use the application data */
export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  /**
   * Creates a new Interview.
   *
   * @param {number} id represents the ID of the appointment being booked.
   * @param {object} interview represents the interview data.
   * @return {promise} returns the result of the axios.put() request.
   */
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      const days = updateSpots(state, appointments);
      setState((prev) => ({
        ...prev,
        appointments,
        days,
      }));
    });
  }

  /**
   * Destroys an existing Interview
   *
   * @param {number} id represents the ID of the appointment being cancelled.
   * @return {promise} returns the result of the axios.put() request.
   */
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
      const days = updateSpots(state, appointments);
      setState((prev) => ({
        ...prev,
        appointments,
        days,
      }));
    });
  }

  return { state, setDay, bookInterview, cancelInterview };
}
