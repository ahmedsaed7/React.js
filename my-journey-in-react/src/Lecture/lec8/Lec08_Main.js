import React from "react";
import "./Lec08.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Prices from "./Components/Prices";
import Teams from "./Components/Teams";
import Footer from "./Components/Footer";
import StudentData from "./Components/StudentData";

const Lec08_Main = () => {
  return (
    <>
      <div className="container-route">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/studentdata" element={<StudentData />} />
          <Route
            path="*"
            element={
              <h2 style={{ textAlign: "center" }}>
                ERROR 404 ... PAGE NOT FOUND
              </h2>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default Lec08_Main;
