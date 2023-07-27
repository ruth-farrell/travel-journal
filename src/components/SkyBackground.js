import React from "react";
import Cloud from "./Cloud";
import Aeroplane from "./Aeroplane";

const SkyBackground = ({ children }) => {
  return (
    <div className="sky-background">
      <Cloud position="first"/>
      <Cloud position="second"/>
      <Cloud position="third"/>
      <Cloud position="fourth"/>
      <Cloud position="fifth"/>
      <Aeroplane/>
      {children}
    </div>
  );
}

export default SkyBackground;
