import { tmdb_url } from "@/lib/constants";
const API_KEY = process.env.TMDB_API_KEY;

export const fetchPopularActors = async () => {
  const res = await fetch(`${tmdb_url}/person/popular?api_key=${API_KEY}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
};

export const fetchActorById = async (id: string) => {
  try {
    const res = await fetch(`${tmdb_url}/person/${id}?api_key=${API_KEY}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchCombinedCredits = async (id: string) => {
  try {
    const res = await fetch(
      `${tmdb_url}/person/${id}/combined_credits?api_key=${API_KEY}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return { cast: data.cast, crew: data.crew };
  } catch (error) {
    throw error;
  }
};

export const fetchTrendingActors = async () => {
  const res = await fetch(
    `${tmdb_url}/trending/person/day?api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
};
