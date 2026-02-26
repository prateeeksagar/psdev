"use client";
import PageTransition from "@/components/pageTransition";
import NameSection from "@/components/portfolio/NameSection";
import Overview from "@/components/portfolio/Overview";
import Skills from "@/components/portfolio/Skills";
import PatternSeparator from "@/components/ui/pattern-separator";
import Experience from "@/components/portfolio/experience/Experience";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import GithubContribution from "@/components/portfolio/GithubContribution";


export default function Home() {
  return (
    <PageTransition>
      <div className="max-w-screen flex items-center justify-center mx-2">
        <div className="border border-y relative flex flex-col max-w-3xl mx-auto h-full w-full justify-center">
          <NameSection />

          <PatternSeparator />

          <Overview />
          <PatternSeparator />

          <Skills />
          <PatternSeparator />

          <Experience/>
          <PatternSeparator/>

          <GithubContribution/>
          <PatternSeparator/>
          {/* <Footer /> */}
        </div>
      </div>
    </PageTransition>
  );
}
