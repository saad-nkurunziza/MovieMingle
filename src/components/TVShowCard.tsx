import React, { FC } from "react";
import Image from "next/image";
import { CardTitle, Card } from "@/components/ui/card";
import { TVShow } from "@/lib/types";
import Link from "next/link";
interface Props {
  show: TVShow;
}
const ShowCard: FC<Props> = ({ show }) => {
  return (
    <Card className="overflow-hidden">
    <Link href={`/show/${show.id}`}>
      <div className="">
        <Image
          alt={show.original_name}
          className="w-full h-auto"
          src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
          width={180}
          height={270}
        />
      </div>

      <div className="px-3 py-2.5 flex flex-col gap-y-1.5">
        
          <CardTitle className="text-sm font-medium line-clamp-1">
            {show.name}
          </CardTitle>
       
        <div className="flex justify-between items-center"></div>
      </div>
       </Link>
    </Card>
  );
};

export default ShowCard;
