import React from "react";
import { Slider } from "@/components/Slider";
import AverageMovieCard from "@/components/AverageMovieCard";
import { revalidateTag } from "next/cache";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchDiscoverMovies,
  fetchTrendingMovies,
} from "@/lib/actions/movies";
import { MovieTypes, TVShow } from "@/lib/types";
import {
  fetchPopularTVShows,
  fetchTopRatedTVShows,
  fetchAiringTodayTVShows,
  fetchTrendingTVShows,
  fetchOnAirToday,
} from "@/lib/actions/shows";

const Categories = async () => {
  revalidateTag("popular_movies");
  // Movies fetches
  const popularMovies: MovieTypes[] = await fetchPopularMovies();
  const topRatedMovies: MovieTypes[] = await fetchTopRatedMovies();
  const nowPlayingMovies: MovieTypes[] = await fetchNowPlayingMovies();
  const todayTrendingMovies: MovieTypes[] = await fetchTrendingMovies("day");
  // const weeklyTrendingMovies: MovieTypes[] = await fetchTrendingMovies("week");
  // Tv Shows fetches
  const popularTVShows: TVShow[] = await fetchPopularTVShows();
  const topRatedTVShows: TVShow[] = await fetchTopRatedTVShows();
  const airingTodayTVShows: TVShow[] = await fetchAiringTodayTVShows();
  const onAirToday: TVShow[] = await fetchOnAirToday();
  const todayTrendingTVShows: TVShow[] = await fetchTrendingTVShows("day");
  // const weeklyTrendingTVShows: TVShow[] = await fetchTrendingTVShows("week");
  const discoverMovies: MovieTypes[] = await fetchDiscoverMovies();

  // const random = Math.floor(Math.random() * movies.length);
  // setRandomMovie(movies[random]);
  return (
    <div className="flex flex-col space-y-10 w-full">
      <Slider
        tag="movies"
        movies={todayTrendingMovies}
        title="Trending movies"
      />
      <Slider
        tag="shows"
        shows={todayTrendingTVShows}
        title="Trending TV Shows"
      />
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
        <AverageMovieCard movie={todayTrendingMovies[4]} />
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
  );
};

export default Categories;
