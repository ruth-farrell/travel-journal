import React from "react";
import Modal from "./Modal";

const Card = ({ item, query }) => {

  const handleModalBtnOpen = (e) => {
    const modalWrapper = e.currentTarget.closest(".card").nextElementSibling;
    modalWrapper.classList.toggle("modal-open");

    modalWrapper.addEventListener('click', (e) => {
      if ( e.target.closest(".modal") === null ) {
      e.target.classList.remove("modal-open");
      }
    });
  };

  const handleCardHover = (e) => {
    e.currentTarget.classList.toggle("card-open");
  };

  const filteredCards = item.filter(item => {
   if (query === "") {
     return item;
   } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
     return item;
   }
  }); 

  return (
      <div className="cards">
        {filteredCards.length ? (
          filteredCards.map((destination) => {
            return (
              <React.Fragment key={destination.id}>
                <div className="card" onMouseEnter={handleCardHover} onMouseLeave={handleCardHover}>
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
                      <i className="fas fa-map-marker-alt"></i> View on Google Maps</a>
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
                      {destination.tags.travelHighlight === true ? 
                      <span><i className="fa-regular fa-star"></i> Travel Highlight</span>
                      : ''
                      }
                      {destination.tags.currentLocation === true ? 
                      <span><i className="fa-solid fa-person-walking-luggage"></i> Current Location</span>
                      : ''
                      }
                      {destination.tags.homeCountry === true ? 
                      <span><i className="fa-solid fa-house"></i> Home Country</span>
                      : ''
                      }
                    </div>
                    { destination.slides ? 
                    <button className="default" onClick={handleModalBtnOpen}>View more <i className="fa-solid fa-chevron-right"></i></button>
                    : ''
                    }
                  </div>
                </div>
                { destination.slides ? 
                  <Modal destination={destination} />
                : ''
                }
              </React.Fragment>  
            );
          })
         ) : (
          <div className="cards-no-results">
          <span>No results. Try changing your filters/search.</span>
          </div>
         )
        }
      </div>
  );
};

export default Card;
