import React, { useContext } from "react";
import { context1 } from "./Lec06_Part03";
import { context2 } from "./Lec06_Part03";

const Student03 = () => {
  const value1 = useContext(context1);
  const value2 = useContext(context2);

  return (
    <>
      <h2> Name : {value1}</h2>
      <p> Major : {value2}</p>
    </>
  );
};

export default Student03;
