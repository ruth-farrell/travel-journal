interface UrlFilterState {
  year: string;
  month: string;
  location: string;
  tags: string[];
  query: string;
  sort: boolean;
}

export const readFiltersFromUrl = (): UrlFilterState => {
  if (typeof window === "undefined") {
    return { year: "", month: "", location: "", tags: [], query: "", sort: true };
  }

  const params = new URLSearchParams(window.location.search);
  const rawTags = params.get("tags");
  return {
    year: params.get("year") ?? "",
    month: params.get("month") ?? "",
    location: params.get("location") ?? "",
    tags: rawTags ? rawTags.split(",").filter(Boolean) : [],
    query: params.get("query") ?? "",
    sort: params.get("sort") !== "oldest",
  };
};

export const writeFiltersToUrl = (filters: UrlFilterState): void => {
  if (typeof window === "undefined") {
    return;
  }

  const params = new URLSearchParams();
  if (filters.year) params.set("year", filters.year);
  if (filters.month) params.set("month", filters.month);
  if (filters.location) params.set("location", filters.location);
  if (filters.tags.length) params.set("tags", filters.tags.join(","));
  if (filters.query) params.set("query", filters.query);
  if (!filters.sort) params.set("sort", "oldest");

  const next = params.toString();
  const path = next ? `${window.location.pathname}?${next}` : window.location.pathname;
  window.history.replaceState(null, "", path);
};
