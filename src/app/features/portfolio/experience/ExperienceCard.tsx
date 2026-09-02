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
import Link from "next/link";
import SkillBadge from "../skills/components/SkillBadge";

interface Skill {
    name: string, 
    image: string
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
          <AccordionTrigger className="p-0 no-underline" showArrow={false} >
        <div className="flex flex-col md:flex-row justify-between p-2 w-full hover:bg-accent rounded-lg transition-colors duration-200 ease-in-out">
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
                    <TooltipTrigger asChild>
                  <Link href={data.website} target="_blank">
                    <GlobalIcon className="h-4 w-4 text-muted-foreground border" />
                  </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    Visit Website
                  </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                  <Link href={data.linkedin} target="_blank">
                    <LinkedinIcon className="h-4 w-4 text-muted-foreground border" />
                  </Link>
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
        </AccordionTrigger>

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
        <SkillBadge skill={skill} key={idx}/>
      ))}
    </div>
  );
};

const renderFormattedText = (text: string) => {
  const parts = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const [_, label, url] = match;
    parts.push(
      <Link
        key={match.index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 text-foreground hover:text-primary font-medium transition-colors"
      >
        {label}
      </Link>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const CardExpPoints = ({description}: {description: string[]}) => {
  return (
    <ul className="list-decimal spacey-1 list-inside">
      {description.map((point, idx) => (
        <li key={idx} className="text-md list-disc text-muted-foreground leading-relaxed">
          {renderFormattedText(point)}
        </li>
      ))}
    </ul>
  );
};
