import {  GlobalIcon, LinkedinIcon } from "@/components/svg/svg";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { WorkExperience } from "@/dataStatic/dataStatic";
import { Badge } from "@/components/ui/badge";
import { DotIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface Skill {
    name: string, 
    logo: string
}

interface CardSkillsProps {
    skills: Skill[]
}

type ExperienceType = {
    company: string,
    position: string,
    duration: string,
    location: string,
    description: string[]
    website: string,
    linkedin: string,
    logo: string,
    skills: Skill[]
} 

const ExperienceCard = ({data}: any) => {
  return (
    <Card className="flex flex-col gap-2 rounded-none border-none p-2">
      {/* <CardHeader /> */}
      <Accordion defaultValue={WorkExperience[0].company} type="single" collapsible>
      <AccordionItem value={data.company} className="border-none">
      <CardHeader className="p-0">
        <div className="flex flex-col md:flex-row justify-between p-2 w-full">
          <div className="flex flex-row gap-2">
            <Image
              src={
                data.logo ? data.logo : "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
              }
              alt="company logo"
              height={50}
              width={50}
              className="rounded-md object-fit aspect-square"
            />
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 items-center justify-center">
                <h2 className="text-md font-semibold">{data.company}</h2>
                <div className="flex flex-row gap-1 items-center justify-center">
                  <Tooltip>
                    <TooltipTrigger>
                  <a href={data.website}>
                    <GlobalIcon className="h-4 w-4 text-muted-foreground border" />
                  </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    Visit Website
                  </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                  <a href={data.linkedin}>
                    <LinkedinIcon className="h-4 w-4 text-muted-foreground border" />
                  </a>
                  </TooltipTrigger>
                  <TooltipContent>Connect on linkedin</TooltipContent>
                  </Tooltip>
                  <AccordionTrigger className="p-0 hover:no-underline"></AccordionTrigger>
                  {WorkExperience[0].company == data.company && <Badge variant={"outline"} className="flex bg-green-500/20 text-green-600 font-normal tracking-wide rounded-md  items-center justify-center pl-1"><DotIcon className="w-4 h-4 animate-pulse fill-green-600 stroke-8" data-icon="inline-end"/> Currently Working</Badge>}
                </div>
              </div>
              <p className="text-muted-foreground text-md">
                {data.position}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm font-medium text-muted-foreground md:text-right">
              {data.duration}
            </h2>
            <h2 className="text-sm font-medium text-muted-foreground md:text-right">
              {data.location}
            </h2>
          </div>
        </div>
      </CardHeader>
      <AccordionContent className="px-2">
      <CardContent className="flex flex-col gap-2 p-2">
        <CardSkills skills={data.skills} />
        <CardExpPoints description={data.description} />
      </CardContent>
      </AccordionContent>
      </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default ExperienceCard;

const CardSkills = ({skills}: CardSkillsProps) => {
  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className="text-sm font-semibold border text-primary border-zinc-400 border-dotted shadow inset-shadow-sm inset-shadow-zinc-300 p-1 bg-background rounded-lg flex gap-1 px-2 items-center justify-center"
        >
          <Image
          src={skill.logo}
          alt={skill.name}
          width={50}
          height={50}
          className="w-4 h-4 fill-background"
          />
          {skill.name.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

const CardExpPoints = ({description}: {description: string[]}) => {
  return (
    <ul className="list-decimal spacey-1 list-inside">
      {description.map((point, idx) => (
        <li key={idx} className="text-md list-disc text-muted-foreground">
          {point}
        </li>
      ))}
    </ul>
  );
};
