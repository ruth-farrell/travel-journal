import React from "react";
import Card from "./Card";
import { FaSquareGithub, FaSquareInstagram, FaLinkedin, FaSquareShareNodes } from "react-icons/fa6";


export default function Hero() {

  return (
    <div className="banner hero">
      <div className="post-it">
        <img
          src={process.env.PUBLIC_URL + `/images/travelpostit.png`}
          alt=""
          className="post-it-img"
        />
        <div className="post-it-rotate">
          <h2>A record of days remote
            working, travelling &#38; vacationing</h2>
        </div>
      </div>
      <Card>
        <div className="card-left">
        <img
          src={process.env.PUBLIC_URL + `/images/ruthlaptop.jpeg`}
          alt="Ruth on Laptop"
          className="card-left-img"
        />
        <h2 className="card-left-title">That's Me</h2>
        </div>
        <div className="card-right">
        <div className="card-right-social-icons-grid">
          <div className="card-right-social-icons-grid-row">
            <a href="https://github.com/ruth-farrell/travel-journal/tree/gh-pages" target="_blank" rel="noreferrer"><FaSquareGithub/></a>
            <a href="https://www.instagram.com/farrell_ruth/" target="_blank" rel="noreferrer"><FaSquareInstagram/></a>
          </div>    
          <div className="card-right-social-icons-grid-row">
            <a href="https://linkedin.com/in/ruth-farrell" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="https://www.ruthfarrell.com" target="_blank" rel="noreferrer"><FaSquareShareNodes/></a>
           </div>
         </div>
        </div>
      </Card>
    </div>
  );
}
