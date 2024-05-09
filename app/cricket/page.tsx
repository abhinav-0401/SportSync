import AdCard from "@/components/AdCard";
import DayMatchList from "@/components/DayMatchList";
import FeaturedCard from "@/components/FeaturedCard";
import HotTopics from "@/components/HotTopics";
import Tag from "@/components/tag";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Cricket() {
  return (
    <div className="bg-[#E6E6DD] px-20 py-16 gap-20 flex flex-col w-full">
      <div className="flex items-center w-full lg:items-start">
        <Tabs defaultValue="live" className="">
          <TabsList className="flex w-full justify-between rounded-full bg-white/40">
            <TabsTrigger className="flex-grow rounded-full" value="live">Football</TabsTrigger>
            <TabsTrigger className="flex-grow rounded-full" value="upcoming">Cricket</TabsTrigger>
          </TabsList>
          {/* <TabsContent value="live" className="flex w-full flex-col gap-10">Football</TabsContent>
          <TabsContent value="upcoming">Upcoming matches</TabsContent> */}
        </Tabs>
      </div>

      <div className="flex flex-col lg:flex-row flex-grow h-full gap-10 justify-between">
        
        {/* search + links */}
        <div className="lg:flex lg:flex-col gap-10 min-h-full mb-16 max-w-[300px]">
          <Input type="search" />
          <div className="lg:flex flex-col hidden gap-10 bg-white/60 min-h-full py-4 px-8 rounded-2xl">
            {/* tags */}
            <div className="flex flex-wrap w-full gap-4">
              <Tag name="India" />
              <Tag name="IPL" />
              <Tag name="ODI" />
              <Tag name="England Premier League" />
            </div>
            {/* regions */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold">Regions</h2>
              <div className="flex flex-col w-full pl-8">
                <ul>
                  <li>India</li>
                  <li>Bangladesh</li>
                  <li>Nepal</li>
                  <li>Sri Lanka</li>
                </ul>
              </div>
            </div>
            {/* Competitions */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold">Competitions</h2>
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
              <TabsTrigger className="flex-grow" variant={"outline"} value="live">Live</TabsTrigger>
              <TabsTrigger className="flex-grow" variant={"outline"} value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger className="flex-grow" variant={"outline"} value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="live" className="flex w-full flex-col gap-10">
              <DayMatchList/ >
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
        <div className="flex flex-col gap-10 max-w-[300px]">
          
          {/* advertisement */}
          <AdCard />
          <FeaturedCard />
          <HotTopics />

        </div>

      </div>
    </div>
  );
}