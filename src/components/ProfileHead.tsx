"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "next-themes"
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Moon, Sun } from "./svg/svg";
import { cn } from "@/lib/utils";


export default function ProfileHead() {

  const { theme, setTheme } = useTheme()
  
  const handleTheme = () => {
    if(theme == 'light') {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    /* main div */
    <header className={cn("sticky max-w-screen overflow-x-hidden px-2 pt-2")}>
      {/* name and logo */}

      <div className="max-w-3xl mx-auto border flex gap-2 h-12 items-center px-2">
      <Button size={"icon"}  variant={"secondary"} className=" border flex items-center justify-center" onClick={handleTheme}>
        {theme == "light" && <Sun />}
        {theme == "dark" && <Moon/>}
        </Button>
      </div>


      {/* <div className="flex justify-between">
      <div className="flex flex-row gap-2 mt-5">

      </div>
        <div className="flex items-center justify-center">
          <Button className=" flex items-center justify-center focus-visible:ring-ring hover:ring-ring" onClick={handleTheme}>
        {theme == "light" && <Sun />}
        {theme == "dark" && <Moon/>}
        </Button>
        </div>
      </div> */}

      {/* full stack developer */}
      {/* <InfiniteCarousel/> */}
      {/* logos */}
      {/* <div className="flex space-x-4">
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
      </div> */}
    </header>
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
    <Carousel orientation="horizontal" className="text-lg text-muted-foreground  text-zinc-600 dark:text-gray-200 items-start">
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