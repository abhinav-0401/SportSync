import CasinoCard from "./CasinoCard";

interface CasinoCardData {
  title: string;
  description: string;
  imageUrl: string;
  type: "cricket" | "football";
}

interface Props {
  type: "all" | "cricket" | "football";
}

export default function CasinoList({ type }: Props) {
  const casinos: CasinoCardData[] = [
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      imageUrl: "/article-1.png",
      type: "cricket",
    },
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      imageUrl: "/article-1.png",
      type: "cricket",
    },
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      imageUrl: "/article-1.png",
      type: "cricket",
    },
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      imageUrl: "/article-1.png",
      type: "cricket",
    },
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      imageUrl: "/article-1.png",
      type: "cricket",
    },
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      imageUrl: "/article-1.png",
      type: "cricket",
    },
  ];

  return (
    <div className="flex md:flex-row flex-col flex-wrap justify-between md:justify-normal gap-10">
      {casinos.map(casino => {
        if (casino.type == type || type == "all") {
          return <CasinoCard title={casino.title} description={casino.description} imageUrl={casino.imageUrl} />;
        }
      })}
    </div>
  );
}