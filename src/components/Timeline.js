import React from "react";

const Timeline = ({
  travelYear,
  travelMonth,
  setTravelMonth,
  filterMonth,
  months, 
  monthItems
}) => {

  return (
    <>
      <div className="timeline-section">
        <h2 className="filter-title">Filter {travelYear} By Month</h2>
        <div className="timeline-buttons">
          {months.map((Val, index) => {
            return (
              <button
                key={index}
                onClick={() => { 
                  filterMonth(Val);
                }}
                className={Val + (travelMonth === Val ? " active" : "") + (monthItems.includes(Val) ? "" :  " deactivate") }
              >
                {Val.slice(0, 3)}
              </button>
            );
          })}
          <button
            className={"All" + (!travelMonth.length ? " active" : "")}
            onClick={() => {
              setTravelMonth([]);
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
