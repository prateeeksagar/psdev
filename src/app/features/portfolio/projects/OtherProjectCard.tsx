"use client";

import { OtherProject } from "@/dataStatic/dataStatic";
import { motion } from "motion/react";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

interface Props {
  project: OtherProject;
  index: number;
}

const OtherProjectCard = ({ project, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.3 }}
      whileHover={{ y: -1 }}
      className="group border border-border rounded-lg p-3 bg-card hover:bg-accent/30 hover:shadow-sm transition-all duration-200 flex flex-col gap-2"
    >
      {/* Title + links */}
      <div className="flex items-center justify-between gap-1">
        <h3 className="text-sm font-semibold truncate">{project.title}</h3>
        <div className="flex items-center gap-1.5 shrink-0">
          {project.githubLink && (
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-3.5 h-3.5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          )}
          {project.liveLink && (
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
        {project.description}
      </p>

      {/* Tech tags — simple text pills, no icon needed for "other" */}
      <div className="flex flex-wrap gap-1 mt-auto">
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="px-1.5 py-0.5 rounded border border-border bg-muted text-[10px] font-medium text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default OtherProjectCard;
