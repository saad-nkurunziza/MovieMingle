import { tmdb_url } from "@/lib/constants";
import axios from "axios";
const API_KEY = process.env.TMDB_API_KEY;

export const fetchGenres = async (type = "movie") => {
  try {
    const response = await axios.get(`${tmdb_url}/genre/${type}/list`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};
