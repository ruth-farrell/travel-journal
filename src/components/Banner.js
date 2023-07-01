import React from "react";

export default function Banner() {

  const handleCardHover = (e) => {
    e.currentTarget.classList.toggle("card-open");
  };

  return (
    <div className="banner">
      <div className="post-it">
        <img
          src={process.env.PUBLIC_URL + `/images/travelpostit.png`}
          alt=""
        />
        <div className="post-it-rotate">
          <h2>A record of <br></br><i className="far fa-calendar-alt" aria-hidden="true"></i>days remote
            working, travelling &#38; vacationing</h2>
        </div>
      </div>
      <div className="polaroid-banner card" onMouseEnter={handleCardHover}   onMouseLeave={handleCardHover}>
        <div className="card-left">
        <img
          src={process.env.PUBLIC_URL + `/images/ruthlaptop.jpeg`}
          alt="Ruth on Laptop"
        />
        <h2 className="travel_title2">That's Me</h2>
        </div>
        <div className="card-right">
        <div className="social-icons">
          <div className="social-icons-row">
            <a href="https://github.com/ruth-farrell/travel-journal/tree/gh-pages" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-github"></i></a>
            <a href="https://www.instagram.com/farrell_ruth/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-instagram"></i></a>
          </div>    
          <div className="social-icons-row">
            <a href="https://linkedin.com/in/ruth-farrell" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.ruthfarrell.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-square-share-nodes"></i></a>
           </div>
         </div>
        </div>
      </div>
    </div>
  );
}
