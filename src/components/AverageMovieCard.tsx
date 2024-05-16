import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { MovieTypes } from "@/lib/types";
import { extractYear } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
interface Props {
  movie: MovieTypes;
}
const AverageMovieCard: FC<Props> = ({ movie }: { movie: MovieTypes }) => {
  const year = extractYear(movie.release_date);
  return (
    <div className="flex flex-col md:items-center border gap-2 md:flex-row">
      <div className="relative order-1 bg-zinc-700 md:order-2 h-80 md:h-72 md:w-1/2 flex-shrink-0">
        <Image
          alt={movie.original_title}
          className="w-full h-auto"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={180}
          height={270}
          sizes="(max`-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
        />
      </div>
      <div className="w-full md:order-1 order-2 px-1.5 h-fit z-20">
        <CardHeader>
          <CardTitle className="text-sm font-semibold tracking-wide uppercase">
            {movie.title}
          </CardTitle>
          <Badge className="mt-1 w-fit" variant={"secondary"}>
            {year}
          </Badge>
        </CardHeader>
        <CardContent className="mt-2">
          <p className="text-sm text-white/50">{movie.overview} </p>
        </CardContent>
        {/* <CardFooter>
          <Button className="mt-3" variant="link" asChild>
            <Link href={`/movie/${movie.id}`} className="text-muted-foreground">
              Details
            </Link>
          </Button>
        </CardFooter> */}
      </div>
    </div>
  );
};
export default AverageMovieCard;
