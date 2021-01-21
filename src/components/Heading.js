/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const Heading = () => {
  return (
    <div>
      <header className="navbar">
        <div>
          <img
            src="https://image.flaticon.com/icons/svg/139/139899.svg"
            className="logoImg"
            alt="logo"
          />{" "}
          CYF Hotel
        </div>
        <ul className="nav">
          <li className="margin">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/training">Training</NavLink>
          </li>
        </ul>
        <div>
          <ul className="nav">
            <li>Register</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Heading;
