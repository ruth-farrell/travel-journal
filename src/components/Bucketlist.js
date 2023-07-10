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
            <li className="checked" aria-label="Check box checked">Visit Easter Island</li>
            <li className="checked" aria-label="Check box checked">Swim with sharks in the Galapagos</li>
            <li aria-label="Check box not checked">Visit the Sydney Opera House</li>
            <li className="checked" aria-label="Check box checked">Stay in treehouses in the Amazon rainforest</li>
            <li className="checked" aria-label="Check box checked">Go on a cruise</li>
            <li aria-label="Check box not checked">Visit thirty countries before thirty</li>
            <li className="checked" aria-label="Check box checked">Ride camels in the Sahara Desert</li>
            <li aria-label="Check box not checked">See the Northern Lights</li>
            <li aria-label="Check box not checked">Go on a safari in Africa</li>
            <li className="checked" aria-label="Check box checked">Climb a volcano</li>
            <li aria-label="Check box not checked">See whales in their natural habitat</li>
            <li aria-label="Check box not checked">Volunteer for at least a month for a worthwhile cause</li>
            <li aria-label="Check box not checked">Sleep in a capsule hotel</li>
            <li className="checked" aria-label="Check box checked">Keep a travel journal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
