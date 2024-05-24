"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import CustomTable from './ui/old-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import CustomResponsiveTable from './CustomResponsiveTable';

type Props = {
  scoreCard: any;
}

function ScoreCard({ scoreCard }: Props) {
  console.log("hehe", scoreCard?.scoreCard[0].batTeamDetails?.batsmenData)

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
          <BatterResponsiveTable batsmenData={scoreCard?.scoreCard[0]?.batTeamDetails?.batsmenData} />
          <div className='flex items-center justify-between w-full'>
            <div className="flex gap-2 md:gap-4">
              <Image src="/india.png" alt='india' width={36} height={24} className='rounded-lg' />
              <div className="font-semibold text-base md:text-lg">IND</div>
            </div>
            <span>Bowlers</span>
            <span>{scoreCard && scoreCard?.scoreCard[0].scoreDetails?.runs} - {scoreCard && scoreCard?.scoreCard[0].scoreDetails?.wickets} ({scoreCard && scoreCard?.scoreCard[0].scoreDetails?.overs})</span>
          </div>
          {/* <CustomTable /> */}
          <BowlerResponsiveTable bowlersData={scoreCard?.scoreCard[0]?.bowlTeamDetails?.bowlersData} />
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
          <BatterResponsiveTable batsmenData={scoreCard?.scoreCard[1]?.batTeamDetails?.batsmenData} />
          <div className='flex items-center justify-between w-full'>
            <div className="flex gap-2 md:gap-4">
              <Image src="/india.png" alt='india' width={36} height={24} className='rounded-lg' />
              <div className="font-semibold text-base md:text-lg">IND</div>
            </div>
            <span>Bowlers</span>
            <span>{scoreCard && scoreCard?.scoreCard[1]?.scoreDetails?.runs} - {scoreCard && scoreCard?.scoreCard[1]?.scoreDetails?.wickets} ({scoreCard && scoreCard?.scoreCard[1]?.scoreDetails?.overs})</span>
          </div>
          {/* <CustomTable /> */}
          <BowlerResponsiveTable bowlersData={scoreCard?.scoreCard[1]?.bowlTeamDetails?.bowlersData} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function BatterResponsiveTable({ batsmenData }: { batsmenData: any[] }) {
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

function BowlerResponsiveTable({ bowlersData }: { bowlersData: any[] }) {
  return (
    <Table className='mb-12'>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="">Bowler</TableHead>
          <TableHead>Ov</TableHead>
          <TableHead>R</TableHead>
          <TableHead>W</TableHead>
          <TableHead>Wd</TableHead>
          <TableHead className="text-right">E</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          Object.entries(bowlersData).map((bowler, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell className="font-medium">{bowler[1].bowlName}</TableCell>
                <TableCell>{bowler[1].overs}</TableCell>
                <TableCell>{bowler[1].runs}</TableCell>
                <TableCell className="">{bowler[1].wickets}</TableCell>
                <TableCell className="">{bowler[1].wides}</TableCell>
                <TableCell className="text-right">{bowler[1].economy}</TableCell>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  );
}

export default ScoreCard;