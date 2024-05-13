
  "use client"
  import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const clickHandler = () => {
    router.push('/');
  }
  const themeChange = () => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }
  return (
    <nav className="sticky top-0 h-14 md:h-20 flex justify-center z-50 items-center border-b dark:border-[#F5F5F580] border-black dark:bg-[#D9D9D9] md:dark:bg-black bg-[#E6E6DD] px-6 py-4 sm:px-10 sm:py-8 lg:px-20">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <Image src="/logonobg.png" alt="navbar logo" width={94} height={44} className="hidden md:dark:block cursor-pointer" onClick={clickHandler} />
          <Image src="/logoBlack.png" alt="navbar logo" width={94} height={44} className="hidden dark:hidden md:block cursor-pointer" onClick={clickHandler} />
        </div>

        <ul className="hidden md:flex gap-10 items-center">
          <li><Link href="/cricket" className="text-black dark:text-black md:dark:text-[#E6E6DD] hover:text-gray-700">Cricket</Link></li>
          <li><Link href="/football" className="text-black dark:text-black md:dark:text-[#E6E6DD] hover:text-gray-700">Football</Link></li>
          <li><Link href="/casino" className="text-black dark:text-black md:dark:text-[#E6E6DD] hover:text-gray-700">Casino</Link></li>
          {/* <li><Link href="/favourites" className="text-black dark:text-[#E6E6DD] hover:text-gray-700">Favourites</Link></li> */}
          <li>
            <button className="text-black dark:text-black md:dark:text-[#E6E6DD] font-semibold" onClick={themeChange}>{theme === 'light' ? "Dark" : "Light"} Mode</button>
          </li>
        </ul>
      </div>

      <Sheet>
        <SheetTrigger>
          <Image src="/hamburger.png" alt="menu button" width={30} height={20} className="md:hidden" />
        </SheetTrigger>
        <SheetContent className="bg-[#D9D9D9]">
          <SheetHeader>
            <SheetTitle className="text-black">Menu</SheetTitle>
          </SheetHeader>
          <ul className="pt-6 flex flex-col gap-4 text-lg">
            <li><Link href="/cricket" className="text-black hover:text-black/40">Cricket</Link></li>
            <li><Link href="/football" className="text-black hover:text-black/40">Football</Link></li>
            <li><Link href="/casino" className="text-black hover:text-black/40">Casino</Link></li>
            {/* <li><Link href="/favourites" className="hover:text-black/40">Favourites</Link></li> */}
            <li><button className="text-black dark:text-black font-bold text-2xl" onClick={themeChange}>{theme==='light' ? "Dark": "Light" }</button></li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}