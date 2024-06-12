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
  // console.log(pointsTable);

  return (
    <div className='flex flex-col items-start justify-center space-y-7'>
      <span className='font-medium text-lg'>{seriesName}</span>
      {
        pointsTable?.pointsTable && pointsTable?.pointsTable?.map((group: any, index: number) => {
          return (
            <Table key={index} className='mb-12'>
              <TableCaption>{group?.groupName}</TableCaption>
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
                  group?.pointsTableInfo?.map((row: any, index: any) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row?.teamFullName}</TableCell>
                        <TableCell>{row?.matchesPlayed}</TableCell>
                        <TableCell>{row?.matchesWon ?? 0}</TableCell>
                        <TableCell className="">{row?.matchesLost ?? 0}</TableCell>
                        <TableCell className="">{row?.nrr}</TableCell>
                        <TableCell className="text-right">{row?.points ?? 0}</TableCell>
                      </TableRow>
                    );
                  })
                }
              </TableBody>
            </Table>
          );
        })
      }
    </div>
  )
}

export default TableSection