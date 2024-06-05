"use client"

import Image from "next/image";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  redirectUrl: string;
}

export default function CasinoCard({ title, description, imageUrl, redirectUrl }: Props) {
  const router = useRouter();

  const [readMore, setReadMore] = useState(false);

  return (
    <div className={readMore ? "flex max-h-fit min-h-[500px] flex-col max-w-[350px] items-center gap-5 p-5 pb-8 bg-white/66 dark:bg-[#45474a80] rounded-xl border border-solid border-gray-300/66 shadow-lg" : "flex max-h-[500px] min-h-[500px] flex-col max-w-[350px] items-center gap-5 p-5 pb-8 bg-white/66 dark:bg-[#45474a80] rounded-xl border border-solid border-gray-300/66 shadow-lg"}>
      <div className="min-w-full">
        <Image src={imageUrl === "" ? "/article-1.png" : imageUrl} className='rounded-lg' alt={title} width={350} height={250} />
      </div>
      <div className="flex flex-1 flex-col justify-between h-full">
        <div className="flex flex-col gap-2 px-2">
          <div className="text-xl md:text-2xl font-semibold dark:text-[#E6E6DD] text-black">{title}</div>
          <p className="text-gray-700 h-fit dark:text-[#E6E6DD] text-ellipsis overflow-y-hidden">
            <span className={readMore ? 'line-clamp-none' : 'line-clamp-4'}>{description}</span>
            <span className='text-[#3E6BEC] font-semibold hover:opacity-50 cursor-pointer' onClick={() => setReadMore(!readMore)}>{readMore ? "Read Less" : "Read More"}</span>
          </p>
          <span className='md:hidden'>...</span>
        </div>
        <div className="flex w-full justify-end">
          <Button className="bg-black dark:bg-[#E6E6DD] dark:text-black text-white text-lg px-12 py-2 rounded-xl"><a target="_blank" href={`http://${redirectUrl}`}>Play</a></Button>
          {/* <Dialog>
            <DialogTrigger className="bg-black dark:bg-[#E6E6DD] dark:text-black text-white px-12 py-2 rounded-xl ">Play</DialogTrigger>
            <DialogContent className="backdrop-blur-lg bg-[#E6E6DD]/50">
              <DialogHeader className="w-full">
                <DialogTitle className="text-center">Enter Details</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-8 px-2">
                <div className="flex flex-col gap-4">
                  <h3 className="font-medium text-xl">Title</h3>
                  <Input type="text" className="bg-[#45474A]/20 font-medium rounded-lg focus-visible:ring-0" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-medium text-xl">Key words</h3>
                  <Input type="text" className="bg-[#45474A]/20 font-medium rounded-lg focus-visible:ring-0" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-medium text-xl">Content</h3>
                  <Textarea rows={4} className="bg-[#45474A]/20 font-medium rounded-lg focus-visible:ring-0" />
                </div>
                <div className="w-full flex justify-end pb-2">
                  <Button>Save Changes</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog> */}
        </div>
      </div>
    </div>

  );
}

// md:min-w-48 md:min-h-32