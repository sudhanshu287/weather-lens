import React from "react";
import { UilThunderstorm, UilBars } from "@iconscout/react-unicons";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="" id="nav-bar">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand mx-4 text-white" href="/">
          <UilThunderstorm size={55} className="iconGradient" />{" "}
          <span className="h1 ">Weather Lens</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <UilBars className="bars " size={30} />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
