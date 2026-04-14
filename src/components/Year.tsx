import type { ChangeEvent, MouseEvent } from "react";
import { useFilterContext } from "../features/travel/TravelContext";
import Select from "./ui/Select";

export default function Year() {
  const {
    travelYear,
    setTravelYear,
    setTravelMonth,
    filterYear,
    derived: { yearItems },
  } = useFilterContext();
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTravelMonth("");
    if (event.target.value === "All") {
      setTravelYear("");
    } else {
      filterYear(event.target.value);
    }
  };

  const handleHover = (event: MouseEvent<HTMLSelectElement>) => {
    event.currentTarget.parentElement?.classList.toggle("btn-hover");
  };

  return (
    <div className="section year">
      <h2 className="section-title">Filter by Year</h2>
      <div className="select-buttons">
        <Select
          value={travelYear || "All"}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onChange={handleChange}
        >
          <option className={"All" + (!travelYear.length ? " active" : "")} value="All">
            See All
          </option>
          {yearItems.map((year) => {
            return (
              <option className={year + (travelYear === year ? " active" : "")} key={year} value={year}>
                {year}
              </option>
            );
          })}
        </Select>
      </div>
    </div>
  );
}
