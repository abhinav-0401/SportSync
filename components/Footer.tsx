import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[url('/footer-bg.png')] flex justify-evenly">
      <div className="flex flex-col">
        <h3>About Us</h3>
        <div>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec amet proin auctor nec in diam aenean viverra. Risus eget morbi a commodo 
        </div>
        <div className="flex gap-4">
          {/* <Image src="/insta2.png" alt="instagram" height={54} width={54} /> */}
        </div>
      </div>

      <div>

        <div>
          <h3>HELP</h3>
        </div>

      </div>
    </div>
  );
}