import React from "react";
import './topButton.css';

const TopButton = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      title: "Fatehpur",
    },
    {
      id: 2,
      title: "Kanpur",
    },
    {
      id: 3,
      title: "Lucknow",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Seoul",
    },
    {
      id: 6,
      title: "Dubai",
    },
  ];
  return (
    
    <div className="row d-none d-sm-flex py-4">
      {cities.map((city) => (
        <div className="col-sm-2">
          <button className="btn" key={city.id}
          onClick={()=>setQuery({q:city.title})}>
            {city.title}
          </button>
        </div>
      ))}
    
    </div>
  );
};

export default TopButton;
