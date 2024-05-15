import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import CustomTable from './ui/old-table';
import CustomResponsiveTable from './CustomResponsiveTable';

type Props = {}

function TeamStats({}: Props) {
  return (
    <div className='flex flex-col items-start justify-center space-y-7'>
      <span className='font-medium text-lg'>Team (Player stats)</span>
      <Tabs defaultValue='IND' className='w-full'>
        <TabsList className='bg-transparent w-full'>
          <TabsTrigger className="flex-grow" variant={"outline"} value="IND">IND</TabsTrigger>
          <TabsTrigger className="flex-grow" variant={"outline"} value="ENG">ENG</TabsTrigger>
        </TabsList>
        <TabsContent value='IND' className='flex flex-col items-center justify-center w-full space-y-7'>
          <div className='flex items-center justify-between w-full'>
            <div className="flex gap-2 md:gap-4">
              <Image src="/india.png" alt='india' width={36} height={24} className='rounded-lg' />
              <div className="font-semibold text-base md:text-lg">IND</div>
            </div>
            <span>Batting</span>
            <span>96-1 (10.1ov)</span>
          </div>
          {/* <CustomTable /> */}
          <CustomResponsiveTable />
        </TabsContent>
        <TabsContent value='ENG'>

        </TabsContent>
      </Tabs>
    </div>
  )
}

export default TeamStats