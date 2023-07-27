import React from "react";
import { Card, CardLeft, CardRight } from "./Card";
import PostItNote from "./Postitnote";
import { FaSquareGithub, FaSquareInstagram, FaLinkedin, FaSquareShareNodes } from "react-icons/fa6";
import SkyBackground from "./SkyBackground";


export default function Hero() {

  return (
    <SkyBackground>
      <div className="banner hero">
        <PostItNote>
          <h2>A record of days remote working, travelling &#38; vacationing</h2>
        </PostItNote>
        <Card>
          <CardLeft imgSrc={process.env.PUBLIC_URL + `/images/ruthlaptop.jpeg`} imgAlt="Ruth on Laptop" title="That's Me"/>
          <CardRight>
          <div className="card-right-social-icons-grid">
            <div className="card-right-social-icons-grid-row">
              <a href="https://github.com/ruth-farrell/travel-journal/tree/gh-pages" target="_blank" rel="noreferrer">
                <FaSquareGithub aria-hidden="true"/>
                <span className="visually-hidden">Ruth's Github</span>
              </a>
              
              <a href="https://www.instagram.com/farrell_ruth/" target="_blank" rel="noreferrer">
                <FaSquareInstagram aria-hidden="true"/>
                <span className="visually-hidden">Ruth's Instagram</span>
              </a>
            </div>    
            <div className="card-right-social-icons-grid-row">
              <a href="https://linkedin.com/in/ruth-farrell" target="_blank" rel="noreferrer">
                <FaLinkedin aria-hidden="true"/>
                <span className="visually-hidden">Ruth's LinkedIn</span>
              </a>
              <a href="https://www.ruthfarrell.com" target="_blank" rel="noreferrer">
                <FaSquareShareNodes aria-hidden="true"/>
                <span className="visually-hidden">Ruth's Website</span>
              </a>
            </div>
          </div>
          </CardRight>
        </Card>
      </div>
    </SkyBackground>
  );
}
