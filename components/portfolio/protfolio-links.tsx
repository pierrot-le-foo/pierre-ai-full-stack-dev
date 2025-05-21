import { Github, Linkedin, Paperclip } from "lucide-react";
import { useState } from "react";
import EnterAnimation from "../animations/enter-animation";
import CycleText from "../animations/cycle-text";

export default function PortfolioLinks() {
  const [index, setIndex] = useState(0);

  return (
    <EnterAnimation>
      <div className="h-screen flex flex-col items-center justify-center bg-background relative">
        <div className="absolute top-10 left-0 right-0 flex items-center justify-center text-6xl">
          Let's connect!
        </div>
        <div className="flex-1 flex flex-row items-center justify-center gap-[140px]">
          <Github
            className="h-[260px] w-[260px] md:h-[160px] md:w-[160px] sm:h-[80px] sm:w-[80px] opacity-50 hover:opacity-100 cursor-pointer"
            onClick={() => {
              window.open("https://github.com/pierrot-le-foo", "_blank");
            }}
            onMouseEnter={() => setIndex(1)}
            onMouseLeave={() => setIndex(0)}
          />
          <Linkedin
            className="h-[260px] w-[260px] md:h-[160px] md:w-[160px] sm:h-[80px] sm:w-[80px] opacity-50 hover:opacity-100 cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/pierre-drouillet-a288a2249/",
                "_blank"
              );
            }}
            onMouseEnter={() => setIndex(2)}
            onMouseLeave={() => setIndex(0)}
          />
          <Paperclip
            className="h-[260px] w-[260px] md:h-[160px] md:w-[160px] sm:h-[80px] sm:w-[80px] opacity-50 hover:opacity-100 cursor-pointer"
            onClick={() => {
              window.open(
                "/Pierre Drouillet Generative AI Developer Resume.pdf",
                "_blank"
              );
            }}
            onMouseEnter={() => setIndex(3)}
            onMouseLeave={() => setIndex(0)}
          />
        </div>

        <div className="p-10 pb-10">
          <CycleText index={index} />
        </div>
      </div>
    </EnterAnimation>
  );
}
