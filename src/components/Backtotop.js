import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const Backtotop = () => {
  return (
    <div className="backtotop">
      <a className="default-btn" href="#top">
        <FaArrowUp aria-hidden="true"/>
        <span className="visually-hidden">Jump to the top of the page.</span>
      </a>
    </div>
  );
}

export default Backtotop;