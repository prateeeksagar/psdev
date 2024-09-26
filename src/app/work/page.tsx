import React from "react";
import WorkCard from "@/components/WorkCard";
import { WorkExperience } from "@/dataStatic/dataStatic";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import PageTransition from '@/components/pageTransition';


export default function Page() {
  return (
    <PageTransition>
    <div className="w-full flex items-center justify-center mt-10">
      <div className="flex flex-col w-4/5 md:w-1/2 h-full justify-center gap-3">
        <div className="flex  items-center justify-between">
          <Link href="/" className="border hover:bg-slate-100">
          <ArrowLeft/>
          </Link>
          <h3 className="text-2xl">WORK EXPERIENCE</h3>
        </div>

        {WorkExperience.map((item, index) => (
          <WorkCard
            key={index}
            company={item.company}
            description={item.description}
            position={item.position}
            duration={item.duration}
            website={item.website}
          />
        ))}
        <Footer />
      </div>
    </div>
    </PageTransition>
  );
}
