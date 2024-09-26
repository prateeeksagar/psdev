"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Github, Linkedin, Mail } from "lucide-react";
// import { useTheme } from "next-themes"
// import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function ProfileHead() {

  // const { setTheme } = useTheme()

  return (
    /* main div */
    <div className="flex flex-col">
      {/* name and logo */}
      <div className="flex justify-between">
      <div className="flex flex-row gap-2 mt-5">
        {/* <div className="flex justify-between"> */}
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Prateek Sagar
        </h3>

      </div>
        {/* <div className="">
          <Button variant="outline">
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" onClick={() => setTheme('light')}/>
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" onClick={() => setTheme('dark')}/>
        </Button>
        </div> */}
      </div>

      {/* full stack developer */}
      <InfiniteCarousel/>
      {/* logos */}
      <div className="flex space-x-4">
        <a
          href="https://github.com/prateeeksagar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com/in/prateek-sagar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prateeksagar2103@gmail.com&su=Opportunity&body=Hi,%20I%20am%20here%20to%20discuss%20regarding%20an%20opportunity." target="_blank">
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}


const InfiniteCarousel = () => {
  const items = [
    "Full Stack Developer",
    "Problem Solver",
    "Continuous Learner"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [items.length]);

  return (
    <Carousel orientation="horizontal" className="text-lg text-muted-foreground  text-zinc-600 items-start">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className={index === currentIndex ? "active" : "hidden"}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-lg">{item}</p>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};