import Image from "next/image";

export default function AdCard() {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white/60 py-7 px-8">
      <h3>Advertisement</h3>
      <div>
        <Image src="/ad.png" alt="advertisement" height={126} width={213} />
        <div className="flex flex-col gap-2">
          <h4>Indian Premier League</h4>
          <div className="text-wrap">
            “Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Turpis donec amet proin 
          </div>
        </div> 
      </div>
    </div>
  );
}