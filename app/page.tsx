"use client"

import FeaturedCard from "@/components/FeaturedCard";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
      <div className="md:px-8 lg:px-16">
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
    <div className="-mt-12 md:pt-16 lg:pt-24 bg-[url('/mobile-bg.png')] bg-cover md:bg-none">
      <div className="flex md:flex-row flex-col bg-gradient-to-b from-white/0 from-65% to-90% dark:to-black to-[#e6e6dd] md:bg-none px-4 pt-12 md:pt-0 pb-12 md:px-0 md:justify-start lg:justify-between items-center">
        <div className="flex flex-col items-center lg:ml-12 md:min-w-[350px]">
          <Image src="/logonobg.png" alt="Logo" width={400} height={50} className="max-w-[180px] sm:max-w-[180px] dark:block md:hidden md:max-w-[150px] lg:max-w-[244px]" />
          <Image src="/Black.png" alt="Logo" width={400} height={50} className="max-w-[160px] sm:max-w-[180px] hidden md:block dark:hidden md:max-w-[150px] lg:max-w-[244px]" />
          <h3 className="text-[#E6E6DD] md:text-black dark:md:text-[#e6e6dd] font-semibold text-center md:text-center text-xl min-[400px]:text-2xl md:text-lg lg:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          <div className="flex justify-between min-[425px]:gap-12 min-[425px]:justify-center w-full md:gap-10 lg:gap-16 my-12 sm:mx-16 md:mx-20 lg:text-base md:text-sm text-sm min-[425px]:text-base lg:mx-24 xl:mx-28">
            <span className="flex gap-2">
              <Image src="/cricket-bullet.png" alt="cricket" height={15} width={20} className="rounded-full hidden md:block dark:hidden" unoptimized />
              <Image src="/bulletDarkCricket.png" alt="cricket" height={15} width={20} className="rounded-full block md:hidden dark:block" unoptimized />
              <span className="text-[#E6E6DD] md:text-black dark:md:text-[#e6e6dd]">Cricket</span>
            </span>
            <span className="flex gap-2">
              <Image src="/cricket-bullet.png" alt="cricket" height={15} width={20} unoptimized className="rounded-full hidden md:block dark:hidden"/>
              <Image src="/bulletDarkCricket.png" alt="cricket" height={15} width={20} className="rounded-full dark:block block md:hidden" unoptimized />
              <span className="text-[#E6E6DD] md:text-black dark:md:text-[#e6e6dd]">Football</span>
            </span>
            <span className="flex gap-2">
              <Image src="/casino-bullet.png" alt="cricket" height={15} width={20} unoptimized className="rounded-full hidden md:block dark:hidden" />
              <Image src="/bulletDarkCasino.png" alt="cricket" height={15} width={20} className="rounded-full dark:block block md:hidden" unoptimized />
              <span className="text-[#E6E6DD] md:text-black dark:md:text-[#e6e6dd]">Casinos</span>
            </span>
            {/* <span className="mx-3 sm:mx-4 md:mx-10">Football</span>
            <span className="mx-3 sm:mx-4 md:mx-10">Casino</span> */}
          </div>
          <div className="flex justify-center">
            <button
              className={`mt-4 p-4 hidden md:block border-2 border-black dark:bg-[#45474A] bg-black text-white dark:text-[#E6E6DD] rounded-xl italic w-full sm:w-60 md:w-80 lg:w-96 xl:w-112 ${isSmallScreen && "sm-button-style"}`}
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

      <div className="mb-12 md:my-12 w-full px-4 bg-[#e6e6dd] dark:bg-black flex items-center hover:cursor-pointer text-[#E6E6DD]" onClick={() => router.push("/bonanza")}>
        <div className="flex flex-col items-center justify-center w-full md:-space-y-40">
          <Image src="/footballImageCutout.png" alt="Logo" className="w-full h-44 rounded-xl hidden md:block" width={1800} height={50} unoptimized />
          <Image src="/bonanza_mobile_3.jpeg" alt="Logo" className="w-full h-auto rounded-xl block md:hidden" width={1800} height={50} unoptimized />
          <div className="flex flex-col items-center justify-center space-y-5">
            <span className="text-3xl tracking-wider md:block hidden font-semibold">FESTIVE BONANZA</span>
            <span className="text-center hidden md:block text-sm md:text-base max-w-3xl">
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
    <div className="flex md:gap-4 lg:items-center flex-shrink-0">
      <Image src="/footballImage.png" alt="Logo" width={250} height={200} className="md:min-h-[240px] mt-28 mb-20 min-[425px]:min-w-[400px] md:min-w-[220px] min-[770px]:min-w-[260px] min-[900px]:min-w-[300px] min-[1100px]:min-w-[350px] xl:min-w-[400px] drop-shadow-2xl shadow-2xl shadow-[#E6E6DD40] rounded-lg hover:" unoptimized />
      <div className="flex flex-col justify-center">
        <Image src="/Rectangle 118.png" alt="Logo" width={97} height={94} className="min-h-24 min-w-24 md:min-w-[90px] min-[900px]:min-w-[120px] hidden md:block my-2 mt-6" unoptimized />
        <Image src="/Rectangle 119.png" alt="Logo" width={97} height={94} className="min-h-24 min-w-24 md:min-w-[90px] min-[900px]:min-w-[120px] mt-6 hidden md:block" unoptimized />
      </div>
    </div>
  );
}

