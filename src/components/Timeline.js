import React from "react";

const Timeline = ({
  travelYear,
  travelMonth,
  setTravelMonth,
  filterMonth,
  months,
  monthItems
}) => {

  const handleChange = event => {
    if (event.target.value === 'All') {
      setTravelMonth('');
    } else {
      filterMonth(event.target.value); 
    }
  };

  return (
    <>
      <div className="section timeline">
        <h2 className="section-title">Filter {travelYear.length ? `${travelYear} by ` : ""} Month</h2>
        <div className="timeline-buttons desktop-only">
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
        <div className="select-buttons mobile-only">
          <select className="select-default" onChange={handleChange} defaultValue={'All'}>
            <option
                className={"All" + (!travelMonth.length ? " active" : "")}
                value="All"
              >
                See All
              </option>
            {monthItems.map((Val, index) => {
              return (
                <option
                  className={Val + (travelMonth === Val ? " active" : "")}
                  key={index} 
                  value={Val}>
                  {Val}
                </option>
              );
            })}
            </select>
        </div>
      </div>
    </>
  );
};

export default Timeline;
