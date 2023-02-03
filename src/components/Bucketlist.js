import React from "react";

export default function Bucketlist() {

    const handleCardEnter = (e) => {
        e.currentTarget.classList.add("card-open");
      };
    
      const handleCardLeave = (e) => {
        e.currentTarget.classList.remove("card-open");
      };

    return (
        <>
            <div className="banner bucketlist">
                <div className="ninety-days-banner">
                    <img
                        src={process.env.PUBLIC_URL + `/images/travelpostit.png`}
                        alt="Bucket List"
                    />
                    <div className="ninety-days-banner-rotate">
                        <h2><i className="fa-solid fa-clipboard-list"></i>
                            Bucket List
                        </h2>
                        <ul>
                            <li>Trek up to Machu Picchu</li>
                            <li>Dive with Sharks</li>
                            <li>Stay in treehouses in the Amazon rainforest</li>
                            <li className="checked">Go on a cruise</li>
                            <li>Visit thirty countries before thirty</li>
                            <li className="checked">Ride camels in the Sahara Desert</li>
                            <li>Visit the Sydney Opera House</li>
                            <li>Go on a safari in Africa</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );

}
