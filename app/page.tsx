import ArticleCard from "@/components/ui/articleCard";
import Image from "next/image";

export default function Home() {
  const currentDate = new Date().toLocaleString(); // Properly get the current date and time

  return (
    <>
      <ArticleCard
        title="Virat Kohli is the Greatest"
        description="He is a right-handed batsman and a great fielder with an ordinary record in captaincy."
        date={currentDate}
        imageUrl="https://placehold.it/300x200" // Correct URL
      />
    </>
  );
}
