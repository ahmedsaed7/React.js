import './App.css';
import { BrowserRouter, Routes, useSearchParams } from "react-router-dom";
import Lec01_Main from "./Lecture/lec1/Lec01_Main";
import Lec02_Main from "./Lecture/lec2/Lec02_Main"
import Lec03_Main from "./Lecture/lec3/Lec03_Main";
// import Lec04_Main from "./Sessions/Lec04/Lec04_Main";
// import Lec05_Main from "./Sessions/Lec05/Lec05_Main";
// import Lec06_Main from "./Sessions/Lec06/Lec06_Main";
// import Lec07_Main from "./Sessions/Lec07/Lec07_Main";
// import Lec08_Main from "./Sessions/Lec08/Lec08_Main";
// import Lec09_Main from "./Sessions/Lec09/Lec09_Main";
// import Lec10_Main from "./Sessions/Lec10/Lec10_Main";
// import Lec11_Main from "./Sessions/Lec11/Lec11_Main";
// import { useLayoutEffect } from "react";

function App() {
  return (
  <>
     <BrowserRouter>
        {/* =============== LEC-01 =============== */}
        <Lec01_Main />

        {/* =============== LEC-02 =============== */}
        <Lec02_Main />

        {/* =============== LEC-03 =============== */}
        <Lec03_Main />

        {/* =============== LEC-04 =============== */}
        {/* <Lec04_Main /> */}

        {/* =============== LEC-05 =============== */}
        {/* <Lec05_Main /> */}

        {/* =============== LEC-06 =============== */}
        {/* <Lec06_Main /> */}

        {/* =============== LEC-07 =============== */}
        {/* <Lec07_Main /> */}

        {/* =============== LEC-08 =============== */}
        {/* <Lec08_Main /> */}

        {/* =============== LEC-09 =============== */}
        {/* <Lec09_Main /> */}

        {/* =============== LEC-10 =============== */}
        {/* <Lec10_Main /> */}

        {/* =============== LEC-11 =============== */}
        {/* <Lec11_Main /> */}
      </BrowserRouter>
  </>
  );
}

export default App;
