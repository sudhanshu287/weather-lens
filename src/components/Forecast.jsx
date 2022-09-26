import React from "react";
import { iconUrlFromCode } from "../services/WeatherServices";
import "./topButton.css";
const Forecast = ({ title, items }) => {
  return (
    <div className="container-fluid mt-4">
      <div className="row text-light mt-4">
        <div className="col-sm-12  border-bottom">
          <p className="text-uppercase ">{title}</p>
        </div>
      </div>
      <div className="row">
        <div class="testimonial-group">
          <div className="row mt-4  text-center text-light ">
            {items.map((item) => (
              <div className="col-4 forcastBorder">
                <p className="fw-bold"> {item.title}</p>
                <img src={iconUrlFromCode(item.icon)} alt="img" className="" />
                <p className="">{`${item.temp.toFixed()}°`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-4"></div>
      </div>
    </div>
  );
};

export default Forecast;
