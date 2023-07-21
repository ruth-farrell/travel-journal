import React from 'react'
import { FaSort } from "react-icons/fa6";

const Sort = ({sort, setSort}) => {

  const handleSort = () => {
    setSort(!sort);
  }

  return (
    <div className="sort">
      <h2 className="section-title -small">
        Sorting by {sort ? "Most" : "Least"} Recent 
      </h2>
      <button className="grey shadow" onClick={handleSort}>
        <FaSort aria-hidden="true"/>
        <span className="visually-hidden">Sort</span>
      </button>
    </div>
  )
}

export default Sort;