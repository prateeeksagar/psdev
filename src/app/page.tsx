import ProfileHead from "@/components/ProfileHead";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/pageTransition";

import dynamic from "next/dynamic";
const Starfield = dynamic(() => import("@/components/StarFeild"), { ssr: false });

export default function Home() {
  return (
    <PageTransition>
    <div className="w-full flex items-center justify-center py-3">
      <div className="flex flex-col max-w-3xl overflow-x-hidden px-2 mx-auto h-full justify-center gap-3">
        <ProfileHead/>
        <Summary/>
        <Skills/>
        <Projects/>
        <Contact />
        <Footer/>
      </div>
    </div>
    {/* <Starfield /> */}
    </PageTransition>
  );
}
