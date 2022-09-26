import React from "react";


const Footer = () => {
  return (
    <div className="container-fluid mt-5" style={{background: "rgba(41,47,54,0.90)"}}>
      <div className="row border-top border-3 ">
        <div className="col-sm-6 mt-5 text-center px-5 text-light">
          <h1>About Us</h1>
          <p className="">
          Weather Lens is a Professional weather Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of weather , with a focus on dependability and you can search weather via city name. We're working to turn our passion for weather into a booming online website. We hope you enjoy our weather as much as we enjoy offering them to you.
          </p>
        </div>
        <div className="col-sm-6 mt-5 text-center text-light">
          <div>
            <h3>Quick Link</h3>
            <p>
              <a href="/" className="nav-link">
                Home
              </a>
            </p>
            <p>
              <a href="/about" className="nav-link">
                About Us
              </a>
            </p>
            <p>
              <a href="/contact" className="nav-link">
                Contact Us
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row text-center bg-dark border-top">
        <div className="col-sm-12 text-light py-2">
            &copy;copyright All rights reserved. Made by Sudhanshu Patel.
        </div>
      </div>
    </div>
  );
};

export default Footer;
