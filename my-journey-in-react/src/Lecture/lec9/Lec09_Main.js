import React from "react";
import "./Lec09.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Prices from "./Pages/Prices";
import Teams from "./Pages/Teams";
import StudentData from "./Components/StudentData";
import Products from "./Pages/Products";
import AudiCar from "./Components/AudiCar";
import BmwCar from "./Components/BmwCar";
import SkodaCar from "./Components/SkodaCar";
import StudentsDegree from "./Pages/StudentsDegree";
import Students from "./Pages/Students";
import StudentSuccess from "./Components/StudentSuccess";

import { lazy } from "react";

const Lec09_Main = () => {
  const BigDataLazy = lazy(() => import("./Pages/BigData"));
  return (
    <>
      <div className="container-route">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/studentdata" element={<StudentData />} />
          <Route path="/students" element={<Students />} />

          <Route path="/studentsdegree" element={<StudentsDegree />}>
            <Route path=":studentId" element={<StudentSuccess />}>
              <Route path=":studentName" element={<StudentSuccess />} />
            </Route>
          </Route>

          <Route path="/products" element={<Products />}>
            <Route path="audi" element={<AudiCar />} />
            <Route path="bmw" element={<BmwCar />} />
            <Route path="skoda" element={<SkodaCar />} />
          </Route>

          <Route
            path="/bigdata"
            element={
              <React.Suspense fallback="<h2>Big Data Is Loading ... </h2>">
                <BigDataLazy />
              </React.Suspense>
            }
          />

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

export default Lec09_Main;
