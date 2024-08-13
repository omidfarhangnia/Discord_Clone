import bgImage1 from "./page_content/pictures/664daa37ea162cadf9603500_Art.webp";
import bgImage2 from "./page_content/pictures/664dae3aa8fa28593aa47cc6_CHARACTERS FULL.webp"
import Download from "./page_content/pictures/6582b262413a0600bad70006_download.svg";

export default function Header() {
  return (
    <div className="w-[80%] lg:w-[90%] max-w-[1300px] mx-auto flex flex-col lg:flex-row flex-wrap justify-center items-center p-6">
      <div className="order-2 lg:order-1 lg:w-[40%]">
        <h1 className="text-white font-abcgintonord uppercase text-[27px] min-[780px]:text-[35px] lg:text-[44px] text-center lg:text-start mb-3">
          Group chat that’s all fun & games
        </h1>
        <p className="text-white font-Ggsans text-center mx-3 lg:text-[24px] lg:mx-0 lg:text-justify font-medium">
          Discord is great for playing games and chilling with friends, or even
          building a worldwide community. Customize your own space to talk,
          play, and hang out.
        </p>
      </div>
      <div className="w-[90%] order-1 lg:w-[60%] lg:order-2 mb-[30px] flex items-center justify-center">
        <img alt="this is desctop" src={bgImage1} className="lg:none" />
        <img alt="this is desctop" src={bgImage2} className="none lg:block" />
      </div>
      <div className="flex flex-col min-[800px]:flex-row items-center gap-[25px] order-3 mt-[45px]">
        <a href="#">
          <button className="font-Ggsans flex gap-3 lg:font-bold text-black text-[20px] bg-white py-3 px-6 rounded-full">
            <img src={Download} alt="download svg" className="text-black" />
            Download for Windows
          </button>
        </a>
        <a href="#">
          <button className="font-Ggsans flex gap-3 lg:font-bold text-white text-[20px] bg-[#161CBB] py-3 px-6 rounded-full">
            Open Discord in your browser
          </button>
        </a>
      </div>
    </div>
  );
}
