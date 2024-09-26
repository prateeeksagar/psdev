import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { projectData } from "@/dataStatic/dataStatic";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardType {
  title: string;
  desciption: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
}

const Projects = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        {projectData.map(
          ({ title, desciption, image, tags, githubLink, liveLink }, index) => (
            <ProjectCard
              key={index}
              title={title}
              desciption={desciption}
              image={image}
              tags={tags}
              githubLink={githubLink}
              liveLink={liveLink}
            />
          )
        )}
        {/* <ProjectCard/> */}
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  desciption,
  image,
  tags,
  githubLink,
  liveLink,
}: ProjectCardType) => {
  return (
    <>
      <Card className="">
        <CardHeader className="">
          <div className="w-full h-[100px] border">
            <Image
              src={image}
              alt={title}
              width={60}
              height={60}
              className="w-full h-full"
            />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{desciption}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex justify-end space-x-2 ">
            {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>}

            {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
            </a>}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Projects;
