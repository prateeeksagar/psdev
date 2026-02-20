import { motion, scale } from "motion/react"

export const Sun = () => {
    return (
        <motion.svg initial={{ scale: 0 }}
        
        animate={{ scale: 1,  rotate: 90, transition: { duration: 0.5 }}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sun-medium-icon lucide-sun-medium h-[0.8rem] w-[0.8rem] md:h-[1.2rem] md:w-[1.2rem] dark:scale-0"><circle cx="12" cy="12" r="4" />
        <motion.path initial={{scale :0}} animate={{ scale: 1, transition: { duration: 0.4 }}} d="M12 3v1" />
        <motion.path initial={{scale :0}} animate={{ scale: 1, transition: { duration: 0.8 }}} d="M12 20v1" />
        <motion.path initial={{scale :0}} animate={{ scale: 1, transition: { duration: 1 }}} d="M3 12h1" />
        <motion.path initial={{scale :0}} animate={{ scale: 1, transition: { duration: 1.4 }}} d="M20 12h1" />
        <motion.path initial={{scale :0}} animate={{ scale: 1, transition: { duration: 1.8 }}} d="m18.364 5.636-.707.707" />
        <motion.path initial={{scale :0}} animate={{ scale: 1, transition: { duration: 2 }}} d="m6.343 17.657-.707.707" />
        <motion.path initial={{scale :0}} animate={{ scale: 1, transition: { duration: 2.4 }}} d="m5.636 5.636.707.707" />
        <motion.path initial={{scale :0}} animate={{ scale: 1, transition: { duration: 2.6 }}} d="m17.657 17.657.707.707" />
        </motion.svg>
    )
}

export const Moon = () => {
    return (
        <motion.svg initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
        }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-moon-icon lucide-moon-medium h-[0.8rem] w-[0.8rem] md:h-[1.2rem] md:w-[1.2rem]"><motion.path   initial={{ rotate: 0 }}
        animate={{ rotate: [0, -6, 6, -4, 4, 0] }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }} style={{
            transformOrigin: "50% 85%", // 👈 pivot near bottom tip
          }}  d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></motion.svg>
    )
}