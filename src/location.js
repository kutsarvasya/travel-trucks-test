import axios from "axios";

export async function fetchLocations(query) {
  if (!query.trim()) return [];

  const { data } = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        format: "json",
        addressdetails: 1,
        limit: 6,
        q: query,
      },
      headers: {
        "Accept-Language": "en",
      },
    },
  );

  return data
    .map((item) => {
      const a = item.address || {};
      const city =
        a.city || a.town || a.village || a.municipality || a.county || "";
      const country = a.country || "";

      return {
        id: item.place_id,
        label: [country, city].filter(Boolean).join(", "),
      };
    })
    .filter((x) => x.label);
}
