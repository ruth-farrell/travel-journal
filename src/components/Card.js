import React, { useState } from "react";

const Card = ({ item, travelYear, travelMonth, travelLocation }) => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleClick = (e) => {
    e.currentTarget.classList.toggle("card-open");
  };

  return (
    <>
      <div className="timeline-section breadcrumb">
        <h2 className="filter-title">
          Destinations &#62; {travelYear}
          {travelMonth.length ? ` > ${travelMonth}` : ""}
          {travelLocation.length ? ` > ${travelLocation}` : ""}
        </h2>
      </div>

      <div className="cards-container">
        {item
          .filter((item) => item.startDate.includes(travelYear))
          .map((Val) => {
            return (
              <div key={Val.id} className="card" onClick={handleClick}>
                <div className="card_left">
                  <img
                    src={process.env.PUBLIC_URL + `/images/${Val.imageUrl}`}
                    className="travel_img"
                    alt={Val.title}
                    title={Val.title}
                  />
                  <h3 className="travel_title2">{Val.title}</h3>
                </div>
                <div className="card_right">
                  <div className="travel_locationData">
                    <i className="fas fa-map-marker-alt"></i>
                    <span className="travel_location">{Val.location}</span>
                    <a
                      href={Val.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Google Maps
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
          })}
      </div>
    </>
  );
};

export default Card;
