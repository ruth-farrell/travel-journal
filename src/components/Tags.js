import React from 'react'
import { FaFilterCircleXmark } from "react-icons/fa6";
import TagIcons from "./TagIcons";

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
              <TagIcons tag={tag}/>
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
