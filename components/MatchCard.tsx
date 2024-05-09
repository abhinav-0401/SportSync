import Image from "next/image";
import { Button } from "./ui/button";

export default function MatchCard() {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white/40 py-4 md:py-7 px-4 sm:px-8 lg:px-12">
      
      <div className="flex justify-between">
        <h3 className="font-bold text-base lg:text-lg">Indian Premier League</h3>
        <Image src="/heart.png" alt="like" className="h-fit w-fit" height={18} width={30} />
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-8">
          <div>18:30</div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex gap-4 justify-between">
              <Image src="/india.png" height={20} width={30} alt="india" />
              <div className="font-semibold text-sm md:text-base">IND</div>
            </div>
            <div className="flex gap-4 justify-between">
              <Image src="/england.png" height={20} width={30} alt="india" />
              <div className="font-semibold text-sm md:text-base text-[#45474A]">ENG</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm md:text-base font-semibold">
          <div className="">190/8</div>
          <div className="text-[#45474A]">187/4</div>
        </div>
      </div>

      <div className="flex justify-center font-semibold text-sm md:text-base">
        India won by 3 runs
      </div>

      <div className="flex gap-12 py-4 justify-between">
        <Button className="flex-1">Analytics</Button>
        <Button className="flex-1">Article</Button>
      </div>

    </div>
  );
}