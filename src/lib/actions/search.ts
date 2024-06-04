import { tmdb_url } from "@/lib/constants";

const API_KEY = process.env.TMDB_API_KEY;

export const searchQuery = async (query: string, tag: string) => {
  const url = `${tmdb_url}/search/${tag}?query=${encodeURIComponent(
    query
  )}&api_key=${API_KEY}&include_adult=true`;
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return data.results;
};
