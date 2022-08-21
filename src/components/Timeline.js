import React from "react";

const Timeline = ({
  setItem,
  monthItems,
  travelYear,
  travelDataByYear,
  travelMonth,
  setTravelMonth,
  setTravelLocation,
  filterMonth,
}) => {
  return (
    <>
      <div className="timeline-section">
        <h2 className="filter-title">Filter {travelYear} By Month</h2>
        <div className="timeline-buttons">
          {monthItems.map((Val, id) => {
            return (
              <button
                key={id}
                onClick={() => filterMonth(Val)}
                className={Val + (travelMonth === Val ? " active" : "")}
              >
                {Val}
              </button>
            );
          })}
          <button
            className="All"
            onClick={() => {
              setItem(travelDataByYear);
              setTravelMonth([]);
              setTravelLocation([]);
            }}
          >
            See All
          </button>
        </div>
      </div>
    </>
  );
};

export default Timeline;
