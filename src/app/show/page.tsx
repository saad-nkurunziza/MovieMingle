import { TVShow } from "@/lib/types";
import {
  fetchPopularTVShows,
  fetchTopRatedTVShows,
  fetchAiringTodayTVShows,
  fetchTrendingTVShows,
  fetchOnAirToday,
} from "@/lib/actions/shows";
import CineCard from "@/components/CineCard";

const fetchMovies = async (currentPage = 1, tab = "popular") => {
  try {
    const popular: TVShow[] = await fetchPopularTVShows();
    const topRated: TVShow[] = await fetchTopRatedTVShows();
    const airingToday: TVShow[] = await fetchAiringTodayTVShows();
    const trending: TVShow[] = await fetchTrendingTVShows("day");
    const onAirToday: TVShow[] = await fetchOnAirToday();

    switch (tab) {
      case "popular":
        return popular;
      case "top_rated":
        return topRated;
      case "airing_today":
        return airingToday;
      case "trending":
        return trending;
      case "on_air_today":
        return onAirToday;
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
  const shows = await fetchMovies(currentPage, tab);

  return (
    <div>
      <div className="flex flex-col gap-y-3">
        <h3>{tab.split("_")}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
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
    </div>
  );
}
