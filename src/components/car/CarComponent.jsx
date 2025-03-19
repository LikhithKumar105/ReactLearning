import React, { useState, useEffect } from "react";
import './car.css'

function CarComponent() {
  const [car, setCar] = useState({year:2024,make:"Ford",model:"Mustang"});
  function handleYearChange(event){
    setCar(c=>({...c, year: event.target.value}))
  }
  function handleMakeChange(event){
    setCar(c=>({...c, make: event.target.value}))
  }
  function handleModelChange(event){
    setCar(c=>({...c, model: event.target.value}))
  }
  return (
    <>
      <div>
        <p className="input-heading">Your Favourite car is : {car.year} {car.make} {car.model}</p>
        <input type="number"value={car.year} onChange={handleYearChange} className="input"/><br />
        <input type="text"value={car.make} onChange={handleMakeChange}className="input"/><br />
        <input type="text"value={car.model} onChange={handleModelChange}className="input"/><br />
      </div>
    </>
  );
}

export default CarComponent;
