import React from "react";

const Cloud = ({ position }) => {
  return (
    <div className={`cloud -${position ? position : ""}`} aria-hidden="true">
      <div className="cloud-inner"></div>
    </div>
  );
}

export default Cloud;