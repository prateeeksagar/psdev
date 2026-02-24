"use client";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { motion } from "motion/react";
export const InfiniteCarousel = () => {
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
      <Carousel orientation="horizontal" className="font-semibold text-muted-foreground  dark:text-gray-200 items-start">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className={index === currentIndex ? "active" : "hidden"}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                transition={{ duration: 1 }}
              >
                <p className="text-xl">{item}</p>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  };