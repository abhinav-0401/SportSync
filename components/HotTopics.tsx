"use client"

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function HotTopics() {
  const [hotTopicsData, setHotTopicsData] = useState<any>(null);

  useEffect(() => {
    getArticles();
  }, []);

  async function getArticles() {
    const response = await axios.get("/api/articles");

    if (response.data?.list?.length > 3) {
      setHotTopicsData(response.data?.list?.slice(0, 3));
    } else {
      setHotTopicsData(response.data?.list);
    }

    if (!response.data?.list?.length) {
      toast.error("Could not fetch articles");
    }
  }

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
            <HotTopic hotTopic={hotTopic} key={index} />
          );
        })}
      </div>

    </div>

  );
}

function HotTopic({ hotTopic }: any) {
  // const [readMore, setReadMore] = useState(false);

  return (
    <div className="flex flex-col lg:items-center border-b-2 py-4 border-[#45474A] gap-4">
      <Image src={"/ad.png"} alt="hot topic" className="min-w-[161px]" height={126} width={213} />
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