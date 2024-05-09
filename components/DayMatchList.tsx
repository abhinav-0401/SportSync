import MatchCard from "./MatchCard";

export default function DayMatchList() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-4 py-4 border-b-2 border-black/40">
        <div className="text-3xl xl:text-5xl font-bold">26</div>
        <div className="flex font-medium text-sm md:text-base lg:text-lg xl:text-xl flex-col">
          <h3>April</h3>
          <h3>Tuesday</h3>
        </div>
      </div>

      <MatchCard />
      <MatchCard />
    </div>
  );
}