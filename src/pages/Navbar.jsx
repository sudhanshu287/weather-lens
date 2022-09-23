import React from "react";
import { UilThunderstorm } from "@iconscout/react-unicons";
import "./pageStyle.css";
import MovingText from "react-moving-text";

const Navbar = () => {
 
  return (
    <div className="headerGradient ">
      <nav class="navbar container-fluid navbar-expand-lg navbar-light container-fluid-new">
        <div class="container-fluid">
          <a class="navbar-brand h1 font-lg font-weight-bold" href="#">
            <UilThunderstorm
              size={70}
              className="iconGradient mx-4 text-white rounded-4"
            />

            <MovingText
              className="d-inline text-light h1"
              type="fadeIn"
              duration="1000ms"
              delay="3s"
              direction="alternate"
              timing="linear"
              iteration="15"
              fillMode="none"
            >
              Weather Lens
            </MovingText>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon rounded-5"></span>
          </button>
          <div
            class="collapse navbar-collapse mx-5"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">
                  <h4>Home</h4>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  <p>About Us</p>
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link text-light"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
