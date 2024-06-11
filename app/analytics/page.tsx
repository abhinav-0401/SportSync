"use client"

import AdCard from "@/components/AdCard";
import FeaturedCard from "@/components/FeaturedCard";
import HotTopics from "@/components/HotTopics";
// import MatchStats from "@/components/MatchStats";
// import MatchSummary from "@/components/MatchSummary";
import ScoreCard from "@/components/ScoreCard";
import TableSection from "@/components/TableSection";
import TeamStats from "@/components/TeamStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";

function TabData() {
  const searchParams = useSearchParams();
  const matchId = searchParams.get("matchId");
  const seriesId = searchParams.get("seriesId");

  const [scoreCard, setScoreCard] = useState<any>(null);
  const [leanBack, setLeanBack] = useState<any>(null);
  const [pointsTable, setPointsTable] = useState<any>(null);
  // const [summaryData, setSummaryData] = useState<any>(null);

  async function getScoreCard() {
    const res = await axios.get(`/api/matchInfo/scoreCard?matchId=${matchId}`);
    setScoreCard(res.data);

    if (!res.data?.scoreCard) {
      toast.error("Could not fetch the scorecard!");
    }
  }

  async function getLeanBack() {
    const res = await axios.get(`/api/matchInfo/leanBack?matchId=${matchId}`);
    setLeanBack(res.data);
    if (res.status != 200) {
      toast.error("Could not fetch striker and non striker player scores");
    }

  }

  async function getPointsTable() {
    const res = await axios.get(`/api/matchInfo/pointsTable?seriesId=${seriesId}`);
    setPointsTable(res.data);
    // console.log(res.data);
    if (!res.data?.pointsTable?.length) {
      toast.error("Could not fetch points table");
    }
  }

  // async function getSummary() {
  //   if (matchId) {
  //     const docRef = doc(db, "summary", `${matchId}`);
  //     const docSnap = await getDoc(docRef);
  //     setSummaryData(docSnap.data());
      
  //     // if (!docSnap.data()) {
  //     //   toast.error("Could not fetch summary!");
  //     // }
  //   }
  // }

  async function getCricketAnalyticsData() {
    await getScoreCard();
    await getPointsTable();
    await getLeanBack();
    // await getSummary();
  }

  useEffect(() => {
    // getScoreCard();
    // getPointsTable();
    // getLeanBack();
    // getSummary();
    getCricketAnalyticsData();
  }, []);

  return (
    <Tabs defaultValue="live" className="w-full">
      <Toaster />
      <TabsList className="flex w-full justify-between bg-transparent overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
        <TabsTrigger className="flex-grow" variant={"outline"} value="live">Info</TabsTrigger>
        <TabsTrigger className="flex-grow" variant={"outline"} value="score">Scorecard</TabsTrigger>
        <TabsTrigger className="flex-grow" variant={"outline"} value="summary">Team</TabsTrigger>
        {pointsTable?.pointsTable?.length && <TabsTrigger className="flex-grow" variant={"outline"} value="table">Table</TabsTrigger>}
        {/* <TabsTrigger className="flex-grow" variant={"outline"} value="stats">Stats</TabsTrigger> */}
      </TabsList>
      <TabsContent value="live" className="flex w-full flex-col px-4 gap-12 md:gap-16 lg:gap-20">
        {scoreCard?.scoreCard && scoreCard?.scoreCard[0] ? <MatchStats scoreCard={scoreCard} leanBack={leanBack} /> : <div className="font-bold text-3xl w-full text-center">NOTHING TO SHOW</div>}

      </TabsContent>
      <TabsContent value="summary" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
        <MatchSummary />
      </TabsContent>
      <TabsContent value="score" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
        <Suspense fallback={<div>Loading...</div>}>
          {scoreCard?.scoreCard && scoreCard?.scoreCard[0] && <ScoreCard scoreCard={scoreCard} />}
          {!scoreCard?.scoreCard?.length && <div className="w-full text-center p-12 font-bold text-2xl">
            MATCH HASN&apos;T STARTED YET
          </div>}
        </Suspense>
      </TabsContent>
      {/* <TabsContent value="stats" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
                <TeamStats />
              </TabsContent> */}
      <TabsContent value="table" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
        <TableSection seriesName={scoreCard?.matchHeader?.seriesName} pointsTable={pointsTable} />
      </TabsContent>
    </Tabs>
  );
}

