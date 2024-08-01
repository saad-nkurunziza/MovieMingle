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
    <div className="flex flex-col gap-1">
      <div className="relative bg-zinc-700 h-full flex-shrink-0">
        <div className="absolute inset-0 top-0 right-0">
          <Image
            alt={movie.original_title}
            // className="w-full h-auto"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            fill
            // width={180}
            // height={270}
            // sizes="(max`-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
          />
        </div>
      </div>
      <div className="w-full px-1.5 h-fit z-20">
        <CardHeader>
          <CardTitle className="text-sm font-semibold tracking-wide uppercase">
            {movie.title}
          </CardTitle>
          <Badge className="mt-1 w-fit" variant={"secondary"}>
            {year}
          </Badge>
        </CardHeader>
        <CardContent className="mt-2">
          <p className="text-sm leading-6 line-clamp-6 text-muted-foreground">
            {movie.overview}{" "}
          </p>
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
