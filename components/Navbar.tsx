
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
    <nav className="sticky top-0 h-14 md:h-20 flex justify-center items-center border-b dark:border-[#F5F5F5] border-black dark:bg-black bg-[#E6E6DD] px-6 py-4 sm:px-10 sm:py-8 lg:px-20">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <Image src="/logo-nav.png" alt="navbar logo" width={94} height={44} className="hidden md:block cursor-pointer" onClick={clickHandler} />
        </div>

        <ul className="hidden md:flex gap-10 items-center">
          <li><Link href="/cricket" className="text-black dark:text-[#E6E6DD] hover:text-gray-700">Cricket</Link></li>
          <li><Link href="/football" className="text-black dark:text-[#E6E6DD] hover:text-gray-700">Football</Link></li>
          <li><Link href="/casino" className="text-black dark:text-[#E6E6DD] hover:text-gray-700">Casino</Link></li>
          <li><Link href="/favourites" className="text-black dark:text-[#E6E6DD] hover:text-gray-700">Favourites</Link></li>
          <li>
            <button className="text-black dark:text-[#E6E6DD]" onClick={themeChange}>{theme === 'light' ? "Dark" : "Light"} Mode</button>
          </li>
        </ul>
      </div>

      <Sheet>
        <SheetTrigger>
          <Image src="/hamburger.png" alt="menu button" width={30} height={20} className="md:hidden" />
        </SheetTrigger>
        <SheetContent className="bg-[#E6E6DD]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <ul className="pt-6 flex flex-col gap-4 text-lg">
            <li><Link href="/cricket" className="hover:text-black/40">Cricket</Link></li>
            <li><Link href="/football" className="hover:text-black/40">Football</Link></li>
            <li><Link href="/casino" className="hover:text-black/40">Casino</Link></li>
            <li><Link href="/favourites" className="hover:text-black/40">Favourites</Link></li>
            <li><button className="text-black dark:text-[#E6E6DD] font-bold text-2xl" onClick={themeChange}>{theme==='light' ? "Dark": "Light" }</button></li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}