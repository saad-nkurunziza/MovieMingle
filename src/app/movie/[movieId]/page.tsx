import MoreOnMovie from "@/components/MoreOnMovie";
import { Slider } from "@/components/Slider";
import React from "react";
import BannerOverlay from "@/components/BannerOverlay";
import {
  CastTypes,
  CrewTypes,
  MovieDetailsTypes,
  ReviewTypes,
} from "@/lib/types";
import {
  fetchMovieById,
  fetchCastDetails,
  fetchReviews,
  fetchSimilarMovies,
  fetchRecommendedMovies,
} from "@/lib/actions/movies";

const page = async ({ params }: { params: { movieId: string } }) => {
  const movie: MovieDetailsTypes = await fetchMovieById(params.movieId);
  const reviews: ReviewTypes[] = await fetchReviews(params.movieId);
  const { cast, crew }: { cast: CastTypes[]; crew: CrewTypes[] } =
    await fetchCastDetails(params.movieId);
  const similarMovies: MovieDetailsTypes[] = await fetchSimilarMovies(
    params.movieId
  );
  const recommendedMovies: MovieDetailsTypes[] = await fetchRecommendedMovies(
    params.movieId
  );
  if (!movie) {
    return <div>Something is wrong </div>;
  }
  return (
    <section className="w-full">
      <BannerOverlay type="movie" movie={movie} />
      <div className="flex flex-col space-y-5 container">
        <div className="flex flex-col md:flex-row gap-x-6 justify-between">
          <div className="flex flex-col md:w-2/3 gap-y-16">
            <Slider tag="casts" casts={cast} title="Casting" />
            {reviews.length > 0 && <Slider tag="reviews" title="Reviews" reviews={reviews} />}
          </div>
          <MoreOnMovie movie={movie} />
        </div>
        {similarMovies.length > 0 && (
          <Slider tag="movies" title="Similar movies" movies={similarMovies} />
        )}

        {recommendedMovies.length > 0 && (
          <Slider
            tag="movies"
            title="Recommended Movies"
            movies={recommendedMovies}
          />
        )}
      </div>
    </section>
  );
};

export default page;
