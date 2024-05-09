"use client"
import Image from "next/image";
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
    <div className="bg-[#E6E6DD]">
      <div className="px-24">
        <SectionOne isSmallScreen={isSmallScreen} />
        <SectionTwo isSmallScreen={isSmallScreen} />
        <TopPicks />
        <ExcitingOffers />
      </div>
    </div>
  );
}

function SectionOne({ isSmallScreen }:{isSmallScreen: boolean} ) {
  return (
    <div className="pt-24">
      <div className="flex justify-between items-center">
        <div>
          <Image src="/Images/Black (1).png" alt="Logo" width={400} height={50} className="ml-20" />
          <h3 className="text-black font-semibold text-lg sm:text-xl lg:text-2xl sm:ml-24 lg:ml-12 -mt-10">
            Lorem ipsum dolor sit amet, <span className="ml-14">consectetur</span>
          </h3>
          <div className="my-4 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28">
            <span className="mx-3 sm:mx-4 md:mx-10">Cricket</span>
            <span className="mx-3 sm:mx-4 md:mx-10">Football</span>
            <span className="mx-3 sm:mx-4 md:mx-10">Casino</span>
          </div>
          <button
            className={`mx-4 mt-4 p-4 border-2 border-black bg-black text-white rounded-xl w-full sm:w-60 md:w-80 lg:w-96 xl:w-112 ${isSmallScreen && "sm-button-style"}`}
          >
            {isSmallScreen ? "Click here" : "Click here to know more"}
          </button>
        </div>
        <LogoImages />
      </div>
      <div className="my-40">
        <Image src="/Images/Frame 8.png" alt="Logo" width={1800} height={50} />
      </div>
    </div>
  );
}

function LogoImages() {
  return (
    <div className="flex">
      <Image src="/Images/Group 15.png" alt="Logo" width={800} height={100} className="my-2" />
      <div>
        <Image src="/Images/Rectangle 118.png" alt="Logo" width={300} height={50} className="my-2 mt-6" />
        <Image src="/Images/Rectangle 119.png" alt="Logo" width={300} height={50} className="mt-6" />
      </div>
    </div>
  );
}

function SectionTwo({  isSmallScreen }: { isSmallScreen: boolean }) {
  return (
    <div className="pt-24">
      <div className="flex justify-between items-center">
        <div>
          <Image src="/Images/Black (1).png" alt="Logo" width={200} height={50} className="lg:w-40 lg:h-40" />
          <h3 className="text-black font-semibold text-lg sm:text-xl lg:text-2xl sm:ml-24 lg:ml-12 -mt-10">
            Lorem ipsum dolor sit amet, <span className="ml-14">consectetur</span>
          </h3>
          <div className="my-4 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28">
            <span className="mx-3 sm:mx-4 md:mx-10">Cricket</span>
            <span className="mx-3 sm:mx-4 md:mx-10">Football</span>
            <span className="mx-3 sm:mx-4 md:mx-10">Casino</span>
          </div>
          <button
            className={`mx-4 mt-4 p-4 border-2 border-black bg-black text-white rounded-xl w-full sm:w-60 md:w-80 lg:w-96 xl:w-112 ${isSmallScreen && "sm-button-style"}`}
          >
            {isSmallScreen ? "Click here" : "Click here to know more"}
          </button>
        </div>
        <LogoImages />
      </div>
      <div className="my-40">
        <Image src="/Images/Frame 8.png" alt="Logo" width={1800} height={50} />
      </div>
    </div>
  );
}

function TopPicks() {
  return (
    <div className="my-10">
      <h2 className="my-10 font-bold text-3xl">Top Picks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <PickCard key={index} />
        ))}
      </div>
    </div>
  );
}

function PickCard() {
  return (
    <div className="w-full h-[8rem] rounded-xl p-4 flex hover:bg-white">
      <div className="mr-4 -mt-2">
        <Image src="/Images/Rectangle 120.png" alt="Logo" width={170} height={50} className="my-2" />
      </div>
      <div className="w-5/6 mt-2">
        <h2 className="font-bold">Indian Premier League</h2>
        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin”</p>
      </div>
    </div>
  );
}

function ExcitingOffers() {
  return (
    <div className="my-10">
      <h2 className="my-20 font-bold text-3xl">Exciting Offers</h2>
      <div className="flex flex-col md:flex-row">
        {Array.from({ length: 3 }).map((_, index) => (
          <OfferCard key={index} />
        ))}
        <div className="flex flex-col justify-center items-center md:w-1/3">
          <p className="p-4 w-80 text-[#45474A] font-medium text-center">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.
          </p>
          <button className="mx-20 my-8 border-2 p-4 bg-black text-white border-black rounded-xl w-72">
            Click here to know more
          </button>
        </div>
      </div>
    </div>
  );
}

function OfferCard() {
  return (
    <div className="flex justify-center items-center md:w-1/3">
      <Image src="/Images/Rectangle 121.png" alt="Logo" width={400} height={50} className="my-2 md:mx-8" />
    </div>
  );
}
