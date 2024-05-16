import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Searchbar from "@/components/Searchbar";
import { searchQuery } from "@/lib/actions/search";
import CastCard from "@/components/CastCard";
import { MovieTypes, TVShow, CastTypes } from "@/lib/types";
import CineCard from "@/components/CineCard";
import SearchResultCard from "@/components/SearchResultCard";

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
        <div className="md:grid flex flex-col md:grid-cols-6 gap-10 md:items-start">
          <div className="md:col-span-1 px-2 md:px-4 flex flex-col md:grid gap-4">
            <h2 className="font-semibold text-xl">Filters</h2>
            <TabsList className="bg-transparent w-fit border h-full">
              <div className="flex md:flex-col   bg-black gap-y-3">
                <TabsTrigger value="movies" className="py-2 w-fit">
                  Movies
                </TabsTrigger>
                <TabsTrigger
                  value="tv"
                  className="py-2 border-l border-r w-fit"
                >
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
          {query === "" ? (
            <div className="flex justify-center items-center text-muted-foreground">
              No query
            </div>
          ) : (
            <div className="md:col-span-5 grid gap-4">
              <h2 className="font-semibold text-xl">Results</h2>
              <div className="grid gap-6">
                <TabsContent value="movies">
                  <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-6">
                    {resultMovies.map((movie) => (
                      <SearchResultCard
                        key={movie.id}
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        description={movie.overview}
                        tag="movie"
                      />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="tv">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {resultShows.map((show) => (
                      <SearchResultCard
                        key={show.id}
                        id={show.id}
                        poster_path={show.poster_path}
                        title={show.name}
                        description={show.overview}
                        tag="show"
                      />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="person">
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-6">
                    {resultActors.map((person) => (
                      <CastCard key={person.id} cast={person} />
                    ))}
                  </div>
                </TabsContent>
                {/* <TabsContent value="network">Network tab</TabsContent>
              <TabsContent value="company">Company tab</TabsContent>*/}
              </div>
            </div>
          )}
        </div>
      </Tabs>
    </main>
  );
}
