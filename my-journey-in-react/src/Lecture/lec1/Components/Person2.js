import React from "react";

const Person2 = ({ name, age, city, univerity, major }) => {
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

export default Person2;
