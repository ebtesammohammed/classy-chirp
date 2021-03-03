import React from "react";

const ChirpCard = (props) => {
  return (
    <>
      <h3>{props.todo.username}</h3>
      <li> {props.todo.message} </li>
    </>
  );
};

export default ChirpCard;
