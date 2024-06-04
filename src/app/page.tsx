import Billboard from "@/components/Billboard";
import Categories from "@/components/Categories";
export default function Home() {
  // if (!popularMovies || !topRatedMovies || !nowPlayingMovies) {
  //   return <div>Something is wrong </div>;
  // }

  return (
    <section className="w-full ">
      <Billboard />
      <section className="md:py-12 md:container">
        <Categories />
      </section>
    </section>
  );
}
