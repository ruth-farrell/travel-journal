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
    {tagName.length ? ` > ${tagName.replace( /([a-z])([A-Z])/g, "$1 $2")}` : ""}
    {query.length ? ` > "${query}"` : ""}
    </span>
  );
}

export default Breadcrumb;
