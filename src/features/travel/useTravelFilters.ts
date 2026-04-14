import { useCallback, useMemo, useState } from "react";
import type { Country, NormalizedTravelItem } from "../../types/travel";
import { hasTags, isSubset, MONTHS } from "./utils";
import { readFiltersFromUrl } from "./filterUrlState";
import { useTravelFilterUrlSync } from "./useTravelFilterUrlSync";
import {
  selectContinentItems,
  selectCountriesByTag,
  selectCountryItems,
  selectItems,
  selectMonthItems,
  selectTagItems,
  selectTitleItems,
  selectYearItems,
} from "./selectors";

interface UseTravelFiltersResult {
  filters: {
    travelYear: string;
    travelMonth: string;
    travelLocation: string;
    tagName: string[];
    query: string;
    sort: boolean;
  };
  setTravelYear: (value: string) => void;
  setTravelMonth: (value: string) => void;
  setTravelLocation: (value: string) => void;
  setTagName: (value: string[]) => void;
  setQuery: (value: string) => void;
  setSort: (value: boolean) => void;
  filterYear: (value: string) => void;
  filterMonth: (value: string) => void;
  filterLocation: (value: string) => void;
  filterTag: (value: string) => void;
  resetAllFilters: () => void;
  derived: {
    items: NormalizedTravelItem[];
    months: readonly string[];
    monthItems: string[];
    yearItems: string[];
    titleItems: string[];
    continentItems: string[];
    countryItems: Country[];
    tagItems: string[];
    currentLocationItem: Country[];
    homeLocationItem: Country[];
    residenceLocationItem: Country[];
  };
  isSubset: (parent: string[], subset: string[]) => boolean;
}

export const useTravelFilters = (travelData: NormalizedTravelItem[]): UseTravelFiltersResult => {
  const initial = readFiltersFromUrl();
  const [travelYear, setTravelYear] = useState(initial.year);
  const [travelMonth, setTravelMonth] = useState(initial.month);
  const [travelLocation, setTravelLocation] = useState(initial.location);
  const [tagName, setTagName] = useState<string[]>(initial.tags);
  const [query, setQuery] = useState(initial.query);
  const [sort, setSort] = useState(initial.sort);

  const filterYear = (value: string) => {
    setTravelMonth("");
    setTravelYear(value);
  };

  const filterMonth = (value: string) => {
    setTravelMonth(value);
  };

  const filterLocation = (value: string) => {
    setTravelLocation(value);
  };

  const filterTag = (value: string) => {
    setTagName((current) => (current.includes(value) ? current : [...current, value]));
  };

  const resetAllFilters = () => {
    setTravelYear("");
    setTravelMonth("");
    setTravelLocation("");
    setTagName([]);
    setQuery("");
  };

  const checkMonthAndYear = useCallback(
    (item: NormalizedTravelItem): boolean =>
      (travelYear ? travelYear === item.normalizedYear : true) &&
      (travelMonth ? travelMonth === item.normalizedMonth : true),
    [travelYear, travelMonth]
  );

  const checkItems = useCallback(
    (item: NormalizedTravelItem): boolean =>
      checkMonthAndYear(item) &&
      (travelLocation ? travelLocation === item.country.name : true) &&
      (tagName.length ? hasTags(item) && isSubset(item.tags, tagName) : true),
    [checkMonthAndYear, travelLocation, tagName]
  );

  const items = useMemo(() => selectItems(travelData, checkItems), [travelData, checkItems]);

  const countryItems = useMemo(
    () => selectCountryItems(travelData, checkMonthAndYear),
    [travelData, checkMonthAndYear]
  );

  const monthItems = useMemo(() => selectMonthItems(travelData, travelYear), [travelData, travelYear]);

  const yearItems = useMemo(() => selectYearItems(travelData), [travelData]);

  const titleItems = useMemo(() => selectTitleItems(travelData, checkMonthAndYear), [travelData, checkMonthAndYear]);

  const continentItems = useMemo(
    () => selectContinentItems(travelData, checkMonthAndYear),
    [travelData, checkMonthAndYear]
  );

  const tagItems = useMemo(() => selectTagItems(travelData), [travelData]);
  useTravelFilterUrlSync({ travelYear, travelMonth, travelLocation, tagName, query, sort });

  const currentLocationItem = useMemo(
    () => selectCountriesByTag(travelData, "Current Location"),
    [travelData]
  );

  const homeLocationItem = useMemo(
    () => selectCountriesByTag(travelData, "Home Country"),
    [travelData]
  );

  const residenceLocationItem = useMemo(
    () => selectCountriesByTag(travelData, "Place of Residence"),
    [travelData]
  );

  return {
    filters: { travelYear, travelMonth, travelLocation, tagName, query, sort },
    setTravelYear,
    setTravelMonth,
    setTravelLocation,
    setTagName,
    setQuery,
    setSort,
    filterYear,
    filterMonth,
    filterLocation,
    filterTag,
    resetAllFilters,
    derived: {
      items,
      months: MONTHS,
      monthItems,
      yearItems,
      titleItems,
      continentItems,
      countryItems,
      tagItems,
      currentLocationItem,
      homeLocationItem,
      residenceLocationItem,
    },
    isSubset,
  };
};
