import React from "react";
import travelData from '../data'



 
const Timeline = ({ filtermonthItems, setItem, monthItems }) => {

  return (
    <>
     <div className="timeline-section">
      <h2 className="filter-title">Filter By Month</h2>
      <div className="timeline-buttons">

        {monthItems.map((Val, id) => {
          return (
            <button className={Val}
              key={id}
              onClick={() => filtermonthItems(Val)}
            >
               {Val}
            </button>
          );
        })}
        <button className="All"
          onClick={() => setItem(travelData)}
        >
          See All 
        </button>
        </div>
     </div>
    </>
  );
};
 
export default Timeline;