import type { Country, TravelItem } from "../../types/travel";

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export const getYear = (date: string): string => {
  if (!date) {
    return "";
  }

  const parts = date.trim().split(" ");
  return parts[parts.length - 1] ?? "";
};

export const getMonth = (date: string): string => {
  if (!date) {
    return "";
  }

  const [, month] = date.trim().split(" ");
  return month ?? "";
};

export const sortByName = (items: Country[]): Country[] =>
  [...items].sort((a, b) => a.name.localeCompare(b.name));

export const toUniqueCountries = (countries: Country[]): Country[] => {
  const seen = new Set<string>();
  const unique: Country[] = [];

  countries.forEach((country) => {
    const key = `${country.code}-${country.name}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(country);
    }
  });

  return unique;
};

export const isSubset = (parent: string[], subset: string[]): boolean =>
  subset.every((item) => parent.includes(item));

export const hasTags = (item: TravelItem): item is TravelItem & { tags: string[] } =>
  Array.isArray(item.tags) && item.tags.length > 0;
