import axios from "axios";
import { tmdb_url } from "@/lib/constants";

const API_KEY = process.env.TMDB_API_KEY;

export const searchQuery = async (query: string, tag: string) => {
  const data = await axios.get(`${tmdb_url}/search/${tag}`, {
    params: {
      query: query,
      api_key: API_KEY,
      include_adult: true,
    },
  });
  return data.data.results;
};
