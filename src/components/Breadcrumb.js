import React from "react";

const Breadcrumb = ({ 
  query,
  travelYear, 
  travelMonth, 
  travelLocation, 
  tagName,
}) => {
  return (
    <span> Displaying 
    {travelLocation.length || travelMonth.length || tagName.length || travelYear.length || query.length ? "" : " all"} destinations
    {travelYear.length ? ` > ${travelYear}` : ""} 
    {travelLocation.length ? ` > ${travelLocation}` : ""}
    {travelMonth.length ? ` > ${travelMonth}` : ""}
    {tagName.length ? " > tags: " : ""}
    {tagName.length ? (
      tagName.map((item, index) => (index === (tagName.length - 1)) ? (<span key={index}>{item}</span>) : <span key={index}>{item}, </span> )) : ""}
    {query.length ? ` > "${query}"` : ""}
    </span>
  );
}

export default Breadcrumb;
