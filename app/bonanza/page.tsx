import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Bonanza() {
  return (
    <div className="flex flex-col bg-[#E6E6DD]">
      <Navbar />

      <div className="bg-[#E6E6DD] px-6 py-4 sm:px-10 sm:py-8 lg:px-20 lg:py-16 gap-20 flex min-w-[100vw] flex-col">

        <header className="flex flex-col items-center text-2xl sm:text-3xl lg:text-4xl font-bold">
          <h1 className="text-center">FESTIVE BONANZA</h1>
        </header>

        {/* intro text */}
        <div className="flex md:flex-row items-center md:items-start gap-10 flex-col justify-between xl:justify-normal">

          {/* this div will have an img */}
          <div className="flex-1 flex-shrink-0 h-full">
            <Image src="/intro-football.png" className="w-auto md:w-full max-h-[200px] md:max-h-[300px] h-auto xl:h-full xl:w-auto" alt="intro football" width={946} height={654} />
          </div>

          {/* intro text + buttons */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-20">
            <div className="font-normal text-center md:text-left text-base lg:text-lg text-[#45474A]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra."
            </div>
            <div className="flex gap-20">
              <Button variant={"secondary"} className="italic hidden md:block">Click here to know more</Button>
              <Button className="italic">Click here to know more</Button>
            </div>
          </div>
        </div>

        {/* how to participate */}
        <div className="flex flex-col gap-10 text-center md:text-left">
          <h3 className="text-2xl font-bold">How to participate?</h3>

          <div className="font-normal text-base lg:text-lg text-[#45474A] text-center md:text-left">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.
          </div>
        </div>

        {/* prizes */}
        <div className="flex flex-col gap-10">
          <h3 className="text-2xl font-bold">Prizes</h3>
          <div className="flex overflow-x-scroll gap-4 justify-between">
            <Image src="/prizes-1.png" className="max-height-[50px] md:max-height-[343px] md:max-width-[330px]" alt="win prize 600" height={343} width={330} />
            <Image src="/prizes-2.png" alt="win prize pic 2" height={343} width={330} />
            <Image src="/prizes-3.png" alt="win prize pic 3" height={343} width={330} />
          </div>
        </div>

        {/* where can i participate? */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl font-bold">Where can I participate?</h3>
            <div className="flex overflow-x-scroll justify-between gap-6">
              <div className="flex flex-1 flex-col items-center justify-betweeen gap-6">
                <Image src="/where-1.png" alt="Indian Premier League" height={145} width={139} />
                <h3 className="text-xl font-semibold">Indian Premier League</h3>
                <p className="italic text-[#45474A] font-normal text-sm text-wrap">
                  “Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Turpis donec amet proin
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-betweeen items-center gap-6">
                <Image src="/where-1.png" alt="Indian Premier League" height={145} width={139} />
                <h3 className="text-xl font-semibold">Indian Premier League</h3>
                <p className="italic text-[#45474A] font-normal text-sm text-wrap">
                  “Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Turpis donec amet proin
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-betweeen items-center gap-6">
                <Image src="/where-1.png" alt="Indian Premier League" height={145} width={139} />
                <h3 className="text-xl font-semibold">Indian Premier League</h3>
                <p className="italic text-[#45474A] font-normal text-sm text-wrap">
                  “Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Turpis donec amet proin
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10 justify-between items-center">
            <h1 className="text-2xl lg:text-4xl font-bold">CONFUSED?!</h1>
            <div className="text-base md:text-lg lg:text-xl text-wrap text-[#45474A] text-center font-normal">
              Want us to surprise for you? “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin
            </div>
            <Button className="italic w-full">Click here to get a surprise</Button>
          </div>
        </div>

        {/* <Footer /> */}

      </div>
    </div>    
  );
}