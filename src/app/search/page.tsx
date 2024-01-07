import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardContent, Card } from "@/components/ui/card";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import Searchbar from "@/components/Searchbar";
import { searchQuery } from "@/lib/actions/search";
import MovieCard from "@/components/MovieCard";
import ShowCard from "@/components/TVShowCard";
import CastCard from "@/components/CastCard";
import { MovieTypes, TVShow, CastTypes } from "@/lib/types";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const query = searchParams.q as string;

  const resultMovies: MovieTypes[] = await searchQuery(query, "movie");
  const resultShows: TVShow[] = await searchQuery(query, "tv");
  const resultActors: CastTypes[] = await searchQuery(query, "person");
  // const resultCompanies = await searchQuery(query, "company");
  // const resultNetworks = await searchQuery(query, "network");
  return (
    <main className="w-full px-4 mx-auto grid grid-rows-[auto_1fr] gap-4 md:gap-6 pb-10">
      <header>
        <div className="mx-auto h-16 flex items-center gap-4">
          <Searchbar />
        </div>
      </header>

      <Tabs defaultValue="movies">
        <div className="grid md:grid-cols-6 gap-10 items-start">
          <div className="col-span-1 px-2 md:px-4 grid gap-4">
            <h2 className="font-semibold text-xl">Filters</h2>
            <TabsList className="bg-transparent h-full">
              <div className="flex md:flex-col bg-black gap-y-3 w-full">
                <TabsTrigger value="movies" className="py-2 w-fit">
                  Movies
                </TabsTrigger>
                <TabsTrigger value="tv" className="py-2 w-fit">
                  TV Shows
                </TabsTrigger>
                <TabsTrigger value="person" className="py-2 w-fit">
                  Person
                </TabsTrigger>
                {/*<TabsTrigger value="network" className="py-2 w-fit">
                  Network
                </TabsTrigger>
                <TabsTrigger value="company" className="py-2 w-fit">
                  Company
                </TabsTrigger>*/}
              </div>
            </TabsList>
          </div>

          <div className="col-span-5 grid gap-4">
            <h2 className="font-semibold text-xl">Results</h2>
            <div className="grid gap-6">
              <TabsContent value="movies"><div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-6">
                    {resultMovies.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))}
                  </div></TabsContent>
              <TabsContent value="tv"><div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-6">
                    {resultShows.map((show) => (
                      <ShowCard key={show.id} show={show} />
                    ))}
                  </div></TabsContent>
              <TabsContent value="person"><div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-6">
                    {resultActors.map((person) => (
                      <CastCard key={person.id} cast={person} />
                    ))}
                  </div></TabsContent>
             {/* <TabsContent value="network">Network tab</TabsContent>
              <TabsContent value="company">Company tab</TabsContent>*/}
            </div>
          </div>
        </div>
      </Tabs>
    </main>
  );
}

{
  /*<Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">View Details</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Movie Title</DialogTitle>
            <DialogDescription>
              A longer synopsis of the movie. Including the movie&apos;s rating,
              release date, and more.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Watch Trailer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>*/
}
