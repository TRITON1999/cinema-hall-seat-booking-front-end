import "./Seat.css";
import React, { useState } from "react";

const Seat = (props) => {
  const [classes, setClass] = useState("Seat");

  const handleClick = (e) => {
    const [row, num] = e.target.dataset.id.split('-')
    props.handleNumClick(row, num)
    if (classes !== "Seat") {
      setClass("Seat");
    } else {
      setClass("Seat blacked");
    }
  }

  if (props.disable === true)
    return (
      <div className={"disabled "}>
        <div className="num"> {props.num} </div>
      </div>
    );
  if (props.selected === true)
      return (
        <div className={"selected "}>
        <div className="num"> {props.num} </div>
      </div>
      );
  return (
    <div
      className={classes}
      onClick={handleClick}
      data-id={props.row + '-' + props.num}
    >
      <div className="num"> {props.num} </div>
    </div>
  );
};

export default Seat;
