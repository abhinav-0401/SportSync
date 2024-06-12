"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { blobToPng } from "@/lib/blobtopng";

type FeatureCardProps = {
  sport: string
}

export default function FeaturedCard({sport}: FeatureCardProps) {
  const router = useRouter();

  const [featuredMatch, setFeaturedMatch] = useState<any>(null);
  const [flagImages, setFlagImages] = useState<{ [key: string]: string }>({});
  const cricketMatchUrl = "/api/matches?listType=live";
  const footballFixtureUrl = "/api/football/fixtures?listType=live";
  const [isLive, setIsLive] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(sport === "cricket" ? cricketMatchUrl : footballFixtureUrl);
      const match = response.data[0];
      setFeaturedMatch(match);

      if (!response.data?.length) {
        toast.error("Could not fetch Featured Match!");
      } 
      if (response?.status === 500) {
        setIsLive(false)
      }
      else if (response?.status === 200 && sport === "cricket") {
        setIsLive(true)
        const team1ImageId = match.matchInfo.team1.imageId;
        const team2ImageId = match.matchInfo.team2.imageId;
        fetchImages(team1ImageId, team2ImageId);
      }
      else if (response?.status === 200 && sport === "football") {
        setIsLive(true)
      }
    } catch (error) {
      // console.error(error);
    }
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const fetchImages = async (team1ImageId: number, team2ImageId: number) => {
    const fetchImage = async (imageId: number): Promise<string | null> => {
      try {
        const imageUrl = `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg`;

        const options = {
          method: 'GET',
          url: imageUrl,
          params: { p: 'de', d: 'high' },
          headers: {
            'x-rapidapi-key': 'c4a782e118msh9292a6e3b3c3e78p17d585jsnd621a07e82ae',
            'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
          },
          responseType: 'blob' as const
        };

        const response = await axios.request(options);
        const blob = response.data;

        return await blobToPng(blob);
      } catch (error) {
        // console.error(`Error fetching image for imageId ${imageId}:`, error);
        return null;
      }
    };

    const team1Png = await fetchImage(team1ImageId);
    setFlagImages(prev => ({ ...prev, [team1ImageId.toString()]: team1Png! }));
    // console.log(team1Png)

    await delay(300); // Add delay of 200ms between requests

    const team2Png = await fetchImage(team2ImageId);
    setFlagImages(prev => ({ ...prev, [team2ImageId.toString()]: team2Png! }));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 md:bg-white/60 md:dark:bg-[#45474A80] mx-2 min-[425px]:mx-12 rounded-xl py-4 md:py-7 px-4 md:px-1 md:mx-0 w-full">
      <h2 className="text-center font-bold text-lg sm:text-xl lg:text-2xl">Featured Match</h2>

      {isLive && <div className="flex flex-col gap-6 bg-white/60 dark:bg-[#45474A80] md:mx-0 py-8 md:px-4 px-12 rounded-xl md:!bg-transparent">
        <h3 className="text-center font-bold text-base sm:text-lg lg:text-xl dark:text-[#E6E6DD]">{sport === "cricket" ? featuredMatch?.matchInfo?.seriesName : featuredMatch?.league?.name}</h3>

        <div className="flex justify-evenly items-center">

          <div className="flex flex-col items-center gap-6">
            <Image src={sport === "cricket" ? flagImages[featuredMatch?.matchInfo?.team1?.imageId] : featuredMatch?.teams?.home?.logo} height={20} width={30} alt="india" />
            <div className="font-semibold text-sm text-center dark:text-[#E6E6DD]">{sport === "cricket" ? featuredMatch?.matchInfo?.team1?.teamName : featuredMatch?.teams?.home?.name}</div>
            <div className="text-sm min-[400px]:text-base font-semibold dark:text-[#E6E6DD]">
              {sport === "cricket" ? 
                featuredMatch?.matchScore?.team1Score?.inngs1?.runs
                  ? <span>{featuredMatch?.matchScore?.team1Score?.inngs1?.runs} / {featuredMatch?.matchScore?.team1Score?.inngs1?.wickets}</span> 
                  : <span>Yet to Bat</span>
               : 
              //  featuredMatch?.score?.fulltime?.home ? <span>
              //   Halftime: {featuredMatch?.score?.halftime?.home} <br/>
              //   Fulltime: {featuredMatch?.score?.fulltime?.home}
              //  </span> : 
               <span>
               Goals: {featuredMatch?.goals?.home}
               </span>}
            </div>
          </div>

          <div className="font-bold text-sm">Vs</div>

          <div className="flex flex-col items-center gap-6 text-[#45474A]">
            <Image src={sport === "cricket" ? flagImages[featuredMatch?.matchInfo?.team2?.imageId] : featuredMatch?.teams?.away?.logo} height={20} width={30} alt="england" />
            <div className="font-semibold text-sm text-center">{sport === "cricket" ? featuredMatch?.matchInfo?.team2?.teamName : featuredMatch?.teams?.away?.name}</div>
            <div className="text-sm min-[400px]:text-base font-semibold">
            {sport === "cricket" ? 
                featuredMatch?.matchScore?.team2Score?.inngs1?.runs
                  ? <span>{featuredMatch?.matchScore?.team2Score?.inngs1?.runs} / {featuredMatch?.matchScore?.team2Score?.inngs1?.wickets}</span> 
                  : <span>Yet to Bat</span>
               : 
              //  featuredMatch?.score?.fulltime?.away ? <span>
              //   Halftime: {featuredMatch?.score?.halftime?.away} <br/>
              //   Fulltime: {featuredMatch?.score?.fulltime?.away}
              //  </span> : 
               <span>
               Goals: {featuredMatch?.goals?.away}
               </span>}
            </div>
          </div>

        </div>

        <Button className="dark:bg-[#E6E6DD] text-xs sm:text-sm font-semibold" onClick={() => router.push(`/analytics?matchId=${featuredMatch?.matchInfo?.matchId}&seriesId=${featuredMatch?.matchInfo?.seriesId}`)}>Click here to know more</Button>
      </div>}
      {!isLive && <span className="w-full text-center">No live matches at the moment!</span>}
    </div>
  );
}