import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    // <div className="flex flex-col items-center justify-center w-full bg-black -space-y-[500px]">
    //   <div className="w-full flex items-center justify-center">
    //     <Image src={"/footerbgblack.png"} alt="footerBg" width={500} height={500} unoptimized className="opacity-40 w-[90vw] h-[700px]" />
    //   </div>
    <div className="bg-black flex flex-col md:flex-row justify-evenly px-6 py-4 sm:px-10 sm:py-8 lg:px-20 lg:py-16 gap-8 md:gap-0 w-full dark:bg-[url('../public/footerbglessopacity.png')] bg-no-repeat bg-center bg-cover bg-[url('../public/whiteThemeLogo.png')]">
      <div className="flex flex-1 flex-col justify-between gap-4">
        <h3 className="font-semibold text-xl">ABOUT US</h3>
        <div>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis<br></br> donec amet proin auctor nec in diam aenean viverra. Risus eget morbi a commodo 
        </div>
        <div className="flex gap-4 bg-blend-exclusion">
          <Image src="/insta.png" className="bg-blend-exclusion" alt="instagram" height={20} width={28} unoptimized />
          <Image src="/fb.png" className="bg-blend-exclusion" alt="facebook" height={20} width={20} unoptimized />
          <Image src="/twitter.png" className="bg-blend-exclusion" alt="twitter" height={20} width={20} unoptimized />
          <Image src="/linkedinLogo.png" className="bg-blend-exclusion" alt="linkedin" height={20} width={20} unoptimized />
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-1 justify-between gap-4">

        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-xl">HELP</h3>
          <ul className="flex flex-col gap-4">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-xl text-nowrap">QUICK LINKS</h3>
          <ul className="flex flex-col gap-4">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href="/cricket">Cricket</Link></li>
            <li>Football</li>
            <li>Casino</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-xl text-nowrap">SOCIAL MEDIA</h3>
          <ul className="flex flex-col gap-4">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

      </div>
    </div>
    // </div>
  );
}