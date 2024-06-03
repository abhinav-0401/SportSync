import Image from "next/image";
import Link from "next/link";

export default function MobileFooter() {
  return (
    <div className="md:hidden flex flex-col px-8 min-[400px]:px-12 items-center bg-[#e6e6dd] dark:bg-black">

      <div className="flex flex-col items-center gap-4 border-b border-[#45474A66] py-8 dark:border-[#e6e6dd]">
        <div>
          <Image src="/logo-mobile-footer-dark.png" className="hidden dark:block" alt="mobile footer logo" width={108} height={48} />
          <Image src="/logo-mobile-footer-light.png" className="dark:hidden" alt="mobile footer logo" width={108} height={48} />
        </div>

        <div className="text-center max-w-md font-normal text-sm sm:text-base dark:text-[#e6e6dd]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra.
        </div>
        <div className="flex gap-4 items-center">
          <span>
            <Image src="/insta-mobile-footer-light.png" className="dark:hidden" alt="instagram" width={35} height={35} />
            <Image src="/insta-mobile-footer-dark.png" className="hidden dark:block" alt="instagram" width={35} height={35} />
          </span>
          <span>
            <Image src="/fb-mobile-footer-light.png" className="dark:hidden" alt="instagram" width={35} height={35} />
            <Image src="/fb-mobile-footer-dark.png" className="hidden dark:block" alt="instagram" width={35} height={35} />
          </span>
          <span>
            <Image src="/x-mobile-footer-light.png" className="dark:hidden" alt="instagram" width={35} height={35} />
            <Image src="/x-mobile-footer-dark.png" className="hidden dark:block" alt="instagram" width={35} height={35} />
          </span>
          <span>
            <Image src="/in-mobile-footer-light.png" className="dark:hidden" alt="instagram" width={35} height={35} />
            <Image src="/in-mobile-footer-dark.png" className="hidden dark:block" alt="instagram" width={35} height={35} />
          </span>
        </div>        
      </div>

      <div className="flex justify-between sm:px-4 py-8 text-sm sm:text-base dark:text-[#e6e6dd] w-full max-w-md">

        <div className="flex flex-col gap-2 items-center">
          <h3 className="font-bold">QUICK LINKS</h3>
          <div className="flex gap-4">
            <span><Link href={"/"}>Home</Link></span>
            <span><Link href={"/football"}>Football</Link></span>
          </div>
          <div className="flex gap-4">
            <span><Link href={"/cricket"}>Cricket</Link></span>
            <span><Link href={"/casino"}>Casino</Link></span>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h3 className="font-bold">CONTACT US</h3>
          <div className="flex gap-4">
            <span>+(91)592844566</span>
          </div>
          <div className="flex gap-4">
            <span><Link href={"/cricket"}>Cricket</Link></span>
          </div>
        </div>

      </div>

    </div>
  );
}