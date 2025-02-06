import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  const style1 = ({ isActive }) => {
    return {
      color: isActive ? "black" : "brown",
      fontSize: isActive ? "25px" : "22px",
      textDecoration: "none",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <>
      <div className="products-container">
        <input className="input-1" type="text" placeholder="Search Here" />

        <nav className="products-nav">
          <div className="products-links">
            <NavLink style={style1} to="audi">AUDI </NavLink>
            <NavLink style={style1} to="bmw"> BMW</NavLink>
            <NavLink style={style1} to="skoda">SKODA </NavLink>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Products;
