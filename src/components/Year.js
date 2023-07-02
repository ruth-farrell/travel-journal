import React from "react";

export default function Year({ yearItems, filterYear, travelYear, setTravelYear }) {

  const handleChange = event => {
    if (event.target.value === 'All') {
      setTravelYear('');
    } else {
    filterYear(event.target.value); }
  };

  const handleHover = event => {
    event.target.parentElement.classList.toggle("btn-hover");
  };

  return (
    <div className="section year">
      <h2 className="section-title">Select Year</h2>
      <div className="select-buttons">
      <select className="select-default" onMouseEnter={handleHover} onMouseLeave={handleHover} onChange={handleChange} defaultValue={'All'}>
        <option
            className={"All" + (!travelYear.length ? " active" : "")}
            value="All"
          >
            See All
          </option>
        {yearItems.map((Val, id) => {
          return (
            <option
              className={Val + (travelYear === Val ? " active" : "")}
              key={id} 
              value={Val}>
               {Val}
            </option>
          );
        })}
        </select>
      </div>
    </div>
  );
}
