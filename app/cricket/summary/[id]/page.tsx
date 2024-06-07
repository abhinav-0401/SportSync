"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default function CricketMatchSummary({ params }: { params: { id: string } }) {
  const id = params.id;

  const [summaryData, setSummaryData] = useState<any>(null);

  async function getSummary() {
    if (id) {
      const docRef = doc(db, "summary", `${id}`);
      const docSnap = await getDoc(docRef);
      setSummaryData(docSnap.data());

      // if (!docSnap.data()) {
      //   toast.error("Could not fetch summary!");
      // }
    }
  }

  useEffect(() => {
    getSummary();
  }, []);

  if (summaryData) {
    return (
      <div className="flex flex-col gap-8 bg-[#E6E6DD] dark:bg-black min-h-screen">

        <div className="flex flex-col items-start gap-8">

          <h3 className="font-bold text-xl text-center w-full md:text-left">Summary</h3>

        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <Image src={summaryData?.imageUrl ?? "/analytics-summary.png"} alt="summary" className="min-w-[150px] rounded-md min-h-[150px]" height={177} width={182} unoptimized />

          <div className="flex flex-col gap-2 sm:gap-4 md:gap-8">
            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{summaryData?.title}</h3>
            <div className="font-normal text-base md:text-lg lg:text-xl text-[#45474A] dark:text-[#E6E6DD]">
              {summaryData?.keyPoints}
            </div>
          </div>
        </div>

        <div className="font-normal text-base md:text-lg lg:text-xl text-[#45474A] dark:text-[#E6E6DD]">
          {summaryData?.content}
        </div>

      </div>
    );
  } else {
    return (
      <div className="w-full text-center p-12 font-bold text-2xl bg-[#E6E6DD] dark:bg-black min-h-screen">
        NO SUMMARY
      </div>
    );
  }
}