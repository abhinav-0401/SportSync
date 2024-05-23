"use client"

import AdCard from "@/components/AdCard";
import FeaturedCard from "@/components/FeaturedCard";
import HotTopics from "@/components/HotTopics";
// import MatchStats from "@/components/MatchStats";
import MatchSummary from "@/components/MatchSummary";
import ScoreCard from "@/components/ScoreCard";
import TableSection from "@/components/TableSection";
import TeamStats from "@/components/TeamStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Analytics() {
  const searchParams = useSearchParams();
  const matchId = searchParams.get("matchId");

  const [scoreCard, setScoreCard] = useState<any>(null);
  const [leanBack, setLeanBack] = useState<any>(null);

  async function getScoreCard() {
    const res = await axios.get(`/api/matchInfo/scoreCard?matchId=${matchId}`);
    console.log(res.data);
    setScoreCard(res.data);
  }

  async function getLeanBack() {
    const res = await axios.get(`/api/matchInfo/leanBack?matchId=${matchId}`);
    console.log(res.data);
    setLeanBack(res.data);
  }

  useEffect(() => {
    getScoreCard();
    getLeanBack();
  }, []);

  return (
    <div className="bg-[#E6E6DD] dark:bg-black min-h-screen flex flex-col gap-20 px-4 py-4 sm:px-10 sm:py-8 lg:px-12 lg:py-16 dark:text-[#E6E6DD]">
      <div className="flex justify-center mt-4 font-bold text-4xl">
        <h1>ANALYTICS</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between">

        <div className="flex flex-col gap-10 flex-grow">
          <div className="">
            <Tabs defaultValue="live" className="w-full">
              <TabsList className="flex w-full justify-between bg-transparent overflow-x-scroll">
                <TabsTrigger className="flex-grow" variant={"outline"} value="live">Live</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="summary">Summary</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="score">Score Card</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="stats">Stats</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="table">Table</TabsTrigger>
              </TabsList>
              <TabsContent value="live" className="flex w-full flex-col px-4 gap-12 md:gap-16 lg:gap-20">
                {scoreCard?.scoreCard && scoreCard?.scoreCard[0] ? <MatchStats scoreCard={scoreCard} leanBack={leanBack} /> : null} 
                <div className="flex items-start flex-col justify-center w-full space-y-10">
                  <span className="font-medium text-lg">Live Win Probability</span>
                  <div className="w-full flex items-center justify-center space-x-5">
                    <span className="w-fit">IND</span>
                    <div className="w-full flex items-center justify-center">
                      <div className="border-2 border-[#9ABE9A] w-3/4"></div>
                      <div className="border-2 border-[#FF5E57] w-1/4"></div>
                    </div>
                    <span className="w-fit">ENG</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="summary" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
                {scoreCard?.scoreCard && scoreCard?.scoreCard[0] ? <MatchSummary /> : null}
              </TabsContent>
              <TabsContent value="score" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
                <ScoreCard scoreCard={scoreCard} />
              </TabsContent>
              <TabsContent value="stats" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
                <TeamStats />
              </TabsContent>
              <TabsContent value="table" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
                <TableSection />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="flex flex-col w-full items-center gap-10 lg:max-w-[300px] lg:min-w-[200px]">

          {/* advertisement */}
          <AdCard />
          <FeaturedCard />
          <HotTopics />

        </div>
      </div>

    </div>
  );
}

function MatchStats({ scoreCard, leanBack }: { scoreCard: any; leanBack: any; }) {
  return (
    <div className="pt-4 sm:pt-8 md:pt-16 lg:pt-24 flex flex-col gap-12">

      <div className="flex flex-col items-start gap-8">

        <div className="bg-black text-white rounded-full py-1 px-2 sm:px-3 md:ml-8">Live</div>

      </div>

      <div className="flex justify-between px-4 sm:px-8 md:px-16">
        <div className="flex gap-4">
          {/* img + country name */}
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <Image src="/india.png" alt='india' width={36} height={24} />
            <div className="font-semibold text-sm sm:text-base md:text-lg">{scoreCard && scoreCard?.scoreCard[0].batTeamDetails?.batTeamName}</div>
          </div>
          <div className="font-medium text-sm sm:text-base md:text-lg">
            {scoreCard && scoreCard?.scoreCard[0].scoreDetails?.runs} / {scoreCard && scoreCard?.scoreCard[0].scoreDetails?.wickets} 
          </div>
        </div>
        <div className="flex gap-4">
          {/* img + country name */}
          <div className="font-medium text-sm min-[370px]:text-base md:text-lg">
            {scoreCard && scoreCard?.scoreCard[1].scoreDetails?.runs} / {scoreCard && scoreCard?.scoreCard[1].scoreDetails?.wickets} 
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <Image src="/england.png" alt='india' width={36} height={24} />
            <div className="font-semibold text-sm sm:text-base md:text-lg">{scoreCard && scoreCard?.scoreCard[1].batTeamDetails?.batTeamName}</div>
          </div>
        </div>
      </div>

      <div className="text-center font-medium text-lg">{scoreCard?.status}</div>

      {/* scores */}
      <div className="flex md:flex-row flex-col font-semibold gap-8 md:gap-0 justify-between px-4 sm:px-8 md:px-16">
        <div className="flex gap-2 items-start">
          <Image src="/cricket-bat-2.png" className="object-none" alt='india' width={20} height={20} />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 font-semibold text-sm md:text-base">
              <span>{leanBack?.miniscore?.batsmanStriker?.batName}</span>
              <span>{leanBack?.miniscore?.batsmanStriker?.batRuns}* ({leanBack?.miniscore?.batsmanStriker?.batBalls})</span>
            </div>
            <div className="flex gap-2 font-normal text-sm md:text-base">
              <span>{leanBack?.miniscore?.batsmanNonStriker?.batName}</span>
              <span>{leanBack?.miniscore?.batsmanNonStriker?.batRuns}* ({leanBack?.miniscore?.batsmanNonStriker?.batBalls})</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <Image src="/cricket_ball.png" className="object-none" alt='india' width={16} height={16} />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 md:text-base text-sm">
              <span>{leanBack?.miniscore?.bowlerStriker?.bowlName}</span>
              <span>{leanBack?.miniscore?.bowlerStriker?.bowlWkts}/{leanBack?.miniscore?.bowlerStriker?.bowlRuns} ({leanBack?.miniscore?.bowlerStriker?.bowlOvs})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}