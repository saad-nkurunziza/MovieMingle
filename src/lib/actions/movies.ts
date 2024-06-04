import { tmdb_url } from "@/lib/constants";

const API_KEY = process.env.TMDB_API_KEY;

export const fetchPopularMovies = async () => {
  const res = await fetch(`${tmdb_url}/movie/popular?api_key=${API_KEY}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
};

export const fetchTrendingMovies = async (time: "day" | "week") => {
  const res = await fetch(
    `${tmdb_url}/trending/movie/${time}?api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
};

export const fetchTopRatedMovies = async () => {
  const res = await fetch(`${tmdb_url}/movie/top_rated?api_key=${API_KEY}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
};

export const fetchNowPlayingMovies = async () => {
  const res = await fetch(`${tmdb_url}/movie/now_playing?api_key=${API_KEY}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
};

export const fetchDiscoverMovies = async () => {
  const res = await fetch(`${tmdb_url}/discover/movie?api_key=${API_KEY}`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.results;
};

export const fetchSimilarMovies = async (id: string) => {
  const res = await fetch(
    `${tmdb_url}/movie/${id}/similar?api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
};

export const fetchRecommendedMovies = async (id: string) => {
  const res = await fetch(
    `${tmdb_url}/movie/${id}/recommendations?api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
};

////////////// ID BASED //////////////////

export const fetchMovieById = async (id: string) => {
  const res = await fetch(`${tmdb_url}/movie/${id}?api_key=${API_KEY}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const fetchMovieImages = async (id: string) => {
  const res = await fetch(`${tmdb_url}/movie/${id}/images?api_key=${API_KEY}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const fetchWatchProviders = async (id: string) => {
  const res = await fetch(
    `${tmdb_url}/movie/${id}/watch/providers?api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

export const fetchExternalIds = async (id: string) => {
  const res = await fetch(
    `${tmdb_url}/movie/${id}/external_ids?api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

export const fetchMovieTrailers = async (id: string) => {
  const res = await fetch(`${tmdb_url}/movie/${id}/videos?api_key=${API_KEY}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
};

export const fetchCastDetails = async (id: string) => {
  const res = await fetch(
    `${tmdb_url}/movie/${id}/credits?api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return { cast: data.cast, crew: data.crew };
};

export const fetchReviews = async (id: string) => {
  const res = await fetch(
    `${tmdb_url}/movie/${id}/reviews?api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
};
