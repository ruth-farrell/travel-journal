import { FaSort } from "react-icons/fa6";
import { useUIContext } from "../features/travel/TravelContext";
import Button from "./ui/Button";

const Sort = () => {
  const { sort, setSort } = useUIContext();
  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="sort">
      <h2 className="section-title -small">Sorting by {sort ? "Most" : "Least"} Recent</h2>
      <Button variant="grey" className="shadow" onClick={handleSort}>
        <FaSort aria-hidden="true" />
        <span className="visually-hidden">Sort</span>
      </Button>
    </div>
  );
};

export default Sort;
