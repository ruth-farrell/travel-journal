import { FaFilterCircleXmark } from "react-icons/fa6";
import TagIcons from "./TagIcons";
import { useFilterContext } from "../features/travel/TravelContext";

const Tags = () => {
  const { tagName, setTagName, filterTag, derived: { tagItems } } = useFilterContext();
  return (
    <div className="section tag">
      <h2 className="section-title">Filter by Tags</h2>
      <div className="section-container">
        {tagItems.map((tag) => {
          const isActive = tagName.includes(tag);
          return (
            <button
              key={tag}
              className={`default${isActive ? " active" : ""}`}
              aria-pressed={isActive}
              onClick={() => filterTag(tag)}
            >
              <TagIcons tag={tag} />
              {tag}
            </button>
          );
        })}
      </div>
      {tagName.length ? (
        <button
          className="grey shadow"
          onClick={() => {
            setTagName([]);
          }}
        >
          <FaFilterCircleXmark /> Reset Tags
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Tags;
