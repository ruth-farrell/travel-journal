import React from "react";

export default function Year({ yearItems, filterYear, travelYear }) {
  return (
    <div className="timeline-section">
      <h2 className="filter-title">Select Year</h2>
      <div className="timeline-buttons">
        {yearItems.map((Val, id) => {
          return (
            <button
              className={Val + (travelYear === Val ? " active" : "")}
              key={id}
              onClick={() => filterYear(Val)}
            >
              <i className="far fa-calendar-alt"></i> {Val}
            </button>
          );
        })}
      </div>
    </div>
  );
}
