import React, { useState, useCallback, useMemo } from "react";

const Counter = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const add1 = useCallback(() => {
    setCounter1(counter1 + 1);
  }, [counter1]);

  const add2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);

  const oneIsEven = useMemo(() => {
    let count = 0;
    while (count < 10000000) count++;
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <>
      <div className="container">
        <div className="content-btns">
          <button onClick={add1}>
            Counter One <span> | </span> {counter1}
          </button>
          <button onClick={add2}>
            Counter Two <span> | </span> {counter2}
          </button>
        </div>
        <div className="content-txt">
          <p>Counter One Is {oneIsEven ? "Even" : "Odd"}</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
