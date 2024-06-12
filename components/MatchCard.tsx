'use client';

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

interface MatchCardProps {
  match: any;
}

export default function MatchCard({ match }: MatchCardProps) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [imageUrl1, setImageUrl1] = useState<string | null>(null);
  const [imageUrl2, setImageUrl2] = useState<string | null>(null);

  const fetchImageUrl = async (imageId: string, setImageUrl: (url: string) => void) => {
    try {
      const response = await axios.get(`/api/getImageUrl?imageId=${imageId}`);
      setImageUrl(response.data.url);
    } catch (error) {
    }
  };

  useEffect(() => {
    const imageId1 = match?.matchInfo[0]?.team1?.imageId;
    const imageId2 = match?.matchInfo[0]?.team2?.imageId;

    if (imageId1) fetchImageUrl(imageId1, setImageUrl1);
    if (imageId2) fetchImageUrl(imageId2, setImageUrl2);
  }, [match]);

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white/40 dark:bg-[#45474a66] py-4 md:py-7 px-4 sm:px-8 lg:px-12">
      <div className="flex justify-between">
        <h3 className="font-bold text-base dark:text-[#E6E6DD] lg:text-lg">{match?.seriesName}</h3>
        <span className="flex items-center" onClick={() => setLiked(!liked)}>
          {liked ? (
            <Image src="/heart.png" alt="like" className="md:h-fit h-[16px] w-[16px] md:w-fit min-h-[16px] min-w-[16px]" height={18} width={30} />
          ) : (
            <Image src="/unlikedHeart.png" alt="like" className="md:h-fit h-[16px] w-[16px] md:w-fit min-h-[16px] min-w-[16px]" height={18} width={30} />
          )}
        </span>
      </div>

      <div className="flex justify-between dark:text-[#E6E6DD]">
        <div className="flex items-center gap-8">
          <div>{new Date(parseInt(match?.matchInfo[0]?.startDate)).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex gap-4 justify-between">
              {imageUrl1 && (
                <Image src={imageUrl1} height={20} width={30} alt={match?.matchInfo[0]?.team1?.teamName} />
              )}
              <div className="font-semibold text-sm md:text-base dark:text-[#E6E6DD]">{match?.matchInfo[0]?.team1?.teamSName}</div>
            </div>
            <div className="flex gap-4 justify-between">
              {imageUrl2 && (
                <Image src={imageUrl2} height={20} width={30} alt={match?.matchInfo[0]?.team2?.teamName} />
              )}
              <div className="font-semibold text-sm md:text-base text-[#828486]">{match?.matchInfo[0]?.team2?.teamSName}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm md:text-base font-semibold">
          <div>{match?.matchInfo[0]?.team1Score}</div>
          <div className="text-[#828486]">{match?.matchInfo[0]?.team2Score}</div>
        </div>
      </div>

      <div className="flex justify-center font-semibold text-sm md:text-base">
        {match?.matchInfo[0]?.matchResult}
      </div>

      <div className="flex gap-12 py-4 justify-between">
        <Button className="flex-1 dark:bg-[#E6E6DD]" onClick={() => router.push("/analytics")}>Analytics</Button>
        <Button className="flex-1 dark:bg-[#E6E6DD]" onClick={() => router.push("/cricket-article")}>Article</Button>
      </div>
    </div>
  );
}
