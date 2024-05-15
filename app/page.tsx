"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dark:bg-black bg-[#E6E6DD]">
      <div className="px-8 md:px-16">
        <SectionOne isSmallScreen={isSmallScreen} />
        <SectionTwo />
        <TopPicks />
        <ExcitingOffers />
      </div>
    </div>
  );
}

function SectionOne({ isSmallScreen }:{isSmallScreen: boolean} ) {
  const router = useRouter();

  return (
    <div className="pt-8 md:pt-16 lg:pt-24">
      <div className="flex lg:flex-row flex-col lg:justify-center items-center">
        <div className="flex flex-col items-center">
          <Image src="/logonobg.png" alt="Logo" width={400} height={50} className="max-w-[122px] hidden dark:block md:max-w-[244px]" />
          <Image src="/Black.png" alt="Logo" width={400} height={50} className="max-w-[122px] dark:hidden md:max-w-[244px]" />
          <h3 className="text-black dark:text-[#E6E6DD] font-semibold text-center md:text-left text-lg sm:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          <div className="flex my-4 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28">
            <span className="flex gap-2 mx-3 sm:mx-4 md:mx-10">
              <Image src="/cricket-bullet.png" alt="cricket" height={15} width={20} className="rounded-full dark:hidden" unoptimized />
              <Image src="/bulletDarkCricket.png" alt="cricket" height={15} width={20} className="rounded-full dark:block hidden" unoptimized />
              <span className="dark:text-[#E6E6DD]">Cricket</span>
            </span>
            <span className="flex gap-2 mx-3 sm:mx-4 md:mx-10">
              <Image src="/cricket-bullet.png" alt="cricket" height={15} width={20} unoptimized className="rounded-full dark:hidden"/>
              <Image src="/bulletDarkCricket.png" alt="cricket" height={15} width={20} className="rounded-full dark:block hidden" unoptimized />
              <span className="dark:text-[#E6E6DD]">Football</span>
            </span>
            <span className="flex gap-2 mx-3 sm:mx-4 md:mx-10">
              <Image src="/casino-bullet.png" alt="cricket" height={15} width={20} unoptimized className="rounded-full dark:hidden" />
              <Image src="/bulletDarkCasino.png" alt="cricket" height={15} width={20} className="rounded-full dark:block hidden" unoptimized />
              <span className="dark:text-[#E6E6DD]">Casinos</span>
            </span>
            {/* <span className="mx-3 sm:mx-4 md:mx-10">Football</span>
            <span className="mx-3 sm:mx-4 md:mx-10">Casino</span> */}
          </div>
          <div className="flex justify-center">
            <button
              className={`mt-4 p-4 border-2 border-black dark:bg-[#45474A] bg-black text-white dark:text-[#E6E6DD] rounded-xl italic w-full sm:w-60 md:w-80 lg:w-96 xl:w-112 ${isSmallScreen && "sm-button-style"}`}
            >
              {isSmallScreen ? "Click here" : (<div className="flex items-center justify-center space-x-2">
                <span>Click here to know more</span>
                <Image src={"/arrow.png"} alt="arrow" width={20} height={20} />
              </div>)}
            </button>
          </div>
        </div>
        <LogoImages />
      </div>
      <div className="my-12 sm:my-20 md:my-32 w-full flex items-center hover:cursor-pointer text-[#E6E6DD]" onClick={() => router.push("/bonanza")}>
        <div className="flex flex-col items-center justify-center w-full md:-space-y-40">
          <Image src="/footballImageCutout.png" alt="Logo" className="w-full h-44 hidden md:block" width={1800} height={50} unoptimized />
          <Image src="/bonanza-banner-sm.png" alt="Logo" className="w-full h-auto block md:hidden" width={1800} height={50} unoptimized />
          <div className="flex flex-col items-center justify-center space-y-5">
            <span className="text-2xl tracking-wider md:block hidden font-semibold">FESTIVE BONANZA</span>
            <span className="text-center hidden md:block max-w-3xl">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoImages() {
  return (
    <div className="flex flex-grow lg:items-center flex-shrink-0">
      <Image src="/footballImage.png" alt="Logo" width={250} height={200} className="min-w-[320px] sm:min-w-[400px] xl:min-w-[400px] drop-shadow-2xl shadow-2xl shadow-[#E6E6DD40] rounded-lg mt-3" unoptimized />
      <div className="pl-3">
        <Image src="/Rectangle 118.png" alt="Logo" width={97} height={94} className="min-h-24 min-w-24 lg:min-w-32 hidden xl:block my-2 mt-6" unoptimized />
        <Image src="/Rectangle 119.png" alt="Logo" width={97} height={94} className="min-h-24 min-w-24 lg:min-w-32 mt-6 hidden xl:block" unoptimized />
      </div>
    </div>
  );
}

function SectionTwo() {
  const router = useRouter();

  return (
    <div className="pt-4 sm:pt-8 md:pt-16 lg:pt-24 flex flex-col gap-12 dark:text-[#E6E6DD]">
      
      <div className="flex flex-col items-start gap-8">

        <h3 className="font-bold text-xl text-center w-full md:text-left">Featured Match</h3>
        <div className="bg-black text-white dark:bg-white dark:text-black rounded-full py-1 px-2 sm:px-3 md:ml-8">Live</div>

      </div>

      <div className="flex justify-between px-4 sm:px-8 md:px-16">
        <div className="flex gap-4">
          {/* img + country name */}
          <div className="flex flex-col gap-2 md:gap-4">
            <Image src="/india.png" alt='india' width={36} height={24} />
            <div className="font-semibold text-base md:text-lg">IND</div>
          </div>
          <div className="font-medium text-base md:text-lg">198/3</div>
        </div>
        <div className="flex gap-4">
          {/* img + country name */}
          <div className="font-medium text-base md:text-lg">YET TO BAT</div>
          <div className="flex flex-col gap-2 md:gap-4">
            <Image src="/england.png" alt='india' width={36} height={24} />
            <div className="font-semibold text-base md:text-lg">ENG</div>
          </div>
        </div>
      </div>

      <div className="text-center font-medium text-lg">IND chose to bat</div>

      {/* scores */}
      <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between px-4 sm:px-8 md:px-16">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 font-semibold text-sm md:text-base">
            <span>KL Rahul</span>
            <span>20* (19)</span>
          </div>
          <div className="flex gap-2 font-normal text-sm md:text-base">
            <span>MS DHONI</span>
            <span>56* (50)</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 md:text-base text-sm">
            <span>20* (19)</span>
            <span>KL Rahul</span>
          </div>
          <div className="flex gap-2 text-sm md:text-base">
            <span>56* (50)</span>
            <span>MS DHONI</span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="bg-black text-white dark:bg-white dark:text-black rounded-lg py-1 px-2 sm:px-5 sm:py-2 w-fit" onClick={() => router.push("/analytics")}>Click here to get details</button>
      </div>
    </div>
  );
}

function TopPicks() {
  return (
    <div className="my-10 dark:text-[#E6E6DD]">
      <h2 className="my-10 font-bold text-3xl">Top Picks</h2>
      <div className="flex flex-col items-center w-full md:flex-row justify-center flex-wrap gap-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <PickCard key={index} />
        ))}
      </div>
    </div>
  );
}