function SectionTwo() {
  const router = useRouter();

  const [featuredMatch, setFeaturedMatch] = useState<any>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/matches?listType=live");
      setFeaturedMatch(response.data[0]);
      console.log(response.data);

      if (!response.data?.length) {
        toast.error("Could not fetch Featured Match!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <span className="md:hidden"><FeaturedCard /></span>
      <Toaster />
      <div className="hidden md:flex pt-4 sm:pt-8 md:pt-16 lg:pt-24  flex-col px-4 gap-12 dark:text-[#E6E6DD]">
        {/* <FeaturedCard /> */}
        <div className="flex flex-col items-start gap-8">

          <h3 className="font-bold text-xl text-center w-full md:text-left">Featured Match</h3>
          <div className="bg-black text-white dark:bg-white dark:text-black rounded-full py-1 px-2 sm:px-3 md:ml-8">Live</div>

        </div>

        <div className="flex justify-between px-4 sm:px-8 md:px-16">
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <Image src="/india.png" alt='india' width={36} height={24} />
              <div className="font-semibold text-base md:text-lg">{featuredMatch?.matchInfo?.team1?.teamName}</div>
            </div>
            <div className="font-medium text-base md:text-lg">
              {
                featuredMatch?.matchScore?.team1Score?.inngs1?.runs
                  ? <span>{featuredMatch?.matchScore?.team1Score?.inngs1?.runs} / {featuredMatch?.matchScore?.team1Score?.inngs1?.wickets}</span>
                  : <span>Yet to Bat</span>
              }
            </div>
          </div>
          <div className="flex gap-2">
            <div className="font-medium text-sm min-[370px]:text-base md:text-lg">
              {
                featuredMatch?.matchScore?.team2Score?.inngs1?.runs
                  ? <span>{featuredMatch?.matchScore?.team2Score?.inngs1?.runs} / {featuredMatch?.matchScore?.team2Score?.inngs1?.wickets}</span>
                  : <span>Yet to Bat</span>
              }
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <Image src="/england.png" alt='india' width={36} height={24} />
              <div className="font-semibold text-base md:text-lg">{featuredMatch?.matchInfo?.team2?.teamName}</div>
            </div>
          </div>
        </div>

        <div className="text-center font-medium text-lg">{featuredMatch?.matchInfo?.status}</div>

        
        <div className="flex flex-row gap-8 md:gap-0 justify-between -px-2 sm:px-8 md:px-16">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 sm:gap-4 font-semibold text-[12px] sm:text-sm md:text-base">
              <span>KL Rahul</span>
              <span>20* (19)</span>
            </div>
            <div className="flex gap-3 sm:gap-4 font-normal text-[12px] sm:text-sm md:text-base">
              <span>MS Dhoni</span>
              <span>56* (50)</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 sm:gap-4 md:text-base sm:text-sm text-[12px]">
              <span>20* (19)</span>
              <span>KL Rahul</span>
            </div>
            <div className="flex gap-3 sm:gap-4 text-[12px] sm:text-sm md:text-base">
              <span>56* (50)</span>
              <span>MS Dhoni</span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="bg-black text-white dark:bg-white italic dark:text-black rounded-lg py-1 px-2 sm:px-5 sm:py-2 w-fit" onClick={() => router.push("/analytics")}>Click here to get details</button>
        </div>
      </div>
    </>
  );
}

function TopPicks() {
  return (
    <div className="px-4 my-6 dark:text-[#E6E6DD]">
      <h2 className="my-10 font-bold text-3xl text-center md:text-left">Top Picks</h2>
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
    <div className="flex flex-row items-center md:items-start max-w-[300px] md:min-w-[350px] md:max-w-[350px] lg:max-w-[400px] md:flex-row gap-4 lg:min-w-[400px] md:max-h-[150px]">
      <div>
        <Image src="/Rectangle 120.png" className="min-w-[120px] md:min-w-[134px] md:h-auto object-contain" alt="Top Picks Card" width={134} height={90} />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="font-bold text-xs sm:text-sm md:text-base">Indian Premier League</h2>
        <p className="text-xs sm:text-sm italic text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin</p>
      </div>
    </div>
  );
}

function ExcitingOffers() {
  return (
    <div className="px-4 py-6 dark:text-[#E6E6DD]">
      <h2 className="my-20 font-bold text-3xl text-center md:text-left">Exciting Offers</h2>
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
