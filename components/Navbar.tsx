"use client"
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const clickHandler = () => {
    router.push('/');
  }
  return (
    <nav className="sticky top-0 h-14 md:h-20 flex justify-end border-b rounded-2xl border-black md:justify-between bg-[#E6E6DD] px-6 py-4 sm:px-10 sm:py-8 lg:px-20">
      <Image src="/logo-nav.png" className="min-h-[30px] max-h-[44px] hidden md:block" alt="navbar logo" width={94} height={44} />
      <ul className="">
        <div className="hidden md:flex gap-4">
          <li><Link href="/cricket">Cricket</Link></li>
          <li>Football</li>
          <li>Casino</li>
          <li>Favourites</li>
          <li>Sign up</li>
        </div>
        <Sheet>
          <SheetTrigger>
            <Image src="/hamburger.png" alt="menu button" className="w-30 md:hidden" height={10} width={20} />
          </SheetTrigger>
          <SheetContent className="bg-[#E6E6DD]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <ul className="pt-6 flex flex-col gap-4 text-l">
              <li className="hover:text-black/40"><Link href="/cricket">Cricket</Link></li>
              <li className="hover:text-black/40">Football</li>
              <li className="hover:text-black/40">Casino</li>
              <li className="hover:text-black/40">Favourites</li>
              <li className="hover:text-black/40">Sign up</li>
            </ul>
          </SheetContent>
        </Sheet>
      </ul>
    </nav>
  );
}
