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


type Props = {}

function TableSection({}: Props) {
  return (
    <div className='flex flex-col items-start justify-center space-y-7'>
      <span className='font-medium text-lg'>Table</span>
      <Tabs defaultValue='IND' className='w-full'>
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
          {/* <CustomTable /> */}
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
              <TableRow>
                <TableCell className="font-medium">KL Rahul</TableCell>
                <TableCell>67</TableCell>
                <TableCell>40</TableCell>
                <TableCell className="">7</TableCell>
                <TableCell className="">2</TableCell>
                <TableCell className="text-right">167.50</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TabsContent>
        <TabsContent value='ENG'>

        </TabsContent>
      </Tabs>
    </div>
  )
}

export default TableSection