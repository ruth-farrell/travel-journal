import React from 'react'
import Breadcrumb from './Breadcrumb';

const Search = ({ travelYear, travelMonth, travelLocation, tagName, setQuery, query }) => {
  return (
    <div className="section bread-search">
      <div className="breadcrumb">
        <h2 className="title">
          <Breadcrumb travelYear={travelYear}
          travelMonth={travelMonth}
          travelLocation={travelLocation}
          tagName={tagName}
          query={query} />
        </h2>
      </div>
      <div className="search">
        <div className="input-hidden-label" aria-hidden="true">
          Search by Destination...
        </div>
        <i className="fa-solid fa-magnifying-glass"></i>  
        <input placeholder="Search by Destination..." onChange={event => setQuery(event.target.value)} />
      </div>
    </div>
  )
}

export default Search;