import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DayMatchList from "@/components/DayMatchList";
import CasinoList from "@/components/CasinoList";

export default function Casino() {
  return (
    <div className="bg-[#E6E6DD] min-h-screen">
      <Navbar />

      <div className="flex flex-col gap-20 px-4 py-4 sm:px-10 sm:py-8 lg:px-20 lg:py-16">
        
        <div className="px-32 flex flex-col gap-20">
            <div className="flex justify-center mt-4 font-bold text-4xl">
              <h1>CASINO</h1>
            </div>

            <div className="flex bg-white/40 px-1 py-1 rounded-full">
              <Image src="/search.png" className="ml-4 object-contain" alt="search" width={18} height={18} />
              <Input type="search" className="rounded-full mx-4 border-0 focus-visible:ring-0 bg-transparent" />
              <Button className="rounded-full">Search</Button>
            </div>
        </div>

        <div className="flex-grow">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex w-full justify-between bg-transparent">
              <TabsTrigger className="flex-grow" variant={"outline"} value="all">All Casino</TabsTrigger>
              <TabsTrigger className="flex-grow" variant={"outline"} value="cricket">Cricket</TabsTrigger>
              <TabsTrigger className="flex-grow" variant={"outline"} value="football">Football</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="flex w-full flex-col px-12 gap-10">
              <CasinoList type="all" />
            </TabsContent>
            <TabsContent value="cricket" className="flex w-full flex-col px-12 gap-10">
              <CasinoList type="cricket" />
            </TabsContent>
            <TabsContent value="football" className="flex w-full flex-col px-12 gap-10">
              <CasinoList type="football" />
            </TabsContent>
          </Tabs>
        </div>

      </div>

    </div>
  );
}