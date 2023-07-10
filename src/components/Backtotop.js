import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const Backtotop = () => {
  return (
    <div className="backtotop">
      <a className="default-btn" href="#top" aria-label="Jump to the top of the page.">
      <FaArrowUp aria-hidden="true"/>
      </a>
    </div>
  );
}

export default Backtotop;