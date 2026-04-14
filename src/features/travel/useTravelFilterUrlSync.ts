import { useEffect } from "react";
import { writeFiltersToUrl } from "./filterUrlState";

interface UrlSyncFilters {
  travelYear: string;
  travelMonth: string;
  travelLocation: string;
  tagName: string[];
  query: string;
  sort: boolean;
}

export const useTravelFilterUrlSync = (filters: UrlSyncFilters): void => {
  useEffect(() => {
    writeFiltersToUrl({
      year: filters.travelYear,
      month: filters.travelMonth,
      location: filters.travelLocation,
      tags: filters.tagName,
      query: filters.query,
      sort: filters.sort,
    });
  }, [filters.travelYear, filters.travelMonth, filters.travelLocation, filters.tagName, filters.query, filters.sort]);
};
