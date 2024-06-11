"use client"

import { blobToBase64 } from "@/lib/blobtopng";
import { useAppSelector } from "@/redux/hooks";
import { setImage } from "@/redux/slices/imageSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchArticles } from "@/redux/thunks/articlesThunk";
import { fetchImage } from "@/redux/thunks/imagesThunk";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function HotTopics() {
  const dispatch = useDispatch<AppDispatch>();
  const [hotTopicsData, setHotTopicsData] = useState<any>(null);
  const articles = useSelector((state: RootState) => state.articles.articles);
  const images = useSelector((state: RootState) => state.images);
  const status = useSelector((state: RootState) => state.articles.status);
  const error = useSelector((state: RootState) => state.articles.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles());
    }
    if (status === 'succeeded' && articles?.length > 3) {
      setHotTopicsData(articles?.slice(0, 3));
    } 
    else if (status === 'succeeded') {
      setHotTopicsData(articles);
    }
  }, [status, dispatch, articles]);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchImages = async () => {
      for (const article of articles) {
        const imageId = article?.story?.imageId;
        const cacheKey = `image_${imageId}`;
        const storedImage = localStorage.getItem(cacheKey);
        if (storedImage) {
          dispatch(setImage({ imageId: imageId, imageUrl: storedImage }));
        } else {
          const action = await dispatch(fetchImage(imageId));
          if (fetchImage.fulfilled.match(action)) {
            const { imageId, imageUrl } = action.payload as { imageId: number, imageUrl: string };
            localStorage.setItem(cacheKey, imageUrl);
          }
        }
        await delay(200); // Add delay to avoid hitting rate limit
      }
    };

    if (status === 'succeeded') {
      fetchImages();
    }
  }, [status, articles, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // console.log(hotTopicsData)

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
            <HotTopic hotTopic={hotTopic} imageUrl={images[hotTopic?.story?.imageId]} key={index} />
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