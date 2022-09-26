import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const About = () => {
  return (
    <div>
     <Navbar/>
     <div className="container">
     <h1 className="text-center mb-5 my-5 fw-bold">About Us</h1>
     <h3 className="text-center my-5">Welcome To Weather Lens</h3>
     <p>
     Weather Lens is a Professional weather Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of weather , with a focus on dependability and you can search weather via city name. We're working to turn our passion for weather into a booming online website. We hope you enjoy our weather as much as we enjoy offering them to you.
     </p>
     <br />
     <br />
     <p className="text-center py-5">I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
     <h4 className="text-center fw-bold py-2">Thanks For Visiting Our Site</h4>
     <h2 className="text-center fw-bold" style={{color:"pink"}}>Have a nice day!</h2>
     </div>
     <Footer/>
    </div>
  );
};

export default About;
