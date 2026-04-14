import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { TravelItem } from "../../types/travel";
import { getTravelItems } from "./api/getTravelItems";
import { normalizeTravelData } from "./normalizeTravelData";
import { useTravelFilters } from "./useTravelFilters";

type TravelState = ReturnType<typeof useTravelFilters>;

type FilterContextValue = {
  travelYear: string;
  travelMonth: string;
  travelLocation: string;
  tagName: string[];
  setTravelYear: TravelState["setTravelYear"];
  setTravelMonth: TravelState["setTravelMonth"];
  setTravelLocation: TravelState["setTravelLocation"];
  setTagName: TravelState["setTagName"];
  filterYear: TravelState["filterYear"];
  filterMonth: TravelState["filterMonth"];
  filterLocation: TravelState["filterLocation"];
  filterTag: TravelState["filterTag"];
  derived: TravelState["derived"];
};

type UIContextValue = {
  query: string;
  sort: boolean;
  setQuery: TravelState["setQuery"];
  setSort: TravelState["setSort"];
  resetAllFilters: TravelState["resetAllFilters"];
};

type TravelMetaContextValue = {
  isLoading: boolean;
  error: string | null;
};

const FilterContext = createContext<FilterContextValue | undefined>(undefined);
const UIContext = createContext<UIContextValue | undefined>(undefined);
const TravelMetaContext = createContext<TravelMetaContextValue | undefined>(undefined);

export const TravelProvider = ({ children }: { children: ReactNode }) => {
  const [travelData, setTravelData] = useState<TravelItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      try {
        const items = await getTravelItems();
        if (isMounted) {
          setTravelData(items);
        }
      } catch {
        if (isMounted) {
          setError("Unable to load travel data.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const normalizedData = useMemo(() => normalizeTravelData(travelData), [travelData]);
  const state = useTravelFilters(normalizedData);

  const filterValue = useMemo<FilterContextValue>(
    () => ({
      travelYear: state.filters.travelYear,
      travelMonth: state.filters.travelMonth,
      travelLocation: state.filters.travelLocation,
      tagName: state.filters.tagName,
      setTravelYear: state.setTravelYear,
      setTravelMonth: state.setTravelMonth,
      setTravelLocation: state.setTravelLocation,
      setTagName: state.setTagName,
      filterYear: state.filterYear,
      filterMonth: state.filterMonth,
      filterLocation: state.filterLocation,
      filterTag: state.filterTag,
      derived: state.derived,
    }),
    [
      state.filters.travelYear,
      state.filters.travelMonth,
      state.filters.travelLocation,
      state.filters.tagName,
      state.setTravelYear,
      state.setTravelMonth,
      state.setTravelLocation,
      state.setTagName,
      state.filterYear,
      state.filterMonth,
      state.filterLocation,
      state.filterTag,
      state.derived,
    ]
  );

  const uiValue = useMemo<UIContextValue>(
    () => ({
      query: state.filters.query,
      sort: state.filters.sort,
      setQuery: state.setQuery,
      setSort: state.setSort,
      resetAllFilters: state.resetAllFilters,
    }),
    [state.filters.query, state.filters.sort, state.setQuery, state.setSort, state.resetAllFilters]
  );

  return (
    <FilterContext.Provider value={filterValue}>
      <UIContext.Provider value={uiValue}>
        <TravelMetaContext.Provider value={{ isLoading, error }}>{children}</TravelMetaContext.Provider>
      </UIContext.Provider>
    </FilterContext.Provider>
  );
};

export const useFilterSelector = <T,>(selector: (value: FilterContextValue) => T): T => {
  const context = useFilterContext();
  return selector(context);
};

export const useUISelector = <T,>(selector: (value: UIContextValue) => T): T => {
  const context = useUIContext();
  return selector(context);
};

export const useFilterContext = (): FilterContextValue => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilterContext must be used within a TravelProvider");
  }

  return context;
};

export const useUIContext = (): UIContextValue => {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error("useUIContext must be used within a TravelProvider");
  }

  return context;
};

export const useTravelMetaContext = (): TravelMetaContextValue => {
  const context = useContext(TravelMetaContext);

  if (!context) {
    throw new Error("useTravelMetaContext must be used within a TravelProvider");
  }

  return context;
};
