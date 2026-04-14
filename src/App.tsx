import "/node_modules/flag-icons/css/flag-icons.min.css";
import { TravelProvider } from "./features/travel/TravelContext";
import TravelJournalPage from "./pages/TravelJournalPage";

export default function App() {
  return (
    <TravelProvider>
      <TravelJournalPage />
    </TravelProvider>
  );
}
