import React, { createContext } from "react";
import Student01 from "./Student01";

export const context1 = createContext();
export const context2 = createContext();

const Lec06_Part02 = () => {
  return (
    <div className="cont">
      <context1.Provider value={"Ahmed Saed "}>
        <context2.Provider value={"Web Development"}>
          <Student01 />
        </context2.Provider>
      </context1.Provider>
    </div>
  );
};

export default Lec06_Part02;
