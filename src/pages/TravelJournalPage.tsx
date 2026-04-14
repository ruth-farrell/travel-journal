import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Bucketlist from "../components/Bucketlist";
import Backtotop from "../components/Backtotop";
import Quote from "../components/Quote";
import ComingSoon from "../components/Comingsoon";
import { useTravelMetaContext } from "../features/travel/TravelContext";
import { DestinationsSection, FiltersPanel, Header } from "../features/travel/components";

const TravelJournalPage = () => {
  const { isLoading, error } = useTravelMetaContext();

  return (
    <>
      <Header />
      <Hero />
      <main>
        {error ? <div className="cards-no-results">{error}</div> : null}
        {isLoading ? <div className="cards-no-results">Loading destinations...</div> : null}
        {!isLoading && !error ? <FiltersPanel /> : null}
        {!isLoading && !error ? <DestinationsSection /> : null}
      </main>
      <Quote />
      <Bucketlist />
      <ComingSoon />
      <Footer />
      <Backtotop />
    </>
  );
};

export default TravelJournalPage;
