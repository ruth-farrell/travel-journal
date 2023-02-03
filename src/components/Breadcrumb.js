import React from 'react'

const Breadcrumb = ({ travelYear, travelMonth, travelLocation, setQuery, query }) => {
    return (
      <div className="timeline-section bread-search">
      <div className="breadcrumb">
      <h2 className="filter-title">
        Displaying {travelLocation.length || travelMonth.length || travelYear.length || query.length ? "" : "all"} Destinations
        {travelYear.length ? ` > ${travelYear}` : ""}
        {travelLocation.length ? ` > ${travelLocation}` : ""}
        {travelMonth.length ? ` > ${travelMonth}` : ""}
        {query.length ? ` > "${query}"` : ""}
      </h2>
      </div>
      <div className="search">
      <div className="input-hidden-label" 
        aria-hidden="true">
     Search by Destination...
      </div>
      <i className="fa-solid fa-magnifying-glass"></i>  
      <input placeholder="Search by Destination..." onChange={event => setQuery(event.target.value)} />
      </div>
    </div>
    )
}

export default Breadcrumb;