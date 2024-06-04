import { tmdb_url } from "@/lib/constants";

const API_KEY = process.env.TMDB_API_KEY;

export const fetchPopularTVShows = async () => {
  try {
    const res = await fetch(`${tmdb_url}/tv/popular?api_key=${API_KEY}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchTrendingTVShows = async (time: "day" | "week") => {
  try {
    const res = await fetch(
      `${tmdb_url}/trending/tv/${time}?api_key=${API_KEY}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchTopRatedTVShows = async () => {
  try {
    const res = await fetch(`${tmdb_url}/tv/top_rated?api_key=${API_KEY}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchAiringTodayTVShows = async () => {
  try {
    const res = await fetch(`${tmdb_url}/tv/airing_today?api_key=${API_KEY}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchOnAirToday = async () => {
  try {
    const res = await fetch(`${tmdb_url}/tv/on_the_air?api_key=${API_KEY}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchTVShowById = async (id: string) => {
  try {
    const res = await fetch(`${tmdb_url}/tv/${id}?api_key=${API_KEY}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchTVShowImages = async (id: string) => {
  try {
    const res = await fetch(`${tmdb_url}/tv/${id}/images?api_key=${API_KEY}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchTVShowExternalIds = async (id: string) => {
  try {
    const res = await fetch(
      `${tmdb_url}/tv/${id}/external_ids?api_key=${API_KEY}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchTvTrailers = async (id: string) => {
  const res = await fetch(`${tmdb_url}/tv/${id}/videos?api_key=${API_KEY}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const fetchTVShowCastDetails = async (id: string) => {
  try {
    const res = await fetch(`${tmdb_url}/tv/${id}/credits?api_key=${API_KEY}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return { cast: data.cast, crew: data.crew };
  } catch (error) {
    throw error;
  }
};

export const fetchTVShowReviews = async (id: string) => {
  try {
    const res = await fetch(`${tmdb_url}/tv/${id}/reviews?api_key=${API_KEY}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchSimilarTVShows = async (id: string) => {
  try {
    const res = await fetch(`${tmdb_url}/tv/${id}/similar?api_key=${API_KEY}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchRecommendedTVShows = async (id: string) => {
  try {
    const res = await fetch(
      `${tmdb_url}/tv/${id}/recommendations?api_key=${API_KEY}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};
