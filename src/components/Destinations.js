import React, { useState } from "react";
import { Card, CardLeft, CardRight } from "./Card";
import Modal from "./Modal";
import Slider from "./Slider";
import { FaSpinner, FaTag, FaStar, FaBriefcase, FaPersonWalkingLuggage, FaHouseChimney, FaChevronRight, FaLocationDot, FaHippo, FaBowlFood } from "react-icons/fa6";
import { GiDinosaurRex } from "react-icons/gi";

const Destinations = ({ item, query, sort }) => {

  const [showAllCards, setShowAllCards ] = useState(false);

  const handleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  }

  const handleModalBtnOpen = (e) => {
    const modal = e.currentTarget.closest(".card").nextElementSibling;
    
    modal.classList.toggle("modal-open");

    modal.addEventListener('click', (e) => {
      if ( e.target.closest(".modal-content") === null ) {
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
              
  return (
    <>
      <div className="destinations">
        {filteredCards.length ? (
          filteredCards.map((destination, index) => {
            return (showAllCards || index < 6) ? (
               <div key={destination.id} className="">
                <Card>
                  <CardLeft imgSrc={process.env.PUBLIC_URL + `/images/${destination.imageUrl}`} imgAlt={destination.title} imgLoading="lazy" title={destination.title} />
                  <CardRight>
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
                    {typeof destination.tags !== "undefined" ?
                     destination.tags.map((tag, index) => {
                      return (
                        <React.Fragment key={index}>
                          {tag.length? (
                          <span >
                            {tag.includes("Highlight") ? <FaStar aria-hidden="true"/> 
                            : tag.includes("Location") ? <FaPersonWalkingLuggage aria-hidden="true"/> 
                            : tag.includes("Country") ? <FaHouseChimney aria-hidden="true"/> 
                            : tag.includes("Remote") ? <FaBriefcase aria-hidden="true"/> 
                            : tag.includes("Dinosaur") ? <GiDinosaurRex aria-hidden="true"/> 
                            : tag.includes("Food") ? <FaBowlFood aria-hidden="true"/>
                            : tag.includes("Wildlife") ? <FaHippo aria-hidden="true"/>
                            : <FaTag aria-hidden="true"/> }
                          {tag}</span>) : "" } 
                        </React.Fragment>
                      )
                      })
                      : ""}
                    </div>
                    { destination.slides ? 
                      <button className="default" onClick={handleModalBtnOpen}>
                        View more <FaChevronRight aria-hidden="true"/>
                      </button>
                    : '' }
                  </CardRight>
                </Card>
                {destination.slides ? 
                <Modal>
                  <Slider slides={destination.slides} sliderTitle={`${destination.title} - ${destination.country.name}`} />
                </Modal> 
                : ''} 
              </div>
            ) : null
          })
         )   
         : (
          <div className="cards-no-results">
            <span>No results. Try changing your filters/search.</span>
          </div>
         )
        }
      </div>
      {filteredCards.length > 6 && !showAllCards ? 
      <div className="banner cards-controller">
        <div>
          <button onClick={handleShowAllCards} className="grey shadow">
            <FaSpinner aria-hidden="true"/>{!showAllCards ? ` Load More Destinations (${filteredCards.length - 6} remaining)` : ""}
          </button>
        </div>
      </div>
      : '' }
    </>
  );
};

export default Destinations;
