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
import { formatToLocalTime, iconUrlFromCode } from "../services/WeatherServices";

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
        <div className="col-sm-12 d-flex justify-content-center text-info h5 mt-3">
          <p>{details}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 d-flex justify-content-center mt-4">
          <img src={iconUrlFromCode(icon)} alt="img" className="" />
        </div>
        <div className="col-sm-4 d-flex justify-content-center mt-4">
          <p className="h1 display-2">{`${temp.toFixed()}°`}</p>
        </div>
        <div className="col-sm-4 d-flex justify-content-center mt-4">
          <div>
            <div>
              <UilTemperature size={18} className="mx-1" />
              Real Fell:
              <span className="">{`${feels_like.toFixed()}°`}</span>
            </div>
            <div>
              <UilTear size={18} className="mx-1" />
              Humidity:
              <span className="font-medium ml-1"> {`${humidity.toFixed()}°`}</span>
            </div>
            <div>
              <UilWind size={18} className="mx-1" />
              Wind:
              <span className="font-medium ml-1"> {`${speed.toFixed()} km/h`}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-sm-3 d-flex justify-content-center">
          <UilSun className="mx-1" />
          <p>
            Rise : <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
          </p>
        </div>
        <div className="col-sm-3 d-flex justify-content-center">
          <UilSunset className="mx-1" />
          <p>
            Set : <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>{" "}
          </p>
        </div>
        <div className="col-sm-3 d-flex justify-content-center">
          <UilArrowUp className="mx-1" />
          <p className="">
            High : <span>{`${temp_max.toFixed()}°`}</span>
          </p>
        </div>
        <div className="col-sm-3 d-flex justify-content-center">
          <UilArrowDown className="mx-1" />
          <p>
            Low :<span>{`${temp_min.toFixed()}°`}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TempretureAndDetails;
