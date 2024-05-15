import AdCard from "@/components/AdCard";
import FeaturedCard from "@/components/FeaturedCard";
import HotTopics from "@/components/HotTopics";
import MatchStats from "@/components/MatchStats";
import MatchSummary from "@/components/MatchSummary";
import ScoreCard from "@/components/ScoreCard";
import TableSection from "@/components/TableSection";
import TeamStats from "@/components/TeamStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function Analytics() {
  return (
    <div className="bg-[#E6E6DD] dark:bg-black min-h-screen flex flex-col gap-20 px-4 py-4 sm:px-10 sm:py-8 lg:px-12 lg:py-16 dark:text-[#E6E6DD]">
      <div className="flex justify-center mt-4 font-bold text-4xl">
        <h1>ANALYTICS</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between">

        <div className="flex flex-col gap-10 flex-grow">
          <div className="">
            <Tabs defaultValue="live" className="w-full">
              <TabsList className="flex w-full justify-between bg-transparent overflow-x-scroll">
                <TabsTrigger className="flex-grow" variant={"outline"} value="live">Live</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="summary">Summary</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="score">Score Card</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="stats">Stats</TabsTrigger>
                <TabsTrigger className="flex-grow" variant={"outline"} value="table">Table</TabsTrigger>
              </TabsList>
              <TabsContent value="live" className="flex w-full flex-col px-4 gap-12 md:gap-16 lg:gap-20">
                <MatchStats />
                <div className="flex items-start flex-col justify-center w-full space-y-10">
                  <span className="font-medium text-lg">Live Win Probability</span>
                  <div className="w-full flex items-center justify-center space-x-5">
                    <span className="w-fit">IND</span>
                    <div className="w-full flex items-center justify-center">
                      <div className="border-2 border-[#9ABE9A] w-3/4"></div>
                      <div className="border-2 border-[#FF5E57] w-1/4"></div>
                    </div>
                    <span className="w-fit">ENG</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="summary" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
                <MatchSummary />
              </TabsContent>
              <TabsContent value="score" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
                <ScoreCard />
              </TabsContent>
              <TabsContent value="stats" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
                <TeamStats />
              </TabsContent>
              <TabsContent value="table" className="flex w-full flex-col px-4 md:px-8 lg:px-12 gap-10">
                <TableSection />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="flex flex-col w-full items-center gap-10 lg:max-w-[300px] lg:min-w-[200px]">

          {/* advertisement */}
          <AdCard />
          <FeaturedCard />
          <HotTopics />

        </div>
      </div>

    </div>
  );
}