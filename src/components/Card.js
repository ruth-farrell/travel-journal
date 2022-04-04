import React from 'react'


export default function Card(props) {

    return (
        <div className="card" > 
        <div className="card_left"> 
         <img src={`../images/${props.imageUrl}`} className="travel_img"/>
         </div>
         <div className="card_right">
            <div className="travel_locationData"><img src="../images/location-arrow"/><span className="travel_location">{props.location}</span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
        
                <h2 className="travel_title">{props.title}</h2>

                <div className="travel_dates"><span className="start_date">{props.startDate}</span>-<span className="end_date">{props.endDate}</span></div>
                <span className="travel_description">{props.description}</span> 
         </div>
        </div>
    )
} 