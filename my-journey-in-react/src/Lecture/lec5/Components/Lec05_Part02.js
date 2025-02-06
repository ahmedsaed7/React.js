import React, { useEffect, useState } from "react";
import "../Lec05.css"
const Lec05_Part02 = () => {
  const [time, setTime] = useState(0);
  // trunc ===  floor

  let seconds = Math.trunc(time % 60);
  let minuts = Math.trunc((time / 60) % 60);
  let hours = Math.trunc(minuts / 60);

  const incrementTime = () => {
    setTime(time + 1);
  };

  useEffect(() => {
    const timer = setInterval(incrementTime, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div className="container1">
        <h2 className="timer-content">
          Hours : {hours} <span> | </span> Minuts :{minuts} <span> | </span>{" "}
          Seconds :{seconds}
        </h2>
      </div>
    </>
  );
};

export default Lec05_Part02;
