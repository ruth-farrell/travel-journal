import { describe, expect, it } from "vitest";
import { getMonth, getYear, hasTags, isSubset, sortByName, toUniqueCountries } from "./utils";
import type { TravelItem } from "../../types/travel";

describe("travel utils", () => {
  it("extracts year and month from travel date", () => {
    expect(getYear("8 July 2016")).toBe("2016");
    expect(getMonth("8 July 2016")).toBe("July");
    expect(getYear("")).toBe("");
    expect(getMonth("")).toBe("");
  });

  it("sorts countries by name", () => {
    const sorted = sortByName([
      { name: "Spain", code: "es" },
      { name: "Australia", code: "au" },
    ]);

    expect(sorted.map((country) => country.name)).toEqual(["Australia", "Spain"]);
  });

  it("returns unique countries by code and name", () => {
    const unique = toUniqueCountries([
      { name: "Spain", code: "es" },
      { name: "Spain", code: "es" },
      { name: "Australia", code: "au" },
    ]);

    expect(unique).toHaveLength(2);
    expect(unique[0]).toEqual({ name: "Spain", code: "es" });
    expect(unique[1]).toEqual({ name: "Australia", code: "au" });
  });

  it("checks subset correctly", () => {
    expect(isSubset(["Remote Working", "Amazing Food"], ["Remote Working"])).toBe(true);
    expect(isSubset(["Remote Working"], ["Remote Working", "Amazing Food"])).toBe(false);
  });

  it("type-guards items with tags", () => {
    const withTags: TravelItem = {
      id: 1,
      title: "Sydney",
      country: { name: "Australia", code: "au" },
      continent: "Australia",
      googleMapsUrl: "",
      startDate: "1 January 2024",
      endDate: "2 January 2024",
      imageUrl: "sydney.jpeg",
      tags: ["Current Location"],
    };
    const withoutTags: TravelItem = {
      ...withTags,
      id: 2,
      tags: undefined,
    };

    expect(hasTags(withTags)).toBe(true);
    expect(hasTags(withoutTags)).toBe(false);
  });
});
