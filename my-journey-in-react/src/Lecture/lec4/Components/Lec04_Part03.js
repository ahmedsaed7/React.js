import React, { useState } from "react";

const Lec04_Part03 = () => {
  const [list, setList] = useState([]);

  const addNum = () => {
    setList([
      ...list,
      {
        id: list.length,
        value: Math.trunc(Math.random() * 100),
      },
    ]);
  };

  return (
    <>
      <div className="container1 ">
        <div className="content-btns">
          <button onClick={addNum}>Add Number</button>
        </div>
        <div className="content-txt1">
          <ol>
            {list.map((num) => (
              <li>
                Id : {num.id}  <span> &&  </span>  Value : {num.value}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Lec04_Part03;