export default function Analytics() {

  return (
    <div className="bg-[#E6E6DD] dark:bg-black min-h-screen flex flex-col gap-20 px-4 py-4 sm:px-10 sm:py-8 lg:px-12 lg:py-16 dark:text-[#E6E6DD]">
      <div className="flex justify-center mt-4 font-bold text-4xl">
        <h1>ANALYTICS</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between">

        <div className="flex flex-col gap-10 flex-grow">
          <div className="">
            <Suspense>
              <TabData />
            </Suspense>
          </div>
        </div>

        <div className="flex flex-col w-full items-center gap-10 lg:max-w-[300px] lg:min-w-[200px]">

          {/* advertisement */}
          <AdCard />
          <FeaturedCard sport="cricket" />
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
            <div className="font-semibold text-sm sm:text-base md:text-lg">{scoreCard && scoreCard?.scoreCard[0]?.batTeamDetails?.batTeamName}</div>
          </div>
          <div className="font-medium text-sm sm:text-base md:text-lg">
            {scoreCard && scoreCard?.scoreCard[0]?.scoreDetails?.runs} / {scoreCard && scoreCard?.scoreCard[0]?.scoreDetails?.wickets} 
          </div>
        </div>
        <div className="flex gap-4">
          {/* img + country name */}
          <div className="font-medium text-sm min-[370px]:text-base md:text-lg">
            {scoreCard && scoreCard?.scoreCard[1]?.scoreDetails?.runs} / {scoreCard && scoreCard?.scoreCard[1]?.scoreDetails?.wickets} 
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <Image src="/england.png" alt='india' width={36} height={24} />
            <div className="font-semibold text-sm sm:text-base md:text-lg">{scoreCard && scoreCard?.scoreCard[1]?.batTeamDetails?.batTeamName}</div>
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

function MatchSummary() {

  const searchParams = useSearchParams();
  const matchId = searchParams.get("matchId");
  const [summaryData, setSummaryData] = useState<any>(null);

  async function getSummary() {
    if (matchId) {
      const docRef = doc(db, "summary", `${matchId}`);
      const docSnap = await getDoc(docRef);
      setSummaryData(docSnap.data());

      // if (!docSnap.data()) {
      //   toast.error("Could not fetch summary!");
      // }
    }
  }

  useEffect(() => {
    getSummary();
  }, []);

  if (summaryData) {
    return (
      <div className="flex flex-col gap-8">

        <div className="flex flex-col items-start gap-8">

          <h3 className="font-bold text-xl text-center w-full md:text-left">Summary</h3>

        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <Image src={summaryData?.imageUrl ?? "/analytics-summary.png"} alt="summary" className="min-w-[150px] rounded-md min-h-[150px]" height={177} width={182} unoptimized />

          <div className="flex flex-col gap-2 sm:gap-4 md:gap-8">
            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{summaryData?.title}</h3>
            <div className="font-normal text-base md:text-lg lg:text-xl text-[#45474A] dark:text-[#E6E6DD]">
              {summaryData?.keyPoints}
            </div>
          </div>
        </div>

        <div className="font-normal text-base md:text-lg lg:text-xl text-[#45474A] dark:text-[#E6E6DD]">
          {summaryData?.content}
        </div>

      </div>
    );
  } else {
    return (
      <div className="w-full text-center p-12 font-bold text-2xl">
        NO SUMMARY
      </div>
    );
  }
}