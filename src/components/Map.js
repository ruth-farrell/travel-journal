import React, { useState } from "react";

const Map = ({
  filterLocation,
  countryItems,
  travelLocation,
  travelYear,
  setTravelLocation,
}) => {

  const [isZoom, setZoom] = useState(true);
  const [zoomUp, setZoomUp] = useState(true);
  const [zoomDown, setZoomDown] = useState(false);
  const [zoomLeft, setZoomLeft] = useState(false);
  const [zoomRight, setZoomRight] = useState(false);
  const [zoomCenter, setZoomCenter] = useState(true);

  const toggleZoom = () => {
    setZoom(!isZoom);
  };

  return (
    <>
      <div className="button-map-section">
        <h2 className="filter-title">Filter {travelYear} Destinations By Country</h2>
        <div className="zoom-controls">
          <button onClick={toggleZoom}><i className={"fa-solid" + (isZoom ? " fa-magnifying-glass-minus" : " fa-magnifying-glass-plus")}></i> Zoom</button>
          <div className={"zoom-directions" + (!isZoom ? " deactivate" : "")}>
            <button className="zoom-btn-up" onClick={() => { setZoomUp(true); setZoomDown(false); }}><i className="fa-solid fa-angle-up"></i></button>
            <button className="zoom-btn-down" onClick={() => { setZoomUp(false); setZoomDown(true); }}><i className="fa-solid fa-angle-down"></i></button>
            <button className="zoom-btn-center" onClick={() => { setZoomLeft(false); setZoomRight(false); setZoomUp(false); setZoomDown(false); setZoomCenter(true) }}><i className="fa-solid fa-arrows-to-dot"></i></button>
            <button className="zoom-btn-left" onClick={() => { setZoomLeft(true); setZoomRight(false); }}><i className="fa-solid fa-angle-left"></i></button>
            <button className="zoom-btn-right" onClick={() => { setZoomLeft(false); setZoomRight(true); }}><i className="fa-solid fa-angle-right"></i></button>
          </div>
        </div>
        <div className="map-buttons-container">
          <div className={"map-buttons" + (isZoom ? " zoom-on" : "") + (zoomUp ? " zoom-up" : "") + (zoomDown ? " zoom-down" : "") + (zoomLeft ? " zoom-left" : "") + (zoomRight ? " zoom-right" : "") + (zoomCenter ? " zoom-center" : "")}>
            <img
              src={process.env.PUBLIC_URL + `/images/world.svg`}
              alt="Map of Buttons"
              className="button-map"
            />
            {countryItems.map((Val, index) => {
              return (
                  <button
                    key={index}
                    onClick={() => filterLocation(Val.name)}
                    className={Val.code + (travelLocation === Val.name ? " active" : "")}
                  >
                    <i className="fa-solid fa-map-pin"></i><span className="hidden">{Val.name} <span className={"fi fi-" + (Val.code)}></span></span>
                </button>
              );
            })}
          </div>
        </div>
        {travelLocation.length ? (
          <button
            className={"All" + (travelLocation.length ? " active" : "")}
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
