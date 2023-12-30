import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
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
    <Card className="max-w-md m-4 mx-auto overflow-hidden shadow-md md:max-w-2xl">
      <div className="h-full w-full flex flex-col md:flex-row">
        <div className="h-full w-[200%] relative">
          <Image
            alt={movie.original_title}
            className="w-full h-auto"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            // width={320}
            // height={480}
            fill
          />
        </div>
        <div className="p-8">
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
            {/*<p className="mt-5 text-xs text-white/90">212min</p>*/}
          </CardContent>

          <Button className="mt-3" variant="link" asChild>
            <Link href={`/movie/${movie.id}`}>Details</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default AverageMovieCard;
