import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FC } from "react";

interface Props {
  tag: string;
  id: string;
  title: string;
  description: string;
  poster_path: string | null;
}

const SearchResultCard: FC<Props> = ({
  tag,
  id,
  title,
  description,
  poster_path,
}) => {
  return (
    <Card className="overflow-hidden relative">
      <Link className="absolute inset-0" href={`/${tag}/${id}`}>
        <span className="sr-only">View</span>
      </Link>
      <div className="flex gap-2 w-">
        <div className="relative bg-zinc-600">
          {/* <Image
            alt={title}
            className="w-full h-auto"
            src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
            loading="lazy"
          /> */}
        </div>
        <div className="flex flex-col gap-1 my-3 mx-3">
          <h3 className="text-sm">{title}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SearchResultCard;
