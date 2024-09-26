import ProfileHead from "@/components/ProfileHead";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/pageTransition";

export default function Home() {
  return (
    <PageTransition>
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col w-4/5 md:w-1/2 h-full justify-center gap-3">
        <ProfileHead/>
        <Summary/>
        <Skills/>
        <Projects/>
        <Contact />
        <Footer/>
      </div>
    </div>
    </PageTransition>
  );
}
