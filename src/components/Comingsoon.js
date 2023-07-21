import React from "react";
import PostItNote from "./Postitnote";
import { Card, CardLeft, CardRight } from "./Card";

export default function ComingSoon() {

  return (
    <div className="banner coming-soon">
      <PostItNote imgLoading="lazy">
        <h2>Onto the Next <br></br>Adventure...</h2>
      </PostItNote>
      <Card>
        <CardLeft imgSrc={process.env.PUBLIC_URL + `/images/ruthsuitcase.jpeg`} imgAlt="Ruth on the next adventure with a suitcase" imgLoading="lazy" title="Coming soon" />  
        <CardRight>
          <h2>Places to Visit</h2>
          <ul>
            <li><span className="fi fi-pe" aria-hidden="true"></span> Peru</li>
            <li><span className="fi fi-jp" aria-hidden="true"></span> Japan</li>
            <li><span className="fi fi-nz" aria-hidden="true"></span> New Zealand</li>
            <li><span className="fi fi-au" aria-hidden="true"></span> Australia</li>
          </ul>
        </CardRight>   
      </Card>
    </div>
  );
}