import type { NormalizedTravelItem, TravelItem } from "../../types/travel";
import { getMonth, getYear } from "./utils";

export const normalizeTravelData = (items: TravelItem[]): NormalizedTravelItem[] =>
  items.map((item) => ({
    ...item,
    normalizedYear: getYear(item.startDate),
    normalizedMonth: getMonth(item.startDate),
    normalizedTitle: item.title.toLowerCase(),
  }));
