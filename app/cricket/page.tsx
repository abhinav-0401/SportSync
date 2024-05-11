"use client"
import AdCard from "@/components/AdCard";
import DayMatchList from "@/components/DayMatchList";
import FeaturedCard from "@/components/FeaturedCard";
import HotTopics from "@/components/HotTopics";
import Navbar from "@/components/Navbar";
import Tag from "@/components/tag";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Cricket() {
  const router = useRouter();

  const handleTabChange = (tab: any) => {
    console.log(tab);
    router.push(`/${tab}`);
  };
  return (
    <div className="bg-[#E6E6DD] dark:bg-black">

      <div className="bg-[#E6E6DD] dark:bg-black px-4 py-4 sm:px-10 sm:py-8 lg:px-20 lg:py-16 sm:gap-10 lg:gap-20 flex flex-col w-full">

        <div className="flex justify-center w-full mb-4 lg:justify-start">
          <Tabs defaultValue="cricket" className="w-2/3 lg:w-fit " onValueChange={handleTabChange}>
            <TabsList className="flex w-full justify-between rounded-full bg-white/40 dark:bg-[#45474a80]">
              <TabsTrigger className="flex-grow rounded-full dark:text-[#E6E6DD80]" value="football">Football</TabsTrigger>
              <TabsTrigger className="flex-grow rounded-full " value="cricket">Cricket</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col lg:flex-row flex-grow h-full gap-4 md:gap-10 justify-between">

          {/* search + links */}
          <div className="flex flex-col justify-center items-center md:gap-10 min-h-full mb-4 sm:mb-8 lg:mb-16 min-w-full lg:max-w-[260px] lg:min-w-[200px]">
            {/* <Input type="search" className="w-2/3 md:w-full" /> */}
            <div className="flex w-5/6 bg-white/40 dark:bg-[#45474A] px-1 py-1 rounded-2xl">
              <Image src="/search.png" className="ml-4 object-contain" alt="search" width={18} height={18} />
              <Input type="search" placeholder="Indian Premier League" className="rounded-full mx-4 border-0 focus-visible:ring-0 bg-transparent" />
            </div>
            <div className="lg:flex flex-col hidden  gap-10 dark:bg-[#45474a80] bg-white/60 dark:text-[#E6E6DD] min-h-full py-4 px-6 rounded-2xl">
              {/* tags */}
              <div className="flex flex-wrap w-full gap-3">
                <Tag name="India" />
                <Tag name="IPL" />
                <Tag name="ODI" />
                <Tag name="England Premier League" />
              </div>
              {/* regions */}
              <div className="flex flex-col gap-6">
                <h2 className="lg:text-xl xl:text-xl font-bold">Regions</h2>
                <div className="flex flex-col w-full pl-8">
                  <ul>
                    <li>India</li>
                    <li>Bangladesh</li>
                    <li>Nepal</li>
                    <li>Sri Lanka</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="lg:text-xl xl:text-xl font-bold">Competitions</h2>
                <div className="flex flex-col w-full pl-8">
                  <ul>
                    <li>India</li>
                    <li>Bangladesh</li>
                    <li>Nepal</li>
                    <li>Sri Lanka</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* scores */}
          <div className="flex-grow">
            <Tabs defaultValue="live" className="w-full">
              <TabsList className="flex w-full justify-between bg-transparent">
                <TabsTrigger className="flex-grow dark:" variant={"outline"} value="live">Live</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="live" className="flex w-full flex-col gap-10">
                <DayMatchList />
                <DayMatchList />
                <div className="flex w-full justify-center">
                  <Button className="w-fit">See more</Button>
                </div>
              </TabsContent>
              <TabsContent value="upcoming">Upcoming matches</TabsContent>
              <TabsContent value="completed">Completed matches</TabsContent>
            </Tabs>
          </div>

          {/* interest links */}
          <div className="flex flex-col w-full items-center gap-10 lg:max-w-[300px] lg:min-w-[200px]">

            {/* advertisement */}
            <AdCard />
            <FeaturedCard />
            <HotTopics />

          </div>

        </div>
      </div>
    </div>
  );
}