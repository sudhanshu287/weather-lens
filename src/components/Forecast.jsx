import React from "react";
import { iconUrlFromCode } from "../services/WeatherServices";
import "./topButton.css";
const Forecast = ({ title, items }) => {
  return (
    <div className="container">
      <div className="row text-light">
        <div className="col-sm-12 mt-4 px-4 border-bottom">
          <p className="text-uppercase ">{title}</p>
        </div>
      </div>

      <div class="testimonial-group ">
        <div className="row mt-4  text-center text-light ">
          {items.map((item) => (
            <div class="col-4">
              <p className=""> {item.title}</p>
              <img src={iconUrlFromCode(item.icon)} alt="img" className="" />
              <p className="">{`${item.temp.toFixed()}°`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-2"></div>
      </div>
    </div>
  );
};

export default Forecast;
