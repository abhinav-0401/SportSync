"use client"

import { useEffect, useState } from "react";
import CasinoCard from "./CasinoCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

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
  const [casinoData, setCasinoData] = useState<any>(null);

  async function getCasinoData() {
    const docs = await getDocs(collection(db, "casino"));
    let casinoArr: any = [];
    docs.forEach(doc => {
      casinoArr.push({ id: doc.id, data: doc.data() });
    });
    setCasinoData(casinoArr);
  }

  useEffect(() => {
    getCasinoData();
  }, []);

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
    <div className="flex md:flex-row flex-col items-center md:items-start flex-wrap justify-between md:justify-normal gap-4 lg:gap-8">
      {casinoData?.map((casino: any, index: number) => {
        if (casino?.data?.type == type || type == "all") {
          return <CasinoCard title={casino?.data?.title} key={index} description={casino?.data?.content} imageUrl={casino?.data?.imageUrl ?? "/article-1.png"} redirectUrl={casino?.data?.redirectUrl} />;
        }
      })}
    </div>
  );
}