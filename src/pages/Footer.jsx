import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid mt-5 footerColor">
      <div className="row border-top border-3 ">
        <div className="col-sm-6 mt-5 text-center px-5 text-light">
          <h1>About Us</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum id
            optio dignissimos fugiat minus qui praesentium, magni pariatur odio
            dicta sit, porro dolorum aliquid illum quisquam illo unde dolore.
          </p>
        </div>
        <div className="col-sm-6 mt-5 text-center text-light">
          <div>
            <h3>Quick Link</h3>
            <p>
              <a href="" className="nav-link">
                Home
              </a>
            </p>
            <p>
              <a href="" className="nav-link">
                About Us
              </a>
            </p>
            <p>
              <a href="" className="nav-link">
                Contact Us
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row text-center bg-dark border-top">
        <div className="col-sm-12 text-light py-2">
            &copy;copyright All rights reserved.Sudhanshu Patel.
        </div>
      </div>
    </div>
  );
};

export default Footer;
