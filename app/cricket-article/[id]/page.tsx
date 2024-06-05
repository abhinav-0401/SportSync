"use client"

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RWebShare } from "react-web-share";

type Props = {
  params: { id: string };
}

export default function IndividualArticle({ params }: Props) {
  const id = params.id;

  const [articleData, setArticleData] = useState<any>(null);

  async function getArticle() {
    const response = await axios.get(`/api/articles/${id}`);
    console.log(response.data);
    setArticleData(response.data);

    if (response.status != 200) {
      toast.error("Could not fetch the article!");
    }
  }

  function getContent(contents: any[]): any[] {
    let filteredArr = contents?.filter((content: any) => {
      return content?.hasOwnProperty("content");
    });
    console.log(filteredArr);
    return filteredArr;
  }
  
  useEffect(() => {
    getArticle();
  }, []);

  return (

    <div className="bg-[#E6E6DD] dark:bg-black px-4 pb-20 sm:px-10 lg:px-12 xl:px-16">
      <Toaster />
      <div className="flex flex-col gap-12 px-4 py-4 sm:px-12 sm:py-8 lg:px-16 xl:px-24 lg:py-16">

        <header className="flex flex-col gap-2">
          <div className="flex w-full justify-between">
            <span className="font-bold text-2xl md:text-4xl">{articleData?.article?.headline}</span>
            <RWebShare data={{ title: articleData?.article?.headline, text: articleData?.article?.intro, url: articleData?.article?.url  }}>
              <span className="flex flex-col justify-end"><Image src="/shareArticle.png" className="object-contain min-h-[20px] min-w-[20px]" alt="share" height={24} width={24} /></span>
            </RWebShare>
          </div>
          <div className="flex font-medium md:text-lg">{new Date(Number(articleData?.article?.publishTime ?? 0)).toLocaleDateString()}</div>
        </header>

        <div className="flex flex-col gap-8">
          <Image src="/individualArticle.png" alt="individual article" className="w-full" height={1000} width={500} />

          <div className="font-semibold">
            {articleData?.article?.intro}
          </div>

          <div className="flex flex-col gap-2">
            {getContent(articleData?.article?.content as any[])?.map((content: any, index: number) => {
              return (
                <div key={index} className="text-base md:text-lg font-medium">
                  {content?.content?.contentValue}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    <TopPicks />

    </div>
  );
}

function TopPicks() {
  const [articlesData, setArticlesData] = useState<any>(null);

  useEffect(() => {
    getArticles();
  }, []);

  async function getArticles() {
    const response = await axios.get("/api/articles");
    setArticlesData(response.data);
    console.log(response.data);

    if (!response.data?.list?.length) {
      toast.error("Could not fetch articles");
    }
  }

  return (
    <div className="px-4 pb-6 mt-6 dark:text-[#E6E6DD]">
      <Toaster />
      <h2 className="my-10 font-bold text-3xl text-center md:text-left">Other Articles</h2>
      <div className="flex flex-col items-center w-full md:flex-row justify-center flex-wrap gap-10">
        {/* {Array.from({ length: 6 }).map((_, index) => (
          <PickCard key={index} />
        ))} */}
        {
          articlesData?.list?.map((article: any, index: number) => {
            return (
              <PickCard key={index}
                title={article?.story?.hline}
                description={article?.story?.intro}
                imageUrl={"/article-3.png"}
                date={new Date(Number(article?.story?.pubTime ?? 0)).toLocaleString()}
                id={article?.story?.id ?? 0}
              />
            );
          })
        }
      </div>
    </div>
  );
}

type PickCardProps = {
  title: any;
  description: any;
  imageUrl: any;
  date: any;
  id: any;
};

function PickCard({ title, description, imageUrl, date, id }: PickCardProps) {
  const router = useRouter();

  return (
    // <div className="flex items-center lg:flex-row flex-col w-full lg:h-[8rem] rounded-xl p-4 hover:bg-white">
    //   <div className="mr-4 -mt-2">
    //     <Image src="/Rectangle 120.png" alt="Logo" width={170} height={50} className="my-2" />
    //   </div>
    //   <div className="w-5/6 mt-2">
    //     <h2 className="font-bold">Indian Premier League</h2>
    //     <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin”</p>
    //   </div>
    // </div>
    <div className="flex hover:cursor-pointer hover:bg-white/50 dark:hover:bg-[#45474A66]/40 p-4 rounded-md flex-row items-center md:items-start max-w-[300px] md:min-w-[350px] md:max-w-[350px] lg:max-w-[400px] md:flex-row gap-4 lg:min-w-[400px] md:max-h-[150px]" onClick={() => router.push(`/cricket-article/${id}`)}>
      <div>
        <Image src="/Rectangle 120.png" className="min-w-[120px] md:min-w-[134px] md:h-auto object-contain" alt="Top Picks Card" width={134} height={90} />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="font-bold line-clamp-2 text-xs sm:text-sm md:text-base">{title}</h2>
        <p className="text-xs sm:text-sm italic line-clamp-2 text-center md:text-left">{description}</p>
      </div>
    </div>
  );
}