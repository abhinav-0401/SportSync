import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MatchCard() {
  
  const router= useRouter();

  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white/40 dark:bg-[#45474a66] py-4 md:py-7 px-4 sm:px-8 lg:px-12">
      
      <div className="flex justify-between">
        <h3 className="font-bold text-base dark:text-[#E6E6DD] lg:text-lg">Indian Premier League</h3>
        <span className="flex items-center" onClick={() => setLiked(!liked)}>
          {
            liked
              ? <Image src="/heart.png" alt="like" className="md:h-fit h-[16px] w-[16px] md:w-fit min-h-[16px] min-w-[16px]" height={18} width={30} />
              : <Image src="/unlikedHeart.png" alt="like" className="md:h-fit h-[16px] w-[16px] md:w-fit min-h-[16px] min-w-[16px]" height={18} width={30} />
          }
        </span>
      </div>

      <div className="flex justify-between dark:text-[#E6E6DD]">
        <div className="flex items-center gap-8">
          <div>18:30</div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex gap-4 justify-between">
              <Image src="/india.png" height={20} width={30} alt="india" />
              <div className="font-semibold text-sm md:text-base dark:text-[#E6E6DD]">IND</div>
            </div>
            <div className="flex gap-4 justify-between">
              <Image src="/england.png" height={20} width={30} alt="india" />
              <div className="font-semibold text-sm md:text-base text-[#828486] ">ENG</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm md:text-base font-semibold ">
          <div className="">190/8</div>
          <div className="text-[#828486]">187/4</div>
        </div>
      </div>

      <div className="flex justify-center font-semibold text-sm md:text-base">
        India won by 3 runs
      </div>

      <div className="flex gap-12 py-4 justify-between ">
        <Button className="flex-1 dark:bg-[#E6E6DD]" onClick={() => router.push("/analytics")}>Analytics</Button>
        <Button className="flex-1 dark:bg-[#E6E6DD]" onClick={()=> router.push("/cricket-article")}>Article</Button>
      </div>

    </div>
  );
}