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
  }) 

  return (
      <div className="cards-container">
        {filteredCards.length ? (
          filteredCards.map((destination) => {
            return (
              <React.Fragment key={destination.id}>
                <div className="card" onMouseEnter={handleCardHover} onMouseLeave={handleCardHover}>
                  <div className="card-left">
                    <img
                      src={process.env.PUBLIC_URL + `/images/${destination.imageUrl}`}
                      className="travel_img"
                      alt={destination.title}
                      title={destination.title}
                      loading="lazy"
                    />
                    <h3 className="travel_title2">{destination.title}</h3>
                  </div>
                  <div className="card-right">
                    <div className="travel_locationData">
                      <div>
                        <span className={"fi fi-" + (destination.country.code)}></span>
                        <span className="travel_location">{destination.country.name}</span>
                      </div>
                    </div>

                    <h3 className="travel_title">{destination.title}</h3>
                    <div className="travel_googleData">
                    <a
                        href={destination.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                      <i className="fas fa-map-marker-alt"></i> View on Google Maps</a>
                    </div>
                    {destination.startDate && destination.endDate ?
                      <div className="travel_dates">
                        <span className="start_date">{destination.startDate} -</span>
                        <span className="end_date">{destination.endDate}</span>
                      </div>
                    : '' }
                    {destination.description ?
                    <span className="travel_description">{destination.description}</span>
                    : '' }
                    <div className="travel_tags">
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
          <div className="no-results">
          <span>No results. Try changing your filters/search.</span>
          </div>
         )
        }
      </div>
  );
};

export default Card;
