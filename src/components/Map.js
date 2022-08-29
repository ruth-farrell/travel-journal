import React from "react";

const Map = ({
  filterLocation,
  locationItems,
  travelLocation,
  travelYear,
  setTravelLocation,
}) => {
  return (
    <>
      <div className="button-map-section">
        <h2 className="filter-title">Filter {travelYear} By Country</h2>
        <img
          src={process.env.PUBLIC_URL + `/images/blank_world_map.png`}
          alt="Map of Buttons"
          className="button-map"
        />
        {locationItems.map((Val, id) => {
          return (
            <>
            <button
              key={id}
              onClick={() => filterLocation(Val)}
              className={Val + (travelLocation === Val ? " active" : "")}
            >
              <i className="fas fa-map-marker-alt"></i><span className="hidden">{Val}</span></button> 

            </>
          );
        })}
      {travelLocation.length ? (
        <button
        className={"All" + (travelLocation.length ? " active" : "")}
          onClick={() => {
            setTravelLocation([]);
          }}
        >
          Clear Filter
        </button> 
        ) : ('') }
      </div>
    </>
  );
};

export default Map;
