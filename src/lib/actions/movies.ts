// Movie-related fetch functions

import axios from "axios";
import { tmdb_url } from "@/lib/constants";

const API_KEY = process.env.TMDB_API_KEY;
export const revalidate = 3600;

export const fetchPopularMovies = async () => {
  // const data = await axios.get(`${tmdb_url}/movie/popular`, {
  //   params: {
  //     api_key: API_KEY,
  //   },
  // });
  const res = await fetch(`${tmdb_url}/movie/popular?api_key=${API_KEY}`, {
    next: { tags: ["popular_movies"] },
  });
  const data = await res.json();
  return data.results;
};

export const fetchTrendingMovies = async (time: "day" | "week") => {
  const data = await axios.get(`${tmdb_url}/trending/movie/${time}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.data.results;
};

export const fetchTopRatedMovies = async () => {
  const data = await axios.get(`${tmdb_url}/movie/top_rated`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.data.results;
};

export const fetchNowPlayingMovies = async () => {
  const data = await axios.get(`${tmdb_url}/movie/now_playing`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.data.results;
};

export const fetchDiscoverMovies = async () => {
  const data = await axios.get(`${tmdb_url}/discover/movie`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.data.results;
};

export const fetchSimilarMovies = async (id: string) => {
  const data = await axios.get(`${tmdb_url}/movie/${id}/similar`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.data.results;
};

export const fetchRecommendedMovies = async (id: string) => {
  const data = await axios.get(`${tmdb_url}/movie/${id}/recommendations`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.data.results;
};

////////////// ID BASED //////////////////

export const fetchMovieById = async (id: string) => {
  const data = await axios.get(`${tmdb_url}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.data;
};

export const fetchMovieImages = async (id: string) => {
  const data = await axios.get(`${tmdb_url}/movie/${id}/images`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.data;
};

export const fetchWatchProviders = async (id: string) => {
  const data = await axios.get(`${tmdb_url}/movie/${id}/watch/providers`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.data;
};

export const fetchExternalIds = async (id: string) => {
  const data = await axios.get(`${tmdb_url}/movie/${id}/external_ids`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.data;
};

export const fetchMovieTrailers = async (id: string) => {
  const data = await axios.get(`${tmdb_url}/movie/${id}/videos`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.data.results;
};

export const fetchCastDetails = async (id: string) => {
  const data = await axios.get(`${tmdb_url}/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return { cast: data.data.cast, crew: data.data.crew };
};

export const fetchReviews = async (id: string) => {
  const data = await axios.get(`${tmdb_url}/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.data.results;
};
