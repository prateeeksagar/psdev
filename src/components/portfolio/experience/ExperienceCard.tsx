import { GlobalIcon, LinkedinIcon } from "@/components/svg/svg";
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
    skills: Skill[]
} 

const ExperienceCard = ({data}: any) => {
  return (
    <Card className="flex flex-col gap-2 rounded-none border-none p-2">
      {/* <CardHeader /> */}
      <Accordion defaultValue={WorkExperience[0].company} type="single" collapsible>
      <AccordionItem value={data.company} className="border-none">
      <CardHeader className="p-0">
        <div className="flex flex-row justify-between p-2 w-full">
          <div className="flex flex-row gap-2">
            <Image
              src={
                "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
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
                  <a href={data.website}>
                    <GlobalIcon className="h-4 w-4 text-muted-foreground border" />
                  </a>
                  <a href={data.linkedin}>
                    <LinkedinIcon className="h-4 w-4 text-muted-foreground border" />
                  </a>
                  <AccordionTrigger className="p-0 hover:no-underline"></AccordionTrigger>
                </div>
              </div>
              <p className="text-muted-foreground text-md">
                {data.position}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm font-medium text-muted-foreground text-right">
              {data.duration}
            </h2>
            <h2 className="text-sm font-medium text-muted-foreground text-right">
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
    <div className="flex flex-row gap-2">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className="text-sm font-semibold border text-primary border-zinc-400 border-dotted shadow inset-shadow-sm inset-shadow-zinc-100 p-1 bg-background rounded-lg"
        >
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
