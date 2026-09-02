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
import Image from "next/image";
import { useTheme } from "next-themes";

const SKILLS_LIST: SkillListProps[] = [
  { image: "typescript.svg", name: "typescript" },
  { image: "javascript.svg", name: "javascript" },
  { image: "nextjs.svg", name: "nextjs" },
  { image: "react.svg", name: "react" },
  { image: "nodejs.svg", name: "nodejs" },
  { image: "express.svg", name: "express" },
  { image: "fastify.svg", name: "fastify" },
  { image: "hono.svg", name: "hono" },
  { image: "tailwind.svg", name: "tailwind" },
  { image: "shadcn.svg", name: "shadcn" },
  { image: "material-ui.svg", name: "material ui" },
  { image: "zustand.svg", name: "zustand" },
  { image: "mobx.svg", name: "mobx" },
  { image: "tanstack.svg", name: "tanstack" },
  { image: "bullmq.svg", name: "bullmq" },
  { image: "postgresql.svg", name: "postgresql" },
  { image: "mysql.svg", name: "mysql" },
  { image: "mongodb.svg", name: "mongodb" },
  { image: "redis.svg", name: "redis" },
  { image: "prisma.svg", name: "prisma" },
  { image: "drizzle.svg", name: "drizzle orm" },
  { image: "sequelize.svg", name: "sequelize" },
  { image: "aws.svg", name: "aws" },
  { image: "docker.svg", name: "docker" },
  { image: "cicd.svg", name: "ci/cd" },
  { image: "git.svg", name: "git" },
  { image: "linux.svg", name: "linux" },
  { image: "ubuntu.svg", name: "ubuntu" },
  { image: "html-5.svg", name: "html5" },
  { image: "css.svg", name: "css3" },
  { image: "motion.svg", name: "motion" },
  { image: "vite.svg", name: "vite" },
];

const LANGUAGES_LIST: SkillListProps[] = [
  { image: "typescript.svg", name: "TypeScript" },
  { image: "javascript.svg", name: "JavaScript" },
  { image: "html-5.svg", name: "HTML5" },
  { image: "css.svg", name: "CSS3" },
];

const FRAMEWORKS_LIBRARIES_LIST: SkillListProps[] = [
  { image: "nextjs.svg", name: "Next.js" },
  { image: "react.svg", name: "React" },
  { image: "nodejs.svg", name: "Node.js" },
  { image: "express.svg", name: "Express.js" },
  { image: "fastify.svg", name: "Fastify" },
  { image: "hono.svg", name: "Hono" },
  { image: "tailwind.svg", name: "Tailwind CSS" },
  { image: "shadcn.svg", name: "shadcn/ui" },
  { image: "material-ui.svg", name: "Material UI" },
  { image: "zustand.svg", name: "Zustand" },
  { image: "mobx.svg", name: "MobX" },
  { image: "tanstack.svg", name: "Tanstack" },
  { image: "bullmq.svg", name: "BullMQ" },
  { name: "Fabric.js" },
  { image: "motion.svg", name: "Motion" },
  { image: "react-router.svg", name: "React Router" },
  { image: "vite.svg", name: "Vite" },
];

const DATABASES_ORMS_LIST: SkillListProps[] = [
  { image: "postgresql.svg", name: "PostgreSQL" },
  { image: "mysql.svg", name: "MySQL" },
  { image: "mongodb.svg", name: "MongoDB" },
  { image: "redis.svg", name: "Redis" },
  { image: "prisma.svg", name: "Prisma ORM" },
  { image: "drizzle.svg", name: "Drizzle-ORM" },
  { image: "sequelize.svg", name: "Sequelize" },
];

const CLOUD_DEVOPS_LIST: SkillListProps[] = [
  { image: "aws.svg", name: "AWS" },
  { image: "docker.svg", name: "Docker" },
  { image: "cicd.svg", name: "CI/CD (Jenkins, Bitbucket, Actions)" },
  { image: "linux.svg", name: "Linux" },
  { image: "ubuntu.svg", name: "Ubuntu" },
  { image: "git.svg", name: "Git" },
  { image: "postman.svg", name: "Postman" },
];

const ARCHITECTURE_METHODOLOGY_LIST: SkillListProps[] = [
  { name: "System Design" },
  { name: "Microservices" },
  { name: "Unit Testing" },
  { name: "Agile / Scrum" },
  { name: "Monorepo (Turborepo)" },
];

const SkillSection = () => {
  const [showDetailedSkills, setShowDetailedSkills] = useState(false);
  const { theme } = useTheme();
  return (
    <section className="" id="skills">
      <h2 className="text-2xl font-semibold p-2 border-b">Skills</h2>
      <Collapsible open={showDetailedSkills} onOpenChange={setShowDetailedSkills}>
        <CollapsibleTrigger className="flex items-center justify-center w-full py-2 hover:text-muted-foreground">
          {showDetailedSkills ? (
            <ChevronsUp className="animate-bounce text-muted-foreground cursor-pointer" />
          ) : (
            <ChevronsDown className="animate-bounce text-muted-foreground cursor-pointer" />
          )}
        </CollapsibleTrigger>
        <AnimatePresence mode="popLayout">
          {!showDetailedSkills ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              className="flex flex-row gap-4 flex-wrap p-2"
            >
              {SKILLS_LIST.map((skill: SkillListProps, idx) => (
                <Tooltip delayDuration={0} key={idx}>
                  <TooltipTrigger asChild>
                    <div className="w-10 h-10 flex items-center justify-center">
                      {skill.image && (
                        <Image
                          src={
                            theme == "light"
                              ? `/light-${skill.image}`
                              : `/dark-${skill.image}`
                          }
                          alt={skill.name}
                          width={8}
                          height={8}
                          className="w-full h-full aspect-square"
                        />
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="z-50 fill-popover">
                    {skill.name.toUpperCase()}
                    <TooltipArrow className=" fill-primary" />
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
          ) : null}
          <CollapsibleContent>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 p-2"
            >
              <SkillCategory title="Languages" skills={LANGUAGES_LIST} />
              <SkillCategory
                title="Frameworks & Libraries"
                skills={FRAMEWORKS_LIBRARIES_LIST}
              />
              <SkillCategory
                title="Databases & ORMs"
                skills={DATABASES_ORMS_LIST}
              />
              <SkillCategory title="Cloud & DevOps" skills={CLOUD_DEVOPS_LIST} />
              <SkillCategory
                title="Architecture & Methodology"
                skills={ARCHITECTURE_METHODOLOGY_LIST}
              />
            </motion.div>
          </CollapsibleContent>
        </AnimatePresence>
      </Collapsible>
    </section>
  );
};

export default SkillSection;
