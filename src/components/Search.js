import React from 'react';
import Sort from './Sort';
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = ({ setQuery, setSort, sort }) => {
  return (
    <div className="section search">
      <Sort setSort={setSort} sort={sort}/>
      <div className="search-input">
        <div className="search-input-hidden-label" aria-hidden="true">
          Search by Destination...
        </div>
        <FaMagnifyingGlass/>
        <input placeholder="Search by Destination..." onChange={event => setQuery(event.target.value)} />
      </div>
    </div>
  )
}

export default Search;