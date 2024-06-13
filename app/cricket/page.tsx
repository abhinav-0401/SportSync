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
import { Base64 } from "js-base64";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Lottie from "lottie-react";
import animationData from "@/lotties/load_err.json";

interface MatchCardProps {
  match: any;
}

export default function Cricket() {

  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [currentType, setCurrentType] = useState<string | undefined>();
  const [currentListType, setCurrentListType] = useState<"live" | "upcoming" | "recent">("live");

  const [error, setError] = useState<string | null>(null);

  const fetchData = async (listType: "live" | "upcoming" | "recent", type?: string) => {
    if (!type) {
      setCurrentType("All");
    }

    try {
      const response = await axios.get(`/api/matches?listType=${listType}${type ? `&type=${type}` : ''}`);

      setData(response.data);

      if (!response.data?.length) {
        toast.error(`There are currently no ${listType} matches of the selected type.`);
      }
      setError(null);
    } catch (error) {
      setError('Failed to fetch data');
    }
  };

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
  }, []);

  return (
    <div className="bg-[#E6E6DD] dark:bg-black">
      <Toaster />
      <div className="bg-[#E6E6DD] dark:bg-black px-4 py-4 sm:px-10 sm:py-8 lg:px-20 lg:py-16 sm:gap-10 lg:gap-20 flex flex-col w-full">

        <div className="hidden md:flex lg:hidden w-full items-center justify-center">
          <span className="text-2xl font-semibold tracking-wide">CRICKET</span>
        </div>
        <div className="flex justify-center w-full mb-4 md:hidden lg:flex lg:justify-start">
          <Tabs defaultValue="cricket" className="w-2/3 lg:w-fit" onValueChange={handleTabChange}>
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
                  <Tag active={currentType === "All"} name="All" onClick={() => fetchData(currentListType)} />
                  <Tag active={currentType === "International"} name="International" onClick={() => handleTagClick('International')} />
                  <Tag active={currentType === "League"} name="League" onClick={() => handleTagClick('League')} />
                  <Tag active={currentType === "Domestic"} name="Domestic" onClick={() => handleTagClick('Domestic')} />
                  <Tag active={currentType === "Women"} name="Women" onClick={() => handleTagClick('Women')} />
                </div>

              </div>
            </div>
          </div>
          

          <div className="flex-grow md:w-3/4 lg:w-full flex flex-col gap-8 md:gap-12">

            <div className="w-full flex gap-4 md:overflow-x-auto overflow-x-scroll lg:hidden">
              <HorizontalTag name="All" active={currentType === "All"} onClick={() => fetchData(currentListType)} />
              <HorizontalTag name="International" active={currentType === "International"} onClick={() => handleTagClick('International')} />
              <HorizontalTag name="League" active={currentType === "League"} onClick={() => handleTagClick('League')} />
              <HorizontalTag name="Domestic" active={currentType === "Domestic"} onClick={() => handleTagClick('Domestic')} />
              <HorizontalTag name="Women" active={currentType === "Women"} onClick={() => handleTagClick('Women')} />
            </div>

            <Tabs defaultValue="live" className="w-full">
              <TabsList className="flex w-full justify-between bg-transparent">
                <TabsTrigger className="flex-grow" variant={"outline"} value="live" onClick={() => handleInnerTabChange("live")}>Live</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="upcoming" onClick={() => handleInnerTabChange("upcoming")}>Upcoming</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="completed" onClick={() => handleInnerTabChange("recent")}>Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="live" className="flex w-full flex-col gap-10">
                {
                  data
                    ? <>
                        <DayMatchList schedule={data} />
                        <div className="flex w-full justify-center">
                          {/* <Button className="w-fit">See more</Button> */}
                        </div>
                      </>
                      : <span className="font-bold text-center text-lg p-3">Nothing to show!</span>
                }
                
              </TabsContent>

              <TabsContent value="upcoming" className="flex w-full flex-col gap-10">
                {
                  data
                  ? <>
                      <DayMatchList schedule={data} />
                      <div className="flex w-full justify-center">
                        {/* <Button className="w-fit">See more</Button> */}
                      </div>
                    </>
                  : <span className="font-bold text-center text-lg p-3">Nothing to show!</span>
                  // <Lottie animationData={animationData} />
                }
              </TabsContent>

              <TabsContent value="completed" className="flex w-full flex-col gap-10">
                {
                  data
                    ? <>
                        <DayMatchList schedule={data} />
                        <div className="flex w-full justify-center">
                          {/* <Button className="w-fit">See more</Button> */}
                        </div>
                      </>
                    : <span className="font-bold text-center text-lg p-3">Nothing to show!</span>
                    // <Lottie animationData={animationData} />
                }            
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
            <FeaturedCard sport={"cricket"} />
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
  const [imageData1, setImageData1] = useState<any | null>(null);
  const [imageData2, setImageData2] = useState<any | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // const fetchImageUrl = async (imageId: string, setImageUrl: (url: string) => void, setImageData: (data: any) => void) => {
  //   try {
  //     const response = await axios.get(`/api/getImageUrl?imageId=${imageId}`);
  //     // const res = await fetch(`/api/getImageUrl?imageId=${imageId}`);
  //     // const response = await res.json();
  //     // const blob = await res.blob();
  //     // const b = await blob.arrayBuffer();

  //     setImageUrl(response.data.url);
  //     setImageData(response.data.data);
  //   } catch (error) {
  //     console.error('Failed to fetch image URL', error);
  //   }
  // };

  // useEffect(() => {
  //   const imageId1 = match?.matchInfo?.team1?.imageId;
  //   const imageId2 = match?.matchInfo?.team2?.imageId;
    
  //   if (imageId1) fetchImageUrl(imageId1, setImageUrl1, setImageData1);
  //   if (imageId2) fetchImageUrl(imageId2, setImageUrl2, setImageData2);
  // }, [match]);

  // async function getMatchDetails(matchId: number) {
  //   const res = await axios.get(`/api/matchInfo?matchId=${matchId}`);
  // }

  // useEffect(() => {
  //   // getMatchDetails(match?.matchInfo.matchId);
  // }, [match]);

  // useEffect(() => {
  //   if (imageData1) {
  //     imgRef.current?.src = imageData1.
  //   }
  // }, []);

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white/40 dark:bg-[#45474a66] py-4 md:py-7 px-4 sm:px-8 lg:px-12">
      <div className="flex justify-between">
        <h3 className="font-bold text-base dark:text-[#E6E6DD] lg:text-lg">{match?.matchInfo.seriesName}</h3>
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
          <div>{new Date(parseInt(match?.matchInfo?.startDate)).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex gap-4 justify-between">
              {imageData1 && (
                <Image ref={imgRef} src={`data:image/jpeg;base64,${Base64.encodeURI(imageData1)}`} height={20} width={30} alt={match?.matchInfo?.team1?.teamName} />
              )}
              <div className="font-semibold text-sm md:text-base dark:text-[#E6E6DD]">{match?.matchInfo?.team1?.teamSName}</div>
            </div>
            <div className="flex gap-4 justify-between">
              {imageData2 && (
                <Image ref={imgRef} src={`data:image/jpeg;base64,${Base64.encodeURI(imageData2)}`} height={20} width={30} alt={match?.matchInfo?.team1?.teamName} />
              )}
              <div className="font-semibold text-sm md:text-base text-[#828486]">{match?.matchInfo?.team2?.teamSName}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm md:text-base font-semibold">
          { match?.matchScore?.team1Score?.inngs1?.runs
            ? <div>{match?.matchScore?.team1Score?.inngs1?.runs} / {match?.matchScore?.team1Score?.inngs1?.wickets} ({match?.matchScore?.team1Score?.inngs1?.overs})</div>
            : <div>Yet to Bat</div>
          }
          <div className="text-[#828486]">
            {match?.matchScore?.team2Score?.inngs1?.runs 
              ? <span>{match?.matchScore?.team2Score?.inngs1?.runs} / {match?.matchScore?.team2Score?.inngs1?.wickets} ({match?.matchScore?.team2Score?.inngs1?.overs})</span>
              : <div>Yet to Bat</div>}
          </div>
        </div>
      </div>

      <div className="flex justify-center font-semibold text-sm md:text-base">
        {match?.matchInfo?.status}
      </div>

      <div className="flex gap-12 py-4 justify-between">
        <Button className="flex-1 dark:bg-[#E6E6DD]" onClick={() => router.push(`/analytics?matchId=${match?.matchInfo?.matchId}&seriesId=${match?.matchInfo?.seriesId}&team1=${match?.matchInfo?.team1?.imageId}&team2=${match?.matchInfo?.team2?.imageId}`)}>Analytics</Button>
        <Button className="flex-1 dark:bg-[#E6E6DD]" onClick={() => router.push(`/cricket/summary/${match?.matchInfo?.matchId}`)}>Summary</Button>
      </div>
    </div>
  );
}
