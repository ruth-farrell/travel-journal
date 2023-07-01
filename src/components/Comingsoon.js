import React from "react";

export default function Bucketlist() {

  const handleCardHover = (e) => {
    e.currentTarget.classList.toggle("card-open");
  };
    return (
      <>
		    <div className="banner coming-soon">
          <span className="slogan"><div className="suitcase"><i className="fa-solid fa-suitcase"></i></div><h2>Onto the Next <br></br>Adventure...</h2></span>
          <div className="polaroid-banner card" onMouseEnter={handleCardHover}   onMouseLeave={handleCardHover}>
          <div className="card-left">
          <img
            src={process.env.PUBLIC_URL + `/images/ruthsuitcase.jpeg`}
            alt="Ruth on the next adventure with a suitcase"
          />
          <h2 className="travel_title2">Coming soon</h2>
        </div>   
        <div className="card-right">
          <h2 className="">Places to Visit Next</h2>
          <ul>
            <li><span className="fi fi-pe"></span> Peru</li>
            <li><span className="fi fi-jp"></span> Japan</li>
            <li><span className="fi fi-nz"></span> New Zealand</li>
            <li><span className="fi fi-au"></span> Australia</li>
          </ul>
        </div>   
      </div>
      </div>
      </>
    );

}