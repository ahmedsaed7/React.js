import React from "react";
import { context1 } from "./Lec06_Part02";
import { context2 } from "./Lec06_Part02";

const Student02 = () => {
  return (
    <>
      <context1.Consumer>
        {(value1) => {
          return (
            <context2.Consumer>
              {(value2) => {
                return (
                  <>
                    <h2> Name : {value1}</h2>
                    <p> Major : {value2}</p>
                  </>
                );
              }}
            </context2.Consumer>
          );
        }}
      </context1.Consumer>
    </>
  );
};

export default Student02;
