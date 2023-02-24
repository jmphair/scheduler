/* Get Appointments For Day Function */

export function getAppointmentsForDay(state, day) {
  const correctDay = state.days.filter(days => days.name === day);
  const appointments = [];

  if (correctDay[0]) {
    const dayIDs = correctDay[0].appointments

    for (const numAppts of dayIDs) {
      appointments.push(state.appointments[numAppts]);
    }
  }
  return appointments;
}


/* Get Interview Function */

export function getInterview(state, interview) {
  if (!interview) {
    return null
  }
  const interviewerData = state.interviewers[interview.interviewer]
  return {...interview, interviewer: interviewerData}
}


/* Get Interview Function */

export function getInterviewersForDay(state, day) {
  const correctDay = state.days.filter(eachDay => eachDay.name === day);
  const interviewers = [];

  if (correctDay[0]) {

    for (const numInterviewers of correctDay[0].interviewers) {
      interviewers.push(state.interviewers[numInterviewers])
    }
  }
  return interviewers;
}