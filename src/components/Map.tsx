import { useState, type DragEvent, type MouseEvent, type ChangeEvent } from "react";
import {
  FaMagnifyingGlassPlus,
  FaMagnifyingGlassMinus,
  FaArrowsToCircle,
  FaLocationDot,
  FaFilterCircleXmark,
  FaPersonWalkingLuggage,
  FaHouseChimney,
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa6";
import { useFilterContext } from "../features/travel/TravelContext";

const Map = () => {
  const {
    travelLocation,
    travelYear,
    travelMonth,
    setTravelLocation,
    filterLocation,
    derived: { countryItems, currentLocationItem, homeLocationItem, residenceLocationItem },
  } = useFilterContext();
  const [isZoom, setIsZoom] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [transformX, setTransformX] = useState(50);
  const [transformY, setTransformY] = useState(50);

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "All") {
      setTravelLocation("");
    } else {
      filterLocation(event.target.value);
    }
  };

  const toggleMapZoom = (event: MouseEvent<HTMLButtonElement>) => {
    const btnInOrOut = event.currentTarget.classList;

    if (btnInOrOut.contains("in")) {
      setZoomScale(zoomScale + 0.25);
      setIsZoom(true);
    }

    if (btnInOrOut.contains("out") && zoomScale !== 1) {
      zoomScale - 0.25 === 1 ? setIsZoom(false) : setIsZoom(true);
      setZoomScale(zoomScale - 0.25);
    }
  };

  const handleMapDirections = (event: MouseEvent<HTMLButtonElement>) => {
    const btnDirection = event.currentTarget.classList;

    if (btnDirection.contains("left")) {
      if (transformX - 10 >= 0) {
        setTransformX(transformX - 10);
      }
      return;
    }
    if (btnDirection.contains("right")) {
      if (transformX + 10 <= 100) {
        setTransformX(transformX + 10);
      }
      return;
    }
    if (btnDirection.contains("up")) {
      if (transformY - 10 >= 0) {
        setTransformY(transformY - 10);
      }
      return;
    }
    if (btnDirection.contains("down")) {
      if (transformY + 10 <= 100) {
        setTransformY(transformY + 10);
      }
      return;
    }

    setTransformX(50);
    setTransformY(50);
  };

  const handleMapDrag = (event: DragEvent<HTMLDivElement>) => {
    const xPercentage = Math.round((event.nativeEvent.offsetX / event.currentTarget.offsetWidth) * 100);
    const yPercentage = Math.round((event.nativeEvent.offsetY / event.currentTarget.offsetHeight) * 100);

    if (xPercentage > 50 && xPercentage + 15 < 100) {
      setTransformX(xPercentage + 15);
    } else if (xPercentage > 50) {
      setTransformX(100);
    } else if (xPercentage < 50 && xPercentage - 15 > 0) {
      setTransformX(xPercentage - 15);
    } else {
      setTransformX(0);
    }

    if (yPercentage > 50 && yPercentage + 15 < 100) {
      setTransformY(yPercentage + 15);
    } else if (yPercentage > 50) {
      setTransformY(100);
    } else if (yPercentage < 50 && yPercentage - 15 > 0) {
      setTransformY(yPercentage - 15);
    } else {
      setTransformY(0);
    }
  };

  return (
    <div className="section map">
      <h2 className="section-title">Filter {travelYear.length ? `${travelYear} ${travelMonth}` : "Destinations"} By Country</h2>
      <div className={"map-buttons-container" + (isZoom ? " zoom-on" : "")} onDragStart={handleMapDrag}>
        <div className="zoom-controls">
          <div className="zoom-in-out">
            <button className="grey square in" onClick={toggleMapZoom}>
              <FaMagnifyingGlassPlus aria-hidden="true" />
              <span className="visually-hidden">Zoom In</span>
            </button>
            <button disabled={!isZoom} className={"grey square  out" + (!isZoom ? " deactivate" : "")} onClick={toggleMapZoom}>
              <FaMagnifyingGlassMinus aria-hidden="true" />
              <span className="visually-hidden">Zoom Out</span>
            </button>
          </div>
          <div className={"zoom-directions" + (!isZoom ? " deactivate" : "")}>
            <button
              disabled={!isZoom || transformX === 0}
              className={"grey square left" + (transformX === 0 ? " deactivate" : "")}
              onClick={handleMapDirections}
            >
              <FaArrowLeft aria-hidden="true" />
              <span className="visually-hidden">Move Map Left</span>
            </button>
            <button disabled={!isZoom} className="grey square center" onClick={handleMapDirections} aria-label="Move Map to Center">
              <FaArrowsToCircle aria-hidden="true" />
              <span className="visually-hidden">Move Map to Center</span>
            </button>
            <button
              disabled={!isZoom}
              className={"grey square up" + (transformY === 0 ? " deactivate" : "")}
              onClick={handleMapDirections}
            >
              <FaArrowUp aria-hidden="true" />
              <span className="visually-hidden">Move Map Up</span>
            </button>
            <button
              disabled={!isZoom}
              className={"grey square right" + (transformX === 100 ? " deactivate" : "")}
              onClick={handleMapDirections}
            >
              <FaArrowRight aria-hidden="true" />
              <span className="visually-hidden">Move Map Right</span>
            </button>
            <button
              disabled={!isZoom}
              className={"grey square down" + (transformY === 100 ? " deactivate" : "")}
              onClick={handleMapDirections}
            >
              <FaArrowDown aria-hidden="true" />
              <span className="visually-hidden">Move Map Down</span>
            </button>
          </div>
        </div>
        <div style={{ transformOrigin: `${transformX}% ${transformY}%`, transform: `scale(${zoomScale})` }} className={"map-buttons" + (isZoom ? " zoom-on" : "")}>
          <img src={process.env.PUBLIC_URL + `/images/world-green.svg`} alt="Map of Buttons" className="map-img" />
          {countryItems.map((country) => {
            return (
              <button
                key={`${country.code}-${country.name}`}
                onClick={() => filterLocation(country.name)}
                className={country.code + (travelLocation === country.name ? " active" : "")}
              >
                <span className="visually-hidden">{`Click to Filter by ${country.name}`}</span>
                {residenceLocationItem[0]?.code === country.code ? (
                  <FaHouseChimney aria-hidden="true" />
                ) : currentLocationItem[0]?.code === country.code ? (
                  <FaPersonWalkingLuggage aria-hidden="true" />
                ) : homeLocationItem[0]?.code === country.code ? (
                  <FaHeart aria-hidden="true" />
                ) : (
                  <FaLocationDot aria-hidden="true" />
                )}
                <span className="hidden">
                  {country.name}
                  <span className={"fi fi-" + country.code} aria-hidden="true"></span>
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
            setTravelLocation("");
          }}
        >
          <FaFilterCircleXmark aria-hidden="true" />
          Reset Country
        </button>
      ) : (
        ""
      )}
      <div className="select-buttons mobile-only">
        <select onChange={handleCountryChange} className="select-default" value={travelLocation || "All"}>
          <option className={"All" + (!travelLocation.length ? " active" : "")} value="All">
            See All
          </option>
          {countryItems.map((country) => {
            return (
              <option key={`${country.code}-${country.name}`} className={country.code + (travelLocation === country.name ? " active" : "")} value={country.name}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Map;
