import {
  FaceBookSvg,
  InstagramSvg,
  LogoSvg,
  TiktokSvg,
  XSvg,
  YoutubeSvg,
} from "./returnSvg";

const footerLinks = [
  {
    header: "product",
    childLinks: [
      { name: "download", href: "#" },
      { name: "nitro", href: "#" },
      { name: "status", href: "#" },
      { name: "app directory", href: "#" },
      { name: "new mobile experience", href: "#" },
    ],
  },
  {
    header: "company",
    childLinks: [
      { name: "about", href: "#" },
      { name: "jobs", href: "#" },
      { name: "brand", href: "#" },
      { name: "newsroom", href: "#" },
    ],
  },
  {
    header: "resources",
    childLinks: [
      { name: "college", href: "#" },
      { name: "support", href: "#" },
      { name: "safety", href: "#" },
      { name: "blog", href: "#" },
      { name: "feedback", href: "#" },
      { name: "streakit", href: "#" },
      { name: "creators", href: "#" },
      { name: "community", href: "#" },
      { name: "developers", href: "#" },
      { name: "gaming", href: "#" },
      { name: "quests", href: "#" },
      { name: "official 3rd party merch", href: "#" },
    ],
  },
  {
    header: "policies",
    childLinks: [
      { name: "terms", href: "#" },
      { name: "privacy", href: "#" },
      { name: "cookie settings", href: "#" },
      { name: "guidelines", href: "#" },
      { name: "acknowledgements", href: "#" },
      { name: "licenses", href: "#" },
      { name: "company information", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="py-[70px] px-[20px] glass-bg">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-row flex-wrap">
          <div className="w-[230px]">
            <div className="w-full bg-white">lang</div>
            <nav className="my-[45px] flex gap-[25px] [&>li]:list-none">
              <li>
                <a href="#">
                  <XSvg color={"#ffffff"} />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramSvg color={"#ffffff"} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaceBookSvg color={"#ffffff"} />
                </a>
              </li>
              <li>
                <a href="#">
                  <YoutubeSvg color={"#ffffff"} />
                </a>
              </li>
              <li>
                <a href="#">
                  <TiktokSvg color={"#ffffff"} />
                </a>
              </li>
            </nav>
          </div>
          <ul className="mb-[35px] min-[1000px]:w-[70%] mx-auto flex flex-wrap justify-end gap-y-[50px] text-white capitalize font-Ggsans">
            {footerLinks.map((linkFamily) => {
              return (
                <>
                  <li className="w-[50%] min-[760px]:w-[40%] min-[1000px]:w-[20%]">
                    <span className="inline-block mb-[25px] cursor-default">
                      {linkFamily.header}
                    </span>
                    <ul className="flex flex-col gap-[5px]">
                      {linkFamily.childLinks.map((link) => {
                        return (
                          <li>
                            <a href={link.href} className="hover:underline">
                              {link.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <hr />
        <div className="mt-[35px] flex justify-between items-center">
          <div className="w-[124px] h-full object-contain">
            <a href="#">
              <LogoSvg color={"white"} />
            </a>
          </div>
          <a href="#">
            <button className="font-Ggsans-medium text-[14px] text-white px-5 py-3 rounded-full font-extrabold bg-[#5865f2]">
              Sign up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
