import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Business AI</div>
      <ul className="nav-links">
        <li>About</li>
        <li>Services ▾</li>
      </ul>
    </nav>
  );
};

export default Navbar;
