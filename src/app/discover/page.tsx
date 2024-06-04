// import Grid from "@/components/Grid";
import axios from "axios";

import { MovieTypes, TVShow } from "@/lib/types";
import { tmdb_url } from "@/lib/constants";
import CineCard from "@/components/CineCard";
const API_KEY = process.env.TMDB_API_KEY;

const fetchDiscoverShows = async (
  currentPage = 1,
  sortBy = "popularity.desc",
  year = "",
  withGenres = "",
  withoutGenres = "",
  adultContent = false
) => {
  try {
    const response = await axios.get(`${tmdb_url}/discover/tv`, {
      params: {
        api_key: API_KEY,
        page: currentPage,
        sort_by: sortBy,
        // first_air_date_year: year,
        // with_genres: withGenres,
        // without_genres: withoutGenres,
        include_adult: adultContent,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching TV shows:", error);
    return [];
  }
};

const fetchDiscoverMovies = async (
  currentPage = 1,
  withGenres = "",
  sortBy = "popularity.desc",
  year = "",
  withoutGenres = "",
  adultContent = false
) => {
  try {
    const response = await axios.get(`${tmdb_url}/discover/movie`, {
      params: {
        api_key: API_KEY,
        page: currentPage,
        sort_by: sortBy,
        primary_release_year: year,
        // with_genres: withGenres,
        // without_genres: withoutGenres,
        include_adult: adultContent,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const sortBy = searchParams.sortBy || "popularity.desc";
  const year = searchParams.firstAirDateYear || "2024";
  const genreId = searchParams.genreId || "";
  const adultContent = searchParams.adultContent;
  const isMovie = searchParams.isMovie === "false" ? false : true;
  // const isMovie = true;
  const movies: MovieTypes[] = await fetchDiscoverMovies(
    currentPage,
    sortBy,
    year,
    genreId,
    adultContent
  );
  const shows: TVShow[] = await fetchDiscoverShows(
    currentPage,
    sortBy,
    year,
    genreId,
    adultContent
  );
  return (
    <div>
      {isMovie ? (
        <div className="flex flex-col gap-y-3">
          <h3 className="text-lg font-medium my-4">Movies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 mb-6">
            {movies.map((movie) => (
              <CineCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                tag="movie"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-3">
          <h3 className="text-lg font-medium my-4">Tv Show</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 mb-6">
            {shows.map((show) => (
              <CineCard
                key={show.id}
                id={show.id}
                poster_path={show.poster_path}
                title={show.name}
                tag="show"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
