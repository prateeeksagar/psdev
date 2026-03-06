"use client";
import PageTransition from "@/components/pageTransition";
import NameSection from "@/app/features/portfolio/NameSection";
import Overview from "@/app/features/portfolio/Overview";
import PatternSeparator from "@/components/ui/pattern-separator";
import Experience from "@/app/features/portfolio/experience/Experience";
import dynamic from "next/dynamic";
import SkillSection from "@/app/features/portfolio/skills/SkillSection";

const GithubContribution = dynamic(
  () => import("@/app/features/portfolio/GithubContribution"),
  { ssr: false }
);

export default function Home() {
  return (
    // <PageTransition>
      <div className="max-w-screen flex items-center justify-center">
        <div className="border border-y relative flex flex-col max-w-3xl mx-auto h-full w-full justify-center">
          <NameSection />

          <PatternSeparator />

          <Overview />
          <PatternSeparator />

          <SkillSection />
          <PatternSeparator />

          <Experience/>
          <PatternSeparator/>

          <GithubContribution/>
          <PatternSeparator/>
          {/* <Footer /> */}
        </div>
      </div>
    // </PageTransition>
  );
}
