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
    <div className="relative bg-black text-white min-h-screen flex flex-col justify-end">
      <div className="w-screen h-screen ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${todayTrendingMovies[0].poster_path}`}
          alt={todayTrendingMovies[0].original_title}
          fill
          sizes="100vw"
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      <div className="relative z-10 mb-28 p-6 md:p-12 max-w-screen-lg">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-red-600">
          {todayTrendingMovies[0].title}
        </h1>
        <p className="text md:text-lg mb-8 line-clamp-4 max-w-3xl">
          {todayTrendingMovies[0].overview}
        </p>
        <div className="flex space-x-4">
          <div className="bg-red-600 text-white py-2 px-4 rounded-xl text-lg hover:bg-red-700 transition duration-300 flex ease-in-out cursor-pointer">
            <PlayIcon className="w-4 md:w-7 mr-1" />
            Watch Trailer
          </div>
          <div className="mix-blend-difference text-black/90 transition bg-white  py-2 px-4 rounded-xl text-lg hover:opacity-60 duration-300 ease-in-out cursor-pointer bg-opacity-90 flex">
            <InformationCircleIcon className="w-4 md:w-7 mr-1" />
            More Info
          </div>
        </div>
      </div>

      <div className="absolute px-4 -bottom-16 grid grid-cols-4 gap-1.5 md:gap-4 w-full pointer-events-none z-40">
        <div className="gradient-box bg-gradient-to-tr from-blue-600 to-red-500 h-28 md:h-40"></div>
        <div className="gradient-box bg-gradient-to-tr from-green-600 to-pink-500 h-28 md:h-40"></div>
        <div className="gradient-box bg-gradient-to-tr from-red-600 to-cyan-500 h-28 md:h-40"></div>
        <div className="gradient-box bg-gradient-to-tr from-sky-600 to-violet-500 h-28 md:h-40"></div>
      </div>
    </div>
  );
};

export default Billboard;
