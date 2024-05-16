import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import { TVShowDetails, MovieDetailsTypes, TrailerTypes } from "@/lib/types";
import { fetchMovieImages, fetchMovieTrailers } from "@/lib/actions/movies";
import { extractYear } from "@/lib/utils";
import TrailerButton from "./TrailerButton";
type Props = movieProps | showProps;

type movieProps = {
  type: "movie";
  movie: MovieDetailsTypes;
};
type showProps = {
  type: "show";
  show: TVShowDetails;
};
const BannerOverlay = async (props: Props) => {
  if (props.type === "show") {
    const { show } = props;
    const year = extractYear(show.last_air_date);
    return (
      <Card className="m-4 rounded-none border-none mx-auto overflow-hidden shadow-md w-full">
        <div className="flex flex-col md:items-center gap-2 md:flex-row">
          <div className="relative order-1 bg-zinc-700 md:order-2 md:w-1/2 flex-shrink-0">
            <Image
              alt={show.original_name}
              className="w-full h-full"
              src={`https://image.tmdb.org/t/p/w780/${show.backdrop_path}`}
              fill
            />
          </div>
          <div className="p-8">
            <CardHeader>
              <CardTitle className="flex flex-col gap-y-1">
                <h3 className="text-3xl font-extrabold text-white md:text-5xl">
                  {show.name}
                </h3>
                <h2 className="text text-white/70">{show.tagline}</h2>
              </CardTitle>
              <Badge className="mt-1 w-fit" variant={"secondary"}>
                {year}
              </Badge>
            </CardHeader>
            <CardContent className="mt-2 flex flex-col gap-y-3">
              <p className="max-w-lg text-sm text-neutral-500">
                {show.overview}
              </p>

              <Button
                variant="outline"
                className="w-fit shadow-sm px-4 md:px-5 py-1 md:py-1.5 my-6 rounded-lg"
              >
                <div className="flex gap-3 items-center text-xs">
                  {/* <GitHubLogoIcon /> */}
                  <h3>Trailer</h3>
                </div>
              </Button>

              <div className="flex items-center space-x-2">
                <Badge>{show.original_language}</Badge>
                <Badge>{`${show.number_of_seasons} seasons`}</Badge>
                <Badge>{`${show.number_of_episodes} episodes`}</Badge>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    );
  } else if (props.type === "movie") {
    const { movie } = props;
    const year = extractYear(movie.release_date);
    const trailers: TrailerTypes[] = await fetchMovieTrailers(movie.id);
    return (
      <Card className="m-4 rounded-none border-none mx-auto overflow-hidden shadow-md w-full">
        <div className="h-auto w-full md:flex">
          <div className="w-full relative">
            <Image
              alt={movie.original_title}
              className="w-full h-full"
              src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
              fill
            />
          </div>
          <div className="p-8">
            <CardHeader>
              <CardTitle className="flex flex-col gap-y-1">
                <h3 className="text-3xl font-extrabold text-white md:text-5xl">
                  {movie.title}
                </h3>
                <h2 className="text text-white/70">{movie.tagline}</h2>
              </CardTitle>
              <Badge className="mt-1 w-fit" variant={"secondary"}>
                {year}
              </Badge>
            </CardHeader>
            <CardContent className="mt-2 flex flex-col gap-y-3">
              <p className="hidden max-w-lg text-sm md:block text-neutral-500">
                {movie.overview}
              </p>
              <div className="flex space-x-4">
                <TrailerButton trailers={trailers} />
              </div>
              <div className="flex items-center space-x-2">
                <Badge>{movie.original_language}</Badge>
                {movie.runtime && <Badge>{`${movie.runtime}min`}</Badge>}
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    );
  }
};

export default BannerOverlay;
