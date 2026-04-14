import type { Country, NormalizedTravelItem } from "../../types/travel";
import { hasTags, sortByName, toUniqueCountries } from "./utils";

export const selectItems = (
  travelData: NormalizedTravelItem[],
  predicate: (item: NormalizedTravelItem) => boolean
): NormalizedTravelItem[] => travelData.filter(predicate);

export const selectCountryItems = (
  travelData: NormalizedTravelItem[],
  checkMonthAndYear: (item: NormalizedTravelItem) => boolean
): Country[] => sortByName(toUniqueCountries(travelData.filter(checkMonthAndYear).map((item) => item.country)));

export const selectMonthItems = (travelData: NormalizedTravelItem[], travelYear: string): string[] =>
  Array.from(
    new Set(
      travelData
        .filter((item) => (travelYear ? travelYear === item.normalizedYear : true))
        .map((item) => item.normalizedMonth)
        .filter(Boolean)
    )
  );

export const selectYearItems = (travelData: NormalizedTravelItem[]): string[] =>
  Array.from(new Set(travelData.filter((item) => item.startDate).map((item) => item.normalizedYear))).sort(
    (a, b) => Number(b) - Number(a)
  );

export const selectTitleItems = (
  travelData: NormalizedTravelItem[],
  checkMonthAndYear: (item: NormalizedTravelItem) => boolean
): string[] => Array.from(new Set(travelData.filter(checkMonthAndYear).map((item) => item.title)));

export const selectContinentItems = (
  travelData: NormalizedTravelItem[],
  checkMonthAndYear: (item: NormalizedTravelItem) => boolean
): string[] => Array.from(new Set(travelData.filter(checkMonthAndYear).map((item) => item.continent)));

export const selectTagItems = (travelData: NormalizedTravelItem[]): string[] => {
  const tags = travelData.filter(hasTags).flatMap((item) => item.tags).filter((tag): tag is string => Boolean(tag));
  return Array.from(new Set(tags));
};

export const selectCountriesByTag = (travelData: NormalizedTravelItem[], tag: string): Country[] =>
  toUniqueCountries(travelData.filter((item) => hasTags(item) && item.tags.includes(tag)).map((item) => item.country));
