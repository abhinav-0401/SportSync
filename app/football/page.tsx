'use client';

import AdCard from "@/components/AdCard";
// import DayMatchList from "@/components/DayMatchList";
import FeaturedCard from "@/components/FeaturedCard";
import HotTopics from "@/components/HotTopics";
import Tag from "@/components/tag";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface MatchCardProps {
  match: any;
}

export default function Football() {

  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [currentType, setCurrentType] = useState<string | undefined>();
  const [currentListType, setCurrentListType] = useState<"live" | "upcoming" | "recent">("live");

  // const [upcomingData, setUpcomingData] = useState<any>(null);
  // const [completedData, setCompletedData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (listType: "live" | "upcoming" | "recent", type?: string) => {
    try {
      const response = await axios.get(`/api/football/fixtures?listType=${listType}${type ? `&type=${type}` : ''}`);
      console.log(`/api/football/matches?listType=${listType}${type ? `&type=${type}` : ''}`);
      setData(response.data);
      console.log(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch data');
      console.error(error);
    }
  };

  const handleTagClick = (type: string) => {
    fetchData(currentListType, type);
  };

  const handleTabChange = (tab: any) => {
    console.log(tab);
    router.push(`/${tab}`);
  };

  function handleInnerTabChange(tabValue: "live" | "upcoming" | "recent") {
    setCurrentListType(tabValue);
    fetchData(tabValue);
  }

  useEffect(() => {
    fetchData(currentListType); // Fetch initial data on mount
  }, []);

  return (
    <div className="bg-[#E6E6DD] dark:bg-black">
      <div className="bg-[#E6E6DD] dark:bg-black px-4 py-4 sm:px-10 sm:py-8 lg:px-20 lg:py-16 sm:gap-10 lg:gap-20 flex flex-col w-full">
        <div className="flex justify-center w-full mb-4 lg:justify-start">
          <Tabs defaultValue="football" className="w-2/3 lg:w-fit" onValueChange={handleTabChange}>
            <TabsList className="flex w-full justify-between rounded-full bg-white/40 dark:bg-[#45474a80]">
              <TabsTrigger className="flex-grow rounded-full dark:text-[#E6E6DD80]" value="football">Football</TabsTrigger>
              <TabsTrigger className="flex-grow rounded-full" value="cricket">Cricket</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col lg:flex-row flex-grow h-full gap-4 md:gap-10 justify-between">
          <div className="flex flex-col justify-center items-center md:gap-10 min-h-full mb-4 sm:mb-8 lg:mb-16 min-w-full lg:max-w-[260px] lg:min-w-[200px]">
            <div className="flex lg:w-full w-5/6 bg-white/40 dark:bg-[#45474A] px-1 py-1 rounded-2xl">
              <Image src="/search.png" className="ml-4 object-contain" alt="search" width={18} height={18} />
              <Input type="search" placeholder="Indian Premier League" className="rounded-full mx-4 border-0 focus-visible:ring-0 bg-transparent" />
            </div>
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

          <div className="flex-grow">
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
                <DayMatchList schedule={data} />
                <div className="flex w-full justify-center">
                  <Button className="w-fit">See more</Button>
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="flex w-full flex-col gap-10">
                <DayMatchList schedule={data} />
                <div className="flex w-full justify-center">
                  <Button className="w-fit">See more</Button>
                </div>
              </TabsContent>

              <TabsContent value="completed" className="flex w-full flex-col gap-10">
                <DayMatchList schedule={data} />
                <div className="flex w-full justify-center">
                  <Button className="w-fit">See more</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex flex-col w-full items-center gap-10 lg:max-w-[300px] lg:min-w-[200px]">
            <AdCard />
            <FeaturedCard />
            <HotTopics />
          </div>
        </div>
      </div>
    </div>
  );
}

function DayMatchList({ schedule }: any) {
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

      {schedule?.map((match: any, index: number) => (
        <MatchCard key={index} match={match} />
      ))}
    </div>
  );
}

function MatchCard({ match }: MatchCardProps) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [imageUrl1, setImageUrl1] = useState<string | null>(null);
  const [imageUrl2, setImageUrl2] = useState<string | null>(null);

  // console.log(match);

  // const fetchImageUrl = async (imageId: string, setImageUrl: (url: string) => void) => {
  //   try {
  //     const response = await axios.get(`/api/getImageUrl?imageId=${imageId}`);
  //     console.log(response.data);
  //     setImageUrl(response.data.url);
  //   } catch (error) {
  //     console.error('Failed to fetch image URL', error);
  //   }
  // };

  // useEffect(() => {
  //   const imageId1 = match?.matchInfo[0]?.team1?.imageId;
  //   const imageId2 = match?.matchInfo[0]?.team2?.imageId;

  //   if (imageId1) fetchImageUrl(imageId1, setImageUrl1);
  //   if (imageId2) fetchImageUrl(imageId2, setImageUrl2);
  // }, [match]);

  // async function getMatchDetails(matchId: number) {
  //   const res = await axios.get(`/api/matchInfo?matchId=${matchId}`);
  //   console.log(res.data);
  // }

  // useEffect(() => {
  //   // getMatchDetails(match?.matchInfo.matchId);
  // }, [match]);

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white/40 dark:bg-[#45474a66] py-4 md:py-7 px-4 sm:px-8 lg:px-12">
      <div className="flex justify-between">
        <h3 className="font-bold text-base dark:text-[#E6E6DD] lg:text-lg">{match?.league?.name}</h3>
        {/* <span className="flex items-center" onClick={() => setLiked(!liked)}>
          {liked ? (
            <Image src="/heart.png" alt="like" className="md:h-fit h-[16px] w-[16px] md:w-fit min-h-[16px] min-w-[16px]" height={18} width={30} />
          ) : (
            <Image src="/unlikedHeart.png" alt="like" className="md:h-fit h-[16px] w-[16px] md:w-fit min-h-[16px] min-w-[16px]" height={18} width={30} />
          )}
        </span> */}
      </div>

      <div className="flex justify-between dark:text-[#E6E6DD]">
        <div className="flex items-center gap-8">
          <div>{new Date(parseInt(match?.fixture?.date)).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex gap-4 justify-between">
              {imageUrl1 && (
                <Image src={imageUrl1} height={20} width={30} alt={match?.teams?.home?.name} />
              )}
              <div className="font-semibold text-sm md:text-base dark:text-[#E6E6DD]">{match?.teams?.home?.name}</div>
            </div>
            <div className="flex gap-4 justify-between">
              {imageUrl2 && (
                <Image src={imageUrl2} height={20} width={30} alt={match?.matchInfo?.team2?.teamName} />
              )}
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

      <div className="flex gap-12 py-4 justify-between">
        <Button className="flex-1 dark:bg-[#E6E6DD]" onClick={() => router.push(`/analytics/football?matchId=${match?.fixture?.id}&leagueId=${match?.league?.id}`)}>Analytics</Button>
        <Button className="flex-1 dark:bg-[#E6E6DD]" onClick={() => router.push("/cricket-article")}>Article</Button>
      </div>
    </div>
  );
}

