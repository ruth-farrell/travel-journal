import travelData from "../../../data";
import type { TravelItem } from "../../../types/travel";

export const getTravelItems = async (): Promise<TravelItem[]> => {
  return Promise.resolve(travelData);
};
