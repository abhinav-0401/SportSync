"use client"

import AdCard from "@/components/AdCard";
import FeaturedCard from "@/components/FeaturedCard";
import HotTopics from "@/components/HotTopics";
// import MatchStats from "@/components/MatchStats";
// import MatchSummary from "@/components/MatchSummary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { toast, Toaster } from "react-hot-toast";


function TabData() {
  const searchParams = useSearchParams();
  const matchId = searchParams.get("matchId");
  const leagueId = searchParams.get("leagueId");

  const [scoreCard, setScoreCard] = useState<any>(null);
  const [pointsTable, setPointsTable] = useState<any>(null);
  const [fixtureData, setFixtureData] = useState<any>(null);
  const [goalsData, setGoalsData] = useState<any>(null);
  const [statsData, setStatsData] = useState<any>(null);
  const [summaryData, setSummaryData] = useState<any>(null);

  async function getPointsTable() {
    const res = await axios.get(`/api/football/standings?leagueId=${leagueId}&season=${fixtureData?.league?.season}`);
    console.log(res.data);
    setPointsTable(res.data);

    if (!res.data?.length) {
      toast.error("There is no points table for this match!");
    }
  }

  async function getStats() {
    const res = await axios.get(`/api/football/stats?matchId=${matchId}`);
    console.log("stats: ", res.data);
    setStatsData(res.data.data);

    if (!res.data?.data) {
      toast.error("Could not fetch stats");
    }
  }

  async function getFixtureData() {
    const res = await axios.get(`/api/football/fixture/${matchId}`);
    console.log("Fixture: ", res.data.data.response[0]);
    setFixtureData(res.data.data.response[0]);

    if (!res.data?.length) {
      toast.error("Could not get fixture score!");
    }

    let goalEvents = res.data?.data?.response[0]?.events?.filter((event: any) => {
      return event?.type?.toLowerCase() === "goal";
    });
    console.log("goalEvents", goalEvents);
    setGoalsData(goalEvents);
  }

  async function getSummary() {
    if (matchId) {
      const docRef = doc(db, "footballSummary", `${matchId}`);
      const docSnap = await getDoc(docRef);
      console.log("summary data: ", docSnap.data());
      setSummaryData(docSnap.data());

      if (!docSnap.data()) {
        toast.error("Could not fetch summary!");
      }
    }
  }

  useEffect(() => {
    getFixtureData();
  }, []);

  async function getFootballAnalyticsData() {
    await getPointsTable();
    await getStats();
    await getSummary();
  }

  useEffect(() => {
    getFootballAnalyticsData();
  }, [fixtureData]);

  return (
    <Tabs defaultValue="live" className="w-full">
      <Toaster />
      <TabsList className="flex w-full justify-between bg-transparent overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
        <TabsTrigger className="flex-grow" variant={"outline"} value="live">Live</TabsTrigger>
        <TabsTrigger className="flex-grow" variant={"outline"} value="score">Score Card</TabsTrigger>
        <TabsTrigger className="flex-grow" variant={"outline"} value="summary">Summary</TabsTrigger>
        <TabsTrigger className="flex-grow" variant={"outline"} value="stats">Stats</TabsTrigger>
        <TabsTrigger className="flex-grow" variant={"outline"} value="table">Table</TabsTrigger>
      </TabsList>
      <TabsContent value="live" className="flex w-full flex-col px-4 gap-12 md:gap-16 lg:gap-20">
        {
          fixtureData
            ? <MatchStats fixtureData={fixtureData} goalsData={goalsData} />
            : <div className="text-3xl font-bold">NOTHING TO SHOW</div>
        }

        {/* {<MatchStats fixtureData={fixtureData} goalsData={goalsData} />} */}
        {/* <div className="flex items-start flex-col justify-center w-full space-y-10">
          <span className="font-medium text-lg">Live Win Probability</span>
          <div className="w-full flex items-center justify-center space-x-5">
            <span className="w-fit">IND</span>
            <div className="w-full flex items-center justify-center">
              <div className="border-2 border-[#9ABE9A] w-3/4"></div>
              <div className="border-2 border-[#FF5E57] w-1/4"></div>
            </div>
            <span className="w-fit">ENG</span>
          </div>
        </div> */}
      </TabsContent>
      <TabsContent value="summary" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
        <MatchSummary summaryData={summaryData} />
      </TabsContent>
      <TabsContent value="score" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
        <FootballScoreCard fixtureData={fixtureData} scoreCard={fixtureData?.events} homeId={fixtureData?.teams?.home?.id} awayId={fixtureData?.teams?.away?.id} />
      </TabsContent>
      <TabsContent value="stats" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
        <FootballTeamStats statsData={statsData} />
      </TabsContent>
      <TabsContent value="table" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
        <TableSection pointsTable={pointsTable} />
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
          <FeaturedCard />
          <HotTopics />

        </div>
      </div>

    </div>
  );
}

