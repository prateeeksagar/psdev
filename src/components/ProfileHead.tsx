"use client"
import { useTheme } from "next-themes"
import { Button } from "./ui/button";
import { Moon, Sun } from "./svg/svg";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ProfileHead() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  
  const handleTheme = () => {
    if(theme == 'light') {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  return (
    /* main div */
    <header className={cn("max-w-screen h-full w-full py-2 px-2 sticky top-0 left-0 z-50")}>
      {/* name and logo */}
      <div className={cn("w-full max-w-3xl mx-auto border  flex gap-2 h-12 items-center px-2", scrolled ? "AppleGlass transition-all transform duration-500 ease-in-out" : "")}>
        <Button size={"icon"} suppressHydrationWarning  variant={"secondary"} className=" border flex items-center justify-center " onClick={handleTheme}>
        {theme == "dark" ? <Moon className=""/>
        :<Sun  className=""/>}
        </Button>
      {/* </div> */}
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
