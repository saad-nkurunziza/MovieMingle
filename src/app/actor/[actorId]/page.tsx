import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchActorById, fetchCombinedCredits } from "@/lib/actions/actors";
import { Person } from "@/lib/types";
import { extractYear } from "@/lib/utils";

export default async function page({
  params,
}: {
  params: { actorId: string };
}) {
  const actor: Person = await fetchActorById(params.actorId);
  // const { cast, crew }: Person = await fetchCombinedCredits(params.actorId);
  const year = extractYear(actor.birthday);
  const age = new Date().getFullYear() - year;
  return (
    <main className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Avatar className="h-36 w-36 sm:h-48 sm:w-48">
            <AvatarImage
              alt={actor.name}
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl font-bold">{actor.name}</h1>
            <Badge>{actor.known_for_department}</Badge>
            <h1 className="text-sm md:text-4xl font-bold">
              {actor.deathday !== null ? "Dead" : `Age: ${age}`}
            </h1>
            <h1 className="text-sm font-medium">
              {actor.gender === 2 ? "Male" : "Female"}
            </h1>

            <h1 className="text-lg md:text-4xl font-bold">
              Birth place: {actor.place_of_birth}
            </h1>
            {actor.also_known_as.length > 0 && (
              <div className="w-full flex flex-col gap-y-2 border p-3 bg-background rounded-lg">
                <h4 className="font-bold">Also known as: </h4>
                <nav className="grid grid-cols-3 gap-3 w-full">
                  {actor.also_known_as.map((name) => (
                    <li
                      key={name}
                      className="text-sm flex items-center rounded-md p-2"
                    >
                      <span className="flex-shrink-0 h-2 w-2 bg-muted rounded-full mr-2"></span>
                      <span className="flex-1 flex-grow overflow-hidden">
                        {name}
                      </span>
                    </li>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="text-gray-500 dark:text-gray-400">{actor.biography}</p>
        </div>
        {/*<div className="space-y-6">
          <h2 className="text-3xl font-bold">Filmography</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cast.map((cast) => (
              <Card key={cast.id}>
                <CardHeader>
                  <h3 className="text-lg font-bold">{cast.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cast.overview}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cast.character}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>*/}
        {/* <div className="space-y-6">
          <h2 className="text-3xl font-bold">Awards</h2>
          <div className="flex flex-wrap gap-4">
            <Badge>Award 1</Badge>
            <Badge>Award 2</Badge>
          </div>
        </div> */}
      </div>
    </main>
  );
}
