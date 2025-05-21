import EnterAnimation from "../animations/enter-animation";
import { IconCloudDemo } from "../ui/skills-cloud";


export default function PortfolioSkills() {
  return (
    <EnterAnimation>
      <div className="h-screen flex-col items-center justify-center relative">
        <IconCloudDemo
          slugs={[
            "typescript",
            "javascript",
            "react",
            "android",
            "html5",
            "css3",
            "nodedotjs",
            "nextdotjs",
            "prisma",
            "amazonaws",
            "postgresql",
            "firebase",
            "firebase",
            "firebase",
            "jest",
            "cypress",
            "docker",
            "git",
            "jira",
            "github",
            "visualstudiocode",
            "androidstudio",
            "figma",
            "tailwindcss",
            "shadcnui",
            "v0",
            "python",
            "langchain",
            "openai",
            "tensorflow",
            "pytorch",
            "anthropic",
            "githubcopilot",
          ]}
          size={84}
        />

        <div className="absolute top-10 left-0 right-0 flex items-center justify-center text-4xl">
          Frameworks and programming languages
        </div>
      </div>
    </EnterAnimation>
  );
}
