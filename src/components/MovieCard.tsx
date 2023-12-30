import React, { FC } from "react";
import Image from "next/image";
import { CardTitle, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MovieTypes } from "@/lib/types";
import Link from "next/link";
import { extractYear } from "@/lib/utils";
interface Props {
  movie: MovieTypes;
}
const MovieCard: FC<Props> = ({ movie }) => {
  const year = extractYear(movie.release_date);
  return (
    <Card className="overflow-hidden">
   <Link href={`/movie/${movie.id}`}>
        <div className="">
          <Image
            alt={movie.original_title}
            className="w-full h-auto"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            width={180}
            height={270}
          />
        </div>
      
          <div className="px-3 py-2.5 flex flex-col gap-y-1.5">
            
              <CardTitle className="text-sm font-medium line-clamp-1">
                {movie.title}
              </CardTitle>
            
            <div className="flex justify-between items-center">
              {/*<p className="text-xs text-white/60">212min</p>*/}
              <Badge className="text-xs w-fit rounded-full" variant={"outline"}>
                {year}
              </Badge>
            </div>
            
          </div>
      </Link>
    
    </Card>
     
  );
};

export default MovieCard;
