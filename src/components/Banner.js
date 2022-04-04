import React from 'react'

export default function Banner () {
    return (
        <div className="banner">
         <div><h2><i className="far fa-calendar-alt"></i> 90 Days Travelling and Working</h2> </div><img src={process.env.PUBLIC_URL + `/images/ruthlaptop.jpeg`} />
        </div>
    )
}