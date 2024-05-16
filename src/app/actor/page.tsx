import React from "react";
import { CastTypes } from "@/lib/types";
import { CardTitle, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchPopularActors, fetchTrendingActors } from "@/lib/actions/actors";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const page = async () => {
  const popularActors: CastTypes[] = await fetchPopularActors();
  const trendingActors: CastTypes[] = await fetchPopularActors();
  if (!popularActors) {
    return <div>Something is wrong </div>;
  }
  return (
    <section className="mb-3">
      <Tabs defaultValue="trending" className="container">
        <TabsList>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
        </TabsList>
        <TabsContent value="popular">
          <div className=" flex flex-col gap-y-6">
            <h3 className="my-4 text-lg">Popular Actors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
              {popularActors
                .filter((actor) => actor.known_for_department === "Actor")
                .map((actor) => (
                  <CardContainer actor={actor} key={actor.id} />
                ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="trending">
          <div className=" flex flex-col gap-y-6">
            <h3 className="my-4 text-lg">Trending Actors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
              {trendingActors
                .filter((actor) => actor.known_for_department === "Actor")
                .map((actor) => (
                  <CardContainer actor={actor} key={actor.id} />
                ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default page;

function CardContainer({ actor }: { actor: CastTypes }) {
  return (
    <Card className="overflow-hidden">
      <div className="">
        <Image
          alt={actor.original_name}
          className="w-full h-auto"
          src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
          width={180}
          height={270}
        />
      </div>

      <div className="px-2.5 pb-1 pt-2.5 flex flex-col gap-y-1.5">
        <Link href={`/actor/${actor.id}`}>
          <div className=" flex flex-col space-y-1">
            <h3 className="text-[13px] mt-2 font-semibold leading-none tracking-tight">
              {actor.original_name}
            </h3>
            <p className="text-gray-300 text-[12px]">
              &quot;{actor.character}&quot;
            </p>
          </div>
        </Link>
        <div className="flex justify-between items-center">
          {/*<p className="text-xs text-white/60">212min</p>*/}
          <Badge className="text-xs w-fit rounded-full" variant={"outline"}>
            {actor.known_for_department}
          </Badge>
        </div>
      </div>
    </Card>
  );
}
