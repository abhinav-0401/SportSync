import Image from "next/image";

export default function MatchSummary() {
  return (
    <div className="flex flex-col gap-8">

      <div className="flex flex-col items-start gap-8">

        <h3 className="font-bold text-xl text-center w-full md:text-left">Summary</h3>

      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <Image src="/analytics-summary.png" alt="summary" className="max-w-[150px]" height={177} width={182} unoptimized />

        <div className="flex flex-col gap-2 sm:gap-4 md:gap-8">
          <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">England premier league</h3>
          <div className="font-normal text-base md:text-lg lg:text-xl text-[#45474A] dark:text-[#E6E6DD]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Risus eget morbi a commodo
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet....
          </div>
        </div>
      </div>

      <div className="font-normal text-base md:text-lg lg:text-xl text-[#45474A] dark:text-[#E6E6DD]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Risus eget morbi a commodo
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet....
      </div>

      <div className="font-normal text-base md:text-lg lg:text-xl text-[#45474A] dark:text-[#E6E6DD]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Risus eget morbi a commodo
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet....
      </div>

    </div>
  );
}