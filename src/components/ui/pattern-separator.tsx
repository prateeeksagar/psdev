import { cn } from "@/lib/utils"

const PatternSeparator = ({ className}: {className?: string}) => {
  return (
    <div className={cn("w-full bg-white relative h-5 border", className)}>
      {/*  Diagonal Cross Grid Background */}
      <div
        className="absolute inset-0 h-full"
        style={{
          backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
          backgroundSize: "20px 20px",
        }}
      />
      {/* Your Content/Components */}
    </div>
  );
};

export default PatternSeparator;
