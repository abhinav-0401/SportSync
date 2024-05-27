"use client"

import AdCard from "@/components/AdCard";
import FeaturedCard from "@/components/FeaturedCard";
import HotTopics from "@/components/HotTopics";
// import MatchStats from "@/components/MatchStats";
import MatchSummary from "@/components/MatchSummary";
import TeamStats from "@/components/TeamStats";
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


function TabData() {
  const searchParams = useSearchParams();
  const matchId = searchParams.get("matchId");
  const leagueId = searchParams.get("leagueId");

  const [scoreCard, setScoreCard] = useState<any>(null);
  const [leanBack, setLeanBack] = useState<any>(null);
  const [pointsTable, setPointsTable] = useState<any>(null);
  const [fixtureData, setFixtureData] = useState<any>(null);
  const [goalsData, setGoalsData] = useState<any>(null);

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

  async function getPointsTable() {
    const res = await axios.get(`/api/football/standings?leagueId=${leagueId}&season=${fixtureData?.league?.season}`);
    console.log(res.data);
    setPointsTable(res.data);
  }

  async function getFixtureData() {
    const res = await axios.get(`/api/football/fixture/${matchId}`);
    console.log("Fixture: ", res.data.data.response[0]);
    setFixtureData(res.data.data.response[0]);
    let goalEvents = res.data?.data?.response[0]?.events?.filter((event: any) => {
      return event?.type?.toLowerCase() === "goal";
    });
    console.log("goalEvents", goalEvents);
    setGoalsData(goalEvents);
  }

  useEffect(() => {
    getFixtureData();
    // getScoreCard();
    // getPointsTable();
    // getLeanBack();
  }, []);

  useEffect(() => {
    getPointsTable();
  }, [fixtureData])

  return (
    <Tabs defaultValue="live" className="w-full">
      <TabsList className="flex w-full justify-between bg-transparent overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
        <TabsTrigger className="flex-grow" variant={"outline"} value="live">Live</TabsTrigger>
        <TabsTrigger className="flex-grow" variant={"outline"} value="summary">Summary</TabsTrigger>
        <TabsTrigger className="flex-grow" variant={"outline"} value="score">Score Card</TabsTrigger>
        {/* <TabsTrigger className="flex-grow" variant={"outline"} value="stats">Stats</TabsTrigger> */}
        <TabsTrigger className="flex-grow" variant={"outline"} value="table">Table</TabsTrigger>
      </TabsList>
      <TabsContent value="live" className="flex w-full flex-col px-4 gap-12 md:gap-16 lg:gap-20">
        {<MatchStats fixtureData={fixtureData} goalsData={goalsData} />}
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
        <FootballScoreCard scoreCard={scoreCard} />
      </TabsContent>
      {/* <TabsContent value="stats" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
                <TeamStats />
              </TabsContent> */}
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

        <div className="bg-black text-white rounded-full py-1 px-2 sm:px-3 md:ml-8">{fixtureData?.fixture?.status?.short}</div>

      </div>

      <div className="flex justify-between px-4 sm:px-8 md:px-16">
        <div className="flex gap-4">
          {/* img + country name */}
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <Image src="/india.png" alt='india' width={36} height={24} />
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
            <Image src="/england.png" alt='india' width={36} height={24} />
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
                    <TableRow>
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
  scoreCard: any;
}

function FootballScoreCard({ scoreCard }: FootballProps) {
  // console.log("hehe", scoreCard?.scoreCard[0].batTeamDetails?.batsmenData)

  return (
    <div className='flex flex-col items-start justify-center space-y-7'>
      <span className='font-medium text-lg'>Score Card</span>
      <Tabs defaultValue='IND' className='w-full'>

        <TabsList className='bg-transparent w-full'>
          <TabsTrigger className="flex-grow" variant={"outline"} value="IND">{scoreCard && scoreCard?.scoreCard[0]?.batTeamDetails?.batTeamName}</TabsTrigger>
          <TabsTrigger className="flex-grow" variant={"outline"} disabled={!(scoreCard && scoreCard?.scoreCard[1])} value="ENG">{scoreCard && scoreCard?.scoreCard[1]?.batTeamDetails?.batTeamName}</TabsTrigger>
        </TabsList>

        <TabsContent value='IND' className='flex flex-col items-center justify-center w-full space-y-7'>
          <div className='flex items-center justify-between w-full'>
            <div className="flex gap-2 md:gap-4">
              <Image src="/india.png" alt='india' width={36} height={24} className='rounded-lg' />
              <div className="font-semibold text-base md:text-lg">{scoreCard && scoreCard?.scoreCard[0].batTeamDetails?.batTeamName}</div>
            </div>
            <span>Batters</span>
            <span>{scoreCard && scoreCard?.scoreCard[0].scoreDetails?.runs} - {scoreCard && scoreCard?.scoreCard[0].scoreDetails?.wickets} ({scoreCard && scoreCard?.scoreCard[0].scoreDetails?.overs})</span>
          </div>
          <FootballResponsiveTable batsmenData={scoreCard?.scoreCard[0]?.batTeamDetails?.batsmenData} />
          <div className='flex items-center justify-between w-full'>
            <div className="flex gap-2 md:gap-4">
              <Image src="/india.png" alt='india' width={36} height={24} className='rounded-lg' />
              <div className="font-semibold text-base md:text-lg">{scoreCard && scoreCard?.scoreCard[0]?.bowlTeamDetails?.bowlTeamName}</div>
            </div>
            <span>Bowlers</span>
            <span>{scoreCard && scoreCard?.scoreCard[0].scoreDetails?.runs} - {scoreCard && scoreCard?.scoreCard[0].scoreDetails?.wickets} ({scoreCard && scoreCard?.scoreCard[0].scoreDetails?.overs})</span>
          </div>
          {/* <CustomTable /> */}
          {/* <BowlerResponsiveTable bowlersData={scoreCard?.scoreCard[0]?.bowlTeamDetails?.bowlersData} /> */}
        </TabsContent>

        <TabsContent value='ENG' className='flex flex-col items-center justify-center w-full space-y-7'>
          <div className='flex items-center justify-between w-full'>
            <div className="flex gap-2 md:gap-4">
              <Image src="/india.png" alt='india' width={36} height={24} className='rounded-lg' />
              <div className="font-semibold text-base md:text-lg">{scoreCard && scoreCard?.scoreCard[1]?.batTeamDetails?.batTeamName}</div>
            </div>
            <span>Batters</span>
            <span>{scoreCard && scoreCard?.scoreCard[1]?.scoreDetails?.runs} - {scoreCard && scoreCard?.scoreCard[1]?.scoreDetails?.wickets} ({scoreCard && scoreCard?.scoreCard[1]?.scoreDetails?.overs})</span>
          </div>
          <FootballResponsiveTable batsmenData={scoreCard?.scoreCard[1]?.batTeamDetails?.batsmenData} />
          <div className='flex items-center justify-between w-full'>
            <div className="flex gap-2 md:gap-4">
              <Image src="/india.png" alt='india' width={36} height={24} className='rounded-lg' />
              <div className="font-semibold text-base md:text-lg">{scoreCard && scoreCard?.scoreCard[1]?.bowlTeamDetails?.bowlTeamName}</div>
            </div>
            <span>Bowlers</span>
            <span>{scoreCard && scoreCard?.scoreCard[1]?.scoreDetails?.runs} - {scoreCard && scoreCard?.scoreCard[1]?.scoreDetails?.wickets} ({scoreCard && scoreCard?.scoreCard[1]?.scoreDetails?.overs})</span>
          </div>
          {/* <CustomTable /> */}
          {/* <BowlerResponsiveTable bowlersData={scoreCard?.scoreCard[1]?.bowlTeamDetails?.bowlersData} /> */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function FootballResponsiveTable({ batsmenData }: { batsmenData: any[] }) {
  return (
    <Table className='mb-12'>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="">Batsman</TableHead>
          <TableHead>R</TableHead>
          <TableHead>B</TableHead>
          <TableHead>4s</TableHead>
          <TableHead>6s</TableHead>
          <TableHead className="text-right">S/R</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          Object.entries(batsmenData).map((batter, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell className="font-medium">{batter[1].batName}</TableCell>
                <TableCell>{batter[1].runs}</TableCell>
                <TableCell>{batter[1].fours}</TableCell>
                <TableCell className="">{batter[1].fours}</TableCell>
                <TableCell className="">{batter[1].sixes}</TableCell>
                <TableCell className="text-right">{batter[1].strikeRate}</TableCell>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  );
}