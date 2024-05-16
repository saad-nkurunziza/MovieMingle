import React, { FC } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface Props {
  tag: string;
  id: string;
  title: string;
  poster_path: string | null;
}

const CineCard: FC<Props> = ({ tag, id, title, poster_path }) => {
  return (
    <Card className="overflow-hidden relative">
      <Link className="absolute inset-0" href={`/${tag}/${id}`}>
        <span className="sr-only">View</span>
      </Link>

      <Image
        alt={title}
        className="w-full h-auto"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        width={200}
        height={270}
        sizes="(max`-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
        // placeholder="blur"
        style={{ objectFit: "contain" }}
        loading="lazy"
      />
    </Card>
  );
};

export default CineCard;
