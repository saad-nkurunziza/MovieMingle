import { CheckCircledIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { TVShowDetails } from "@/lib/types";
const MoreOnShow = ({ show }: { show: TVShowDetails }) => {
  return (
    <div className="flex-1 py-3 mt-3 ">
      <div className="flex flex-col py-8 border rounded-md border-gray-500/20 px-9 gap-y-4 h-fit">
        <Container title="Status">
          <h2 className="">{show.status}</h2>
        </Container>
        <Container title="Released Date">
          <h2 className="">{show.first_air_date}</h2>
        </Container>
        <Container title="Seasons">
          <h2 className="">{show.number_of_seasons}</h2>
        </Container>
        <Container title="Episodes">
          <h2 className="">{show.number_of_episodes}</h2>
        </Container>
        <Container title="Genres">
          <div className="flex gap-x-3">
            {show.genres.map((genre) => (
              <Badge key={genre.id}>{genre.name}</Badge>
            ))}
          </div>
        </Container>
        <Container title="In production">
          <h2 className="">{show.in_production ? "Yes" : "No"}</h2>
        </Container>
        <Container title="Available Languages">
          <div className="flex gap-x-3">
            {show.languages.map((lang) => (
              <Badge key={lang}>{lang}</Badge>
            ))}
          </div>
        </Container>
        <Container title="Networks">
          <div className="flex flex-col gap-y-1">
            {show.networks.map((network) => (
              <h2 key={network.id} className="text-sm font-semibold">
                {network.name}
              </h2>
            ))}
          </div>
        </Container>

        <Container title="Production Companies">
          {show.production_companies.map((company) => (
            <Badge key={company.id}>{company.name}</Badge>
          ))}
        </Container>
        {/*<Container title="Ratings">
          <Badge className="flex space-x-2">
            <h3 className="font-bold">TMDb : </h3>
            <div className="text-sm">{show.vote_average}</div>
          </Badge>
        </Container>*/}
        {/*  <Container title="Popularity">
          <h2 className="">{show.popularity}</h2>
        </Container>*/}
        <Container title="Type">
          <h2 className="">{show.type}</h2>
        </Container>
        {/* {show.budget !== 0 && (
          <Container title="Budget">
            <h2 className="">${show.budget}</h2>
          </Container>
        )}
        {show.revenue !== 0 && (
          <Container title="Revenue">
            <h2 className="">${show.revenue}</h2>
          </Container>
        )}*/}
      </div>
    </div>
  );
};

export default MoreOnShow;

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
