"use client";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  const router = useRouter();
  const clickHandler = () => {
    router.push('/');
  }
  const themeChange = () => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }
  return (
    <nav className="sticky top-0 h-14 md:h-20 flex justify-center z-50 items-center border-b dark:border-[#F5F5F580] border-black dark:bg-black bg-[#E6E6DD] px-6 py-4 sm:px-10 rounded-2xl sm:py-8 lg:px-20">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <Image src="/logoBlack.png" alt="navbar logo" width={94} height={44} className="dark:hidden cursor-pointer" onClick={clickHandler} />
          <Image src="/logonobg.png" alt="navbar logo" width={94} height={44} className="hidden dark:block cursor-pointer" onClick={clickHandler} />
        </div>

        <ul className="hidden md:flex gap-10 items-center">
          <li><Link href="/cricket" className="text-black dark:text-black md:dark:text-[#E6E6DD] hover:text-gray-700">Cricket</Link></li>
          <li><Link href="/football" className="text-black dark:text-black md:dark:text-[#E6E6DD] hover:text-gray-700">Football</Link></li>
          <li><Link href="/casino" className="text-black dark:text-black md:dark:text-[#E6E6DD] hover:text-gray-700">Casino</Link></li>
          <li><Link href="/cricket-article" className="text-black dark:text-black md:dark:text-[#E6E6DD] hover:text-gray-700">Articles</Link></li>
          {/* <li><Link href="/favourites" className="text-black dark:text-[#E6E6DD] hover:text-gray-700">Favourites</Link></li> */}
          {/* <li>
            <button className="text-black flex items-center dark:text-black md:dark:text-[#E6E6DD] font-semibold" onClick={themeChange}>
              {
                theme === 'light'
                ? <Image src={"/dark_mode_thumb.png"} alt="change theme to dark mode" height={30} width={30} />
                : <Image src={"/light_mode_thumb.png"} alt="change theme to ligh mode" height={30} width={30} />
              }
            </button>
          </li> */}
          
          <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
            <span className="relative">
              <input id="Toggle1" type="checkbox" className="hidden peer" onClick={themeChange} />
              <div className="w-12 h-6 rounded-full shadow-inner bg-[#FFFFFF99] dark:bg-[#45474A] peer-checked:dark:bg-violet-600">
              {
                theme === 'dark'
                && <Image src={"/dark_mode_thumb.png"} alt="change theme to dark mode" height={20} width={20} className="pt-0.5 ml-0.5" />
              }
              </div>
              <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto">
                {theme === "light" && <Image src={"/light_mode_thumb.png"} alt="change theme to ligh mode" height={20} width={20} />}
              </div>
            </span>
          </label>

        </ul>
      </div>

      <Sheet>
        <SheetTrigger>
          <Image src="/hamburger.png" alt="menu button" width={30} height={20} className="dark:hidden md:hidden" />
          <Image src="/hamburger-new.png" alt="menu button" width={30} height={20} className="hidden dark:block dark:md:hidden" />
        </SheetTrigger>
        <SheetContent className="bg-[#e6e6dd] dark:bg-black dark:text-[#E6E6DD]">
          <SheetHeader>
            <SheetTitle className="text-black">Menu</SheetTitle>
          </SheetHeader>
          <ul className="pt-6 flex flex-col gap-4 text-lg">
            <li><Link href="/cricket" className="text-black hover:text-black/40 dark:text-[#E6E6DD]">Cricket</Link></li>
            <li><Link href="/football" className="text-black hover:text-black/40 dark:text-[#E6E6DD]">Football</Link></li>
            <li><Link href="/casino" className="text-black hover:text-black/40 dark:text-[#E6E6DD]">Casino</Link></li>
            <li><Link href="/cricket-article" className="text-black hover:text-black/40 dark:text-[#E6E6DD]">Articles</Link></li>
            {/* <li><Link href="/favourites" className="hover:text-black/40">Favourites</Link></li> */}
            {/* <li>
              <button className="text-black font-bold text-2xl dark:text-[#E6E6DD]" onClick={themeChange}>
                {
                  theme === 'light'
                    ? <Image src={"/dark_mode_thumb.png"} alt="change theme to dark mode" height={30} width={30} />
                    : <Image src={"/light_mode_thumb.png"} alt="change theme to ligh mode" height={30} width={30} />
                }
              </button>
            </li> */}
            <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
            <span className="relative">
              <input id="Toggle1" type="checkbox" className="hidden peer" onClick={themeChange} />
              <div className="w-12 h-6 rounded-full shadow-inner bg-[#FFFFFF99] dark:bg-[#45474A] peer-checked:dark:bg-violet-600">
              {
                theme === 'dark'
                && <Image src={"/dark_mode_thumb.png"} alt="change theme to dark mode" height={20} width={20} className="pt-0.5 ml-0.5" />
              }
              </div>
              <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto">
                {theme === "light" && <Image src={"/light_mode_thumb.png"} alt="change theme to ligh mode" height={20} width={20} />}
              </div>
            </span>
          </label>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}