import { Map, Number, Search, Sort, Tags, Timeline, Year } from ".";
import { useFilterContext } from "../TravelContext";

const FiltersPanel = () => {
  const { travelYear } = useFilterContext();

  return (
    <>
      <div className="year-number-row">
        <Year />
        <Number />
      </div>
      {travelYear.length ? <Timeline /> : null}
      <Map />
      <Tags />
      <div className="section beside">
        <Sort />
        <Search />
      </div>
    </>
  );
};

export default FiltersPanel;
