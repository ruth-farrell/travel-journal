import React from "react";

const Card = ({children}) => {

  const handleCardHover = (e) => {
    e.currentTarget.classList.toggle("card-open");
  };

  return (
    <div className="card" onMouseOver={handleCardHover} onMouseOut={handleCardHover}>
      {children}
    </div>                    
  )
};

export default Card;
