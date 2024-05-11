import Image from "next/image";
import HotTopics from "@/components/HotTopics";
import Navbar from "@/components/Navbar";
import ArticleCard from "@/components/ui/articleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ArticleData {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
};

const imgUrls: string[] = [
  "/article-3.png",
  "/article-3.png",
  "/article-3.png",
  "/article-3.png",
];

export default function Artcile() {
  const currentDate = new Date().toLocaleString();

  const articles: ArticleData[] = imgUrls.map(url => {
    return {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Risus eget morbi a commodo ",
      imageUrl: url,
      date: currentDate,
    } as ArticleData;
  })

  return (
    <div className="bg-[#E6E6DD]">
      <div className="flex flex-col gap-20 px-4 py-4 sm:px-10 sm:py-8 lg:px-20 lg:py-16">

        <div className="flex justify-center mt-4 font-bold text-4xl">
          <h1>ARTICLES</h1>
        </div>

        {/* content */}
        <div className="flex flex-col lg:flex-row justify-between">

          <div className="flex flex-col gap-10 px-4 sm:px-8 md:px-16">
            <div className="flex bg-white/40 px-1 py-1 rounded-full">
              <Image src="/search.png" className="ml-4 object-contain" alt="search" width={18} height={18} />
              <Input type="search" className="rounded-full mx-4 border-0 focus-visible:ring-0 bg-transparent" />
              <Button className="rounded-full">Search</Button>
            </div>
            <div className="flex flex-col gap-8">
              {articles.map((article, index) => {
                return <ArticleCard title={article.title} key={index} description={article.description} imageUrl={article.imageUrl} date={article.date} />
              })}
            </div>
            <div className="flex w-full justify-center">
              <Button className="w-fit">See more</Button>
            </div>
          </div>

          <HotTopics />

        </div>

      </div>
    </div>
  );
}