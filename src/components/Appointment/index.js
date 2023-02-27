import React from "react";

import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";
import Confirm from "./Confirm";

export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "Saving";
  const CONFIRM = "CONFIRM";
  const DELETING = "Deleting";
  const EDIT = "EDIT";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function saveAppointment(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props.bookInterview(props.id, interview)
    .then(() => {
      transition(SHOW);
    });
  }

  function deleteAppointment() {
    transition(DELETING);

    props.cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      });
  }

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form
          student={props.student}
          interviewer={props.interviewer}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={saveAppointment}
        />
      )}
      {mode === EDIT && (
        <Form
          student={props.student}
          interviewer={props.interviewer}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={saveAppointment}
        />
      )}
      {mode === SAVING && (
        <Status string={SAVING} />
      )}
      {mode === DELETING && (
        <Status string={DELETING}/>
      )}
      {mode === CONFIRM && (
        <Confirm 
          message="Are you sure you want to delete?"
          onConfirm={deleteAppointment}
          onCancel={() => back()}
        />
      )}
    </article>
  );

}