import Image from "next/image";

export default function AdCard() {
  return (
    <div className="md:flex flex-col items-center justify-center gap-4 hidden rounded-xl bg-white/60 dark:bg-[#45474A80] py-7 px-8">
      <h3 className="font-semibold">Advertisement</h3>
      <div>
        <Image src="/ad.png" alt="advertisement" height={126} width={213} unoptimized />
        <div className="flex flex-col gap-2 pt-3">
          <h4>Indian Premier League</h4>
          <div className="text-wrap dark:text-[#E6E6DDCC]">
            “Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Turpis donec amet proin 
          </div>
        </div>
      </div>
    </div>
  );
}
