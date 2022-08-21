import React from "react";

const Buttons = ({
  filterLocation,
  locationItems,
  setItem,
  travelLocation,
  travelYear,
  travelDataByYear,
  setTravelMonth,
  setTravelLocation,
}) => {
  return (
    <>
      <div className="button-map-section">
        <h2 className="filter-title">Filter {travelYear} By Country</h2>
        <img
          src={process.env.PUBLIC_URL + `/images/map-png-1-1-2.png`}
          alt="Map of Buttons"
          className="button-map"
        />
        {locationItems.map((Val, id) => {
          return (
            <button
              key={id}
              onClick={() => filterLocation(Val)}
              className={Val + (travelLocation === Val ? " active" : "")}
            >
              <i className="fas fa-map-pin"></i> {Val}
            </button>
          );
        })}
        <button
          className="All"
          onClick={() => {
            setItem(travelDataByYear);
            setTravelLocation([]);
            setTravelMonth([]);
          }}
        >
          See All Countries
        </button>
      </div>
    </>
  );
};

export default Buttons;
