import React from "react";
import "./Contact.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h1 className="dispaly-2 fw-bold text-center">Contact Us</h1>
          </div>
        </div>
        <form className="mt-5" style={{display:"flex",justifyContent:"center"}}>
          <div style={{width:"50%"}} className="form-box border rounded py-5 px-5">
            <div class="form-group my-2">
              <label for="inp1">Your Name*</label>
              <input
                type="text"
                class="form-control"
                id="inp1"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div class="form-group my-4">
              <label for="inp2">Email address*</label>
              <input
                type="email"
                class="form-control"
                id="inp2"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div class="form-group">
              <label for="text-area">Message*</label>
              <textarea
                class="form-control"
                id="text-area"
                rows="3"
                required
                placeholder="Your Message. . . . . ."
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
