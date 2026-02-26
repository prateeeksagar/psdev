import { cn } from "@/lib/utils"

const PatternSeparator = ({ className}: {className?: string}) => {
  return (

<div className={cn("w-full bg-background relative h-5 border", className)}>
{/* Diagonal Stripes Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
    }}
  />
     {/* Your Content/Components */}
</div>
  );
};



export default PatternSeparator;