function MatchStats({ fixtureData, goalsData }: { fixtureData: any; goalsData: any; }) {
  return (
    <div className="pt-4 sm:pt-8 md:pt-16 lg:pt-24 flex flex-col gap-12">

      <div className="flex flex-col items-start gap-8">

        <div className="bg-black dark:bg-white dark:text-black text-white rounded-full py-1 px-2 sm:px-3 md:ml-8">{fixtureData?.fixture?.status?.short}</div>

      </div>

      <div className="flex justify-between px-4 sm:px-8 md:px-16">
        <div className="flex gap-4">
          {/* img + country name */}
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <Image src={fixtureData?.teams?.home?.logo} alt='india' width={36} height={24} />
            <div className="font-semibold text-sm sm:text-base md:text-lg">{fixtureData?.teams?.home?.name}</div>
          </div>
          <div className="font-medium text-sm sm:text-base md:text-lg">
            {fixtureData?.goals?.home}
          </div>
        </div>
        <div className="flex gap-4">
          {/* img + country name */}
          <div className="font-medium text-sm min-[370px]:text-base md:text-lg">
            {fixtureData?.goals?.away}
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <Image src={fixtureData?.teams?.away?.logo} alt='india' width={36} height={24} />
            <div className="font-semibold text-sm sm:text-base md:text-lg">{fixtureData?.teams?.away?.name}</div>
          </div>
        </div>
      </div>

      <div className="text-center font-medium text-lg">{fixtureData?.fixture?.status?.long} {fixtureData?.fixture?.status?.elapsed}</div>

      {/* scores */}
      <div className="flex md:flex-row flex-col flex-wrap font-semibold gap-8 md:gap-0 w-full justify-between px-4 sm:px-8 md:px-16">
        {
          goalsData?.map((goalEvent: any, idx: number) => {
            return (
              <div key={idx} className="flex gap-2 basis-1/2 justify-center font-semibold text-sm md:text-base">
                <span>{goalEvent?.player?.name}</span>
                <span>{goalEvent?.time?.elapsed} &apos;</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

type TableSectionProps = {
  pointsTable: any;
}

function TableSection({ pointsTable }: TableSectionProps) {
  return (
    <div className='flex flex-col items-start justify-center space-y-7'>
      <span className='font-medium text-lg'>{pointsTable?.data?.name}</span>
      {
        pointsTable?.data?.standings && pointsTable?.data?.standings?.map((group: any, idx: number) => {
          return (
            <Table className='mb-12' key={idx}>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Team</TableHead>
                  <TableHead>P</TableHead>
                  <TableHead>W</TableHead>
                  <TableHead>L</TableHead>
                  <TableHead>G</TableHead>
                  <TableHead className="text-right">Pts</TableHead>
                </TableRow>
              </TableHeader>
              {
                group?.map((team: any, index: number) => {
                  return (
                    <TableRow key={index}>
                      <TableHead className="">{team?.team?.name}</TableHead>
                      <TableHead>{team?.all?.played}</TableHead>
                      <TableHead>{team?.all?.win}</TableHead>
                      <TableHead>{team?.all?.lose}</TableHead>
                      <TableHead>{team?.all?.goals?.for}</TableHead>
                      <TableHead className="text-right">{team?.points}</TableHead>
                    </TableRow>
                  );
                })
              }
            </Table>
          );
        })
      }
    </div>
  )
}

type FootballProps = {
  fixtureData: any;
  scoreCard: any;
  homeId?: number;
  awayId?: number;
}

function FootballScoreCard({ fixtureData, scoreCard, homeId, awayId }: FootballProps) {
  // console.log("hehe", scoreCard?.scoreCard[0].batTeamDetails?.batsmenData)

  const [homeEvents, setHomeEvents] = useState<any[]>([]);
  const [awayEvents, setAwayEvents] = useState<any[]>([]);

  useEffect(() => {
    let home = scoreCard?.filter((event: any, idx: number) => {
      return event?.team?.id === homeId;
    });
    let away = scoreCard?.filter((event: any, idx: number) => {
      return event?.team?.id === awayId;
    });
    setHomeEvents(home);
    setAwayEvents(away);
    console.log("events", home, away);
  }, []);

  return (
    <div className='flex flex-col items-start justify-center space-y-7'>
      <span className='font-medium text-lg'>Score Card</span>
      <Tabs defaultValue='IND' className='w-full'>

        <TabsList className='bg-transparent w-full'>
          <TabsTrigger className="flex-grow" variant={"outline"} value="IND">{fixtureData?.teams?.home?.name}</TabsTrigger>
          <TabsTrigger className="flex-grow" variant={"outline"} value="ENG">{fixtureData?.teams?.away?.name}</TabsTrigger>
        </TabsList>

        <TabsContent value='IND' className='flex flex-col items-center justify-center w-full space-y-7'>
          <FootballResponsiveTable eventsData={homeEvents} score={fixtureData?.score} />
        </TabsContent>

        <TabsContent value='ENG' className='flex flex-col items-center justify-center w-full space-y-7'>
          <FootballResponsiveTable eventsData={awayEvents} score={fixtureData?.score} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function FootballResponsiveTable({ eventsData, score }: { eventsData: any[], score: any }) {
  // const [isHalfTime, setIsHalfTime] = useState(false);
  let isHalfTime: boolean = false;
  let reversedEvents = eventsData?.toReversed();
  let greaterThanHalfEvents = reversedEvents?.filter((event: any, idx: number) => {
    return event?.time?.elapsed >= 45;
  });
  let lessThanHalfEvents = reversedEvents?.filter((event: any, idx: number) => {
    return event?.time?.elapsed < 45;
  });
  console.log("event arr", greaterThanHalfEvents, lessThanHalfEvents);

  return (
    <Table className='mb-12'>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableBody>
        <TableRow>
          <TableHead className="font-bold">FT {score?.fulltime?.home}-{score?.fulltime?.away}</TableHead>
        </TableRow>
        {
          greaterThanHalfEvents?.map((event: any, idx: number) => {
            return (
              <TableRow key={idx}>
                <TableHead>{event?.time?.elapsed}&apos;</TableHead>
                <TableHead>{event?.detail}</TableHead>
                <TableHead>{event?.player?.name}</TableHead>
                <TableHead>
                  {
                    event?.detail === "Normal Goal"
                      ? event?.assist?.name ? "Assist: " : null
                    : event?.detail.slice(0, 12) === "Substitution"
                      ? "In: " : null
                  }
                  {event?.assist?.name}
                </TableHead>
              </TableRow>
            );
          })
        }
        <TableRow>
          <TableHead className="font-bold">HT {score?.halftime?.home}-{score?.halftime?.away}</TableHead>
        </TableRow>
        {
          lessThanHalfEvents?.map((event: any, idx: number) => {
            return (
              <TableRow key={idx}>
                <TableHead>{event?.time?.elapsed}&apos;</TableHead>
                <TableHead>{event?.detail}</TableHead>
                <TableHead>{event?.player?.name}</TableHead>
                <TableHead>
                  {
                    event?.detail === "Normal Goal"
                      ? event?.assist?.name ? "Assist: " : null
                      : event?.detail.slice(0, 12) === "Substitution"
                        ? "In: " : null
                  }
                  {event?.assist?.name}
                </TableHead>
              </TableRow>
            );
          })
        }
      </TableBody>
    </Table>
  );
}

type StatsProps = {
  statsData: any[];
}

function FootballTeamStats({ statsData }: StatsProps) {
  return (
    // <div className='flex flex-col items-start justify-center space-y-7'>
      <Table>
        <TableRow>
          <TableHead>{statsData && statsData[0] ? statsData[0]?.team?.name : ""}</TableHead>
          <TableHead className="text-center">TEAM STATS</TableHead>
          <TableHead className="text-right">{statsData && statsData[1] ? statsData[1]?.team?.name : ""}</TableHead>
        </TableRow>
        {
          statsData && statsData[0] && 
            statsData[0]?.statistics?.map((stat: any, idx: number) => {
              return (
                <TableRow key={idx}>
                  <TableCell>{stat?.value}</TableCell>
                  <TableCell className="text-center">{stat?.type}</TableCell>
                  <TableCell className="text-right">{statsData && statsData[1] ? statsData[1]?.statistics[idx]?.value : ""}</TableCell>
                </TableRow>
              );
            })
        }
      </Table>
    // </div>
  )
}

function MatchSummary({ summaryData }: { summaryData: any; }) {

  console.log("summaryData from MatchSummary: ", summaryData);

  return (
    <div className="flex flex-col gap-8">

      <div className="flex flex-col items-start gap-8">

        <h3 className="font-bold text-xl text-center w-full md:text-left">Summary</h3>

      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <Image src={summaryData?.imageUrl ?? "/analytics-summary.png"} alt="summary" className="min-w-[150px] min-h-[150px] rounded-md" height={177} width={182} unoptimized />

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
}