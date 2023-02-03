import React from "react";

const Card = ({ item, query }) => {

  // const handleCardClick = (e) => {
  //   e.currentTarget.classList.toggle("card-open");
  // };

  const handleCardEnter = (e) => {
    e.currentTarget.classList.add("card-open");
  };

  const handleCardLeave = (e) => {
    e.currentTarget.classList.remove("card-open");
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
          filteredCards.map((Val) => {
            return (
              <div key={Val.id} className="card" onMouseEnter={handleCardEnter}   onMouseLeave={handleCardLeave}>
                <div className="card-left">
                  <img
                    src={process.env.PUBLIC_URL + `/images/${Val.imageUrl}`}
                    className="travel_img"
                    alt={Val.title}
                    title={Val.title}
                    loading="lazy"
                  />
                  <h3 className="travel_title2">{Val.title}</h3>
                </div>
                <div className="card-right">
                  <div className="travel_locationData">
                    <div>
                      <span className={"fi fi-" + (Val.country.code)}></span>
                      <span className="travel_location">{Val.country.name}</span>
                    </div>
                    <a
                      href={Val.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                     <i className="fas fa-map-marker-alt"></i> View on Google Maps
                    </a>
                  </div>

                  <h3 className="travel_title">{Val.title}</h3>

                  <div className="travel_dates">
                    <span className="start_date">{Val.startDate}</span>-
                    <span className="end_date">{Val.endDate}</span>
                  </div>
                  <span className="travel_description">{Val.description}</span>
                </div>
              </div>
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
