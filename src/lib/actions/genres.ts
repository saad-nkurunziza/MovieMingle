import { tmdb_url } from "@/lib/constants";
const API_KEY = process.env.TMDB_API_KEY;

export const fetchGenres = async (type = "movie") => {
  try {
    const res = await fetch(
      `${tmdb_url}/genre/${type}/list?api_key=${API_KEY}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data.genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};
