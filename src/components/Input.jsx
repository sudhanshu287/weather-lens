import React, { useState } from "react";


import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './topButton.css';


const Input = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <div className="container">
      <div className="row pt-4">
      <div className="col-sm-6 mt-2">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="search for city......"
          className="form-control text-capitalize"
          required
        />
      </div>
      <div className="col-sm-6 ">
        <div className="row">
          <div className="col-sm-6 d-flex justify-content-around mt-2">
            <button className="btn-grad" onClick={handleSearchClick}>
              <i className="bi bi-search"></i>
            </button>
            <button className="btn-grad" onClick={handleLocationClick}>
              <i className="bi bi-geo-alt"></i>
            </button>
            
          </div>
          <div className="col-sm-6 mt-2 d-none d-sm-block">
            <button
              name="metric"
              className="btn-sm btn"
              onClick={handleUnitsChange}
            >
              °C
            </button>
            <span className="d-inline text-light">|</span>
            <button
              name="imperial"
              className="btn-sm btn"
              onClick={handleUnitsChange}
            >
              °F
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Input;
