import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { InformationCircleIcon, PlayIcon } from "@heroicons/react/24/solid";
import { extractYear } from "@/lib/utils";
import { TVShow, MovieTypes } from "@/lib/types";
import { fetchTrendingMovies } from "@/lib/actions/movies";

const Billboard = async () => {
  const todayTrendingMovies: MovieTypes[] = await fetchTrendingMovies("day");
  const year = extractYear(todayTrendingMovies[0].release_date);
  return (
    <div className="overflow-x-hidden w-full relative flex h-[60vh] overflow-y-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={`https://image.tmdb.org/t/p/original/${todayTrendingMovies[0].poster_path}`}
          alt={todayTrendingMovies[0].original_title}
          fill
          style={
            {
              // aspectRatio: "16/9",
              // objectFit: "cover",
            }
          }
          priority
        />
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]" /> */}
      {/*   */}
      <div className="absolute top-1/2 translate-y-1/2 z-20 h-full">
        <div className="flex flex-col relative space-y-5 self-start px-6 md:px-10 py-6 md:py-10">
          <p className="text-white text-xl md:text-3xl h-full lg:text-6xl font-bold drop-shadow-xl">
            {todayTrendingMovies[0].title}
          </p>
          <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 drop-shadow-xl">
            {todayTrendingMovies[0].overview}
          </p>
          <div className="flex flex-row items-center gap-3 mt-3 md:mt-4">
            <button
              className="
        bg-white 
        rounded-md 
        py-1 md:py-2 
        px-2 md:px-4
        w-auto 
        text-xs lg:text-lg 
        font-semibold
        flex
        text-black/90
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        "
            >
              <InformationCircleIcon className="w-4 md:w-7 text-black mr-1" />
              Play
            </button>
            <button className="flex flex-row items-center w-auto px-2 py-1 text-xs font-semibold text-white transition bg-white rounded-md bg-opacity-30 md:py-2 md:px-4 lg:text-lg hover:bg-opacity-20">
              <PlayIcon className="w-4 mr-1 md:w-7" />
              More Info
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <Badge>{todayTrendingMovies[0].original_language}</Badge>
            <Badge>{year}</Badge>
            {todayTrendingMovies[0].adult && (
              <Badge variant={"destructive"}>18+</Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
