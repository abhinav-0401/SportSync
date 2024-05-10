import CasinoCard from "./CasinoCard";

interface CasinoCardData {
  title: string;
  description: string;
  imageUrl: string;
  type: "top" | "hot";
}

interface Props {
  type: "all" | "top" | "hot";
}

export default function CasinoList({ type }: Props) {
  const casinos: CasinoCardData[] = [
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      imageUrl: "/article-1.png",
      type: "hot",
    },
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      imageUrl: "/article-1.png",
      type: "top",
    },
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      imageUrl: "/article-1.png",
      type: "hot",
    },
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      imageUrl: "/article-1.png",
      type: "top",
    },
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      imageUrl: "/article-1.png",
      type: "hot",
    },
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin",
      imageUrl: "/article-1.png",
      type: "hot",
    },
  ];

  return (
    <div className="flex md:flex-row flex-col items-center md:items-start flex-wrap justify-between md:justify-normal gap-10">
      {casinos.map((casino, index) => {
        if (casino.type == type || type == "all") {
          return <CasinoCard title={casino.title} key={index} description={casino.description} imageUrl={casino.imageUrl} />;
        }
      })}
    </div>
  );
}