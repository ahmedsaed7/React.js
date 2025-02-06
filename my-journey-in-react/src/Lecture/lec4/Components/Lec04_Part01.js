import React, { useState } from "react";
import "../Lec04.css";

const Lec04_Part01 = () => {
  const [num, setNum] = useState(1);
  const [changeColor, setChangeColor] = useState(true);

  const changeNum = () => {
    setNum(num + 1);
    setChangeColor(!changeColor);
  };

  return (
    <>
      <div className="container">
        <div className="content-btns">
          <button onClick={changeNum}>Increment</button>
        </div>
        <div className="content-txt">{num}</div>
        <h2 className={changeColor ? "style1" : "style2"}>
          {changeColor ? "Num Is Even" : "Num Is Odd"}
        </h2>
      </div>
    </>
  );
};

export default Lec04_Part01;
