"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function FeaturedCard() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 md:bg-white/60 md:dark:bg-[#45474A80] mx-2 min-[425px]:mx-12 rounded-xl py-4 md:py-7 px-4 md:px-10">
      <h2 className="text-center font-bold text-lg sm:text-xl lg:text-2xl">Featured Match</h2>

      <div className="flex flex-col gap-6 bg-white/60 dark:bg-[#45474A80] md:mx-0 py-8 md:px-4 px-12 rounded-xl md:!bg-transparent">
        <h3 className="text-center font-bold text-base sm:text-lg lg:text-xl dark:text-[#E6E6DD]">Indian Premier League</h3>

        <div className="flex justify-evenly items-center">

          <div className="flex flex-col items-center gap-6">
            <Image src="/india.png" height={20} width={30} alt="india" />
            <div className="font-semibold text-sm min-[400px]:text-base dark:text-[#E6E6DD]">IND</div>
            <div className="text-sm min-[400px]:text-base font-semibold dark:text-[#E6E6DD]">190/8</div>
          </div>

          <div className="font-bold">Vs</div>

          <div className="flex flex-col items-center gap-6 text-[#45474A]">
            <Image src="/england.png" height={20} width={30} alt="england" />
            <div className="font-semibold text-sm min-[400px]:text-base">ENG</div>
            <div className="text-sm min-[400px]:text-base font-semibold">187/4</div>
          </div>

        </div>

        <Button className="dark:bg-[#E6E6DD]" onClick={() => router.push("/cricket-article")}>Click here to know more</Button>
      </div>
    </div>
  );
}