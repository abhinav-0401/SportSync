"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import Link from "next/link";

export default function Bonanza() {
  const [surprise, setSurprise] = useState<any>(null);

  async function getPromotions() {
    const docs = await getDocs(collection(db, "promotions"));

    let promotionsArr: any[] = [];
    docs.forEach(doc => {
      promotionsArr.push({ id: doc.id, data: doc.data() });
    });
    console.log("promotionsArr: ", promotionsArr);

    let surpriseArr = [];
    surpriseArr = promotionsArr.filter((promotion: any) => {
      return promotion?.data?.type === "surprise";
    });
    console.log("surpriseArr: ", surpriseArr);

    if (surpriseArr.length > 0) {
      setSurprise(surpriseArr[surpriseArr.length - 1]);
    }
  }

  useEffect(() => {
    getPromotions();
  }, []);

  return (
    <div className="flex flex-col pb-12 bg-[#E6E6DD] dark:bg-black">
      <div className="bg-[#E6E6DD] dark:bg-black px-6 py-4 sm:px-10 sm:py-8 lg:px-20 lg:py-16 gap-8 flex min-w-[100vw] flex-col">

        <header className="flex flex-col items-center text-2xl sm:text-3xl lg:text-4xl font-bold">
          <h1 className="text-center dark:text-[#E6E6DD]">FESTIVE BONANZA</h1>
        </header>

        {/* intro text */}
        <div className="flex md:flex-row items-center md:items-start gap-10 flex-col justify-between xl:justify-normal">

          {/* this div will have an img */}
          <div className="flex-1 flex-shrink-0 h-full">
            <Image src="/intro_football_new.png" className="w-auto md:w-full max-h-[200px] md:max-h-[300px] h-auto xl:h-full xl:w-auto" alt="intro football" width={946} height={654} />
          </div>

          {/* intro text + buttons */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-4">
            <div className="font-normal text-center md:text-left text-base lg:text-lg text-[#45474A] dark:text-[#E6E6DD]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.
            </div>
            <div className="flex gap-20">
              {/* <Button variant={"secondary"} className="italic hidden xl:block">Click here to know more</Button> */}
              <Button className="italic dark:bg-white">
                <Link href={"#prizes"}>
                  <div className="flex gap-2 fill-white">
                    <span>Click here to know more</span>
                    <Image src="right_arrow.svg" alt="right arrow" height={10} width={29} className="dark:block hidden" />
                    <Image src="right_arrow_light.svg" alt="right arrow" className="dark:hidden" height={10} width={29} />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* how to participate */}
        <div className="flex flex-col gap-10 text-center md:text-left">
          <h3 className="text-2xl font-bold dark:text-[#E6E6DD]">How to participate?</h3>

          <div className="font-normal text-base lg:text-lg text-[#45474A] dark:text-[#E6E6DD] text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.
          </div>
        </div>

        {/* prizes */}
        <div className="flex flex-col gap-10" id="prizes">
          <h3 className="text-2xl font-bold dark:text-[#E6E6DD]">Prizes</h3>
          <div className="flex overflow-x-scroll md:overflow-x-auto gap-4 justify-between md:justify-evenly">
            <Image src="/prizes-1.png" className="lg:h-[400px] lg:w-[400px]" alt="win prize 600" height={343} width={330} />
            <Image src="/prizes-2.png" className="lg:h-[400px] lg:w-[400px]" alt="win prize pic 2" height={343} width={330} />
            <Image src="/prizes-3.png" className="lg:h-[400px] lg:w-[400px]" alt="win prize pic 3" height={343} width={330} />
          </div>
        </div>

        {/* where can i participate? */}
        <div className="flex flex-col dark:text-[#E6E6DD] md:flex-row gap-10">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold dark:text-[#E6E6DD] text-center md:text-left">Where can I participate?</h3>
            <div className="flex overflow-x-scroll md:overflow-x-auto justify-between gap-4 md:gap-6">
              <div className="flex flex-1 flex-col items-center justify-betweeen gap-6">
                <Image src="/where-1.png" alt="Indian Premier League" height={145} width={139} />
                <h3 className="text-xs sm:text-base lg:text-xl font-semibold dark:text-[#E6E6DD] text-center">Indian Premier League</h3>
                <p className="italic text-[#45474A] dark:text-[#E6E6DD] font-normal text-xs sm:text-sm text-wrap text-center">
                  “Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Turpis donec amet proin
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-betweeen items-center gap-6">
                <Image src="/where-1.png" alt="Indian Premier League" height={145} width={139} />
                <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-center">Indian Premier League</h3>
                <p className="italic text-[#45474A] dark:text-[#E6E6DD] font-normal text-xs sm:text-sm text-wrap text-center">
                  “Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Turpis donec amet proin
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-betweeen items-center gap-6">
                <Image src="/where-1.png" alt="Indian Premier League" height={145} width={139} />
                <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-center">Indian Premier League</h3>
                <p className="italic text-[#45474A] dark:text-[#E6E6DD] font-normal text-xs sm:text-sm text-wrap text-center">
                  “Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Turpis donec amet proin
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8 justify-end items-center">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="text-2xl lg:text-3xl font-semibold">CONFUSED?!</h1>
              <div className="text-sm md:text-base lg:text-lg text-wrap text-[#45474A] dark:text-[#E6E6DD] text-center font-normal">
                Want us to surprise for you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin
              </div>
            </div>
            {/* <Button className="italic w-full dark:text-[#45474A] dark:bg-white">Click here to get a surprise</Button> */}
            <Dialog>
              <DialogTrigger className="w-full"><Button className="italic w-full dark:text-[#45474A] dark:bg-white">Click here to get a surprise</Button></DialogTrigger>
              <DialogContent className="w-fit px-12 py-6 bg-transparent backdrop-blur-lg">
                <DialogHeader>
                  <DialogTitle className="text-center">SURPRISE!!</DialogTitle>
                  <DialogDescription>
                    <div className="flex flex-col items-center gap-4">
                      <Image src="/surprise_img.png" height={130} width={160} alt="surprise" />
                      <a target="_blank" href={`http://${surprise?.data?.redirectUrl}`}><Button className="italic dark:bg-white">Redirect Link</Button></a>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        

      </div>
    </div>    
  );
}