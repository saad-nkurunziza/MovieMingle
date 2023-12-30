export interface Genre {
  id: number;
  name: string;
}

export interface MovieTypes {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailsTypes extends MovieTypes {
  budget: number;
  imdb_id: string | null;
  homepage: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number | null;
  genres: Genre[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface CastTypes {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface CrewTypes {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

export interface ReviewTypes {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface TrailerTypes {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
}
export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number | null;
}

// Tv Show Types

export interface TVShow {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}

export interface TVShowDetails extends TVShow {
  created_by: Creator[];
  episode_run_time: number[];
  genres: Genre[];
  homepage: string | null;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: ProductionCompany[];
  seasons: Season[];
  status: string;
  tagline: string;
  type: string;
}

export interface Creator {
  id: number;
  credit_id: string;
  name: string;
  gender: number | null;
  profile_path: string | null;
}

export interface Network {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface Season {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
}

export interface Person {
  adult: false;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: null;
  gender: 2;
  homepage: string;
  id: 500;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: 43.28;
  profile_path: string;
}

// {
//   "adult": false,
//   "backdrop_path": "/nH6hPhJq3EEv9CnBZgXU3IQnpJo.jpg",
//   "genre_ids": [
//       12,
//       53,
//       878
//   ],
//   "id": 74,
//   "original_language": "en",
//   "original_title": "War of the Worlds",
//   "overview": "Ray Ferrier is a divorced dockworker and less-than-perfect father. Soon after his ex-wife and her new husband drop off his teenage son and young daughter for a rare weekend visit, a strange and powerful lightning storm touches down.",
//   "popularity": 45.098,
//   "poster_path": "/6Biy7R9LfumYshur3YKhpj56MpB.jpg",
//   "release_date": "2005-06-28",
//   "title": "War of the Worlds",
//   "video": false,
//   "vote_average": 6.501,
//   "vote_count": 7858,
//   "character": "Ray Ferrier",
//   "credit_id": "52fe4213c3a36847f800226b",
//   "order": 0,
//   "media_type": "movie"
// },
