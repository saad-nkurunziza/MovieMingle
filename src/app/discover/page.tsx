import { Button } from "@/components/ui/button";
// import Grid from "@/components/Grid";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import {
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";

import { tmdb_url } from "@/lib/constants";
import { MovieTypes, TVShow } from "@/lib/types";
import MovieCard from "@/components/MovieCard";
import ShowCard from "@/components/TVShowCard";
const API_KEY = process.env.TMDB_API_KEY;

const fetchDiscoverMovies = async () => {
  const data = await axios.get(`${tmdb_url}/discover/movie`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.data.results;
};
const fetchDiscoverShows = async () => {
  const data = await axios.get(`${tmdb_url}/discover/tv`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.data.results;
};
export default async function page() {
  const movies: MovieTypes[] = await fetchDiscoverMovies();
  const shows: TVShow[] = await fetchDiscoverShows();
  return (
    <main className="container mx-auto px-4 py-6">
      <h3 className="text-lg my-4 font-bold">Discover</h3>
      <Tabs defaultValue="movies" className="">
        <TabsList className="my-4">
          <TabsTrigger value="movies">Movies</TabsTrigger>
          <TabsTrigger value="tv">TV Show</TabsTrigger>
        </TabsList>
        <TabsContent value="movies">
          <div className="flex flex-col gap-y-3">
            <h3>Movies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="tv">
          <div className="flex flex-col gap-y-3">
            <h3>Tv Show</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
              {shows.map((show) => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <Button className="mr-2" variant="outline">
          Previous
        </Button>
        <Button className="ml-2" variant="outline">
          Next
        </Button>
      </div>
    </main>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
