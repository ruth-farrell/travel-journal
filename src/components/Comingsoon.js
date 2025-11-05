import React from "react";
import PostItNote from "./Postitnote";
import { Card, CardLeft, CardRight } from "./Card";
import SkyBackground from "./SkyBackground";

export default function ComingSoon() {

  return (
    <SkyBackground>
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
              <li><span className="fi fi-fj" aria-hidden="true"></span> Fiji</li>
              <li><span className="fi fi-id" aria-hidden="true"></span> Indonesia</li>
            </ul>
          </CardRight>
        </Card>
      </div>
    </SkyBackground>
  );
}
