export interface Country {
  name: string;
  code: string;
}

export interface TravelItem {
  id: number;
  title: string;
  country: Country;
  continent: string;
  googleMapsUrl: string;
  startDate: string;
  endDate: string;
  description?: string;
  imageUrl: string;
  tags?: string[];
  slides?: string[];
}

export interface NormalizedTravelItem extends TravelItem {
  normalizedYear: string;
  normalizedMonth: string;
  normalizedTitle: string;
}

export interface TravelFilters {
  year: string;
  month: string;
  location: string;
  tags: string[];
  query: string;
}
