import React from "react";

export default function Banner() {
  return (
    <div className="banner">
      <div className="ninety-days-banner">
        <img
          src={process.env.PUBLIC_URL + `/images/travelpostit.png`}
          alt="Ruth on Laptop"
        />
        <h2>
          <i className="far fa-calendar-alt" aria-hidden="true"></i> Days remote
          working, travelling + vacationing
        </h2>
      </div>
      <div className="polaroid-banner">
        <img
          src={process.env.PUBLIC_URL + `/images/ruthlaptop.jpeg`}
          alt="Ruth on Laptop"
        />
        <h2 className="travel_title2">That's Me</h2>
      </div>
    </div>
  );
}
