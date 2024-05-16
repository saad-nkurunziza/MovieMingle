"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "./ui/button";

type Genre = {
  id: number;
  name: string;
};

const SmallNav = ({
  movieGenresProps,
}: // tvGenresProps,
{
  movieGenresProps: Genre[];
  // tvGenresProps: Genre[];
}) => {
  const [movieGenres, setMovieGenres] = useState<Genre[]>(movieGenresProps);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [selectedReleaseYear, setSelectedReleaseYear] =
    useState<string>("2024");
  const [adultContent, setAdultContent] = useState<boolean>(false);
  const [isMovie, setIsMovie] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setMovieGenres(movieGenresProps);
  }, [movieGenresProps]);
  // useEffect(() => {
  //   const handleApplyFilters = () => {
  //     const filters = {
  //       sortBy: "popularity.desc",
  //       firstAirDateYear: selectedReleaseYear,
  //       genreId: selectedGenres.join(","),
  //       adultContent: adultContent ? "true" : "false",
  //       isMovie: isMovie ? "true" : "false",
  //     };

  //     const queryString = Object.entries(filters)
  //       .filter(([key, value]) => value !== "")
  //       .map(([key, value]) => `${key}=${value}`)
  //       .join("&");

  //     router.push(`/discover?${queryString}`);
  //   };
  //   handleApplyFilters();
  // }, [selectedGenres, selectedReleaseYear, adultContent, isMovie, router]);

  const handleGenreChange = (genreId: number) => {
    const updatedGenres = selectedGenres.includes(genreId)
      ? selectedGenres.filter((id) => id !== genreId)
      : [...selectedGenres, genreId];

    setSelectedGenres(updatedGenres);
  };

  const handleApplyFilters = () => {
    const filters = {
      sortBy: "popularity.desc",
      firstAirDateYear: selectedReleaseYear,
      genreId: selectedGenres.join(","),
      adultContent: adultContent ? "true" : "false",
      isMovie: isMovie ? "true" : "false",
    };

    const queryString = Object.entries(filters)
      .filter(([key, value]) => value !== "")
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    router.push(`/discover?${queryString}`);
  };

  return (
    <div className="flex flex-col gap-4 items-start py-2 w-full shadow rounded-lg p-4 border">
      <h2 className="text-2xl font-bold tracking-tight">Filters</h2>
      <div className="flex gap-x-2">
        <Button
          className={`${
            isMovie
              ? "bg-background text-foreground border-border shadow"
              : "bg-muted text-muted-foreground"
          } inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium transition-all`}
          onClick={() => setIsMovie(true)}
        >
          Movies
        </Button>
        <Button
          className={`${
            !isMovie
              ? "bg-background text-foreground border-border shadow"
              : "bg-muted text-muted-foreground"
          } inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium transition-all`}
          onClick={() => setIsMovie(false)}
        >
          TV Shows
        </Button>
      </div>
      {/* <div className="grid gap-2">
        <h3 className="text-base font-semibold">Genre</h3>
        {movieGenres.map((genre) => (
          <Label key={genre.id} className="flex items-center gap-2 font-normal">
            <Checkbox
              className="checked:bg-green-500 checked:border-transparent"
              id={`genre-${genre.id}`}
              checked={selectedGenres.includes(genre.id)}
              onChange={() => handleGenreChange(genre.id)}
            />
            {genre.name}
          </Label>
        ))}
      </div> */}
      <div className="grid gap-2 mt-4">
        <h3 className="text-base font-semibold">Release Year</h3>
        <Select
          value={selectedReleaseYear}
          onValueChange={(e) => setSelectedReleaseYear(e)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        className={`${adultContent ? "bg-theme_primary text-white" : ""}`}
        onClick={() => setAdultContent(!adultContent)}
      >
        Adult Content
      </Button>

      <Button className="mt-4" onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </div>
  );
};

export default SmallNav;
