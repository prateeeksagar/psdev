export type WorkExperieceType = {
  company: string,
  position: string,
  duration: string,
  description: string[],
  website: string
}


export const techStack = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "mySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    }
  ];


export const projectData = [
  {
    title: "Notes App",
    desciption: "Full stack note taking app where you can track your work",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    tags: ['nextjs', 'nodejs', 'mongodb', 'tailwind'],
    githubLink: "https://github.com/prateeeksagar/notes-frontend",
    liveLink: "https://notes-frontend-weld.vercel.app/"
  },
  {
    title: "Airline Reservation Backend",
    desciption: "Microservice backend for reserving air tickets",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    tags: ['reactjs', 'nodejs', 'mysql', 'sequelize','express'],
    githubLink: "http://github.com/prateeeksagar/FlightsandSearchService",
    liveLink: ""
  },
  {
    title: "Medium Blog App",
    desciption: "Blogging Application like medium.com",
    image: "https://www.oceanlinkglobal.com/wp-content/uploads/2020/06/placeholder.png",
    tags: ['typescript', 'nodejs', 'postgreSQL', 'prisma', 'hono'],
    githubLink: "http://github.com/prateeeksagar/medium-project",
    liveLink: ""
  }
]

export const WorkExperience = [
  {
    company: "Faircent (Fairassets technologies india pvt. ltd.)",
    position: "Software Developer",
    duration: "July 2023 - October 2024",
    description: [
      "Integrated Faircent with ONDC to provide personalized loans, increasing user loan engagement by 20%.",
      "Developed a fraud detection system, improving capturing of suspicious user activity by 30% and aiding RBI investigations.",
      "Automated the ticket generation process with OSTicket API, improving team efficiency by 10+ hours per week.",
      "Developed APIs for onboarding, enhancing the platform's functionality and driving a 25% increase in customer engagement.",
      "Led development of KYC verification processes (Aadhaar, selfie, location), reducing onboarding time by 25%.",
      "Created the web interface, allowing users to reallocate idle funds for reinvestment, increasing the investment by 5%.",
      "Led the design and development of Restful API, which facilitated third parties to manage and integrate the system, driving a 25 percent increase in customer engagement and expanding market reach.",
      "Integrated the INCRED APIs and allow faircent to send eligible leads to the INCRED."
    ],
    website: "https://faircent.com"
  },
  {
    company: "Faircent  (Fairassets technologies india pvt. ltd.)",
    position: "Software Developer Intern",
    duration: "Jan 2023 - June 2023",
    description: [
      "Streamlined payment processes with an automated PDF generator, reducing manual data entry by 15+ hours per week.",
      "Implemented multiple APIs to ensure efficiency, security, and unit testing with complete ownership.",
      "Integrated CCAvenue payment gateway for seamless transactions for 100,000+ users."
    ],
    website: "https://faircent.com"
  },
]