import React from "react";
import "./pageStyle.css";
const Contact = () => {
  return (
    <div className="mainContainer">
      <div className="contactContainer">
      <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
           Full Name
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Your full name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
