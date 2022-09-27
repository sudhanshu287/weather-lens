import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Contact = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 my-5">
              <h1 className="dispaly-2 fw-bold text-center">Contact Us</h1>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form className="border border-primary rounded py-5 px-5">
            <div className="row">
              <div className="col-sm-12 my-2">
                <div class="form-group">
                  <label for="nameInp">Your Name*</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nameInp"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 my-2">
                <div class="form-group">
                  <label for="emailInp">Enter Your Email*</label>
                  <input
                    type="email"
                    class="form-control"
                    id="emailInp"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 my-2">
                <div class="form-group">
                  <label for="text-area">Message*</label>
                  <textarea
                    class="form-control"
                    id="text-area"
                    rows="3"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
              <button type="button" class="btn btn-dark">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
