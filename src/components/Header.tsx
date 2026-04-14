import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { FaCloud, FaFilterCircleXmark } from "react-icons/fa6";
import { useFilterContext, useUIContext } from "../features/travel/TravelContext";
import Button from "./ui/Button";

const Header = () => {
  const { travelYear, travelMonth, travelLocation, tagName } = useFilterContext();
  const { query, resetAllFilters } = useUIContext();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 58);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scroll ? "fixed" : ""}`}>
      <div className="header-container">
        <h1 className="header-brand">
          <span className="header-brand-icon" aria-hidden="true">
            <FaCloud className="header-brand-icon-cloud" />
            <span className="header-brand-icon-plane">
              <img src={process.env.PUBLIC_URL + "/images/aeroplane-header.svg"} alt="" className="header-brand-icon-plane-image" />
            </span>
          </span>
          <span className="header-brand-title">
            <span className="header-brand-name">Ruth&apos;s</span> Travel Journal
          </span>
        </h1>
        <div className="header-filter">
          <Breadcrumb />
          {travelLocation.length || travelMonth.length || travelYear.length || query.length || tagName.length ? (
            <Button variant="grey" onClick={resetAllFilters}>
              <FaFilterCircleXmark aria-hidden="true" /> Reset All
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
