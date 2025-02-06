import React, { useEffect, useRef } from "react";

const Timer1 = () => {
  const ref1 = useRef(null);
  
  useEffect(() => {
    setTimeout(() => {
      ref1.current.focus();
    }, 1000);
  }, []);

  return (
    <>
      <div className="container">
        <input type="text" ref={ref1} />
      </div>
    </>
  );
};

export default Timer1;
