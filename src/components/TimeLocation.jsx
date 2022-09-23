import React from 'react'
import { formatToLocalTime } from '../services/WeatherServices';
const TimeLocation = ({weather:{dt,timezone,name,country}}) => {
  return (
    <div className=''>
        <div className="row">
            <div className="col-sm-12 d-flex justify-content-center mt-3 text-white">
                <p className='h5'>{formatToLocalTime(dt, timezone)}</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 d-flex justify-content-center text-white mt-3">
                <p className='h1'>{`${name},  ${country}`}</p>
            </div>
        </div>
    </div>
  )
}

export default TimeLocation;