import type { ChangeEvent } from "react";
import { useFilterContext } from "../features/travel/TravelContext";
import Select from "./ui/Select";

const Timeline = () => {
  const { travelYear, travelMonth, setTravelMonth, filterMonth, derived: { months, monthItems } } = useFilterContext();
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "All") {
      setTravelMonth("");
    } else {
      filterMonth(event.target.value);
    }
  };

  return (
    <div className="section timeline">
      <h2 className="section-title">Filter {travelYear.length ? `${travelYear} by ` : ""} Month</h2>
      <div className="timeline-buttons desktop-only">
        {months.map((month) => {
          return (
            <button
              key={month}
              disabled={!monthItems.includes(month)}
              onClick={() => {
                filterMonth(month);
              }}
              className={month + (travelMonth === month ? " active" : "") + (monthItems.includes(month) ? "" : " deactivate")}
            >
              {month.slice(0, 3)}
            </button>
          );
        })}
        <button
          className={"All" + (!travelMonth.length ? " active" : "")}
          onClick={() => {
            setTravelMonth("");
          }}
        >
          See All
        </button>
      </div>
      <div className="select-buttons mobile-only">
        <Select onChange={handleChange} value={travelMonth || "All"}>
          <option className={"All" + (!travelMonth.length ? " active" : "")} value="All">
            See All
          </option>
          {monthItems.map((month) => {
            return (
              <option className={month + (travelMonth === month ? " active" : "")} key={month} value={month}>
                {month}
              </option>
            );
          })}
        </Select>
      </div>
    </div>
  );
};

export default Timeline;
