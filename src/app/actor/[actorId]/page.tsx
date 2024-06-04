import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchActorById } from "@/lib/actions/actors";
import { Person } from "@/lib/types";
import axios from "axios";
import { extractYear } from "@/lib/utils";
import { tmdb_url } from "@/lib/constants";
const API_KEY = process.env.TMDB_API_KEY;

export default async function page({
  params,
}: {
  params: { actorId: string };
}) {
  const actor: Person = await fetchActorById(params.actorId);
  // const movieCredits: Person = await fetchCombinedCredits(params.actorId);
  // const { cast, crew }: Person = await fetchCombinedCredits(params.actorId);
  // console.log(movieCredits);
  const year = extractYear(actor.birthday);
  const age = new Date().getFullYear() - year;
  const popularityRounded = Math.round(actor.popularity);
  return (
    <main className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <div className="relative self-start">
            <Avatar className="h-36 w-36 sm:h-56 sm:w-56 ">
              <AvatarImage
                alt={actor.name}
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            <Badge
              className="absolute bottom-5 right-2  z-10 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-gray-700 text-gray-300"
              variant="default"
            >
              {popularityRounded}%
            </Badge>
          </div>

          <div className="space-y-4">
            <h1 className="text-xl md:text-2xl font-semibold">{actor.name}</h1>
            <Badge>{actor.known_for_department}</Badge>
            <h1 className="text-sm font-bold">
              {actor.deathday !== null ? "Dead" : `${age} years old`}
            </h1>
            <h1 className="text-sm font-medium">
              {actor.gender === 2 ? "Male" : "Female"}
            </h1>
            <h1 className="text-xs font-bold">
              Birth place: {actor.place_of_birth}
            </h1>
            {actor.also_known_as.length > 0 && (
              <div className="w-1/2 flex flex-col gap-y-2 my-3 rounded-lg">
                <h4 className="font-medium">Biography: </h4>
                <p className="">{actor.biography}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
