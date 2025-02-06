import React, { useEffect, useRef, useState } from "react";

const Timer2 = () => {

  const ref1 = useRef();

  const [time, setTime] = useState(0);
  useEffect(() => {
    ref1.current = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(ref1.current);
    };
  },);

  return (
    <>
      <div className="container">
        <p>{" "}Timer Is Now <span> | </span> {time}</p>
        <button onClick={() => clearInterval(ref1.current)}>Stop Timer</button>
      </div>
    </>
  );
};

export default Timer2;
