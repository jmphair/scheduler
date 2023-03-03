/**
 * Gets an array of Appointments For Day.
 *
 * @param {object} state represents the state of the application.
 * @param {string} day represents the specified day.
 * @return {array} returns the appointments array with all of the appointments for the specified day.
 */
export function getAppointmentsForDay(state, day) {
  const correctDay = state.days.filter((days) => days.name === day);
  const appointments = [];

  if (correctDay[0]) {
    const dayIDs = correctDay[0].appointments;

    for (const numAppts of dayIDs) {
      appointments.push(state.appointments[numAppts]);
    }
  }
  return appointments;
}

/**
 * Gets an Interview.
 *
 * @param {object} state represents the state of the application.
 * @param {object} interview represents the specified interview.
 * @return {object} returns an interview object with the corresponding interviewer data attached to it.
 */
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewerData = state.interviewers[interview.interviewer];
  return { ...interview, interviewer: interviewerData };
}

/**
 * Gets an array of Interviewers For Day.
 *
 * @param {object} state represents the state of the application.
 * @param {string} day represents the specified day.
 * @return {array} returns the interviewers array, which contains all of the interviewers for the specified day.
 */
export function getInterviewersForDay(state, day) {
  const correctDay = state.days.filter((eachDay) => eachDay.name === day);
  const interviewers = [];

  if (correctDay[0]) {
    for (const numInterviewers of correctDay[0].interviewers) {
      interviewers.push(state.interviewers[numInterviewers]);
    }
  }
  return interviewers;
}

/**
 * Updates Appointment Spots Remaining.
 *
 * @param {object} state represents the state of the application.
 * @param {object} appointments represents an object containing all the appointments of the day.
 * @return {array}  returns a newDays array which shows the updated number of spots available for each day.
 */
export function updateSpots(state, appointments) {
  const index = state.days.findIndex((d) => d.name === state.day);

  const dayObj = state.days[index];

  let spots = 0;

  for (const id of dayObj.appointments) {
    const appointment = appointments[id];
    if (!appointment.interview) {
      spots++;
    }
  }

  const newDays = [...state.days];
  const day = { ...dayObj, spots };
  newDays[index] = day;

  return newDays;
}
