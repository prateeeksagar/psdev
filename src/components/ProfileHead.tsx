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
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  return (
    /* main div */
    <header className={cn("max-w-screen h-full w-full py-2 px-2 sticky top-0 left-0 z-50")}>
      {/* name and logo */}
      <div className={cn("w-full max-w-3xl mx-auto border  flex gap-2 h-12 items-center px-2", scrolled ? "relative overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-[3px] backdrop-saturate-[200%] border border-white/40 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all transform duration-300 ease-in-out" : "")}>
        <Button size={"icon"} suppressHydrationWarning  variant={"secondary"} className=" border flex items-center justify-center " onClick={handleTheme}>
        {theme == "dark" ? <Moon className=""/>
        :<Sun  className=""/>}
        </Button>
      {/* </div> */}
      </div>
    </header>
  );
}
