import { IconCloud } from "../animations/interactive-icons-cloud";

const _slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "firebase",
  "firebase",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo({
  slugs,
  size,
  theme
}: {
  slugs: string[];
  size?: number;
  theme?: string;
}) {
  return (
    <div className="relative flex size-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-10 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} size={size} theme={theme} />
    </div>
  );
}
