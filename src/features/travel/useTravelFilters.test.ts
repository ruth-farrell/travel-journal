import React from "react";
import { act, render } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import type { TravelItem } from "../../types/travel";
import { normalizeTravelData } from "./normalizeTravelData";
import { useTravelFilters } from "./useTravelFilters";

const mockData: TravelItem[] = [
  {
    id: 1,
    title: "Sydney",
    country: { name: "Australia", code: "au" },
    continent: "Australia",
    googleMapsUrl: "",
    startDate: "1 January 2024",
    endDate: "5 January 2024",
    imageUrl: "sydney.jpg",
    tags: ["Current Location", "Amazing Food"],
  },
  {
    id: 2,
    title: "Melbourne",
    country: { name: "Australia", code: "au" },
    continent: "Australia",
    googleMapsUrl: "",
    startDate: "10 February 2024",
    endDate: "12 February 2024",
    imageUrl: "melbourne.jpg",
    tags: ["Amazing Food"],
  },
  {
    id: 3,
    title: "Tokyo",
    country: { name: "Japan", code: "jp" },
    continent: "Asia",
    googleMapsUrl: "",
    startDate: "2 March 2023",
    endDate: "8 March 2023",
    imageUrl: "tokyo.jpg",
    tags: ["Travel Highlight"],
  },
];

describe("useTravelFilters", () => {
  beforeEach(() => {
    window.history.replaceState(null, "", "/");
  });

  const setup = () => {
    let hookValue: ReturnType<typeof useTravelFilters> | undefined;

    const TestComponent = () => {
      hookValue = useTravelFilters(normalizeTravelData(mockData));
      return null;
    };

    render(React.createElement(TestComponent));

    if (!hookValue) {
      throw new Error("Hook did not initialize");
    }

    return () => {
      if (!hookValue) {
        throw new Error("Hook value unavailable");
      }
      return hookValue;
    };
  };

  it("initializes with full data and derived options", () => {
    const getHook = setup();
    const hook = getHook();

    expect(hook.derived.items).toHaveLength(3);
    expect(hook.filters.travelYear).toBe("");
    expect(hook.filters.travelMonth).toBe("");
    expect(hook.derived.yearItems).toEqual(expect.arrayContaining(["2023", "2024"]));
    expect(hook.derived.monthItems).toEqual(expect.arrayContaining(["January", "February", "March"]));
  });

  it("filters by year and month", () => {
    const getHook = setup();

    act(() => {
      getHook().filterYear("2024");
    });
    expect(getHook().derived.items.map((item) => item.title)).toEqual(["Sydney", "Melbourne"]);

    act(() => {
      getHook().filterMonth("February");
    });
    expect(getHook().derived.items.map((item) => item.title)).toEqual(["Melbourne"]);
  });

  it("filters by location and tags while preventing duplicate tag filters", () => {
    const getHook = setup();

    act(() => {
      getHook().filterLocation("Australia");
      getHook().filterTag("Amazing Food");
      getHook().filterTag("Amazing Food");
    });

    expect(getHook().filters.tagName).toEqual(["Amazing Food"]);
    expect(getHook().derived.items.map((item) => item.title)).toEqual(["Sydney", "Melbourne"]);
  });

  it("resets all active filters and query", () => {
    const getHook = setup();

    act(() => {
      getHook().filterYear("2024");
      getHook().filterMonth("January");
      getHook().filterLocation("Australia");
      getHook().filterTag("Current Location");
      getHook().setQuery("syd");
      getHook().setSort(false);
    });

    expect(getHook().filters.travelYear).toBe("2024");
    expect(getHook().filters.query).toBe("syd");
    expect(getHook().filters.sort).toBe(false);

    act(() => {
      getHook().resetAllFilters();
    });

    expect(getHook().filters.travelYear).toBe("");
    expect(getHook().filters.travelMonth).toBe("");
    expect(getHook().filters.travelLocation).toBe("");
    expect(getHook().filters.tagName).toEqual([]);
    expect(getHook().filters.query).toBe("");
    expect(getHook().filters.sort).toBe(false);
    expect(getHook().derived.items).toHaveLength(3);
  });

  it("syncs selected filters into URL query params", () => {
    const getHook = setup();

    act(() => {
      getHook().filterYear("2024");
      getHook().filterMonth("January");
      getHook().setQuery("syd");
      getHook().setSort(false);
    });

    const params = new URLSearchParams(window.location.search);
    expect(params.get("year")).toBe("2024");
    expect(params.get("month")).toBe("January");
    expect(params.get("query")).toBe("syd");
    expect(params.get("sort")).toBe("oldest");
  });
});
