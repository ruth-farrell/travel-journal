import { useState, React } from "react";

export function Card({children}) {

  const [cardOpen, setCardOpen] = useState(false);

  const handleCardHover = () => {
    setCardOpen(prevOpen => !prevOpen) 
  };

  return (
    <div className={`card ${ cardOpen ? "card-open" : ""}`} onMouseOver={handleCardHover} onMouseOut={handleCardHover}>
      {children}
    </div>                    
  )
};

export function CardLeft({imgSrc, imgAlt, imgLoading, title}) {

  return (
    <div className="card-left">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="card-left-img"
        width="350"
        height="515"
        loading={imgLoading}
      />
      <h2 className="card-left-title">{title}</h2>
    </div>                    
  )
};

export function CardRight({children}) {

  return (
    <div className="card-right">
      {children}
    </div>                    
  )
};
