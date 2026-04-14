import { useCallback, useMemo, useState } from "react";
import { Card, CardLeft, CardRight } from "./Card";
import Modal from "./Modal";
import Slider from "./Slider";
import { FaSpinner, FaChevronRight, FaLocationDot } from "react-icons/fa6";
import TagIcons from "./TagIcons";
import { useFilterContext, useUIContext } from "../features/travel/TravelContext";

const Destinations = () => {
  const { derived: { items } } = useFilterContext();
  const { query, sort } = useUIContext();
  const [visibleCardCount, setVisibleCardCount] = useState(6);
  const [activeModalId, setActiveModalId] = useState<number | null>(null);

  const handleShowAllCards = useCallback(() => {
    setVisibleCardCount((current) => current + 6);
  }, []);

  const handleModalBtnOpen = useCallback((destinationId: number) => {
    setActiveModalId(destinationId);
  }, []);
  const handleModalClose = useCallback(() => setActiveModalId(null), []);

  const filteredCards = useMemo(() => {
    const loweredQuery = query.toLowerCase();
    const cards = items.filter((destination) => (query === "" ? true : destination.normalizedTitle.includes(loweredQuery)));
    return sort ? [...cards].reverse() : cards;
  }, [items, query, sort]);
  const visibleCards = useMemo(() => filteredCards.slice(0, visibleCardCount), [filteredCards, visibleCardCount]);

  return (
    <>
      <div className="destinations">
        {visibleCards.length ? (
          visibleCards.map((destination) => {
            return (
              <div key={destination.id} className="">
                <Card>
                  <CardLeft
                    imgSrc={process.env.PUBLIC_URL + `/images/${destination.imageUrl}`}
                    imgAlt={destination.title}
                    imgLoading="lazy"
                    title={destination.title}
                  />
                  <CardRight>
                    <div className="card-right-location">
                      <span className={"fi fi-" + destination.country.code}></span>
                      <span className="card-right-location-name">{destination.country.name}</span>
                    </div>
                    <h3 className="card-right-title">{destination.title}</h3>
                    <div className="card-right-google-data">
                      <a href={destination.googleMapsUrl} target="_blank" rel="noreferrer">
                        <FaLocationDot aria-hidden="true" /> View on Google Maps
                      </a>
                    </div>
                    {destination.startDate && destination.endDate ? (
                      <div className="card-right-dates">
                        <span className="card-right-dates-start">{destination.startDate}</span>
                        <span>-</span>
                        <span className="card-right-dates-end">{destination.endDate}</span>
                      </div>
                    ) : (
                      ""
                    )}
                    {destination.description ? <span className="card-right-description">{destination.description}</span> : ""}
                    <div className="card-right-tags">
                      {typeof destination.tags !== "undefined"
                        ? destination.tags.map((tag, tagIndex) => {
                            return (
                              <span key={`${destination.id}-${tagIndex}`}>
                                <TagIcons tag={tag} />
                                {tag}
                              </span>
                            );
                          })
                        : ""}
                    </div>
                    {destination.slides ? (
                      <button className="default" onClick={() => handleModalBtnOpen(destination.id)}>
                        View more <FaChevronRight aria-hidden="true" />
                      </button>
                    ) : (
                      ""
                    )}
                  </CardRight>
                </Card>
                {destination.slides ? (
                  <Modal isOpen={activeModalId === destination.id} onClose={handleModalClose}>
                    <Slider slides={destination.slides} sliderTitle={`${destination.title} - ${destination.country.name}`} />
                  </Modal>
                ) : (
                  ""
                )}
              </div>
            );
          })
        ) : (
          <div className="cards-no-results">
            <span>No results. Try changing your filters/search.</span>
          </div>
        )}
      </div>
      {visibleCardCount < filteredCards.length ? (
        <div className="banner cards-controller">
          <div>
            <button onClick={handleShowAllCards} className="grey shadow">
              <FaSpinner aria-hidden="true" />
              {` Load More Destinations (${Math.max(filteredCards.length - visibleCardCount, 0)} remaining)`}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Destinations;
