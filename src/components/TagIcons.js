import React from "react";
import { FaTag, FaStar, FaBriefcase, FaPersonWalkingLuggage, FaHouseChimney, FaHippo, FaBowlFood, FaHeart } from "react-icons/fa6";
import { GiDinosaurRex } from "react-icons/gi";

const TagIcons = ({tag}) => {
  return (
    <>
      {tag.includes("Highlight") ? <FaStar aria-hidden="true"/>
        : tag.includes("Location") ? <FaPersonWalkingLuggage aria-hidden="true"/>
        : tag.includes("Residence") ? <FaHouseChimney aria-hidden="true"/>
        : tag.includes("Home") ? <FaHeart aria-hidden="true"/>
        : tag.includes("Remote") ? <FaBriefcase aria-hidden="true"/>
        : tag.includes("Dinosaur") ? <GiDinosaurRex aria-hidden="true"/>
        : tag.includes("Food") ? <FaBowlFood aria-hidden="true"/>
        : tag.includes("Wildlife") ? <FaHippo aria-hidden="true"/>
        : <FaTag/>}
    </>
  );
}

export default TagIcons;
