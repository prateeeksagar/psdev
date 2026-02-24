import ProfileHead from "@/components/ProfileHead";
import Footer from "@/components/Footer";
import PageTransition from "@/components/pageTransition";
import { Separator } from "@/components/ui/separator";
import NameSection from "@/components/portfolio/NameSection";
import Overview from "@/components/portfolio/Overview";
import Skills from "@/components/portfolio/Skills";

function MainSeparator() {
    return (
        <div className="h-[10px] w-3xl bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-300  border" />  
    )
}


export default function Home() {
  return (
    <PageTransition>
    <div className="max-w-screen flex items-center justify-center mx-2">
      <div className="relative flex flex-col max-w-3xl mx-auto h-full justify-center">
      <MainSeparator/>
      <NameSection/>
      <Overview/>
      <Skills/>
        <Footer/>
      </div>
    </div>
    </PageTransition>
  );
}


