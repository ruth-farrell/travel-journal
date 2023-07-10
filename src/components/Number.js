import React from "react";

export default function Number({ travelYear, travelMonth, numberCountries, numberCities, numberContinents }) {
  return (
    <div className="section number">
      <h2 className="section-title">Number of Destinations {travelYear.length ? ` in ${travelMonth} ${travelYear}` : ""}</h2>
      <div className="section-container">
        <div className="number-item">
          <span className="number-item-count">{numberContinents}</span>
          {numberContinents === 1 ? "Continent" : "Continents"}
        </div>
        <div className="number-item">
          <span className="number-item-count">{numberCountries}</span>
          {numberCountries === 1 ? "Country" : "Countries"}
        </div>
        <div className="number-item">
          <span className="number-item-count">{numberCities}</span>
          {numberCities === 1 ? "Location" : "Locations"}
        </div>
      </div>
    </div>
  );
}
