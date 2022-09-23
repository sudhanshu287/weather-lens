import React from "react";
import { UilThunderstorm } from '@iconscout/react-unicons'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar container-fluid navbar-expand-lg navbar-light container-fluid-new">
        <div class="container-fluid">
          <a class="navbar-brand h1 font-weight-bold" href="#">
            <UilThunderstorm size={70} className=""/>
               <span>  </span>Weather Lens
          </a>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
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
