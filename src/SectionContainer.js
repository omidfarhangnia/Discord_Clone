import video1 from "./page_content/videos/video1.webm";
import video2 from "./page_content/videos/video2.webm";
import video3 from "./page_content/videos/video3.webm";
import video4 from "./page_content/videos/video4.webm";
import video5 from "./page_content/videos/video5.webm";
import video6 from "./page_content/videos/video6.webm";

const sectionsData = [
  {
    header: "Make your group chats more fun",
    prag: "Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way.",
    video: video1,
    videoLocation: "left",
  },
  {
    header: "stream like you’re in the same room",
    prag: "High quality and low latency streaming makes it feel like you're hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something.",
    video: video2,
    videoLocation: "right",
  },
  {
    header: "Hop in when you're free, no need to call",
    prag: "Easily hop in and out of voice or text chats without having to call or invite anyone, so your party chat lasts before, during, and after your game session.",
    video: video3,
    videoLocation: "left",
  },
  {
    header: "See who's around to chill",
    prag: "See who's around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up.",
    video: video4,
    videoLocation: "right",
  },
  {
    header: "always have something to do together",
    prag: "Watch videos, play built-in games, listen to music, or just scroll together and spam memes. Seamlessly text, call, video chat, and play games, all in one group chat.",
    video: video5,
    videoLocation: "left",
  },
  {
    header: "wherever YOU GAME, HANG OUT HERE",
    prag: "On your PC, phone, or console, you can still hang out on Discord. Easily switch between devices and use tools to manage multiple group chats with friends.",
    video: video6,
    videoLocation: "right",
  },
];

function Section({ data }) {
  return (
    <section
      className={`w-[95%] rounded-[40px] min-[1250px]:rounded-[60px] min-[1250px]:max-w-[1300px] flex flex-col ${
        data.videoLocation === "right"
          ? "min-[760px]:flex-row"
          : "min-[760px]:flex-row-reverse"
      } gap-[40px] items-center justify-center min-[1250px]:justify-between bg-gradient-to-tl from-[#fff3] to-[#ffffff12] p-[15px] min-[760px]:py-[60px] min-[760px]:px-[25px] min-[1250px]:p-[15px] shadow-[0_2px_52px_#452a7c1a,inset_0_0_0_3px_#fff3]`}
    >
      <div className="min-[760px]:w-[40%] min-[1250px]:w-[35%] min-[1250px]:mx-[45px]">
        <h2 className="font-abcgintonord text-white text-[27px] uppercase w-[80%] min-[760px]:w-full mt-[50px] min-[760px]:mt-0 min-[1250px]:text-[2.2rem] leading-[1.2]">
          {data.header}
        </h2>
        <p className="w-[80%] min-[760px]:w-full min-[1250px]:w-[95%] min-[1250px]:text-[1.5rem] font-Ggsans text-white mt-[30px] min-[760px]:mt-[24px] min-[1250px]:mt-[15px] mb-[20px] min-[760px]:mb-0">
          {data.prag}
        </p>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="min-[760px]:w-[60%] min-[1250px]:w-[60%] rounded-[40px] min-[1250px]:rounded-[45px]"
      >
        <source src={data.video} />
      </video>
    </section>
  );
}

export default function SectionContainer() {
  return (
    <div className="flex flex-col justify-between items-center gap-[225px] mt-[130px] min-[1250px]:mt-[200px]">
      <Section data={sectionsData[0]} />
      <Section data={sectionsData[1]} />
      <Section data={sectionsData[2]} />
      <Section data={sectionsData[3]} />
      <Section data={sectionsData[4]} />
      <Section data={sectionsData[5]} />
    </div>
  );
}
