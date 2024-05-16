import Pagination from "@/components/Pagination";
import SmallNav from "@/components/SmallNav";
import { ReactNode } from "react";
import { fetchGenres } from "@/lib/actions/genres";
export default async function DiscoverLayout({
  children,
}: {
  children: ReactNode;
}) {
  const movieGenres = await fetchGenres("movie");
  return (
    <main className=" mx-auto px-1 py-6">
      <h3 className="text-lg my-4 font-bold">Discover</h3>
      <div className="">
        <SmallNav movieGenresProps={movieGenres} />
        {children}
      </div>

      <Pagination callbackUrl="discover" />
    </main>
  );
}
