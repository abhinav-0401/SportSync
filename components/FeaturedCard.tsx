"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FeaturedCard() {
  const router = useRouter();

  const [featuredMatch, setFeaturedMatch] = useState<any>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/matches?listType=live");
      setFeaturedMatch(response.data[0]);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 md:bg-white/60 md:dark:bg-[#45474A80] mx-2 min-[425px]:mx-12 rounded-xl py-4 md:py-7 px-4 md:px-10">
      <h2 className="text-center font-bold text-lg sm:text-xl lg:text-2xl">Featured Match</h2>

      <div className="flex flex-col gap-6 bg-white/60 dark:bg-[#45474A80] md:mx-0 py-8 md:px-4 px-12 rounded-xl md:!bg-transparent">
        <h3 className="text-center font-bold text-base sm:text-lg lg:text-xl dark:text-[#E6E6DD]">{featuredMatch?.matchInfo?.seriesName}</h3>

        <div className="flex justify-evenly items-center">

          <div className="flex flex-col items-center gap-6">
            <Image src="/india.png" height={20} width={30} alt="india" />
            <div className="font-semibold text-sm min-[400px]:text-base dark:text-[#E6E6DD]">{featuredMatch?.matchInfo?.team1?.teamName}</div>
            <div className="text-sm min-[400px]:text-base font-semibold dark:text-[#E6E6DD]">
              {
                featuredMatch?.matchScore?.team1Score?.inngs1?.runs
                  ? <span>{featuredMatch?.matchScore?.team1Score?.inngs1?.runs} / {featuredMatch?.matchScore?.team1Score?.inngs1?.wickets}</span> 
                  : <span>Yet to Bat</span>
              }
            </div>
          </div>

          <div className="font-bold">Vs</div>

          <div className="flex flex-col items-center gap-6 text-[#45474A]">
            <Image src="/england.png" height={20} width={30} alt="england" />
            <div className="font-semibold text-sm min-[400px]:text-base">{featuredMatch?.matchInfo?.team2?.teamName}</div>
            <div className="text-sm min-[400px]:text-base font-semibold">
              {
                featuredMatch?.matchScore?.team2Score?.inngs1?.runs
                  ? <span>{featuredMatch?.matchScore?.team2Score?.inngs1?.runs} / {featuredMatch?.matchScore?.team2Score?.inngs1?.wickets}</span>
                  : <span>Yet to Bat</span>
              }
            </div>
          </div>

        </div>

        <Button className="dark:bg-[#E6E6DD]" onClick={() => router.push(`/analytics?matchId=${featuredMatch?.matchInfo?.matchId}&seriesId=${featuredMatch?.matchInfo?.seriesId}`)}>Click here to know more</Button>
      </div>
    </div>
  );
}