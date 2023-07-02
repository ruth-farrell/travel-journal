import React from "react";

export default function Bucketlist() {
  return (
    <div className="bucketlist">
      <div className="sheet">
        <div className="l-margin margin">
          <div className="hole first-hole"></div>
          <div className="hole second-hole"></div>
          <div className="hole third-hole"></div>
        </div>
        <div className="r-margin margin"></div>
        <div className="sheet-header">
          <span className="sheet-title">
          Bucket List
          </span>
        </div>
        <div className="sheet-text">
          <ul>
            <li className="checked">Visit Easter Island</li>
            <li className="checked">Swim with sharks in the Galapagos</li>
            <li>Visit the Sydney Opera House</li>
            <li className="checked">Stay in treehouses in the Amazon rainforest</li>
            <li className="checked">Go on a cruise</li>
            <li>Visit thirty countries before thirty</li>
            <li className="checked">Ride camels in the Sahara Desert</li>
            <li>See the Northern Lights</li>
            <li>Go on a safari in Africa</li>
            <li className="checked">Climb a volcano</li>
            <li>See whales in their natural habitat</li>
            <li>Volunteer for at least a month for a worthwhile cause</li>
            <li>Sleep in a capsule hotel</li>
            <li className="checked">Keep a travel journal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
