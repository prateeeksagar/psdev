import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SkillListProps } from "./types";
import SkillCategory from "./components/SkillCategory";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from 'motion/react'

const SKILLS_LIST: SkillListProps[] = [
  { image: "/javascript.svg", name: "javascript" },
  { image: "/typescript.svg", name: "typescript" },
  { image: "/nodejs.svg", name: "nodejs" },
  { image: "/express.svg", name: "express" },
  { image: "/nextjs.svg", name: "nextjs" },
  { image: "/react.svg", name: "react" },
  { image: "/mongodb.svg", name: "mongodb" },
  { image: "/mysql.svg", name: "mysql" },
  { image: "/postgresql-light.svg", name: "postgres" },
  { image: "/aws.svg", name: "aws" },
  { image: "/git.svg", name: "git" },
  { image: "/docker-light.svg", name: "docker" },
  { image: "/linux.svg", name: "linux" },
  { image: "/tailwind.svg", name: "tailwind" },
  { image: "/ubuntu-light.svg", name: "ubuntu" },
  { image: "/mobx-light.svg", name: "MobX" },
  { image: "/zustand-light.svg", name: "Zustand" },
  { image: "/react-router-light.svg", name: "React Router" },
  { image: "/tanstack-light.svg", name: "Tanstack" },
  { image: "/html-5-light.svg", name: "HTML" },
  { image: "/vite-light.svg", name: "Vite" },
  { image: "/motion-light.svg", name: "Motion" },
  { image: "/prisma-light.svg", name: "Prisma" },
  { image: "/TRPC-light.svg", name: "TRPC" },
  { image: "/sequelize-light.svg", name: "Sequelize" },
  { image: "/redis-light.svg", name: "Redis" },
  { image: "/hono-light.svg", name: "Hono" },

];

const FRONTEND_SKILLS_LIST: SkillListProps[] = [
  { image: "/react.svg", name: "react" },
  { image: "/nextjs.svg", name: "Next JS" },
  { image: "/javascript.svg", name: "javascript" },
  { image: "/typescript.svg", name: "typescript" },
  { image: "/material-ui.svg", name: "material UI" },
  { image: "/shadcn.png", name: "Shadcn" },
  { image: "/tailwind.svg", name: "Tailwind CSS" },
  { image: "/mobx-light.svg", name: "MobX" },
  { image: "/zustand-light.svg", name: "Zustand" },
  { image: "/react-router-light.svg", name: "React Router" },
  { image: "/tanstack-light.svg", name: "Tanstack" },
  { image: "/html-5-light.svg", name: "HTML" },
  { image: "/vite-light.svg", name: "Vite" },
  { image: "/motion-light.svg", name: "Motion" },
  


]

const BACKEND_SKILLS_LIST: SkillListProps[] = [
  { image: "/nodejs.svg", name: "nodejs" },
  { image: "/express.svg", name: "express" },
  { image: "/mongodb.svg", name: "mongodb" },
  { image: "/mysql.svg", name: "mysql" },
  { image: "/postgresql-light.svg", name: "postgres" },
  { image: "/aws.svg", name: "aws" },
  { image: "/prisma-light.svg", name: "Prisma" },
  { image: "/TRPC-light.svg", name: "TRPC" },
  { image: "/sequelize-light.svg", name: "Sequelize" },
  { image: "/redis-light.svg", name: "Redis" },
  { image: "/hono-light.svg", name: "Hono" },


]

const DEV_TOOLS: SkillListProps[] = [
  { image: "/git.svg", name: "git" },
  { image: "/docker-light.svg", name: "docker" },
  { image: "/linux.svg", name: "linux" },
  { image: "/ubuntu-light.svg", name: "ubuntu" },

]

const SkillSection = () => {
  const [showDetailedSkills, setShowDetailedSkills] = useState(false);

  return (
    <section className="">
      <h2 className="text-2xl font-semibold p-2 border-b">Skills</h2>
      <Collapsible open={showDetailedSkills} onOpenChange={setShowDetailedSkills}>
        <CollapsibleTrigger className="flex items-center justify-center w-full py-2 hover:text-muted-foreground">{showDetailedSkills ?
          <ChevronsUp className="animate-bounce text-muted-foreground" /> : <ChevronsDown className="animate-bounce text-muted-foreground" />}</CollapsibleTrigger>
        <AnimatePresence mode="wait">
          {!showDetailedSkills ? <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.3 }} className="flex flex-row gap-4 flex-wrap p-2">
            {SKILLS_LIST.map((skill: SkillListProps, idx) => (
              <Tooltip delayDuration={0} key={idx}>
                <TooltipTrigger asChild>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-full h-full aspect-square"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="z-50 fill-popover">
                  {skill.name.toUpperCase()}
                  <TooltipArrow className="bg-background fill-black" />
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div> : null}
          <CollapsibleContent>
            <motion.div initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.3 }} className="space-y-2">
              <SkillCategory title="Frontend" skills={FRONTEND_SKILLS_LIST} />
              <SkillCategory title="Backend" skills={BACKEND_SKILLS_LIST} />
              <SkillCategory title="Dev Tools" skills={DEV_TOOLS} />
            </motion.div>
          </CollapsibleContent>

        </AnimatePresence>
      </Collapsible>
    </section>
  );
};

export default SkillSection;
