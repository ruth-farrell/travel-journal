import { useFilterContext } from "../features/travel/TravelContext";

export default function Number() {
  const { travelYear, travelMonth, derived: { countryItems, titleItems, continentItems } } = useFilterContext();
  return (
    <div className="section number">
      <h2 className="section-title">{travelYear.length ? `${travelYear} ${travelMonth}` : "Destinations"} by Numbers</h2>
      <div className="section-container">
        <div className="number-item">
          <span className="number-item-count">{continentItems.length}</span>
          {continentItems.length === 1 ? "Continent" : "Continents"}
        </div>
        <div className="number-item">
          <span className="number-item-count">{countryItems.length}</span>
          {countryItems.length === 1 ? "Country" : "Countries"}
        </div>
        <div className="number-item">
          <span className="number-item-count">{titleItems.length}</span>
          {titleItems.length === 1 ? "Location" : "Locations"}
        </div>
      </div>
    </div>
  );
}
