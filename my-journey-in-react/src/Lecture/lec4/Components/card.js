import React from 'react';
import '../Lec04.css'
const Card = ({ name, age, city, degree }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: {name}</h3>
          <p>Age: {age}</p>
          <p>City: {city}</p>
          <p>Degree: {degree}</p>
        </div>
      </div>
  );
};

export default Card;