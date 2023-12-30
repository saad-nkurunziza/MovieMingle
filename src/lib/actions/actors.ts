import axios from "axios";
import { tmdb_url } from "@/lib/constants";
const API_KEY = process.env.TMDB_API_KEY;

export const fetchPopularActors = async () => {
  const data = await axios.get(`${tmdb_url}/person/popular`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.data.results;
};

export const fetchActorById = async (id: string) => {
  try {
    const { data } = await axios.get(`${tmdb_url}/person/${id}`, {
      params: { api_key: API_KEY },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
export const fetchCombinedCredits = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${tmdb_url}/person/${id}/combined_credits`,
      {
        params: { api_key: API_KEY },
      }
    );
    return { cast: data.data.cast, crew: data.data.crew };
  } catch (error) {
    throw error;
  }
};

export const fetchTrendingActors = async () => {
  const data = await axios.get(`${tmdb_url}/tending/person/day`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.data.results;
};
