import React, { useEffect, useState } from "react";

const Lec05_Part01 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const addNum1 = () => {
    setNum1(num1 + 1);
  };

  const addNum2 = () => {
    setNum2(num2 + 1);
  };

  useEffect(() => {
    console.log(
      `%c Num1 Changed`,
      "font-size: 18px; padding:5px; background-color:yellow; color: brown;"
    );
  }, [num1]);

  return (
    <>
      <div className="container">
        <div className="content-btns">
          <button onClick={addNum1}>Add Num1</button>
          <button onClick={addNum2}>Add Num2</button>
        </div>
        <div className="content-txt">
          <p>
            Num1 <span>|</span> {num1}
          </p>
          <p>
            Num2 <span>|</span> {num2}
          </p>
        </div>
      </div>
    </>
  );
};

export default Lec05_Part01;
