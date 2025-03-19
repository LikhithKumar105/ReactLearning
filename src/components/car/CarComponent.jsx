import React, { useState, useEffect } from "react";
import './car.css'

function CarComponent() {
  const [car, setCar] = useState([]);
  const [years, setYears] = useState(new Date().getFullYear());
  const [makes, setMakes] = useState("");
  const [models, setModels] = useState("");
  function handleYearChange(event){
    setYears(event.target.value)
  }
  function handleMakeChange(event){
    setMakes(event.target.value)
  }
  function handleModelChange(event){
    setModels(event.target.value)
  }

  function handleAddCar(){
    const newCar = {year:years,make:makes,model:models}
    setCar(c=>[...c,newCar]);

    setYears(new Date().getFullYear());
    setMakes("");
    setModels("");
 }
  function handleRemoveCar(index){
    setCar(c=>c.filter((_,i)=>i!==index))
  }
  function handleClearList(){
    setCar([])
  }
  return (
    <>
      <div>
        <h2 className="heading">List of Cars are:</h2>
        <ul className="input-heading">{car.map((car,index)=><li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}</ul>
        <input type="number"value={years} onChange={handleYearChange} className="input" /><br />
        <input type="text"value={makes} onChange={handleMakeChange}className="input" placeholder="Enter make"/><br />
        <input type="text"value={models} onChange={handleModelChange}className="input" placeholder="Enter Model"/><br />
        <button className="input-button"onClick={handleAddCar}>Add Car</button>
        <button className="input-button"onClick={handleClearList}>Clear List</button>
      </div>
    </>
  );
}

export default CarComponent;
