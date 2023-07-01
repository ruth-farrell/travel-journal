import React, { useState, useEffect } from "react";
import Breadcrumb from './Breadcrumb';

const Header = ({ 
  query,
  travelYear, 
  travelMonth, 
  travelLocation, 
  tagName,
  setQuery,
  setTravelYear, 
  setTravelMonth, 
  setTravelLocation,
  setTagName
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
        <div className="header-filter">
          <Breadcrumb travelYear={travelYear}
            travelMonth={travelMonth}
            travelLocation={travelLocation}
            tagName={tagName}
            query={query}
             />
            {travelLocation.length || travelMonth.length || travelYear.length || query.length 
             || tagName.length ? <button className="grey" onClick={() => {
                  setTravelLocation([]);
                  setTravelMonth([]);
                  setTravelYear([]);
                  setTagName([]);
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
