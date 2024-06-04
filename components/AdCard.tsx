"use client"

import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function AdCard() {
  const [ads, setAds] = useState<any>(null);

  async function getPromotions() {
    const docs = await getDocs(collection(db, "promotions"));
    
    let promotionsArr: any[] = [];
    docs.forEach(doc => {
      promotionsArr.push({ id: doc.id, data: doc.data() });
    });
    console.log("promotionsArr: ", promotionsArr);

    let adArr = [];
    adArr = promotionsArr.filter((promotion: any) => {
      return promotion?.data?.type === "ad";
    });
    console.log("adArr: ", adArr);
    setAds(adArr);
  }

  useEffect(() => {
    getPromotions();
  }, []);

  return (
    <div className="md:flex flex-col items-center justify-center gap-4 hidden rounded-xl bg-white/60 dark:bg-[#45474A80] py-7 px-8">
      <h3 className="font-semibold">Advertisement</h3>
      <Carousel>
        <CarouselContent className="flex items-center">
          {
            ads?.map((ad: any, index: number) => {
              return (
                <CarouselItem key={index}>
                  <a target="_blank" href={`http://${ad?.data?.redirectUrl}`}>
                    <div className="flex flex-col items-center">
                      <Image src={ad?.data?.imageUrl ?? "ad.png"} alt="advertisement" height={126} width={213} unoptimized />
                      <div className="flex flex-col items-center gap-2 pt-3">
                        <h4>{ad?.data?.title}</h4>
                        <div className="text-wrap text-center dark:text-[#E6E6DDCC]">
                          {ad?.data?.content}
                        </div>
                      </div>
                    </div>     
                  </a>       
                </CarouselItem>      
              );
            })
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* <div>
        <Image src="/ad.png" alt="advertisement" height={126} width={213} unoptimized />
        <div className="flex flex-col gap-2 pt-3">
          <h4>Indian Premier League</h4>
          <div className="text-wrap dark:text-[#E6E6DDCC]">
            “Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Turpis donec amet proin 
          </div>
        </div>
      </div> */}
    </div>
  );
}
