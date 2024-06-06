import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CasinoList from "@/components/CasinoList";

export default function Casino() {
  return (
    <div className="bg-[#E6E6DD] dark:bg-black min-h-screen">
      <div className="flex flex-col gap-20 px-4 py-4 sm:px-10 sm:py-8 lg:px-20 lg:py-10">
        
        <div className="px-8 sm:px-16 md:px-24 lg:px-32 flex flex-col gap-10">
            <div className="flex justify-center mt-4 font-bold text-4xl">
              <h1>CASINO</h1>
            </div>

          <div className="flex bg-white/65 dark:bg-[#45474A80] px-1 py-1 rounded-full">
              <Image src="/search.png" className="ml-4 object-contain" alt="search" width={18} height={18} />
              <Input type="search" placeholder="Best Casino Bars" className="rounded-full mx-4 border-0 focus-visible:ring-0 bg-transparent" />
              <Button className="px-10 dark:bg-white rounded-full">Search</Button>
            </div>
        </div>

        <div className="flex-grow">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex w-full justify-between bg-transparent">
              <TabsTrigger className="flex-grow" variant={"outline"} value="all">All Casino</TabsTrigger>
              <TabsTrigger className="flex-grow" variant={"outline"} value="top">Top Casinos</TabsTrigger>
              <TabsTrigger className="flex-grow" variant={"outline"} value="hot">Hot Casinos</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="flex w-full flex-col px-12 gap-10">
              <CasinoList type="all" />
            </TabsContent>
            <TabsContent value="top" className="flex w-full flex-col px-12 gap-10">
              <CasinoList type="top" />
            </TabsContent>
            <TabsContent value="hot" className="flex w-full flex-col px-12 gap-10">
              <CasinoList type="hot" />
            </TabsContent>
          </Tabs>
        </div>

      </div>

    </div>
  );
}