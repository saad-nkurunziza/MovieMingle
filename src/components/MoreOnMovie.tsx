import { CheckCircledIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { MovieDetailsTypes } from "@/lib/types";
import { fetchWatchProviders, fetchMovieImages } from "@/lib/actions/movies";
const MoreOnMovie = async ({ movie }: { movie: MovieDetailsTypes }) => {
  return (
    <div className="flex-1 py-3 mt-3 ">
      <div className="flex flex-col py-8 border rounded-md border-gray-500/20 px-9 gap-y-4 h-fit">
        <Container title="Status">
          <h2 className="">{movie.status}</h2>
        </Container>
        <Container title="Released Date">
          <h2 className="">{movie.release_date}</h2>
        </Container>
        <Container title="Runtime">
          <h2 className="">{movie.runtime}min</h2>
        </Container>
        <Container title="Genres">
          <div className="flex gap-x-3">
            {movie.genres.map((genre) => (
              <Badge key={genre.id}>{genre.name}</Badge>
            ))}
          </div>
        </Container>
        <Container title="Available Languages">
          <div className="flex gap-x-3">
            {movie.spoken_languages.map((lang) => (
              <Badge key={lang.iso_639_1}>{lang.english_name}</Badge>
            ))}
          </div>
        </Container>
        <Container title="Production Companies">
          <div className="flex flex-col gap-y-1">
            {movie.production_companies.map((company) => (
              <h2 key={company.name} className="text-sm font-semibold">
                {company.name}
              </h2>
            ))}
          </div>
        </Container>

        <Container title="Production Countries">
          {movie.production_countries.map((country) => (
            <Badge key={country.iso_3166_1}>{country.name}</Badge>
          ))}
        </Container>
        <Container title="Ratings">
          <Badge className="flex space-x-2">
            <h3 className="font-bold">TMDb : </h3>
            <div className="text-sm">{movie.vote_average}</div>
          </Badge>
        </Container>
        <Container title="Popularity">
          <h2 className="">{movie.popularity}</h2>
        </Container>
        {movie.budget !== 0 && (
          <Container title="Budget">
            <h2 className="">${movie.budget}</h2>
          </Container>
        )}
        {movie.revenue !== 0 && (
          <Container title="Revenue">
            <h2 className="">${movie.revenue}</h2>
          </Container>
        )}
      </div>
    </div>
  );
};

export default MoreOnMovie;

function Container({
  children,

  title,
}: {
  children: ReactNode;

  title: string;
}) {
  return (
    <div>
      <div className="flex gap-x-1.5 items-center mb-2 text-sm text-white/40">
        <CheckCircledIcon />
        <h4 className="">{title}</h4>
      </div>
      {children}
    </div>
  );
}
