import React, { Component } from "react";
import Lec03_Part01 from "./Components/Lec03_Part01";
import "./Lec03.css";
import Lec03_Part02 from "./Components/Lec03_Part02";

class Lec03_Main extends Component {
  render() {
    return (
      <>
        <h1 className="title"> class componet </h1>
        <Lec03_Part01 />
        <Lec03_Part02 />
      </>
    );
  }
}

export default Lec03_Main;
