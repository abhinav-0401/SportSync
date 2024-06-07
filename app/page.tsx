"use client"

import FeaturedCard from "@/components/FeaturedCard";
import { Button } from "@/components/ui/button";
import { blobToPng } from "@/lib/blobtopng";
import axios from "axios";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
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
              <Image src="/cricket_bullet_dark_new.png" alt="cricket" height={15} width={20} className="rounded-full hidden md:block dark:hidden" unoptimized />
              <Image src="/cricket_bullet_new.png" alt="cricket" height={15} width={20} className="rounded-full block md:hidden dark:block" unoptimized />
              <span className="text-[#E6E6DD] md:text-black dark:md:text-[#e6e6dd]">Cricket</span>
            </span>
            <span className="flex gap-2">
              <Image src="/football_bullet_dark_new.png" alt="cricket" height={15} width={20} unoptimized className="rounded-full hidden md:block dark:hidden"/>
              <Image src="/football_bullet_new.png" alt="cricket" height={15} width={20} className="rounded-full dark:block block md:hidden" unoptimized />
              <span className="text-[#E6E6DD] md:text-black dark:md:text-[#e6e6dd]">Football</span>
            </span>
            <span className="flex gap-2">
              <Image src="/casino_bullet_dark_new.png" alt="cricket" height={15} width={20} unoptimized className="rounded-full hidden md:block dark:hidden" />
              <Image src="/casino_bullet_new.png" alt="cricket" height={15} width={20} className="rounded-full dark:block block md:hidden" unoptimized />
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
                <span><Link href={"/bonanza"}>Click here to know more</Link></span>
                <Image src={"/arrow.png"} alt="arrow" width={28} height={20} />
              </div>)}
            </button>
          </div>
        </div>
        {/* <LogoImages /> */}
        <NewLogoImages />
      </div>

      <div className="mb-12 md:my-12 w-full px-4 bg-[#e6e6dd] dark:bg-black flex items-center hover:cursor-pointer text-[#E6E6DD]" onClick={() => router.push("/bonanza")}>
        <div className="flex flex-col items-center justify-center w-full md:-space-y-40">
          <Image src="/footballImageCutout.png" alt="Logo" className="w-full h-44 rounded-xl hidden md:block" width={1800} height={50} unoptimized />
          <Image src="/bonanza_mobile_3.jpeg" alt="Logo" className="w-full h-auto rounded-xl block md:hidden" width={1800} height={50} unoptimized />
          <div className="flex flex-col items-center justify-center space-y-5">
            <span className="text-3xl tracking-wider md:block hidden font-semibold">FESTIVE BONANZA</span>
            <span className="text-center hidden md:block text-sm md:text-base max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.
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

