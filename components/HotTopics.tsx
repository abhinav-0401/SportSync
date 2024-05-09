import Image from "next/image";

export default function HotTopics() {
  return (
    <div className="flex flex-col gap-12 items-center rounded-xl overflow-x-scroll lg:bg-white/60 py-12 px-8">
      
      <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-center">Hot Topics</h2>

      <div className="flex md:flex-col flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col md:items-center border-b-2 py-4 border-[#45474A] gap-4">
          <Image src="/ad.png" alt="advertisement" className="min-w-[161px]" height={126} width={213} />
          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold text-base sm:text-lg lg:text-xl">Indian Premier League</h4>
            <div className="text-wrap font-normal text-sm text-[#45474A]">
              “Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Turpis donec amet proin
            </div>
          </div>
        </div>

        <div className="flex flex-col md:items-center border-b-2 py-4 border-[#45474A] gap-4 justify-between">
          <Image src="/ad.png" alt="advertisement" className="min-w-[161px]" height={126} width={213} />
          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold text-base sm:text-lg lg:text-xl">Indian Premier League</h4>
            <div className="text-wrap font-normal text-sm text-[#45474A]">
              “Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Turpis donec amet proin
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}