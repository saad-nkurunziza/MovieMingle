import { MovieTypes, TVShow } from "@/lib/types";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchTrendingMovies,
} from "@/lib/actions/movies";
import CineCard from "@/components/CineCard";

const fetchMovies = async (currentPage = 1, tab = "popular") => {
  try {
    const popular: MovieTypes[] = await fetchPopularMovies();
    const topRated: MovieTypes[] = await fetchTopRatedMovies();
    const nowPlaying: MovieTypes[] = await fetchNowPlayingMovies();
    const todayTrending: MovieTypes[] = await fetchTrendingMovies("day");

    switch (tab) {
      case "popular":
        return popular;
      case "top_rated":
        return topRated;
      case "now_playing":
        return nowPlaying;
      case "trending":
        return todayTrending;
      default:
        return [];
    }
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
  const tab = searchParams.tab || "popular";
  const movies = await fetchMovies(currentPage, tab);

  return (
    <div>
      <div className="flex flex-col gap-y-3 container">
        <h3 className="capitalize font-semibold my-8">
          {tab.split("_").join(" ")}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
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
    </div>
  );
}
