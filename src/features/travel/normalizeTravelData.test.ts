import { describe, expect, it } from "vitest";
import type { TravelItem } from "../../types/travel";
import { normalizeTravelData } from "./normalizeTravelData";

describe("normalizeTravelData", () => {
  it("adds normalized date and title fields", () => {
    const raw: TravelItem[] = [
      {
        id: 1,
        title: "Sydney",
        country: { name: "Australia", code: "au" },
        continent: "Australia",
        googleMapsUrl: "",
        startDate: "1 January 2024",
        endDate: "",
        imageUrl: "sydney.jpg",
      },
    ];

    const normalized = normalizeTravelData(raw)[0];
    expect(normalized.normalizedYear).toBe("2024");
    expect(normalized.normalizedMonth).toBe("January");
    expect(normalized.normalizedTitle).toBe("sydney");
  });
});
