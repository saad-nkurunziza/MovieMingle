import React, { FC } from "react";
import Image from "next/image";
import { CastTypes } from "@/lib/types";
import { CardTitle, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
interface Props {
  cast: CastTypes;
}
const CastCard: FC<Props> = ({ cast }) => {
  return (
    <Card className="overflow-hidden relative">
      <Link href={`/actor/${cast.id}`}>
        <Image
          alt={cast.original_name}
          className="w-full h-auto"
          src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
          width={180}
          height={270}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="px-3 py-2.5 flex flex-col gap-y-1.5">
          <div className=" flex flex-col space-y-1">
            <CardTitle className="text-[13px] mt-2">
              {cast.original_name}
            </CardTitle>
            <p className="text-gray-300 text-[12px] mt-2">
              &quot;{cast.character}&quot;
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default CastCard;
