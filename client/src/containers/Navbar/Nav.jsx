import React from "react";
import "./Nav.scss";
// import { NavLink } from "react-router-dom";
const Nav = (props) => {
  return (
    <div className="topnav">
      <a exact href="/">
        Home
      </a>
      <a href="/about">About</a>
      <a href="/news">News</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Nav;
