import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = ({ setQuery }) => {
  return (
    <div className="search">
      <div className="search-input">
        <div className="search-input-hidden-label" aria-hidden="true">
          Search by Title.......
        </div>
        <FaMagnifyingGlass aria-hidden="true"/>
        <input placeholder="Search by Title..." onChange={event => setQuery(event.target.value)} />
      </div>
    </div>
  )
}

export default Search;