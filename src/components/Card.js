import React from 'react'


const Card = ({ item }) => {   


    return (
        <>
        {item.map((Val) => { 
        return (
        <div className="card" key={Val.id} > 
        <div className="card_left"> 
         <img src={process.env.PUBLIC_URL + `/images/${Val.imageUrl}`} className="travel_img" alt={Val.title} title={Val.title} />
         <h2 className="travel_title2">{Val.title}</h2>
         </div>
         <div className="card_right">
            <div className="travel_locationData"><i className="fas fa-map-marker-alt"></i><span className="travel_location">{Val.location}</span>
            <a href={Val.googleMapsUrl} target="_blank">View on Google Maps</a>
            </div>
        
                <h2 className="travel_title">{Val.title}</h2>

                <div className="travel_dates"><span className="start_date">{Val.startDate}</span>-<span className="end_date">{Val.endDate}</span></div>
                <span className="travel_description">{Val.description}</span> 
         </div>
        </div>
        );
        })}
        </>
    );
};

export default Card;