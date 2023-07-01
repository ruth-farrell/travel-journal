import React from "react";

export default function Bucketlist() {
  return (
      <>
        <div className="banner bucketlist">
            <div className="post-it">
                <img
                    src={process.env.PUBLIC_URL + `/images/travelpostit.png`}
                    alt="Bucket List"
                />
                <div className="post-it-rotate">
                    <h2><i className="fa-solid fa-clipboard-list"></i>
                        Bucket List
                    </h2>
                    <ul>
                        <li className="checked">Visit Easter Island</li>
                        <li className="checked">Dive with Sharks in the Galapagos</li>
                        <li>Visit the Sydney Opera House</li>
                        <li className="checked">Stay in treehouses in the Amazon rainforest</li>
                        <li className="checked">Go on a cruise</li>
                        <li>Visit thirty countries before thirty</li>
                        <li className="checked">Ride camels in the Sahara Desert</li>
                        <li>Go on a safari in Africa</li>
                    </ul>
                </div>
            </div>
        </div>
      </>
  );
}
