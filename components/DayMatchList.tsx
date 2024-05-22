import MatchCard from "./MatchCard";

interface DayMatchListProps {
  data: any[];
}

export default function DayMatchList({ data }: DayMatchListProps) {
  return (
    <div className="flex flex-col gap-10">
      {data?.map((schedule, index:number) => (
        <div key={index}>
          <div className="flex items-center gap-4 py-4 border-b-2 border-black/40 dark:border-[#E6E6DD80]">
            <div className="text-3xl xl:text-5xl font-bold">{new Date(schedule?.scheduleAdWrapper?.date).getDate()}</div>
            <div className="flex font-medium dark:text-[#E6E6DD] text-sm md:text-base lg:text-lg xl:text-xl flex-col">
              <h3>{new Date(schedule?.scheduleAdWrapper?.date).toLocaleString('default', { month: 'long' })}</h3>
              <h3>{new Date(schedule?.scheduleAdWrapper?.date).toLocaleString('default', { weekday: 'long' })}</h3>
            </div>
          </div>
          {schedule?.scheduleAdWrapper?.matchScheduleList?.map((match:any, matchIndex:number) => (
            <MatchCard key={matchIndex} match={match} />
          ))}
        </div>
      ))}
    </div>
  );
}
