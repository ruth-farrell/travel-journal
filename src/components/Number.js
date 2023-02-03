import React from "react";

export default function Number({ travelYear, numberCountries, numberCities, numberContinents }) {
  return (
    <div className="timeline-section">
      <h2 className="filter-title">Number of Destinations {travelYear.length ? ` in ${travelYear}` : ""}</h2>
      <div className="number-container">
        <div className="timeline-num">
          <span className="number">{numberContinents}</span>
          {numberContinents === 1 ? "Continent" : "Continents"}
        </div>
        <div className="timeline-num">
          <span className="number">{numberCountries}</span>
          {numberCountries === 1 ? "Country" : "Countries"}
        </div>
        <div className="timeline-num">
          <span className="number">{numberCities}</span>
          {numberCities === 1 ? "Location" : "Locations"}
        </div>
      </div>
    </div>
  );
}
