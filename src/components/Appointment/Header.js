import React from "react";

// import "components/Appointment/styles.scss";
// import classNames from "classnames";

export default function Header(props) {

  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  );

}

// prop:

// time:String - the time of the appointment (e.g "12pm")