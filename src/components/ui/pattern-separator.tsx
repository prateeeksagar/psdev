import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const PatternSeparator = ({ className }: { className?: string }) => {
  return (
    <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ originX: 0 }}   // 👈 important (start from left)
      className={cn("w-full bg-background relative h-5 border", className)}
    >
      {/* Diagonal Stripes Background */}
      <div
        className={cn("absolute inset-0 z-0",
          "bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#f3f4f6_2px,#f3f4f6_4px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#3F3F46_4px,#1f2937_4px)]"
        )}
      />
      {/* Your Content/Components */}
    </motion.div>
  );
};

export default PatternSeparator;
