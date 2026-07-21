"use client";

import { MainProject } from "@/dataStatic/dataStatic";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";

interface Props {
  project: MainProject;
  index: number;
}

const statusConfig = {
  active: { label: "Active", className: "bg-green-500/15 text-green-600 border-green-500/30" },
  beta: { label: "Beta", className: "bg-yellow-500/15 text-yellow-600 border-yellow-500/30" },
  completed: { label: "Completed", className: "bg-blue-500/15 text-blue-600 border-blue-500/30" },
};

const MainProjectCard = ({ project, index }: Props) => {
  const { theme } = useTheme();
  const status = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="group relative border border-border rounded-lg p-4 bg-card hover:shadow-md transition-all duration-300"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-muted-foreground shrink-0" />
          <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Badge
            variant="outline"
            className={`text-xs font-normal px-2 py-0.5 ${status.className}`}
          >
            {status.label}
          </Badge>

          {project.githubLink && (
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          )}
          {project.liveLink && (
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          )}
        </div>
      </div>

      {/* Short description */}
      <p className="text-sm text-muted-foreground mb-1">{project.description}</p>

      {/* Long description */}
      <p className="text-sm text-muted-foreground/80 mb-4 leading-relaxed">
        {project.longDescription}
      </p>

      {/* Tech stack chips */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 + i * 0.04 }}
            className="flex items-center gap-1 px-2 py-0.5 rounded-md border border-border bg-accent text-xs font-medium text-primary"
          >
            <Image
              src={theme === "light" ? `/light-${tech.image}` : `/dark-${tech.image}`}
              alt={tech.name}
              width={14}
              height={14}
              className="w-3.5 h-3.5"
            />
            {tech.name}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MainProjectCard;
