"use client"

import { blobToBase64 } from "@/lib/blobtopng";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function HotTopics() {
  const [hotTopicsData, setHotTopicsData] = useState<any>(null);

  const articles = useAppSelector(state => state.articles.articles);
  const [imagesData, setImagesData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    getArticles();
  }, [articles]);

  async function getArticles() {
    // const response = await axios.get("/api/articles");

    if (articles?.list?.length > 3) {
      setHotTopicsData(articles?.list?.slice(0, 3));
    } else {
      setHotTopicsData(articles?.list);
    }

    fetchImages(articles?.list);

    // if (!articles?.list?.length) {
    //   toast.error("Could not fetch articles");
    // }
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  async function fetchImages(articles: any) {
    await delay(200)
    const newImagesData: { [key: string]: string } = {};

    for (const article of articles) {
      const imageId = article?.story?.imageId;
      const articleId = article?.story?.id;

      if (!imageId || !articleId) continue;

      const cacheKey = `image_${imageId}`;
      const cachedImage = localStorage.getItem(cacheKey);
      // console.log(cachedImage)

      if (cachedImage) {
        newImagesData[articleId] = cachedImage;
      } else {
        try {
          const imageUrl = `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg`;

          const options = {
            method: 'GET',
            url: imageUrl,
            params: { p: 'de', d: 'high' },
            headers: {
              'x-rapidapi-key': 'c4a782e118msh9292a6e3b3c3e78p17d585jsnd621a07e82ae',
              'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
            },
            responseType: 'blob' as const
          };

          const response = await axios.request(options);
          const blob = response.data;

          // const pngUrl = await blobToPng(blob);
          const base64Url = await blobToBase64(blob);
          newImagesData[articleId] = base64Url;
          localStorage.setItem(cacheKey, base64Url);

          await delay(300); // Add delay of 200ms between requests
        } catch (error) {
          console.error(`Error fetching image for article ${articleId}:`, error);
        }
      }
    }

    setImagesData(newImagesData);
  };

  const topics = [
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. Turpis donec amet proin"
    },
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. Turpis donec amet proin"
    }, {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. Turpis donec amet proin"
    }
  ];

  return (
    <div className="flex flex-col gap-6 items-center rounded-xl max-w-screen mb-8 md:bg-white/40 dark:bg-[#45474a80] py-6 px-5">
      <Toaster />
      <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-center dark:text-[#E6E6DD]">Hot Topics</h2>

      <div className="flex md:flex-col flex-row items-start overflow-x-scroll max-w-64 ab:max-w-96 lg:max-w-[420px] sm:overflow-x-auto justify-between gap-5">
        {/* {topics.map((topic, index) => {
          return (
            <div key={index} className="flex flex-col lg:items-center border-b-2 py-4 border-[#45474A] gap-4">
              <Image src="/ad.png" alt="advertisement" className="min-w-[161px]" height={126} width={213} />
              <div className="flex flex-col gap-2 items-center">
                <h4 className="font-semibold text-base sm:text-lg lg:text-xl">{topic.title}</h4>
                <div className="text-wrap font-normal text-sm text-[#45474A] dark:text-[#E6E6DDCC]">
                  {topic.description}
                </div>
              </div>
            </div>
          );
        })} */}
        {hotTopicsData?.map((hotTopic: any, index: number) => {
          return (
            // <div key={index} className="flex flex-col lg:items-center border-b-2 py-4 border-[#45474A] gap-4">
            //   <Image src={"/ad.png"} alt="hot topic" className="min-w-[161px]" height={126} width={213} />
            //   <div className="flex flex-col gap-2 items-center">
            //     <h4 className="font-semibold text-base sm:text-lg line-clamp-2 lg:text-xl">{hotTopic?.story?.hline}</h4>
            //     <div className="text-wrap font-normal line-clamp-4 text-sm text-[#45474A] dark:text-[#E6E6DDCC]">
            //       <span className={readMore ? 'line-clamp-none' : 'line-clamp-4'}>{hotTopic?.story?.intro}</span>
            //       <span className='text-[#3E6BEC] font-semibold hover:opacity-50 cursor-pointer' onClick={() => setReadMore(!readMore)}>{readMore ? "Read Less" : "Read More"}</span>
            //     </div>
            //   </div>
            // </div>
            <HotTopic hotTopic={hotTopic} imageUrl={imagesData[hotTopic?.story?.id]} key={index} />
          );
        })}
      </div>

    </div>

  );
}

function HotTopic({ hotTopic, imageUrl }: any) {
  // const [readMore, setReadMore] = useState(false);

  return (
    <div className="flex flex-col lg:items-center border-b-2 py-4 border-[#45474A] gap-4">
      <Image src={imageUrl} alt="hot topic" className="min-w-[161px] rounded-md" height={126} width={213} />
      <div className="flex flex-col gap-2 items-center">
        <h4 className="font-semibold text-base sm:text-lg line-clamp-2 lg:text-xl">{hotTopic?.story?.hline}</h4>
        <div className={"text-wrap font-normal line-clamp-4 text-sm text-[#45474A] dark:text-[#E6E6DDCC]"}>
          <span className={'line-clamp-3'}>{hotTopic?.story?.intro}</span>
          {/* <span className='text-[#3E6BEC] font-semibold hover:opacity-50 cursor-pointer' onClick={() => setReadMore(!readMore)}>{readMore ? "Read Less" : "Read More"}</span> */}
          <span className='text-[#3E6BEC] font-semibold hover:opacity-50 cursor-pointer'><Link href={`/cricket-article/${hotTopic?.story?.id}`}>Read More</Link></span>
        </div>
      </div>
    </div>
  );
}