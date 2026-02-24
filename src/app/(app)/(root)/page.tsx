import ProfileHead from "@/components/ProfileHead";
import Footer from "@/components/Footer";
import PageTransition from "@/components/pageTransition";
import { Separator } from "@/components/ui/separator";
import NameSection from "@/components/portfolio/NameSection";
import Overview from "@/components/portfolio/Overview";
import Skills from "@/components/portfolio/Skills";
import PatternSeparator from "@/components/ui/pattern-separator";
import WorkCard from "@/components/WorkCard";
import Experience from "@/components/portfolio/experience/Experience";


export default function Home() {
  return (
    <PageTransition>
      <div className="max-w-screen flex items-center justify-center mx-2">
        <div className="border border-y relative flex flex-col max-w-3xl w-3xl mx-auto h-full justify-center">
          <NameSection />

          <PatternSeparator />

          <Overview />
          <PatternSeparator />

          <Skills />
          <PatternSeparator />

          <Experience/>
          <PatternSeparator/>
          {/* <Footer /> */}
        </div>
      </div>
    </PageTransition>
  );
}
