import React from "react";

export default function Bucketlist() {

  const handleCardHover = (e) => {
    e.currentTarget.classList.toggle("card-open");
  };
    return (
      <>
		    <div className="coming-soon banner">
          <div className="post-it">
            <img
              src={process.env.PUBLIC_URL + `/images/travelpostit.png`}
              alt=""
              className="post-it-img"
            />
            <div className="post-it-rotate">
              <span className="coming-soon-slogan">
                <div className="coming-soon-slogan-suitcase"><i className="fa-solid fa-suitcase"></i></div>
                <h2 className="coming-soon-slogan-title">Onto the Next <br></br>Adventure...</h2>
              </span>
            </div>
          </div>
          <div className="card" onMouseEnter={handleCardHover} onMouseLeave={handleCardHover}>
          <div className="card-left">
          <img
            src={process.env.PUBLIC_URL + `/images/ruthsuitcase.jpeg`}
            alt="Ruth on the next adventure with a suitcase"
            className="card-left-img"
          />
          <h2 className="card-left-title">Coming soon</h2>
        </div>   
        <div className="card-right">
          <h2 className="">Places to Visit</h2>
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