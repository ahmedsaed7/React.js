import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
      <nav>
        <NavLink style={style1} to="/">LOGO</NavLink>
        <div className="links">
          <NavLink style={style1} to="/home">Home</NavLink>
          <NavLink style={style1} to="/prices">Prices</NavLink>
          <NavLink style={style1} to="/teams">Teams</NavLink>
          <NavLink style={style1} to="/products">Products</NavLink>
          <NavLink style={style1} to="/students">Students</NavLink>
          <NavLink style={style1} to="/bigdata">BigData</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
