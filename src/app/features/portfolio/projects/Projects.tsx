"use client";

import { mainProjects, otherProjects } from "@/dataStatic/dataStatic";
import MainProjectCard from "./MainProjectCard";
import OtherProjectCard from "./OtherProjectCard";
import { motion, Variants, Easing } from "motion/react";

const EASE: Easing = "easeOut";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45, ease: EASE },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="">
      {/* Header */}
      <div className="flex flex-row justify-between items-center p-2 border-b">
        <h2 className="text-2xl font-semibold">Projects</h2>
      </div>

      {/* ── Featured & Core Projects ── */}
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={sectionVariants}
        className="p-2"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
          Featured
        </p>
        <div className="flex flex-col gap-3">
          {mainProjects.map((project, idx) => (
            <MainProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mt-4 mb-3">
          Other Systems & Tools
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {otherProjects.map((project, idx) => (
            <OtherProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

