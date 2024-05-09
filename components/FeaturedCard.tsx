import Image from "next/image";
import { Button } from "./ui/button";

export default function FeaturedCard() {
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-white/60 py-4 md:py-7 px-4 md:px-8">
      <h2 className="text-center font-bold text-lg sm:text-xl lg:text-2xl">Featured Match</h2>

      <div className="flex flex-col gap-6">
        <h3 className="text-center font-bold text-base sm:text-lg lg:text-xl">Indian Premier League</h3>

        <div className="flex justify-evenly items-center">

          <div className="flex flex-col items-center gap-2">
            <Image src="/india.png" height={20} width={30} alt="india" />
            <div className="font-semibold text-sm md:text-base">IND</div>
            <div className="text-sm md:text-base font-semibold">190/8</div>
          </div>

          <div className="font-bold">Vs</div>

          <div className="flex flex-col items-center gap-2 text-[#45474A]">
            <Image src="/england.png" height={20} width={30} alt="england" />
            <div className="font-semibold text-base">ENG</div>
            <div className="text-base font-semibold">187/4</div>
          </div>

        </div>

        <Button>Click here to know more</Button>
      </div>
    </div>
  );
}