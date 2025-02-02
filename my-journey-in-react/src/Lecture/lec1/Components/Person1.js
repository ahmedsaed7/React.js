import React from "react";

const Person1 = (props) => {
  return (
    <>
      <div className="person-info">
        <h2>Welcome : {props.name} </h2>
        <p>Your Age : {props.age}</p>
        <p>Your City : {props.city} </p>
        <p>Your Univerity : {props.univerity} </p>
        <p>Your Major : {props.major} </p>
      </div>
    </>
  );
};

export default Person1;
