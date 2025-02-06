import React, { useState } from "react";

const Lec02_Part01 = () => {
  const [num, setNum] = useState(100);

  const add = () => {
    setNum(num + 1);
  };
  const sub = () => {
    setNum(num - 1);
  };
  const mul = () => {
    setNum(num * 2);
  };
  const div = () => {
    setNum(num / 2);
  };
  const reset = () => {
    setNum(0);
  };

  return (
    <>
      <div className="container-lec2">
        <div className="content-txt">{num}</div>
        <div className="content-btns">
          <button onClick={add}>Add</button>
          <button onClick={sub}>Sub</button>
          <button onClick={mul}>Mul</button>
          <button onClick={div}>Div</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Lec02_Part01;
