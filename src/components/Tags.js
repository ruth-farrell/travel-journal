import React from 'react'
import { FaTag, FaStar, FaBriefcase, FaPersonWalkingLuggage, FaHouseChimney, FaFilterCircleXmark, FaHippo, FaBowlFood } from "react-icons/fa6";
import { GiDinosaurRex } from "react-icons/gi";


const Tags = ({
  tagItems,
  tagName,
  setTagName,
  filterTag,
 }) => {

  return (
    <div className="section tag">
      <h2 className="section-title">
        Filter by Tags
      </h2>
      <div className="section-container">
        {tagItems.map((tag, index) => { 
          return (
            <button key={index} className={(tagName.includes(tag)? " active" : "") + " default"} onClick={() => {filterTag(tag)}}>
              {tag.includes("Highlight") ? <FaStar aria-hidden="true"/> 
              : tag.includes("Location") ? <FaPersonWalkingLuggage aria-hidden="true"/> 
              : tag.includes("Country") ? <FaHouseChimney aria-hidden="true"/> 
              : tag.includes("Remote") ? <FaBriefcase aria-hidden="true"/> 
              : tag.includes("Dinosaur") ? <GiDinosaurRex aria-hidden="true"/> 
              : tag.includes("Food") ? <FaBowlFood aria-hidden="true"/>
              : tag.includes("Wildlife") ? <FaHippo aria-hidden="true"/>
              : <FaTag/>}
              {tag}
            </button> 
          )
        })}
      </div>
      {tagName.length ? (
          <button
            className="grey shadow"
            onClick={() => {
              setTagName([]);
            }}
          ><FaFilterCircleXmark/> Reset Tags
          </button>
        ) : ('')}
    </div>
  )
}

export default Tags;