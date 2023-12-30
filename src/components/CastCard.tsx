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
    <Card className="overflow-hidden">
    <Link href={`/actor/${cast.id}`}>
      <div className="">
        <Image
          alt={cast.original_name}
          className="w-full h-auto"
          src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
          width={180}
          height={270}
        />
      </div>

      <div className="px-3 py-2.5 flex flex-col gap-y-1.5">
        
          <CardTitle className=" flex flex-col space-y-1">
            <h3 className="text-[13px] mt-2">{cast.original_name}</h3>
            <p className="text-gray-300 text-[12px] mt-2">
              &quot;{cast.character}&quot;
            </p>
          </CardTitle>
        
        <div className="flex justify-between items-center">
          {/*<p className="text-xs text-white/60">212min</p>*/}
          <Badge className="text-xs w-fit rounded-full" variant={"outline"}>
            {cast.known_for_department}
          </Badge>
        </div>
      </div>
      </Link>
    </Card>
  );
};

export default CastCard;
