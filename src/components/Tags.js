import React from 'react'

const Tags = ({
  uniqueTagNames,
  tagName,
  setTagName,
  filterTag,
 }) => {

  function renderIcon(elem) {
    if (elem.includes('current')) { 
      return "fa-solid fa-person-walking-luggage";
    } 
    if (elem.includes('home')) { 
      return "fa-solid fa-house";
    }
    if (elem.includes('Highlight')) {
      return "fa-regular fa-star";
    }
    return "fa-solid fa-tag"
  }

  return (
    <div className="section">
      <h2 className="section-title">
        Filter Destinations By Tag
      </h2>
      <div className="section-container">
        {uniqueTagNames.map(tag => tag.map((elem, index) => 
        <button className={(tagName === elem ? " active" : "") + " default"} key={index} onClick={() => {filterTag(elem);}}><i className={renderIcon(elem)}></i> {elem.replace( /([a-z])([A-Z])/g, "$1 $2")}</button> 
        ))}
        {tagName.length ? (
          <button
            className="grey shadow"
            onClick={() => {
              setTagName([]);
            }}
          ><i className="fa-solid fa-filter-circle-xmark"></i> Clear Tag
          </button>
        ) : ('')}
      </div>
    </div>
  )
}

export default Tags;