function NewLogoImages() {
  return (
    <div className="flex md:gap-4 lg:items-center flex-shrink-0">
      <div className="relative w-fit justify-center items-center mx-2">
        <Image src="/footballImage.png" alt="Logo" width={250} height={200} className="md:min-h-[240px] mt-28 mb-20 min-[425px]:min-w-[400px] md:min-w-[220px] min-[770px]:min-w-[260px] min-[900px]:min-w-[300px] min-[1100px]:min-w-[350px] xl:min-w-[400px] drop-shadow-2xl shadow-2xl shadow-[#E6E6DD40] rounded-lg hover:" unoptimized />
        <div className="absolute min-h-[172px] min-[425px]:min-h-[276px] md:min-h-[240px] xl:min-h-[276px] min-[425px]:top-[24%] top-1/3 rounded-lg bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-500 ease-in-out flex flex-col justify-end p-[5%] gap-4">
          <div className="text-white border-b border-b-white/20 w-full pb-4 text-xs sm:text-lg md:text-base">Game Card</div>
          <div className="text-[#D9D9D980]/50 italic line-clamp-3 min-[425px]:line-clamp-none text-xs sm:text-sm md:text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.
          </div>
        </div>
      </div>
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
  const [flagImages, setFlagImages] = useState<{ [key: string]: string }>({});

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/matches?listType=live");
      setFeaturedMatch(response.data[0]);

      if (!response.data?.length) {
        toast.error("Could not fetch Featured Match!");
      } else {
        fetchFlags(featuredMatch?.matchInfo);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const fetchFlags = async (featuredMatch: any) => {
    const newImagesData: { [key: string]: string } = {};

    for (const match of featuredMatch) {
      try {
        const imageId = match?.team1?.imageId;
        const imageUrl = `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg`;

        const options = {
          method: 'GET',
          url: imageUrl,
          params: { p: 'de', d: 'high' },
          headers: {
            'x-rapidapi-key': `${process.env.RAPIDAPI_KEY}`,
            'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
          },
          responseType: 'blob' as const
        };

        const response = await axios.request(options);
        const blob = response.data;

        const pngUrl = await blobToPng(blob);
        console.log(pngUrl)
        newImagesData[match?.team1?.teamId] = pngUrl;

        await delay(200);
      } catch (error) {
        console.error(`Error fetching image for article ${match?.team1?.teamId}:`, error);
      }
    }
  }

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
          <div className="lg:px-12">
            <div className="bg-black text-white dark:bg-white dark:text-black rounded-full py-1 px-2 sm:px-3 md:ml-8">Live</div>
          </div>

        </div>

        <div className="flex justify-between px-4 sm:px-8 md:px-16 lg:px-32">
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

        
        {/* <div className="flex flex-row gap-8 md:gap-0 justify-between -px-2 sm:px-8 md:px-16">
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
        </div> */}
        <div className="w-full flex items-center justify-center">
          <button className="bg-black text-white dark:bg-white italic dark:text-black rounded-lg py-1 px-2 sm:px-5 sm:py-2 w-fit" onClick={() => router.push("/analytics")}>Click here to get details</button>
        </div>
      </div>
    </>
  );
}

function TopPicks() {
  const [articlesData, setArticlesData] = useState<any>(null);
  const [imagesData, setImagesData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    getArticles();
  }, []);

  async function getArticles() {
    try {
      const response = await axios.get("/api/articles");
      const articles = response.data;

      setArticlesData(articles);

      if (!articles?.list?.length) {
        console.error("Could not fetch articles");
      } else {
        fetchImages(articles?.list);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const fetchImages = async (articles: any) => {
    const newImagesData: { [key: string]: string } = {};

    for (const article of articles) {
      try {
        const imageId = article?.story?.imageId;
        const imageUrl = `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg`;

        const options = {
          method: 'GET',
          url: imageUrl,
          params: { p: 'de', d: 'high' },
          headers: {
            'x-rapidapi-key': `${process.env.RAPIDAPI_KEY}`,
            'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
          },
          responseType: 'blob' as const
        };

        const response = await axios.request(options);
        const blob = response.data;

        const pngUrl = await blobToPng(blob);
        console.log(pngUrl)
        newImagesData[article?.story?.id] = pngUrl;

        await delay(200);
      } catch (error) {
        console.error(`Error fetching image for article ${article?.story?.id}:`, error);
      }
    }

    // console.log(newImagesData)
    setImagesData(newImagesData);
  };


  return (
    <div className="px-4 my-6 dark:text-[#E6E6DD]">
      <Toaster />
      <h2 className="my-10 font-bold text-3xl text-center md:text-left">Top Picks</h2>
      <div className="flex flex-col items-center w-full md:flex-row justify-center flex-wrap gap-10">
        {/* {Array.from({ length: 6 }).map((_, index) => (
          <PickCard key={index} />
        ))} */}
        {
          articlesData?.list?.map((article: any, index: number) => {
            return (
              <PickCard key={index}
                title={article?.story?.hline}
                description={article?.story?.intro}
                imageUrl={imagesData[article?.story?.id]}
                date={new Date(Number(article?.story?.pubTime ?? 0)).toLocaleString()}
                id={article?.story?.id ?? 0}
              />
            );
          })
        }
      </div>
    </div>
  );
}

type PickCardProps = {
  title: any;
  description: any;
  imageUrl: any;
  date: any;
  id: any;
};

function PickCard({ title, description, imageUrl, date, id }: PickCardProps) {
  const router = useRouter();

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
    <div className="flex hover:cursor-pointer hover:bg-white/50 dark:hover:bg-[#45474A66]/40 p-4 rounded-md flex-row items-center md:items-start max-w-[300px] md:min-w-[350px] md:max-w-[350px] lg:max-w-[400px] md:flex-row gap-4 lg:min-w-[400px] md:max-h-[150px]" onClick={() => router.push(`/cricket-article/${id}`)}>
      <div>
        <Image src={imageUrl} className="min-w-[120px] md:min-w-[134px] md:h-auto object-contain" alt="Loading" width={134} height={90} />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="font-bold line-clamp-2 text-xs sm:text-sm md:text-base">{title}</h2>
        <p className="text-xs sm:text-sm italic line-clamp-2 text-center md:text-left">{description}</p>
      </div>
    </div>
  );
}

function ExcitingOffers() {
  return (
    <div className="px-4 sm:px-8 pt-6 pb-12 md:pb-20 dark:text-[#E6E6DD]">
      <h2 className="my-20 font-bold text-3xl text-center md:text-left">Exciting Offers</h2>
      <div className="flex flex-col md:flex-row gap-8 lg:gap-2 xl:gap-4 md:justify-between">
          {/* {Array.from({ length: 3 }).map((_, index) => (
            <OfferCard key={index} />
          ))} */}
          <span className="md:block hidden"><OfferCard /></span>
          <span className="lg:block hidden"><OfferCard /></span>
          <span className="flex justify-evenly md:block">
            <Image src="/offer_arrow.png" height={40} width={40} className="h-auto object-contain md:hidden dark:hidden" alt="prev" />
            <Image src="/offer_arrow_dark.png" height={40} width={40} className="h-auto object-contain hidden dark:block dark:md:hidden" alt="prev" />
            <OfferCard />
          </span>
        <div className="flex flex-col justify-center items-center md:flex-grow-1">
          <p className="p-4 md:text-sm text-[#45474A] dark:text-[#E6E6DD] font-medium text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.
          </p>
          {/* <button className="hidden mx-20 my-8 border-2 p-4 bg-black dark:bg-[#45474A] dark:text-[#E6E6DD] text-white italic border-black rounded-xl lg:w-72 md:flex items-center justify-center space-x-2">
            <Image src={"/arrow.png"} alt="arrow" width={20} height={20} className="rotate-180" />
            <span>Click here <span className="hidden md:inline">to know more</span></span>
          </button> */}
          <Button className="hidden md:flex dark:bg-white px-6 py-3 gap-3 rounded-lg justify-center">
            <Image src={"/arrow.png"} alt="arrow" width={20} height={20} className="rotate-180" />
            <span>Click here to know more</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

function OfferCard() {
  return (
    <div className="relative w-fit justify-center items-center mx-2 hover:shadow shadow-black dark:shadow-white">
      <Image src="/footballImage.png" alt="Logo" width={400} height={500} className="w-auto lg:max-w-52 lg:min-h-[240px] xl:max-w-[300px] max-w-[260px] min-[400px]:max-w-[300px]  min-[500px]:max-w-[400px] min-[600px]:max-w-[500px] md:max-w-[200px] md:min-h-[240px] xl:min-h-[320px] my-2 rounded-lg " unoptimized />
      <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-500 ease-in-out flex flex-col justify-end p-[10%] gap-4">
        <div className="text-white border-b border-b-white/20 w-full pb-4 text-xs sm:text-lg md:text-base">Game Card</div>
        <div className="text-[#D9D9D980]/50 italic text-xs line-clamp-3 min-[425px]:line-clamp-none sm:text-sm md:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. 
        </div>
      </div>
    </div>
  );
}
