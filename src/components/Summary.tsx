
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
// import { useRouter } from 'next/navigation';


const Summary = () => {
    // const router = useRouter();

    // const handleRoute = (location: string) => {
    //     router.push(location)
    // }

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 justify-between">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Summary
        </h2>
        <Link href={'/work'} ><Button variant="link" className="underline text-blue-500 hover:text-blue-700">Work Experience</Button></Link>
        {/* <Button variant="link" onClick={() => router.push('/work')}>Work Experience</Button> */}
      </div>
      <p>
        I&apos;m a passionate Full-Stack Developer with almost{" "}
        <b>2 years of experience</b> as a working professional. I love crafting
        clean, efficient, and scalable web applications. With a strong
        foundation in backend services and a keen eye for frontend design, I
        thrive on solving complex problems and delivering impactful solutions.
        When I’m not coding, you can find me exploring the latest tech trends or
        working on innovative side projects. Let’s create something awesome
        together!
      </p>
    </div>
  );
};

export default Summary;
