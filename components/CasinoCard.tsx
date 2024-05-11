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


interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

export default function CasinoCard({ title, description, imageUrl }: Props) {
  return (
    <div className="flex max-h-[500px] flex-col max-w-[350px] items-center gap-5 p-5 pb-8 bg-white/66 dark:bg-[#45474a80] rounded-xl border border-solid border-gray-300/66 shadow-lg">
      <div className="min-w-full">
        <Image src={imageUrl} className='' alt={title} width={350} height={250} />
      </div>
      <div className="flex flex-col gap-2 px-2">
        <div className="text-xl md:text-2xl font-semibold dark:text-[#E6E6DD] text-black">{title}</div>
        <p className="text-gray-700 h-[120px] dark:text-[#E6E6DD] text-ellipsis overflow-y-hidden">{description}</p>
        <span className='md:hidden'>...</span>
      </div>
      <div className="flex w-full justify-end">
        <Dialog>
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
        </Dialog>

      </div>
    </div>

  );
}

// md:min-w-48 md:min-h-32