import Image from "next/image";

export default function HotTopics() {
  const topics = [
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. Turpis donec amet proin"
    },
    {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. Turpis donec amet proin"
    }, {
      title: "Indian Premier League",
      description: "“Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. Turpis donec amet proin"
    }
  ];

  return (
    <div className="flex flex-col gap-12 items-center rounded-xl max-w-screen mb-8 lg:bg-white/40 py-12 px-8">
      
      <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-center">Hot Topics</h2>

      <div className="flex md:flex-col flex-row md:items-center overflow-x-scroll max-w-60 md:overflow-x-auto justify-between gap-4">

        {topics.map(topic => {
          return (
            <div className="flex flex-col md:items-center border-b-2 py-4 border-[#45474A] gap-4 justify-between">
              <Image src="/ad.png" alt="advertisement" className="min-w-[161px]" height={126} width={213} />
              <div className="flex flex-col gap-2 items-center">
                <h4 className="font-semibold text-base sm:text-lg lg:text-xl">{topic.title}</h4>
                <div className="text-wrap font-normal text-sm text-[#45474A]">
                  {topic.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}