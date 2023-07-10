import React from 'react'
import { FaTag, FaStar, FaBriefcase, FaPersonWalkingLuggage, FaHouseChimney, FaFilterCircleXmark } from "react-icons/fa6";


const Tags = ({
  tagItems,
  tagName,
  setTagName,
  filterTag,
 }) => {

  return (
    <div className="section tag">
      <h2 className="section-title">
        Filter Destinations By Tag
      </h2>
      <div className="section-container">
      {tagItems.length > 1 ? (
        tagItems.map((tag, index) => { 
        return (
          <React.Fragment key={index}>
            {tag.length ? ( <button className={(tagName === tag ? " active" : "") + " default"} onClick={() => {filterTag(tag);}}>
            {tag.includes("Highlight") ? <FaStar/> : tag.includes("Location") ? <FaPersonWalkingLuggage/> : tag.includes("Country") ? <FaHouseChimney/> : tag.includes("Remote") ? <FaBriefcase/> : <FaTag/> } {tag}</button> 
            ) : "" }
          </React.Fragment>
        )})
      ): <span>No tags available for current filters.</span> }
      </div>
      {tagName.length ? (
          <button
            className="grey shadow"
            onClick={() => {
              setTagName([]);
            }}
          ><FaFilterCircleXmark/> Reset Tag
          </button>
        ) : ('')}
    </div>
  )
}

export default Tags;