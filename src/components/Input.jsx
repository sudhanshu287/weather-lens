import React,{useState} from "react";
import { UilSearch, UilLocationPinAlt } from "@iconscout/react-unicons";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Input = ({ setQuery, units, setUnits }) => {

    const [city, setCity] = useState("");

  const handleUnitsChange=(e)=>{
    const selectedUnit=e.currentTarget.name;
    if(units!==selectedUnit) setUnits(selectedUnit);
  };
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick=()=>{
    if(navigator.geolocation){
      toast.info('Fetching users location.');
      navigator.geolocation.getCurrentPosition((position)=>{
        toast.success("Location fetched!");
        let lat=position.coords.latitude;
        let lon=position.coords.longitude;
        setQuery(
          {
            lat,lon
          }
        );
      });
    }
  };
  return (
    <div className="row">
      <div className="col-sm-6">
        <input
        value={city}
        onChange={(e)=>setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city......"
          className="form-control ml-4 border-0 mt-3 text-capitalize"
          required
        />
      </div>
      <div className="col-sm-3 mt-3 d-flex justify-content-evenly ">
        <UilSearch className="d-flex text-light mt-2 mx-4" onClick={handleSearchClick} />
        <p className="d-inline "></p>
        <UilLocationPinAlt className="text-light mt-2" onClick={handleLocationClick}/>
      </div>
      <div className="col-sm-3 mt-3 d-none d-sm-block">
        <button name="metric" className="btn-sm btn"
        onClick={handleUnitsChange}>
          °C
        </button>
        <p className="d-inline text-light">|</p>
        <button name="imperial" className="btn-sm btn" onClick={handleUnitsChange}>
          °F
        </button>
      </div>
    </div>
  );
};

export default Input;
