"use client"
import { cn } from "@/lib/utils";
import { motion, scale } from "motion/react";

export const Sun = ({className}: {className?:string}) => {
  return (
    <motion.svg
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: 90, transition: { duration: 0.5 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-sun-medium-icon lucide-sun-medium h-[0.8rem] w-[0.8rem] md:h-[1.2rem] md:w-[1.2rem] dark:scale-0", className)}
    >
      <circle cx="12" cy="12" r="4" />
      <motion.path
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.4 } }}
        d="M12 3v1"
      />
      <motion.path
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.8 } }}
        d="M12 20v1"
      />
      <motion.path
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 1 } }}
        d="M3 12h1"
      />
      <motion.path
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 1.4 } }}
        d="M20 12h1"
      />
      <motion.path
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 1.8 } }}
        d="m18.364 5.636-.707.707"
      />
      <motion.path
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 2 } }}
        d="m6.343 17.657-.707.707"
      />
      <motion.path
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 2.4 } }}
        d="m5.636 5.636.707.707"
      />
      <motion.path
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 2.6 } }}
        d="m17.657 17.657.707.707"
      />
    </motion.svg>
  );
};

export const Moon = ({className}: {className: string}) => {
  return (
    <motion.svg
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-moon-icon lucide-moon-medium h-[0.8rem] w-[0.8rem] md:h-[1.2rem] md:w-[1.2rem]", className)}
    >
      <motion.path
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -6, 6, -4, 4, 0] }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "50% 85%", // 👈 pivot near bottom tip
        }}
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      />
    </motion.svg>
  );
};

export const CodeIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      // width="24"
      // height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-code-xml-icon lucide-code-xml w-6 h-6"
    >
      <motion.path  d="m18 16 4-4-4-4" />
      <motion.path  d="m6 8-4 4 4 4" />
      <motion.path d="m14.5 4-5 16" />
    </motion.svg>
  );
};

export const MapPinIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-map-pin-icon lucide-map-pin"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
};

export const CallIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-phone-icon lucide-phone"
    >
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
};

export const LinkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-link-icon lucide-link"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
};

export const MailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-mail-icon lucide-mail"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
};

export const MarsIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-mars-icon lucide-mars", className)}
    >
      <path d="M16 3h5v5" />
      <path d="m21 3-6.75 6.75" />
      <circle cx="10" cy="14" r="6" />
    </svg>
  );
};

export const GlobalIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-globe-icon lucide-globe h-5 w-5", className)}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
};

export const LinkedinIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-linkedin-icon lucide-linkedin", className)}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
};

export const GithubIcon = ({className}: {className?: string}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("lucide lucide-github-icon lucide-github",className)}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  )
}

export const DotIcon = ({ className, ...props }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "lucide lucide-dot-icon lucide-dot h-4 w-4 animate-pulse",
        className,
      )}
      {...props}
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  );
};
