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

  const handleCountryChange = event => {
    if (event.target.value === 'All') {
      setTravelLocation('');
    } else {
    filterLocation(event.target.value); 
    }
  };

  const [isZoom, setZoom ] = useState(false);
  const [transformX, setTransformX] = useState("center");
  const [transformY, setTransformY] = useState("center");

  const toggleMapZoom = () => {
    setZoom(!isZoom);
  };

  const renderMapIcon = (code) => {
    if (homeLocationItem[0].code === code) { 
      return "fa-house";
    } 
    if (currentLocationItem[0].code === code) { 
      return "fa-person-walking-luggage";
    }
    return "fa-location-dot"
  }

  const handleMapDirections = (e) => {
    const btnDirection = e.currentTarget.classList;

    if (btnDirection.contains('left')) {   
      transformX === "right" ? setTransformX("center") : setTransformX("left");
      return;
    }
    if (btnDirection.contains('right')) {   
      transformX === "left" ? setTransformX("center") : setTransformX("right");
      return;
    }
    if (btnDirection.contains('up')) { 
      transformY === "bottom" ? setTransformY("center") : setTransformY("top");
      return;
    }
    if (btnDirection.contains('down')) { 
      transformY === "top" ? setTransformY("center") : setTransformY("bottom");
      return;
    }

    setTransformX("center");
    setTransformY("center");
  }

  return (
    <>
      <div className="section map">
        <h2 className="section-title">Filter {travelYear} Destinations By Country</h2>
        <div className="zoom-controls">
          <button className="grey" onClick={toggleMapZoom}><i className={"fa-solid" + (isZoom ? " fa-magnifying-glass-minus" : " fa-magnifying-glass-plus")}></i>{" Zoom" + (isZoom ? " Out" : " In")}</button>
          <div className={"zoom-directions" + (!isZoom ? " deactivate" : "")}>
            <button disabled={isZoom ? false : true} className="grey left" onClick={handleMapDirections}><i className="fa-solid fa-arrow-left"></i></button>
            <button disabled={isZoom ? false : true} className="grey center" onClick={handleMapDirections}><i className="fa-solid fa-arrows-to-dot"></i></button>
            <button disabled={isZoom ? false : true} className="grey up" onClick={handleMapDirections}><i className="fa-solid fa-arrow-up"></i></button>
            <button disabled={isZoom ? false : true} className="grey right" onClick={handleMapDirections}><i className="fa-solid fa-arrow-right"></i></button>
            <button disabled={isZoom ? false : true} className="grey down" onClick={handleMapDirections}><i className="fa-solid fa-arrow-down"></i></button>
          </div>
        </div>
        <div className="map-buttons-container">
          <div style={{transformOrigin:`${ transformX } ${ transformY }`}} className={"map-buttons" + (isZoom ? " zoom-on" : "")}>
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
        <div className="select-buttons">
          <select onChange={handleCountryChange} className="select-default">
          <option
            className={"All" + (!travelLocation.length ? " active" : "")}
            value="All"
          >
            See All
          </option>
            {countryItems.map((Val, index) => {
              return (
                  <option
                    key={index}
                    className={Val.code + (travelLocation === Val.name ? " active" : "")}
                    value={Val.name}
                  >{Val.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Map;



