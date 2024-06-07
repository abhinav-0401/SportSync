'use client';

import AdCard from "@/components/AdCard";
// import DayMatchList from "@/components/DayMatchList";
import FeaturedCard from "@/components/FeaturedCard";
import HorizontalTag from "@/components/HorizontalTag";
import HotTopics from "@/components/HotTopics";
import Tag from "@/components/tag";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

interface MatchCardProps {
  match: any;
}

export default function Football() {

  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [currentType, setCurrentType] = useState<string | undefined>();
  const [currentListType, setCurrentListType] = useState<"live" | "upcoming" | "recent">("live");

  const [currentLeague, setCurrentLeague] = useState<number>(0);

  const [leagues, setLeagues] = useState<any[]>([]);

  // const [upcomingData, setUpcomingData] = useState<any>(null);
  // const [completedData, setCompletedData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (listType: "live" | "upcoming" | "recent", type?: string) => {
    if (!type) {
      setCurrentType("All");
    }

    try {
      const response = await axios.get(`/api/football/fixtures?listType=${listType}${type ? `&type=${type}` : ''}`);
      setData(response.data);
      
      if (!response.data?.length) {
        toast.error(`There are currently no ${listType} matches of the selected type.`);
      }
      setError(null);
    } catch (error) {
      setError('Failed to fetch data');
      console.error(error);
    }
  };

  async function getLeagues() {
    const res = await axios.get('/api/football/currentLeagues');

    if (!res.data?.length) {
      toast.error("Could not fetch leagues!");
    } else if (res.data?.length > 50) {
      setLeagues(res.data?.slice(0, 50));
    } else {
      setLeagues(res.data);
    }
  }
    
  const handleTagClick = (type: string) => {
    setCurrentType(type);
    fetchData(currentListType, type);
  };

  const handleTabChange = (tab: any) => {
    router.push(`/${tab}`);
  };

  function handleInnerTabChange(tabValue: "live" | "upcoming" | "recent") {
    setCurrentListType(tabValue);
    if (currentType !== "All") {
      fetchData(tabValue, currentType);
    } else {
      fetchData(tabValue);
    }
  }

  useEffect(() => {
    fetchData(currentListType); // Fetch initial data on mount
    getLeagues();
  }, []);

  return (
    <div className="bg-[#E6E6DD] dark:bg-black">
      <Toaster />
      <div className="bg-[#E6E6DD] dark:bg-black px-4 py-4 sm:px-10 sm:py-8 lg:px-20 lg:py-16 sm:gap-10 lg:gap-20 flex flex-col w-full">
        <div className="hidden md:flex lg:hidden w-full items-center justify-center">
          <span className="text-2xl font-semibold tracking-wide">FOOTBALL</span>
        </div>
        <div className="flex justify-center w-full mb-4 md:hidden lg:flex lg:justify-start">
          <Tabs defaultValue="football" className="w-2/3 lg:w-fit" onValueChange={handleTabChange}>
            <TabsList className="flex w-full justify-between rounded-full bg-white/40 dark:bg-[#45474a80]">
              <TabsTrigger className="flex-grow rounded-full dark:text-[#E6E6DD80]" value="football">Football</TabsTrigger>
              <TabsTrigger className="flex-grow rounded-full" value="cricket">Cricket</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col md:flex-row lg:items-start flex-grow h-full gap-4 md:gap-10 justify-between">
          <div className="hidden lg:block sticky top-28">
            <div className="flex flex-col justify-center items-center md:gap-10 min-h-full mb-4 sm:mb-8 lg:mb-16 min-w-full lg:max-w-[260px] lg:min-w-[200px]">

              <div className="lg:flex flex-col hidden gap-10 dark:bg-[#45474a80] bg-white/60 dark:text-[#E6E6DD] min-h-full py-4 px-6 rounded-2xl">
                <div className="flex flex-wrap w-full gap-3">
                  <Tag name="All" onClick={() => fetchData(currentListType)} />
                  <Tag name="Asia" onClick={() => handleTagClick('Asia')} />
                  <Tag name="Africa" onClick={() => handleTagClick('Africa')} />
                  <Tag name="Australia" onClick={() => handleTagClick('Australia')} />
                  <Tag name="Europe" onClick={() => handleTagClick('Europe')} />
                  <Tag name="North America" onClick={() => handleTagClick('North America')} />
                  <Tag name="South America" onClick={() => handleTagClick('South America')} />
                </div>

                <div className="flex flex-col gap-6">
                  <h2 className="lg:text-xl xl:text-xl font-bold">Leagues</h2>
                  <div className="flex flex-col w-full pl-8">
                    <ul className="flex flex-col gap-4">
                      <li onClick={() => setCurrentLeague(0)}>All</li>
                      {
                        leagues.map((league: any, index: number) => {
                          return (
                            <li key={index} onClick={() => setCurrentLeague(league?.league?.id)}>{league?.league?.name}</li>
                          );
                        })
                      }
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div>
            
          </div>
          
          <div className="flex-grow md:w-3/4 lg:w-full flex flex-col gap-8 md:gap-12">
                      
            <div className="w-full flex gap-4 md:overflow-x-auto overflow-x-scroll lg:hidden">
              <HorizontalTag active={currentType === "All"} name="All" onClick={() => fetchData(currentListType)} />
              <HorizontalTag active={currentType === "Asia"} name="Asia" onClick={() => handleTagClick('Asia')} />
              <HorizontalTag active={currentType === "Africa"} name="Africa" onClick={() => handleTagClick('Africa')} />
              <HorizontalTag active={currentType === "Australia"} name="Australia" onClick={() => handleTagClick('Australia')} />
              <HorizontalTag active={currentType === "Europe"} name="Europe" onClick={() => handleTagClick('Europe')} />
              <HorizontalTag active={currentType === "North America"} name="NA" onClick={() => handleTagClick('North America')} />
              <HorizontalTag active={currentType === "South America"} name="SA" onClick={() => handleTagClick('South America')} />
            </div>

            <Tabs defaultValue="live" className="w-full">
              <TabsList className="flex w-full justify-between bg-transparent">
                <TabsTrigger className="flex-grow" variant={"outline"} value="live" onClick={() => handleInnerTabChange("live")}>Live</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="upcoming" onClick={() => handleInnerTabChange("upcoming")}>Upcoming</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="completed" onClick={() => handleInnerTabChange("recent")}>Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="live" className="flex w-full flex-col gap-10">
                {/* {data?.map((match: any, index: number) => (
                  <DayMatchList key={index} schedule={match} />
                ))} */}
                <DayMatchList schedule={data} currentLeague={currentLeague} />
                <div className="flex w-full justify-center">
                  {/* <Button className="w-fit">See more</Button> */}
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="flex w-full flex-col gap-10">
                <DayMatchList schedule={data} currentLeague={currentLeague} />
                <div className="flex w-full justify-center">
                  {/* <Button className="w-fit">See more</Button> */}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="flex w-full flex-col gap-10">
                <DayMatchList schedule={data} currentLeague={currentLeague} />
                <div className="flex w-full justify-center">
                  {/* <Button className="w-fit">See more</Button> */}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex flex-col w-full items-center gap-10 lg:max-w-[300px] lg:min-w-[200px] md:w-1/4 lg:w-full">
          <div className="hidden md:flex lg:hidden justify-center w-full">
          <Tabs defaultValue="football" className="" onValueChange={handleTabChange}>
            <TabsList className="flex w-full justify-between rounded-full bg-white/40 dark:bg-[#45474a80]">
              <TabsTrigger className="flex-grow rounded-full dark:text-[#E6E6DD80]" value="football">Football</TabsTrigger>
              <TabsTrigger className="flex-grow rounded-full" value="cricket">Cricket</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
            <AdCard />
            <FeaturedCard />
            <HotTopics />
          </div>
        </div>
      </div>
    </div>
  );
}

