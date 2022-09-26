import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import {
  formatToLocalTime,
  iconUrlFromCode,
} from "../services/WeatherServices";
import './topButton.css';
const TempretureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    feels_like,
    humidity,
    timezone,
  },
}) => {
  return (
    <div className="text-light">
      <div className="row">
        <div className="col-sm-12 d-flex justify-content-center text-info h5 pt-2">
          <p>{details}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 d-flex justify-content-center  ">
          <img src={iconUrlFromCode(icon)} alt="img" className="borderDetail " />
        </div>
        <div className="col-md-6 d-flex justify-content-center pt-3">
          <p className="h1 fw-bold  pt-4 display-1 borderDetail ">{`${temp.toFixed()}°`}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 d-flex justify-content-center pt-4">
          <div className="borderDetail">
            <div>
              <div>
                <UilTemperature size={18} className="mx-1" />
                Real Fell:
                <span className="">{`${feels_like.toFixed()}°`}</span>
              </div>
              <div>
                <UilTear size={18} className="mx-1" />
                Humidity:
                <span className="font-medium ml-1">
                  {" "}
                  {`${humidity.toFixed()}°`}
                </span>
              </div>
              <div>
                <UilWind size={18} className="mx-1" />
                Wind:
                <span className="font-medium ml-1">
                  {" "}
                  {`${speed.toFixed()} km/h`}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 d-flex justify-content-center pt-4 px-4">
          <div className="borderDetail">
            <div>
              <div className="d-flex">
                <UilSun className="mx-1" />
                Rise :{" "}
                <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
              </div>
              <div className="d-flex">
                <UilSunset className="mx-1" />
                Set :{" "}
                <span>
                  {formatToLocalTime(sunset, timezone, "hh:mm a")}
                </span>{" "}
              </div>
              <div className="d-flex">
                <UilArrowUp className="mx-1" />
                High : <span>{`${temp_max.toFixed()}°`}</span>
              </div>
              <div className="d-flex">
                <UilArrowDown className="mx-1" />
                Low :<span>{`${temp_min.toFixed()}°`}</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempretureAndDetails;
