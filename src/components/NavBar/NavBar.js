import React from "react";

import logo from "../../images/logo.svg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <img src={logo} />
      <ul className="navList">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Products</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
      </ul>
    </nav>
  );
}
