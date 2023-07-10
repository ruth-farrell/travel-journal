import React, { useState } from "react";
import Modal from "./Modal";
import Card from "./Card";
import { FaSpinner, FaTag, FaStar, FaBriefcase, FaPersonWalkingLuggage, FaHouseChimney, FaChevronRight, FaLocationDot } from "react-icons/fa6";

const Destinations = ({ item, query, sort }) => {

  const [showCard, setShowCard ] = useState(false);

  const handleModalBtnOpen = (e) => {
    const modalWrapper = e.currentTarget.closest(".card").nextElementSibling;
    modalWrapper.classList.toggle("modal-open");

    modalWrapper.addEventListener('click', (e) => {
      if ( e.target.closest(".modal") === null ) {
      e.target.classList.remove("modal-open");
      }
    });
  };

  const filteredCards = item.filter(item => {
   if (query === "") {
     return item;
   } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
     return item;
   }
  }); 

  if (sort) {
    filteredCards.reverse();
  }

  const handleShowCard = () => {
    setShowCard(!showCard);
  }
              
  return (
    <>
      <div className="destinations">
        {filteredCards.length ? (
          filteredCards.map((destination, index) => {
            return (
               <div key={destination.id} className={!showCard && index >= 6 ? " hidden" : ""}>
                <Card>
                  <div className="card-left">
                    <img
                      src={process.env.PUBLIC_URL + `/images/${destination.imageUrl}`}
                      className="card-left-img"
                      alt={destination.title}
                      title={destination.title}
                      loading="lazy"
                    />
                    <h3 className="card-left-title">{destination.title}</h3>
                  </div>
                  <div className="card-right">
                    <div className="card-right-location">
                      <span className={"fi fi-" + (destination.country.code)}></span>
                      <span className="card-right-location-name">{destination.country.name}</span>
                    </div>
                    <h3 className="card-right-title">{destination.title}</h3>
                    <div className="card-right-google-data">
                    <a
                        href={destination.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                      <FaLocationDot aria-hidden="true"/> View on Google Maps</a>
                    </div>
                    {destination.startDate && destination.endDate ?
                      <div className="card-right-dates">
                        <span className="card-right-dates-start">{destination.startDate}</span>
                        <span>-</span>
                        <span className="card-right-dates-end">{destination.endDate}</span>
                      </div>
                    : '' }
                    {destination.description ?
                    <span className="card-right-description">{destination.description}</span>
                    : '' }
                    <div className="card-right-tags">
                     {destination.tags.map((tag, index) => {
                      return (
                        <React.Fragment key={index}>
                          {tag.length? (
                          <span >
                            {tag.includes("Highlight") ? <FaStar aria-hidden="true"/> : tag.includes("Location") ? <FaPersonWalkingLuggage aria-hidden="true"/> : tag.includes("Country") ? <FaHouseChimney aria-hidden="true"/> : tag.includes("Remote") ? <FaBriefcase aria-hidden="true"/> : <FaTag aria-hidden="true"/> }
                          {tag}</span>) : "" } 
                        </React.Fragment>
                      )
                      })}
                    </div>
                    { destination.slides ? 
                    <button className="default" onClick={handleModalBtnOpen}>View more <FaChevronRight aria-hidden="true"/></button>
                    : ''
                    }
                  </div>
                </Card>
                {destination.slides ? <Modal destination={destination}/> : ''} 
              </div>
            )
          })
         )   
         : (
          <div className="cards-no-results">
          <span>No results. Try changing your filters/search.</span>
          </div>
         )
        }
        
      </div>
      {filteredCards.length > 6 ? 
      <div className={ "banner cards-controller" + (showCard ? " hidden" : "")}>
        <div>
          <button onClick={handleShowCard} className="grey shadow"><FaSpinner aria-hidden="true"/>{!showCard ? ` Load More Destinations (${filteredCards.length - 6} remaining)` : ""}</button>
        </div>
      </div>
      : '' }
      </>
  );
};

export default Destinations;
