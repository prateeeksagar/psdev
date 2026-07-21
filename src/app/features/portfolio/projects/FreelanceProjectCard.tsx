"use client";

import { FreelanceProject } from "@/dataStatic/dataStatic";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ImageIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface Props {
  project: FreelanceProject;
  index: number;
}

const FreelanceProjectCard = ({ project, index }: Props) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="group border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-all duration-300 flex flex-col"
    >
      {/* Image area — swap comment/uncomment once you have the screenshot */}
      {/* 
        To add a screenshot:
        1. Put the image in /public  e.g. /public/hatchpros-screenshot.png
        2. Uncomment the <Image> below and set src={project.image}
        3. Remove the placeholder div
      */}
      <div className="relative w-full h-36 bg-muted/50 border-b border-border overflow-hidden flex items-center justify-center">
        {/* Placeholder — replace with real screenshot */}
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <ImageIcon className="w-8 h-8" />
          <span className="text-xs">Screenshot coming soon</span>
        </div>

        {/* ── Uncomment this block and add image path to data file ── */}
        <Image
          src={project.image || ""}
          alt={project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
       

        {/* Overlay link icon */}
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 p-1.5 rounded-md bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Card body */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">{project.title}</h3>
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1 mt-1">
          {project.techStack.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-border bg-accent text-[11px] font-medium text-primary"
            >
              <Image
                src={theme === "light" ? `/light-${tech.image}` : `/dark-${tech.image}`}
                alt={tech.name}
                width={12}
                height={12}
                className="w-3 h-3"
              />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FreelanceProjectCard;
