import React, { useState, useEffect } from "react";

const Header = ({ 
  query,
  travelYear, 
  travelMonth, 
  travelLocation, 
  setQuery,
  setTravelYear, 
  setTravelMonth, 
  setTravelLocation 
}) => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 58);
    });
  }, []);


  const handleYearSelectQueryInput = event => {
    document.querySelector('.year-select').value = 'All';
    document.querySelector('.search input').value = '';
  }

  return (
    <header className={scroll ? "fixed-header" : ""}>
      <div className="container">
        <h1>
          <i className="fas fa-atlas"></i>Ruth's Travel Journal
        </h1>
        <div className="header-filter"><span >Displaying   {travelLocation.length || travelMonth.length || travelYear.length || query.length ? "" : "all"} destinations
          {travelYear.length ? ` > ${travelYear}` : ""} 
          {travelLocation.length ? ` > ${travelLocation}` : ""}
          {travelMonth.length ? ` > ${travelMonth}` : ""}
          {query.length ? ` > "${query}"` : ""}
        </span>
        {travelLocation.length || travelMonth.length || travelYear.length || query.length ? <button className="filter-button" onClick={() => {
              setTravelLocation([]);
              setTravelMonth([]);
              setTravelYear([]);
              setQuery('');
              handleYearSelectQueryInput();
            }}><i className="fa-solid fa-filter-circle-xmark"></i> Clear All Filters</button>
           : ""} 

        </div>
      </div>
    </header>
  );
}

export default Header;
