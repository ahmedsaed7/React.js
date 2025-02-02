import React from "react";
const Student = (props) => {
  const { name, age, city, univerity, major } = props.student;
  return (
    <>
      <div className="person-info">
        <h2>Welcome : {name} </h2>
        <p>Your Age : {age}</p>
        <p>Your City : {city} </p>
        <p>Your Univerity : {univerity} </p>
        <p>Your Major : {major} </p>
      </div>
    </>
  );
};

export default Student;


