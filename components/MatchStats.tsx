import Image from "next/image";

export default function MatchStats() {
  return (
    <div className="pt-4 sm:pt-8 md:pt-16 lg:pt-24 flex flex-col gap-12">

      <div className="flex flex-col items-start gap-8">

        <div className="bg-black text-white rounded-full py-1 px-2 sm:px-3 md:ml-8">Live</div>

      </div>

      <div className="flex justify-between px-4 sm:px-8 md:px-16">
        <div className="flex gap-4">
          {/* img + country name */}
          <div className="flex flex-col gap-2 md:gap-4">
            <Image src="/india.png" alt='india' width={36} height={24} />
            <div className="font-semibold text-sm sm:text-base md:text-lg">IND</div>
          </div>
          <div className="font-medium text-sm sm:text-base md:text-lg">198/3</div>
        </div>
        <div className="flex gap-4">
          {/* img + country name */}
          <div className="font-medium text-sm min-[370px]:text-base md:text-lg">Yet to Bat</div>
          <div className="flex flex-col gap-2 md:gap-4">
            <Image src="/england.png" alt='india' width={36} height={24} />
            <div className="font-semibold text-sm sm:text-base md:text-lg">ENG</div>
          </div>
        </div>
      </div>

      <div className="text-center font-medium text-lg">IND chose to bat</div>

      {/* scores */}
      <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between px-4 sm:px-8 md:px-16">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 font-semibold text-sm md:text-base">
            <span>KL Rahul</span>
            <span>20* (19)</span>
          </div>
          <div className="flex gap-2 font-normal text-sm md:text-base">
            <span>MS DHONI</span>
            <span>56* (50)</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 md:text-base text-sm">
            <span>20* (19)</span>
            <span>KL Rahul</span>
          </div>
          <div className="flex gap-2 text-sm md:text-base">
            <span>56* (50)</span>
            <span>MS DHONI</span>
          </div>
        </div>
      </div>
    </div>
  );
}