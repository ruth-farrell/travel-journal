import React from "react";
import travelData from '../data'



 
const Buttons = ({ filterItems, setItem, locationItems }) => {

  return (
    <>
      <div className="button-map-section"> 
      <h2 className="filter-title">Filter By Destination</h2>
      <img src={process.env.PUBLIC_URL + `/images/map-png-1-1-2.png`} alt="Map of Buttons" className="button-map"/>
        {locationItems.map((Val, id) => {
          return (
            <button className={Val}
              key={id}
              onClick={() => filterItems(Val)}
            >
              <i className="fas fa-map-pin"></i> {Val}
            </button>
          );
        })}
        <button className="All"
          onClick={() => setItem(travelData)}
        >
          See All Destinations
        </button>
       </div>
    </>
  );
};
 
export default Buttons;