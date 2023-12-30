import Image from "next/image";
import { Slider } from "@/components/Slider";
import AverageMovieCard from "@/components/AverageMovieCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchDiscoverMovies,
  fetchTrendingMovies,
} from "@/lib/actions/movies";
import { MovieTypes, TVShow } from "@/lib/types";
import { extractYear } from "@/lib/utils";
import {
  fetchPopularTVShows,
  fetchTopRatedTVShows,
  fetchAiringTodayTVShows,
  fetchTrendingTVShows,
  fetchOnAirToday,
} from "@/lib/actions/shows";
export default async function Home() {
  // Movies fetches
  const popularMovies: MovieTypes[] = await fetchPopularMovies();
  const topRatedMovies: MovieTypes[] = await fetchTopRatedMovies();
  const nowPlayingMovies: MovieTypes[] = await fetchNowPlayingMovies();
  // const todayTrendingMovies: MovieTypes[] = await fetchTrendingMovies("day");
  // const weeklyTrendingMovies: MovieTypes[] = await fetchTrendingMovies("week");

  // Tv Shows fetches
  const popularTVShows: TVShow[] = await fetchPopularTVShows();
  const topRatedTVShows: TVShow[] = await fetchTopRatedTVShows();
  const airingTodayTVShows: TVShow[] = await fetchAiringTodayTVShows();
  const onAirToday: TVShow[] = await fetchOnAirToday();
  // const todayTrendingTVShows: TVShow[] = await fetchTrendingTVShows("day");
  // const weeklyTrendingTVShows: TVShow[] = await fetchTrendingTVShows("week");

  if (!popularMovies || !topRatedMovies || !nowPlayingMovies) {
    return <div>Something is wrong </div>;
  }
  const year = extractYear(popularMovies[1].release_date);
  const discoverMovies: MovieTypes[] = await fetchDiscoverMovies();
  // const random = Math.floor(Math.random() * movies.length);
  // setRandomMovie(movies[random]);
  return (
    <main className="w-full">
      <div className="overflow-x-hidden w-full relative h-[90vh] overflow-y-hidden">
        <div className="relative h-full w-full border">
          <Image
            src={`https://image.tmdb.org/t/p/w1280/${popularMovies[1].backdrop_path}`}
            alt={popularMovies[1].original_title}
            fill
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]" />
        <div className="absolute top-1/4 left-0 w-1/2 h-full ">
          <div className="w-[70vw] flex flex-col space-y-5 justify-end px-6 md:px-10 py-6 md:py-10">
            <h1 className="text-2xl md:text-5xl font-extrabold text-white">
              {popularMovies[1].title}
            </h1>
            <p className="line-clamp-6 block max-w-md text-sm text-neutral-200">
              {popularMovies[1].overview}
            </p>
            <div className="flex space-x-4">
              <Button
                className="bg-white text-black rounded-lg"
                size="default"
                variant="secondary"
              >
                Trailer
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Badge>{popularMovies[1].original_language}</Badge>
              <Badge>{year}</Badge>
              {popularMovies[1].adult && (
                <Badge variant={"destructive"}>18+</Badge>
              )}
            </div>
          </div>
        </div>
      </div>
      <section className="md:py-12 container">
        <div className="flex flex-col space-y-16 w-full">
          <Slider tag="movies" movies={popularMovies} title="Popular movies" />
          <Slider tag="shows" shows={popularTVShows} title="Popular Tv shows" />
          {/*<Slider
            tag="movies"
            movies={todayTrendingMovies}
            title="Trending Today movies"
          />
          <Slider
            tag="movies"
            movies={weeklyTrendingMovies}
            title="This week trends movies"
          />*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <AverageMovieCard movie={popularMovies[4]} />
            <AverageMovieCard movie={discoverMovies[8]} />
          </div>
          <Slider tag="movies" movies={popularMovies} title="Top rated" />
          <Slider tag="shows" shows={topRatedTVShows} title="Top rated shows" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <AverageMovieCard movie={discoverMovies[6]} />
            <AverageMovieCard movie={discoverMovies[9]} />
          </div>
          <Slider tag="movies" movies={nowPlayingMovies} title="Now Playing" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <AverageMovieCard movie={discoverMovies[10]} />
            <AverageMovieCard movie={discoverMovies[3]} />
          </div>
          <Slider
            tag="shows"
            shows={airingTodayTVShows}
            title="Airing Today Shows"
          />
          <Slider tag="shows" shows={onAirToday} title="On Air Shows" />
          {/*<Slider
            tag="shows"
            shows={todayTrendingTVShows}
            title="Trending Today Shows"
          />
          <Slider
            tag="shows"
            shows={weeklyTrendingTVShows}
            title="This week trends shows"
          />*/}
        </div>
      </section>
    </main>
  );
}
