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
      <div className="section">
        <h2 className="section-title">Filter {travelYear} Destinations By Month</h2>
        <div className="timeline-buttons">
          {months.map((Val, index) => {
            return (
              <button
                key={index}
                disabled={monthItems.includes(Val) ? false : true}
                onClick={() => {
                  filterMonth(Val);
                }}
                className={Val + (travelMonth === Val ? " active" : "") + (monthItems.includes(Val) ? "" : " deactivate")}
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
