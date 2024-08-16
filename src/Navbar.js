import { useEffect, useState } from "react";
import { DownloadSvg, LogoSvg } from "./returnSvg";
import BurgurIcon from "./page_content/pictures/625846fc39fbe53385840143_1.svg";

const links = [
  { name: "Download", href: "./download" },
  { name: "Nitro", href: "./nitro" },
  { name: "Discover", href: "./discover" },
  { name: "Safety", href: "./safety" },
  { name: "Support", href: "./support" },
  { name: "Blog", href: "./blog" },
  { name: "Careers", href: "./careers" },
];

const OffCanvaslinks = [
  { name: "Download", href: "./download" },
  { name: "Nitro", href: "./nitro" },
  { name: "Safety", href: "./safety" },
  { name: "Support", href: "./support" },
  { name: "Blog", href: "./blog" },
  { name: "Careers", href: "./careers" },
];

const ddMembers = [
  {
    header: "Controlling Your Experience",
    id: 0,
    childLinks: [
      { name: "Four steps to a super safe account", href: "#", id: 3 },
      { name: "Four steps to a super safe server", href: "#", id: 4 },
      {
        name: "Role of administrators and moderators on Discord",
        href: "#",
        id: 5,
      },
      { name: "Reporting problems to Discord", href: "#", id: 6 },
      { name: "Mental health on Discord", href: "#", id: 7 },
      { name: "Age-Restricted Content on Discord", href: "#", id: 8 },
      { name: "Tips against spam and hacking", href: "#", id: 9 },
    ],
  },
  {
    header: "Parents & Educators",
    id: 1,
    childLinks: [
      { name: "What is Discord?", href: "#", id: 10 },
      {
        name: "Discord's commitment to a safe and trusted experience",
        href: "#",
        id: 11,
      },
      { name: "Helping your teen stay safe on Discord", href: "#", id: 12 },
      { name: "Talking about online safety with your teen", href: "#", id: 13 },
      {
        name: "Answering parents' and educators' top questions",
        href: "#",
        id: 14,
      },
      { name: "If your teen encounters an issue", href: "#", id: 15 },
      {
        name: "Working with CARU to protect users on Discord",
        href: "#",
        id: 16,
      },
    ],
  },
  {
    header: "How We Enforce Rules",
    id: 2,
    childLinks: [
      { name: "Our policies", href: "#", id: 17 },
      { name: "How we investigate", href: "#", id: 18 },
      { name: "What actions we take", href: "#", id: 19 },
      { name: "How you can appeal our actions", href: "#", id: 20 },
      { name: "Discord's Transparency Reports", href: "#", id: 21 },
    ],
  },
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

function OffCanvasLink({ name, href, setShowSafe }) {
  return (
    <li className="flex items-center">
      {name === "Safety" ? (
        <>
          <button
            onClick={() => setShowSafe(true)}
            className="font-Ggsans font-semibold text-[#23272a] p-2 w-full inline-block hover:underline text-start"
          >
            {name}
          </button>
          <span>&#11166;</span>
        </>
      ) : (
        <a
          href={href}
          className="font-Ggsans font-semibold text-[#23272a] p-2 w-full inline-block hover:underline"
        >
          {name}
        </a>
      )}
    </li>
  );
}

function Offcanvas({ setIsBurgerOpen }) {
  const [showSafe, setShowSafe] = useState(false);

  return (
    <div className="w-[335px] h-[100vh] rounded-l-[10px] bg-white fixed top-0 right-0 px-6 py-8">
      <button
        onClick={() => {
          setIsBurgerOpen(false);
        }}
        className="text-black text-[20px] font-bold absolute right-0 top-4 p-4 cursor-pointer"
      >
        &#10005;
      </button>
      {showSafe === true ? (
        <div>
          <button className="mb-4" onClick={() => setShowSafe(false)}>
            <span className="mr-1">&#11164;</span>
            Back
          </button>
          <div className="overflow-y-scroll h-[80vh] safetyLinks">
            <div className="capitalize font-Ggsans text-[20px] font-semibold">
              safety center
            </div>
            <a
              href="/overview"
              className="m-4 inline-block font-semibold capitalize hover:underline"
            >
              overview
            </a>
            <dl>
              {ddMembers.map((ddMember) => {
                return (
                  <>
                    <dt
                      key={ddMember.id}
                      className="text-[21px] font-Ggsans-medium"
                    >
                      {ddMember.header}
                    </dt>
                    {ddMember.childLinks.map((childLink) => {
                      return (
                        <dd
                          key={childLink.id}
                          className="py-[10px] px-[13px] text-[#4f5660] hover:underline"
                        >
                          <a href={childLink.href}>{childLink.name}</a>
                        </dd>
                      );
                    })}
                  </>
                );
              })}

              <div className="w-full h-[30vh]"></div>
            </dl>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full border-b-[1px] border-solid border-slate-200 pb-[30px]">
            <a href="#">
              <div className="w-[120px]">
                <LogoSvg color={"black"} />
              </div>
            </a>
          </div>
          <nav className="mx-2 my-4">
            <ul>
              {OffCanvaslinks.map((link, index) => {
                return (
                  <OffCanvasLink
                    key={index}
                    name={link.name}
                    href={link.href}
                    setShowSafe={setShowSafe}
                  />
                );
              })}
            </ul>
          </nav>
        </div>
      )}
      <div className="w-full h-[150px] absolute bottom-0 left-0 p-6 bg-white shadow-[15px_-40px_20px_5px_#fff]">
        <button className="w-full py-[7px] bg-[#5865F2] rounded-full flex items-center justify-center gap-2 font-Ggsans font-semibold text-white">
          <DownloadSvg color={"white"} />
          Download
        </button>
      </div>
    </div>
  );
}

export default function NavBar() {
  const [scrollPosition, setscrollPosition] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const hanldeScroll = () => {
    const position = window.scrollY;
    setscrollPosition(position);
  };
  const handleGiveWidth = () => {
    const width = window.innerWidth;
    setPageWidth(width);
    if (width >= 992) {
      setIsBurgerOpen(false);
    }
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
    <>
      <nav
        className={`flex justify-center items-center min-[992px]:mb-[50px] py-5 px-6 sm:px-10 sticky min-[992px]:relative transition-all top-0 left-0 ${
          scrollPosition > 0 && "bg-[#161cbb] min-[992px]:bg-transparent"
        } ${isBurgerOpen && "opacity-0"}`}
      >
        <div className="max-w-[1200px] w-full flex justify-between items-center">
          <div className="w-[124px] h-full object-contain">
            <a href="#">
              <LogoSvg color={"white"} />
            </a>
          </div>

          {pageWidth >= 992 && (
            <div className="">
              {links.map((link, index) => {
                return <Link key={index} name={link.name} href={link.href} />;
              })}
            </div>
          )}
          <div className="flex items-center gap-3">
            <a href="/login">
              <button className="font-Ggsans bg-white px-5 py-2 rounded-full font-extrabold hover:text-[#5865f2] transition-all">
                Login
              </button>
            </a>
            {pageWidth < 992 && (
              <button
                className="cursor-pointer"
                onClick={() => setIsBurgerOpen(true)}
              >
                <img src={BurgurIcon} alt="burger icon" />
              </button>
            )}
          </div>
        </div>
      </nav>
      {isBurgerOpen && <Offcanvas setIsBurgerOpen={setIsBurgerOpen} />}
    </>
  );
}