function PickCard() {
  return (
    // <div className="flex items-center lg:flex-row flex-col w-full lg:h-[8rem] rounded-xl p-4 hover:bg-white">
    //   <div className="mr-4 -mt-2">
    //     <Image src="/Rectangle 120.png" alt="Logo" width={170} height={50} className="my-2" />
    //   </div>
    //   <div className="w-5/6 mt-2">
    //     <h2 className="font-bold">Indian Premier League</h2>
    //     <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin”</p>
    //   </div>
    // </div>
    <div className="flex flex-col items-center md:items-start max-w-[230px] md:min-w-[350px] md:max-w-[350px] lg:max-w-[400px] md:flex-row gap-4 lg:min-w-[400px] md:max-h-[150px]">
      <div>
        <Image src="/Rectangle 120.png" className="min-w-[220px] md:min-w-[134px] md:h-auto object-contain" alt="Top Picks Card" width={134} height={90} />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="font-bold">Indian Premier League</h2>
        <p className="text-sm italic text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin</p>
      </div>
    </div>
  );
}

function ExcitingOffers() {
  return (
    <div className="py-10 dark:text-[#E6E6DD]">
      <h2 className="my-20 font-bold text-3xl">Exciting Offers</h2>
      <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* {Array.from({ length: 3 }).map((_, index) => (
            <OfferCard key={index} />
          ))} */}
          <span className="lg:block hidden"><OfferCard /></span>
          <span className="xl:block hidden"><OfferCard /></span>
          <span className=""><OfferCard /></span>
        <div className="flex flex-col justify-center items-center md:flex-grow-1">
          <p className="p-4 w-72 text-[#45474A] dark:text-[#E6E6DD] font-medium text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.
          </p>
          <button className="mx-20 my-8 border-2 p-4 bg-black dark:bg-[#45474A] dark:text-[#E6E6DD] text-white italic border-black rounded-xl w-72 flex items-center justify-center space-x-2">
            <Image src={"/arrow.png"} alt="arrow" width={20} height={20} className="rotate-180" />
            <span>Click here <span className="hidden md:inline">to know more</span></span>
          </button>
        </div>
      </div>
    </div>
  );
}

function OfferCard() {
  return (
    <div className="flex justify-center items-center mx-2">
      <Image src="/footballImage.png" alt="Logo" width={400} height={500} className="w-auto lg:max-w-52 lg:min-h-[240px] xl:max-w-[300px] max-w-[300px] sm:max-w-[400px] md:max-w-[600px] xl:min-h-[320px] my-2 rounded-lg shadow-2xl shadow-[#D9D9D980]" unoptimized />
    </div>
  );
}
