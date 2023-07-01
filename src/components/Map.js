import React, { useState } from "react";

const Map = ({
  filterLocation,
  countryItems,
  travelLocation,
  travelYear,
  setTravelLocation,
  currentLocationItem,
  homeLocationItem,
}) => {

  const [isZoom, setZoom ] = useState(false);
  const [zoomUp, setZoomUp] = useState(false);
  const [zoomDown, setZoomDown] = useState(false);
  const [zoomLeft, setZoomLeft] = useState(false);
  const [zoomRight, setZoomRight] = useState(false);
  const [zoomCenter, setZoomCenter] = useState(true);

  const toggleZoom = () => {
    setZoom(!isZoom);
  };

  function renderMapIcon(code) {
    if (homeLocationItem[0].code === code) { 
      return "fa-house";
    } 
    if (currentLocationItem[0].code === code) { 
      return "fa-person-walking-luggage";
    }
    return "fa-map-pin"
  }

  return (
    <>
      <div className="map">
        <h2 className="title">Filter {travelYear} Destinations By Country</h2>
        <div className="zoom-controls">
          <button className="grey" onClick={toggleZoom}><i className={"fa-solid" + (isZoom ? " fa-magnifying-glass-minus" : " fa-magnifying-glass-plus")}></i>{" Zoom" + (isZoom ? " Out" : " In")}</button>
          <div className={"zoom-directions" + (!isZoom ? " deactivate" : "")}>
          <button disabled={isZoom ? false : true} className="grey left" onClick={() => { setZoomLeft(true); setZoomRight(false); }}><i className="fa-solid fa-arrow-left"></i></button>
          <button disabled={isZoom ? false : true} className="grey center" onClick={() => { setZoomLeft(false); setZoomRight(false); setZoomUp(false); setZoomDown(false); setZoomCenter(true) }}><i className="fa-solid fa-arrows-to-dot"></i></button>
          <button disabled={isZoom ? false : true} className="grey up" onClick={() => { setZoomUp(true); setZoomDown(false); }}><i className="fa-solid fa-arrow-up"></i></button>
          <button disabled={isZoom ? false : true} className="grey right" onClick={() => { setZoomLeft(false); setZoomRight(true); }}><i className="fa-solid fa-arrow-right"></i></button>
          <button disabled={isZoom ? false : true} className="grey down" onClick={() => { setZoomUp(false); setZoomDown(true); }}><i className="fa-solid fa-arrow-down"></i></button>
          </div>
        </div>
        <div className="map-buttons-container">
          <div className={"map-buttons" + (isZoom ? " zoom-on" : "") + (zoomUp ? " zoom-up" : "") + (zoomDown ? " zoom-down" : "") + (zoomLeft ? " zoom-left" : "") + (zoomRight ? " zoom-right" : "") + (zoomCenter ? " zoom-center" : "")}>
            <img
              src={process.env.PUBLIC_URL + `/images/world-green.svg`}
              alt="Map of Buttons"
              className="map-img"
            />
            {countryItems.map((Val, index) => {
              return (
                  <button
                    key={index}
                    onClick={() => filterLocation(Val.name)}
                    className={Val.code + (travelLocation === Val.name ? " active" : "")}
                  >
                   <i className={"fa-solid " + (renderMapIcon(Val.code))}></i><span className="hidden">{Val.name} <span className={"fi fi-" + (Val.code)}></span></span>
                </button>
              );
            })}
          </div>
        </div>
        {travelLocation.length ? (
          <button
            className="all grey"
            onClick={() => {
              setTravelLocation([]);
            }}
          ><i className="fa-solid fa-filter-circle-xmark"></i> Clear Country
          </button>
        ) : ('')}
      </div>
    </>
  );
};

export default Map;



