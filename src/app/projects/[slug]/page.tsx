"use client";

import { mainProjects, otherProjects } from "@/dataStatic/dataStatic";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

const statusConfig = {
  active: { label: "Active", className: "bg-green-500/15 text-green-600 border-green-500/30" },
  beta: { label: "Beta", className: "bg-yellow-500/15 text-yellow-600 border-yellow-500/30" },
  completed: { label: "Completed", className: "bg-blue-500/15 text-blue-600 border-blue-500/30" },
};

function findProject(slug: string) {
  // Search in mainProjects
  const main = mainProjects.find((p) => p.slug === slug);
  if (main) return { ...main, type: "main" as const };

  // Search in otherProjects
  const other = otherProjects.find((p) => p.slug === slug);
  if (other) return { ...other, type: "other" as const };

  return null;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = findProject(slug);
  const { theme } = useTheme();

  if (!project) {
    return (
      <div className="max-w-screen flex items-center justify-center">
        <div className="border border-y relative flex flex-col max-w-3xl mx-auto h-full w-full justify-center p-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-2xl font-bold mb-2">Project not found</h1>
          <p className="text-muted-foreground">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  // Determine fields based on project type
  const githubLink = project.githubLink;
  const liveLink = project.liveLink;
  const status =
    project.type === "main"
      ? (project as typeof mainProjects[0]).status
      : undefined;
  const longDescription =
    project.type === "main"
      ? (project as typeof mainProjects[0]).longDescription
      : undefined;

  // Tech stack rendering
  const techChips =
    project.type === "other"
      ? (project as typeof otherProjects[0]).techStack.map((t) => ({ name: t, image: "" }))
      : (project as typeof mainProjects[0]).techStack;

  return (
    <div className="max-w-screen flex items-center justify-center">
      <div className="border border-y relative flex flex-col max-w-3xl mx-auto h-full w-full justify-center">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-4 md:p-6 border-b"
        >
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>

          {/* Title row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 shrink-0 mt-1">
              {status && (
                <Badge
                  variant="outline"
                  className={`text-xs font-normal px-2 py-0.5 ${statusConfig[status].className}`}
                >
                  {statusConfig[status].label}
                </Badge>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2">
            {project.description}
          </p>
          {longDescription && (
            <p className="text-sm text-muted-foreground/80 leading-relaxed">
              {longDescription}
            </p>
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-2 mt-4">
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-card hover:bg-accent text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                Source Code
              </Link>
            )}
            {liveLink && (
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-card hover:bg-accent text-sm font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            )}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-4 md:p-6 border-b"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techChips.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + i * 0.04 }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-accent text-xs font-medium text-primary"
              >
                {tech.image && (
                  <Image
                    src={theme === "light" ? `/light-${tech.image}` : `/dark-${tech.image}`}
                    alt={tech.name}
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5"
                  />
                )}
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Details / Key highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-4 md:p-6"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Key Highlights
          </p>
          <div className="flex flex-col gap-3">
            {project.details.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.06, duration: 0.35 }}
                className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card hover:bg-accent/30 transition-colors duration-200"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-foreground/90">{detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
