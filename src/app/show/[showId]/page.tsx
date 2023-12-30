import MoreOnShow from "@/components/MoreOnShow";
import { Slider } from "@/components/Slider";
import React from "react";
import BannerOverlay from "@/components/BannerOverlay";
import {
  CastTypes,
  CrewTypes,
  ReviewTypes,
  TVShow,
  TVShowDetails,
} from "@/lib/types";
import {
  fetchSimilarTVShows,
  fetchRecommendedTVShows,
  fetchTVShowReviews,
  fetchTVShowById,
  fetchTVShowCastDetails,
} from "@/lib/actions/shows";

const page = async ({ params }: { params: { showId: string } }) => {
  const show: TVShowDetails = await fetchTVShowById(params.showId);
  const reviews: ReviewTypes[] = await fetchTVShowReviews(params.showId);
  const { cast, crew }: { cast: CastTypes[]; crew: CrewTypes[] } =
    await fetchTVShowCastDetails(params.showId);
  const similarShows: TVShow[] = await fetchSimilarTVShows(params.showId);
  const recommendedShows: TVShow[] = await fetchRecommendedTVShows(
    params.showId
  );
  if (!show) {
    return <div>Something is wrong </div>;
  }
  return (
    <section className="w-full">
      <BannerOverlay type="show" show={show} />
      <div className="flex flex-col space-y-5 container">
        <div className="flex flex-col md:flex-row gap-x-6 justify-between">
          <div className="flex flex-col md:w-2/3 gap-y-16">
            <Slider tag="casts" casts={cast} title="Casting" />
            {reviews.length > 0 && <Slider tag="reviews" title="Reviews" reviews={reviews} />}
          </div>
          <MoreOnShow show={show} />
        </div>
        <Slider tag="shows" title="Similar Shows" shows={similarShows} />
        <Slider
          tag="shows"
          title="Recommended Shows"
          shows={recommendedShows}
        />
      </div>
    </section>
  );
};

export default page;
