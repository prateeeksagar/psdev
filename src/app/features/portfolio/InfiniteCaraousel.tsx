"use client";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../../../components/ui/carousel";
import { AnimatePresence, motion } from "motion/react";
export const InfiniteCarousel = () => {
  const items = [
    "Full Stack Developer",
    "Problem Solver",
    "Continuous Learner",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [items.length]);

  return (
    <Carousel
      orientation="horizontal"
      className="font-semibold text-muted-foreground  dark:text-gray-200 items-start"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className={index === currentIndex ? "active" : "hidden"}
          >
            <AnimatePresence mode="wait">
              {index === currentIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <p className="text-xl font-light">{item}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
