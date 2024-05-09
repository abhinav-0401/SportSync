import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[url('/footer-bg.png')] bg-cover flex flex-col md:flex-row justify-evenly px-6 py-4 sm:px-10 sm:py-8 lg:px-20 lg:py-16 gap-8 md:gap-0">
      <div className="flex flex-1 flex-col justify-between gap-4">
        <h3 className="font-semibold text-xl">ABOUT US</h3>
        <div>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis<br></br> donec amet proin auctor nec in diam aenean viverra. Risus eget morbi a commodo 
        </div>
        <div className="flex gap-4 bg-blend-exclusion">
          <Image src="/insta.png" className="bg-blend-exclusion h-11 w-11 md:w-14 md:h-14" alt="instagram" height={24} width={24} />
          <Image src="/fb.png" className="bg-blend-exclusion h-11 w-11 md:w-14 md:h-14" alt="facebook" height={54} width={54} />
          <Image src="/twitter.png" className="bg-blend-exclusion h-11 w-11 md:w-14 md:h-14" alt="twitter" height={54} width={54} />
          <Image src="/linkedin.png" className="bg-blend-exclusion h-11 w-11 md:w-14 md:h-14" alt="linkedin" height={54} width={54} />
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
          <h3 className="font-bold text-xl">QUICK LINKS</h3>
          <ul className="flex flex-col gap-4">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href="/cricket">Cricket</Link></li>
            <li>Football</li>
            <li>Casino</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-xl">SOCIAL MEDIA</h3>
          <ul className="flex flex-col gap-4">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

      </div>
    </div>
  );
}