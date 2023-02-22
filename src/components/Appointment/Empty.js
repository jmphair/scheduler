import React from "react";

// import "components/Appointment/styles.scss";
// import classNames from "classnames";

export default function Empty(props) {

  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );

}

// The <Empty> component should accept the onAdd function as a prop.
// It should be called when the user clicks the Add button.