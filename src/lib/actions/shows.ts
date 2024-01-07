import axios from "axios";
import { tmdb_url } from "@/lib/constants";

const API_KEY = process.env.TMDB_API_KEY;

export const fetchPopularTVShows = async () => {
  try {
    const { data } = await axios.get(`${tmdb_url}/tv/popular`, {
      params: { api_key: API_KEY },
    });
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchTrendingTVShows = async (time: "day" | "week") => {
  try {
    const data = await axios.get(`${tmdb_url}/trending/tv/${time}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return data.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchTopRatedTVShows = async () => {
  try {
    const { data } = await axios.get(`${tmdb_url}/tv/top_rated`, {
      params: { api_key: API_KEY },
    });
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchAiringTodayTVShows = async () => {
  try {
    const { data } = await axios.get(`${tmdb_url}/tv/airing_today`, {
      params: { api_key: API_KEY },
    });
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchOnAirToday = async () => {
  try {
    const { data } = await axios.get(`${tmdb_url}/tv/on_the_air`, {
      params: { api_key: API_KEY },
    });
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchTVShowById = async (id: string) => {
  try {
    const { data } = await axios.get(`${tmdb_url}/tv/${id}`, {
      params: { api_key: API_KEY },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchTVShowImages = async (id: string) => {
  try {
    const { data } = await axios.get(`${tmdb_url}/tv/${id}/images`, {
      params: { api_key: API_KEY },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchTVShowExternalIds = async (id: string) => {
  try {
    const { data } = await axios.get(`${tmdb_url}/tv/${id}/external_ids`, {
      params: { api_key: API_KEY },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchTvTrailers = async (id: string) => {
  const data = await axios.get(`${tmdb_url}/tv/${id}/videos`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.data;
};

export const fetchTVShowCastDetails = async (id: string) => {
  try {
    const { data } = await axios.get(`${tmdb_url}/tv/${id}/credits`, {
      params: { api_key: API_KEY },
    });
    return { cast: data.cast, crew: data.crew };
  } catch (error) {
    throw error;
  }
};

export const fetchTVShowReviews = async (id: string) => {
  try {
    const { data } = await axios.get(`${tmdb_url}/tv/${id}/reviews`, {
      params: { api_key: API_KEY },
    });
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchSimilarTVShows = async (id: string) => {
  try {
    const { data } = await axios.get(`${tmdb_url}/tv/${id}/similar`, {
      params: { api_key: API_KEY },
    });
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchRecommendedTVShows = async (id: string) => {
  try {
    const { data } = await axios.get(`${tmdb_url}/tv/${id}/recommendations`, {
      params: { api_key: API_KEY },
    });
    return data.results;
  } catch (error) {
    throw error;
  }
};
