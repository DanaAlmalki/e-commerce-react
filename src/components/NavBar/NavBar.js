import React from "react";

import logo from "../../images/logo.svg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <img className="logo" src={logo} />
      <ul className="navList">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="products">Products</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
      </ul>
    </nav>
  );
}
