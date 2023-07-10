import React from "react";
import Card from "./Card";

export default function Bucketlist() {

  return (
    <div className="banner coming-soon">
      <div className="post-it">
        <img
          src={process.env.PUBLIC_URL + `/images/travelpostit.png`}
          alt=""
          className="post-it-img"
        />
        <div className="post-it-rotate">
          <span className="coming-soon-slogan">
            <h2 className="coming-soon-slogan-title">Onto the Next <br></br>Adventure...</h2>
          </span>
        </div>
      </div>
      <Card>
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
      </Card>
    </div>
  );
}