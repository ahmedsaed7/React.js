import React from "react";
import Person1 from "./Components/Person1";
import Person2 from "./Components/Person2";
import "./Lec01.css"

const Lec01_Main = () => {
  return (
    <>
      <div className="container">
        <Person1
          name="Islam"
          age="21"
          city="Cairo"
          univerity="Cairo"
          major="Web Development"
        />
        <Person2
          name="Ahmed"
          age="27"
          city="Cairo"
          univerity="Helwan"
          major="MicroBiology"
        />
        <Person1
          name="Mohamed"
          age="30"
          city="Cairo"
          univerity="AinShams"
          major="Engineering"
        />
      </div>
    </>
  );
};

export default Lec01_Main;
