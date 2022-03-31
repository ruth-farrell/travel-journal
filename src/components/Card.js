import React from 'react'

export default function Card ({phone, email}) {
    return (
        <div className="card"> 
            <img></img>
            <div className="card-stats">
                <div className="rating">CARD RATING</div>
            </div>
           {phone &&<span className="card-phone">Phone: { phone }</span> }
            <span className="card-email" style={email ? {display: 'block'} : {display: 'none'} }>Email: { email }</span>
        </div>
    )
}