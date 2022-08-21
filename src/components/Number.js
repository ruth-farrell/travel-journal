import React from "react";

export default function Number({ travelYear, numberCountries, numberCities }) {
  return (
    <div className="timeline-section">
      <h2 className="filter-title">No. of Destinations in {travelYear}</h2>
      <div className="compflex">
        <div className="timeline-num">
          <span className="number">{numberCountries}</span>
          {numberCountries === 1 ? "Country" : "Countries"}
        </div>
        <div className="timeline-num">
          <span className="number">{numberCities}</span>
          {numberCities === 1 ? "City" : "Cities"}
        </div>
      </div>
    </div>
  );
}
