import React from "react";

import DayListItem from "./DayListItem";
// import "components/DayListItem.scss";
// import classNames from "classnames";

export default function DayList(props) {
  
  const DayListItems = props.days.map(day => {
    return <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.setDay}/>
  });
  
  return (
    <ul>
      {DayListItems}
    </ul>
  );
}


// PROPS NEEDED
// days:Array a list of day objects (each object includes an id, name, and spots)
// day:String the currently selected day
// setDay:Function accepts the name of the day eg. "Monday", "Tuesday"