function DayMatchList({ schedule, currentLeague }: any) {

  let filteredArr = schedule?.filter((match: any) => {
    if (currentLeague === 0) { return true; }
    else {
      return match?.league?.id === currentLeague;
    }
  });

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-4 py-4 border-b-2 border-black/40 dark:border-[#E6E6DD80]">
        <div className="text-3xl xl:text-5xl font-bold">
          {new Date().getDate()}
        </div>
        <div className="flex font-medium dark:text-[#E6E6DD] text-sm md:text-base lg:text-lg xl:text-xl flex-col">
          <h3>{new Date().toLocaleString('default', { month: 'long' })}</h3>
          <h3>{new Date().toLocaleDateString('default', { weekday: 'long' })}</h3>
        </div>
      </div>

      {filteredArr?.map((match: any, index: number) => (
        <MatchCard key={index} match={match} />
      ))}
    </div>
  );
}

function MatchCard({ match }: MatchCardProps) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white/40 dark:bg-[#45474a66] py-4 md:py-7 px-4 sm:px-8 lg:px-12">
      <div className="flex justify-between">
        <h3 className="font-bold text-base dark:text-[#E6E6DD] lg:text-lg">{match?.league?.name}</h3>
      </div>

      <div className="flex justify-between dark:text-[#E6E6DD]">
        <div className="flex items-center gap-8">
          <div>{new Date(parseInt(match?.fixture?.date)).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex gap-4">
              <Image src={match?.teams?.home?.logo} height={20} width={20} alt={match?.teams?.home?.name} />
              <div className="font-semibold text-sm md:text-base dark:text-[#E6E6DD]">{match?.teams?.home?.name}</div>
            </div>
            <div className="flex gap-4">
              <Image src={match?.teams?.away?.logo} height={20} width={20} alt={match?.matchInfo?.team2?.teamName} />
              <div className="font-semibold text-sm md:text-base text-[#828486]">{match?.teams?.away?.name}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm md:text-base font-semibold">
          <div>{match?.goals?.home ?? "Yet to Play"}</div>
          <div className="text-[#828486]">
            {match?.goals?.away ?? "Yet to Play"}
          </div>
        </div>
      </div>

      <div className="flex justify-center font-semibold text-sm md:text-base">
        {match?.fixture?.status?.long} {match?.fixture?.status?.elapsed}&apos;
      </div>

      <div className="flex gap-8 xl:gap-12 py-4 justify-between">
        <Button className="flex-1 dark:bg-[#E6E6DD]" onClick={() => router.push(`/analytics/football?matchId=${match?.fixture?.id}&leagueId=${match?.league?.id}`)}>Analytics</Button>
        <Button className="flex-1 dark:bg-[#E6E6DD]" onClick={() => router.push(`/football/summary/${match?.fixture?.id}`)}>Summary</Button>
      </div>
    </div>
  );
}

