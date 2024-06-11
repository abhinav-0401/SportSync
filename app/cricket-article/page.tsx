"use client"

import Image from "next/image";
import HotTopics from "@/components/HotTopics";
import Navbar from "@/components/Navbar";
import ArticleCard from "@/components/ui/articleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { useAppSelector } from "@/redux/hooks";
import { blobToBase64 } from "@/lib/blobtopng";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchArticles } from "@/redux/thunks/articlesThunk";
import { setImage } from "@/redux/slices/imageSlice";
import { fetchImage } from "@/redux/thunks/imagesThunk";

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

  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector((state: RootState) => state.articles.articles);
  const images = useSelector((state: RootState) => state.images);
  const status = useSelector((state: RootState) => state.articles.status);
  const error = useSelector((state: RootState) => state.articles.error);

  const router = useRouter();


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles());
    }
  }, [status, dispatch]);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchImages = async () => {
      for (const article of articles) {
        const imageId = article?.story?.imageId;
        // const cacheKey = `image_${imageId}`;
        // const storedImage = localStorage.getItem(cacheKey);
        // if (storedImage) {
        //   dispatch(setImage({ imageId: imageId, imageUrl: storedImage }));
        // } else {
          const action = await dispatch(fetchImage(imageId));
          if (fetchImage.fulfilled.match(action)) {
            const { imageId, imageUrl } = action.payload as { imageId: number, imageUrl: string };
            // localStorage.setItem(cacheKey, imageUrl);
          }
        // }
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

  const currentDate = new Date().toLocaleString();

  const articlesDummyData: ArticleData[] = imgUrls.map(url => {
    return {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Risus eget morbi a commodo ",
      imageUrl: url,
      date: currentDate,
    } as ArticleData;
  })

  return (
    <div className="bg-[#E6E6DD] dark:bg-black">
      <Toaster />
      <div className="flex flex-col gap-20 px-2 py-4 sm:px-10 sm:py-8 lg:px-12 xl:px-20 lg:py-16">

        <div className="flex justify-center dark:text-[#E6E6DD] mt-4 font-bold text-4xl">
          <h1>ARTICLES</h1>
        </div>

        {/* content */}
        <div className="flex flex-col lg:flex-row justify-between">

          <div className="flex flex-col gap-10 px-2 sm:px-8 md:px-16">
            {/* <div className="flex bg-[#FFFFFFA6] dark:bg-[#45474A80] px-1 py-1 rounded-full">
              <Image src="/search.png" className="ml-4 object-contain" alt="search" width={18} height={18} />
              <Input type="search" className=" mx-4 border-0 focus-visible:ring-0 bg-transparent" placeholder="Indian Premeir League |" />
              <Button className="rounded-full dark:bg-white px-10">Search</Button>
            </div> */}
            <div className="flex flex-col items-center gap-8">
              {articles?.map((article: any, index: number) => {
                return (
                  <span className="w-full flex flex-col items-center" key={index} onClick={() => router.push(`/cricket-article/${article?.story?.id ?? 0}`)}>
                    <ArticleCard 
                      title={article?.story?.hline}
                      description={article?.story?.intro}
                      // imageUrl={"/article-3.png"}
                      imageUrl={images[article?.story?.imageId]}
                      date={new Date(Number(article?.story?.pubTime ?? 0)).toLocaleString()}
                    />
                  </span>
                );
              })}
            </div>
            <div className="flex w-full items-center justify-center pb-5">
            <button className="flex bg-black text-[#E6E6DD] dark:bg-[#E6E6DD] dark:text-[#45474A] justify-center p-1 px-3 w-fit rounded-3xl">
              See more
            </button>
            </div>
          </div>

          <HotTopics />

        </div>

      </div>
    </div>
  );
}