import { useEffect, useState } from "react";
import Logo from "./page_content/logo/6257d23c5fb25be7e0b6e220_Open Source Projects _ Discord-7.svg";

const links = [
  { name: "Download", href: "./download" },
  { name: "Nitro", href: "./nitro" },
  { name: "Discover", href: "./discover" },
  { name: "Safety", href: "./safety" },
  { name: "Support", href: "./support" },
  { name: "Blog", href: "./blog" },
  { name: "Careers", href: "./careers" },
];

function Link({ name, href }) {
  return (
    <a href={href} className="text-white mx-5 font-Ggsans font-bold ">
      <span className="decoration-solid underline decoration-[#00000000] hover:decoration-white">
        {name}
      </span>
    </a>
  );
}

export default function NavBar() {
  const [scrollPosition, setscrollPosition] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);

  const hanldeScroll = () => {
    const position = window.scrollY;
    setscrollPosition(position);
  };
  const handleGiveWidth = () => {
    const width = window.innerWidth;
    setPageWidth(width);
  };

  useEffect(() => {
    window.addEventListener("scroll", hanldeScroll);
    window.addEventListener("resize", handleGiveWidth);
    handleGiveWidth();

    return () => {
      window.removeEventListener("scroll", hanldeScroll);
      window.removeEventListener("resize", handleGiveWidth);
    };
  }, []);

  return (
    <nav
      className={`flex justify-center items-center py-5 px-6 sm:px-10 sticky min-[992px]:relative top-0 left-0 ${
        scrollPosition > 0 && "bg-[#161cbb] min-[992px]:bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] w-full flex justify-between items-center">
        <div className="">
          <img
            src={Logo}
            className="w-[124px] h-full object-contain"
            alt="this is discord logo"
          />
        </div>

        {pageWidth >= 992 && (
          <div className="">
            {links.map((link, index) => {
              return <Link key={index} name={link.name} href={link.href} />;
            })}
          </div>
        )}
        <div className="flex items-center gap-3">
          <button className="font-Ggsans bg-white px-5 py-2 rounded-full font-extrabold hover:text-[#5865f2] transition-all">
            Login
          </button>
          {pageWidth < 992 && (
            <div className="w-[60px] h-[60px] flex flex-col items-center justify-center gap-[3px] cursor-pointer">
              <span className="w-[30px] h-[6px] bg-white block"></span>
              <span className="w-[30px] h-[6px] bg-white block"></span>
              <span className="w-[30px] h-[6px] bg-white block"></span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
