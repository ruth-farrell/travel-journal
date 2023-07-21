import React, { useState } from "react";
import { FaMagnifyingGlassPlus, FaMagnifyingGlassMinus, FaArrowsToCircle, FaLocationDot, FaFilterCircleXmark,
  FaPersonWalkingLuggage, FaHouseChimney, FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight} from "react-icons/fa6";

const Map = ({
  filterLocation,
  countryItems,
  travelLocation,
  travelYear,
  travelMonth,
  setTravelLocation,
  currentLocationItem,
  homeLocationItem,
}) => {


  const [isZoom, setIsZoom ] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [transformX, setTransformX] = useState(50);
  const [transformY, setTransformY] = useState(50);

  const handleCountryChange = event => {
    if (event.target.value === 'All') {
      setTravelLocation('');
    } else {
    filterLocation(event.target.value); 
    }
  };

  const toggleMapZoom = (e) => {
    const btnInOrOut = e.currentTarget.classList;

    if (btnInOrOut.contains('in')) { 
      setZoomScale(zoomScale + 0.25);
      setIsZoom(true);
    }

    if (btnInOrOut.contains('out') && zoomScale !== 1 ) { 
      zoomScale - 0.25 === 1 ? setIsZoom(false) : setIsZoom(true);
      setZoomScale(zoomScale - 0.25);
    }
  };

  const handleMapDirections = (e) => {
    const btnDirection = e.currentTarget.classList;

    if (btnDirection.contains('left')) {  
      if ((transformX - 10) >= 0 ) {
        setTransformX(transformX - 10);
        return;
      } 
      return;
    }
    if (btnDirection.contains('right')) {  
      if ((transformX + 10) <= 100 ) {
        setTransformX(transformX + 10);
        return;
      } 
      return;
    }
    if (btnDirection.contains('up')) { 
      if ((transformY - 10) >= 0 ) {
        setTransformY(transformY - 10);
        return;
      } 
      return;
    }
    if (btnDirection.contains('down')) { 
      if ((transformY + 10) <= 100 ) {
        setTransformY(transformY + 10);
        return;
      } 
      return;
    }

    setTransformX(50);
    setTransformY(50);
  }

  const handleMapDrag = (e) => {
    const xPercentage = Math.round(e.nativeEvent.offsetX / e.currentTarget.offsetWidth * 100);
    const yPercentage = Math.round(e.nativeEvent.offsetY / e.currentTarget.offsetHeight * 100);

    if (xPercentage > 50 && ((xPercentage + 15) < 100)) { 
      setTransformX(xPercentage + 15); 
    }
    else if (xPercentage > 50) { 
      setTransformX(100);
    } 
    else if (xPercentage < 50 && ((xPercentage - 15) > 0)) {
      setTransformX(xPercentage - 15) 
    } else {
      setTransformX(0);
    }

    if (yPercentage > 50 && ((yPercentage + 15) < 100)) { 
      setTransformY(yPercentage + 15); 
    }
    else if (yPercentage > 50) { 
      setTransformY(100);
    } 
    else if (yPercentage < 50 && ((yPercentage - 15) > 0)) {
      setTransformY(yPercentage - 15) 
    } else {
      setTransformY(0);
    }
  }

  return (
    <>
      <div className="section map">
        <h2 className="section-title">Filter {travelYear.length ? `${travelYear} ${travelMonth}` : "Destinations"} By Country</h2>
        <div className="zoom-controls">
          <div className="zoom-in-out">
            <button className="grey square in" onClick={toggleMapZoom}>
              <FaMagnifyingGlassPlus aria-hidden="true"/>
              <span className="visually-hidden">Zoom In</span>
            </button>
            <button disabled={isZoom ? false : true}  className={"grey square  out" + (!isZoom ? " deactivate" : "")} onClick={toggleMapZoom}>
              <FaMagnifyingGlassMinus aria-hidden="true"/>
              <span className="visually-hidden">Zoom Out</span>
            </button>
          </div>
          <div className={"zoom-directions" + (!isZoom ? " deactivate" : "")}>
            <button disabled={(!isZoom || transformX === 0) ? true : false} className={"grey square left" + (transformX === 0 ? " deactivate" : "")} onClick={handleMapDirections}>
              <FaArrowLeft aria-hidden="true"/>
              <span className="visually-hidden">Move Map Left</span>
            </button>
            <button disabled={isZoom ? false : true} className="grey square center" onClick={handleMapDirections} aria-label="Move Map to Center">
              <FaArrowsToCircle aria-hidden="true"/>
              <span className="visually-hidden">Move Map to Center</span>
            </button>
            <button disabled={isZoom ? false : true} className={"grey square up" + (transformY === 0 ? " deactivate" : "")} onClick={handleMapDirections}>
              <FaArrowUp aria-hidden="true"/>
              <span className="visually-hidden">Move Map Up</span>
            </button>
            <button disabled={isZoom ? false : true} className={"grey square right" + (transformX === 100 ? " deactivate" : "")} onClick={handleMapDirections}>
              <FaArrowRight aria-hidden="true"/>
              <span className="visually-hidden">Move Map Right</span>
            </button>
            <button disabled={isZoom ? false : true} className={"grey square down" + (transformY === 100 ? " deactivate" : "")} onClick={handleMapDirections}>
              <FaArrowDown aria-hidden="true"/>
              <span className="visually-hidden">Move Map Down</span>
            </button>
          </div>
        </div>
        <div className={"map-buttons-container" + (isZoom ? " zoom-on" : "")} onDragStart={handleMapDrag}>
          <div style={{transformOrigin:`${ transformX }% ${ transformY }%`, transform: `scale(${zoomScale})`} } className={"map-buttons" + (isZoom ? " zoom-on" : "")} >
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
                   <span className="visually-hidden">{`Click to Filter by ${Val.name}`}</span>
                   {(homeLocationItem[0].code === Val.code) ? <FaHouseChimney aria-hidden="true"/> 
                    : (currentLocationItem[0].code === Val.code) ? <FaPersonWalkingLuggage aria-hidden="true"/> 
                    : <FaLocationDot aria-hidden="true"/> }
                   <span className="hidden" >{Val.name} 
                    <span className={"fi fi-" + (Val.code)} aria-hidden="true"></span>
                   </span>
                </button>
              );
            })}
          </div>
        </div>
        {travelLocation.length ? (
          <button
            className="all grey desktop-only"
            onClick={() => {
              setTravelLocation([]);
            }}
          ><FaFilterCircleXmark aria-hidden="true"/>Reset Country</button>
        ) : ('')}
        <div className="select-buttons mobile-only">
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
                    selected={travelLocation === Val.name ? true : false}
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



