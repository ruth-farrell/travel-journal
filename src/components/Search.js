import React from 'react'
import Breadcrumb from './Breadcrumb';

const Search = ({ travelYear, travelMonth, travelLocation, tagName, setQuery, query }) => {
  return (
    <div className="section search">
      <div className="breadcrumb">
        <h2 className="section-title">
          <Breadcrumb travelYear={travelYear}
          travelMonth={travelMonth}
          travelLocation={travelLocation}
          tagName={tagName}
          query={query} />
        </h2>
      </div>
      <div className="search-input">
        <div className="search-input-hidden-label" aria-hidden="true">
          Search by Destination...
        </div>
        <i className="fa-solid fa-magnifying-glass"></i>  
        <input placeholder="Search by Destination..." onChange={event => setQuery(event.target.value)} />
      </div>
    </div>
  )
}

export default Search;