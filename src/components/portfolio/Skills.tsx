import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";

const SkillsData = [
  "nodejs",
  "react",
  "express",
  "aws",
  "git",
  "docker",
  "js",
  "ts",
  "linux",
  "mongodb",
  "mysql",
  "nextjs",
  "postgres",
  "tailwind",
  "ubuntu",
];

const Skills = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold p-2 border-b">Stack</h2>
    <div className="grid grid-flow-col grid-rows-3 md:grid-rows-2 gap-4 p-2">
      {SkillsData.map((skill, idx) => (
        <Tooltip key={idx}>
          <TooltipTrigger asChild>
            <div
              className="w-12 h-12 flex items-center justify-center"
            >
              <img
                src={`https://skillicons.dev/icons?i=${skill}&theme=light`}
                alt="Emotion"
                // width={70}
                // height={70}
                className="w-10 h-10 md:w-15 md:h-15"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent className="z-50 fill-popover">
            {skill.toUpperCase()}
            <TooltipArrow className="bg-background fill-black" />
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
    </div>
  );
};

export default Skills;
