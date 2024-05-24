import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import CustomTable from './ui/old-table';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


type Props = {
  seriesName?: string;
  pointsTable: any;
}

function TableSection({ seriesName, pointsTable }: Props) {
  return (
    <div className='flex flex-col items-start justify-center space-y-7'>
      <span className='font-medium text-lg'>{seriesName}</span>
      {/* <Tabs defaultValue='IND' className='w-full'>
        <TabsList className='bg-transparent w-full'>
          <TabsTrigger className="flex-grow" variant={"outline"} value="IND">IND</TabsTrigger>
          <TabsTrigger className="flex-grow" variant={"outline"} value="ENG">ENG</TabsTrigger>
        </TabsList>
        <TabsContent value='IND' className='flex flex-col items-center justify-center w-full space-y-7'>
          <div className='flex items-center px-0 justify-between w-full'>
            <div className="flex gap-2 md:gap-4">
              <Image src="/india.png" alt='india' width={36} height={24} className='rounded-lg' />
              <div className="font-semibold text-sm sm:text-base md:text-lg">IND</div>
            </div>
            <span className='font-semibold text-sm sm:text-base md:text-lg'>Bowling</span>
            <span className='font-semibold text-sm sm:text-base md:text-lg'>96-1 (10.1ov)</span>
          </div>
          <CustomTable />
          

        </TabsContent>
        <TabsContent value='ENG'>

        </TabsContent>
      </Tabs> */}
      <Table className='mb-12'>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="">Team</TableHead>
            <TableHead>M</TableHead>
            <TableHead>W</TableHead>
            <TableHead>L</TableHead>
            <TableHead>NRR</TableHead>
            <TableHead className="text-right">Pts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            pointsTable?.pointsTable &&  pointsTable?.pointsTable[0]?.pointsTableInfo?.map((row: any, index: any) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row?.teamFullName}</TableCell>
                  <TableCell>{row?.matchesPlayed}</TableCell>
                  <TableCell>{row?.matchesWon}</TableCell>
                  <TableCell className="">{row?.matchesLost}</TableCell>
                  <TableCell className="">{row?.nrr}</TableCell>
                  <TableCell className="text-right">{row?.points}</TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default TableSection