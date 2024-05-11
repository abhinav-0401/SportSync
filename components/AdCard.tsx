import Image from "next/image";

export default function AdCard() {
  return (
    // Set a specific width and use 'auto' for height to maintain aspect ratio or control it as needed
    <div className="md:flex flex-col gap-3 pb-8 items-center justify-between hidden rounded-xl dark:bg-[#45474a80] bg-white/60 py-3 px-0"
      style={{ maxWidth: '280px', minHeight: '200px' }}>
      <span className="font-semibold text-lg dark:text-[#E6E6DD] ">Advertisement</span>
      <div className="flex flex-col items-center">
        <Image src="/ad.png" alt="advertisement" height={126} width={233} />
        <div className="flex flex-col ml-7 mt-2">
          <span className="font-semibold text-lg dark:text-[#E6E6DD]">Indian Premier League</span>
          <div className="font-normal text-xs dark:text-[#E6E6DD]">
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Turpis donec amet proin onsectetur adipiscing elit. Turpis donec amet proin
          </div>
        </div>
      </div>
    </div>
  );
}
