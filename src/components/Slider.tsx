"use client";
import { FC, ReactNode } from "react";
import MovieCard from "./MovieCard";
import CastCard from "./CastCard";
import ReviewCard from "./ReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieTypes, CastTypes, ReviewTypes, TVShow } from "@/lib/types";
import ShowCard from "./TVShowCard";
interface Props {
  tag: "movies" | "casts" | "reviews" | "shows";
  movies?: MovieTypes[];
  casts?: CastTypes[];
  reviews?: ReviewTypes[];
  shows?: TVShow[];
  title: string;
}

export const Slider: FC<Props> = ({
  tag,
  movies,
  casts,
  title,
  reviews,
  shows,
}) => {
  if (tag === "movies" && movies) {
    return (
      <CarouselContainer title={title}>
        {movies.map((movie) => (
          <CarouselItem key={movie.id} className="basis-1/2 md:basis-1/5 lg:basis-1/6">
            <MovieCard movie={movie} />
          </CarouselItem>
        ))}
      </CarouselContainer>
    );
  } else if (tag === "shows" && shows) {
    return (
      <CarouselContainer title={title}>
        {shows.map((show) => (
          <CarouselItem key={show.id} className="basis-1/2 md:basis-1/5 lg:basis-1/6">
            <ShowCard show={show} />
          </CarouselItem>
        ))}
      </CarouselContainer>
    );
  } else if (tag === "casts" && casts) {
    return (
      <CarouselContainer title={title}>
        {casts.map((cast) => (
          <CarouselItem key={cast.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <CastCard cast={cast} />
          </CarouselItem>
        ))}
      </CarouselContainer>
    );
  } else if (tag === "reviews" && reviews) {
    return (
      <CarouselContainer title={title}>
        {reviews.map((review) => (
          <CarouselItem key={review.id} className="1/3 md:basis-1/3 lg:basis-1/2">
            <ReviewCard review={review} />
          </CarouselItem>
        ))}
      </CarouselContainer>
    );
  } else return null;
};

const CarouselContainer = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <div className="flex justify-between">
        <h3 className="my-6 font-semibold">{title}</h3>
        <div className="relative flex mr-16">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent>{children}</CarouselContent>
    </Carousel>
  );
};
