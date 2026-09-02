export type WorkExperieceType = {
  company: string,
  position: string,
  duration: string,
  description: string[],
  website: string
}

export type TechChip = {
  name: string;
  image: string;
}

export type MainProject = {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  details: string[];
  techStack: TechChip[];
  githubLink?: string;
  liveLink?: string;
  status: "active" | "beta" | "completed";
}

export type OtherProject = {
  title: string;
  slug: string;
  description: string;
  details: string[];
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
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

export const mainProjects: MainProject[] = [
  {
    title: "Excileboard",
    slug: "excileboard",
    description: "High-performance virtual infinite whiteboard engine",
    longDescription:
      "Built with TypeScript, Fabric.js, and MobX. Features reactive 60 FPS canvas sync and auto-persistence.",
    details: [
      "Built a full-featured whiteboard with drawing tools — rectangles, circles, diamonds, lines, arrows, freehand pencil, and text",
      "Architected with a Manager Pattern using MobX for reactive state — RootStore orchestrates Canvas, Element, Tool, Style, Selection, Eraser, Board, and Shortcut managers",
      "FabricSyncManager acts as a reactive bridge between MobX models and Fabric.js canvas objects with per-element geometry and style reactions",
      "Board persistence with auto-save to LocalStorage — supports multiple boards with create, rename, delete, and search",
      "Arrow element binding — arrows snap to bounding-box edges of connected shapes and re-draw when bound elements move",
      "Zoom (pinch/ctrl+scroll) and pan (two-finger/wheel) via CanvasZoomManager and CanvasPanningManager",
      "Keyboard shortcut system — tool selection (1–9), zoom (ctrl+/-), undo/redo, with a discoverable shortcut dialog",
      "Eraser tool with hit-test detection and smooth 180ms opacity fade-out animation before element removal",
    ],
    techStack: [
      { name: "React", image: "react.svg" },
      { name: "TypeScript", image: "typescript.svg" },
      { name: "Tailwind", image: "tailwind.svg" },
      { name: "MobX", image: "mobx.svg"},
      { name: "FabricJS", image: "fabricjs.svg"},
      { name: "shadcn", image: "light-shadcn.svg"}
    ],
    githubLink: "https://github.com/prateeeksagar/excileboard",
    liveLink: "https://excileboard.vercel.app/",
    status: "active",
  },
  {
    title: "Scalable Notifications",
    slug: "scalable-notifications",
    description: "A high-throughput, event-driven notification engine",
    longDescription:
      "A production-grade notification service designed for scale — built with TypeScript, Fastify, BullMQ, Redis, PostgreSQL, and Drizzle ORM inside a Turborepo monorepo.",
    details: [
      "Event-driven architecture — decouples notification triggers from delivery using message queues for high throughput",
      "Built with Fastify for high-performance HTTP handling and low-overhead request processing",
      "BullMQ + Redis for reliable job queuing — supports retries, rate limiting, and priority-based scheduling",
      "PostgreSQL with Drizzle ORM for type-safe database queries and schema management with migrations",
      "Turborepo monorepo setup — shared packages, parallel builds, and efficient dependency management across services",
      "TypeScript end-to-end — full type safety from API layer through queue workers to database queries",
    ],
    techStack: [
      { name: "TypeScript", image: "typescript.svg" },
      { name: "Node.js", image: "nodejs.svg" },
      { name: "PostgreSQL", image: "postgresql.svg" },
      { name: "Redis", image: "redis.svg" },
    ],
    githubLink: "https://github.com/prateeeksagar/scalable-notifications",
    status: "active",
  },
];

export const otherProjects: OtherProject[] = [
  {
    title: "ps-icons",
    slug: "ps-icons",
    description:
      "Animated SVG icon library ready to drop into any project. Import via CLI like shadcn — built with Motion, Lucide icons, React, and Tailwind CSS.",
    details: [
      "Built a reusable animated SVG icon library with smooth Motion transitions",
      "CLI-based import system inspired by shadcn — install icons directly into your project",
      "Powered by Lucide icons with custom animation presets for hover, click, and mount states",
      "React components with Tailwind CSS styling — drop-in ready with zero config",
    ],
    techStack: ["React", "Motion", "Lucide", "Tailwind CSS", "CLI"],
    githubLink: "https://github.com/prateeeksagar/ps-icons"
  },
  {
    title: "ShortURL",
    slug: "short-url",
    description:
      "A URL shortener service with analytics. Clean REST API backend for creating and resolving short links.",
    details: [
      "RESTful API service for creating short URLs and resolving them to original destinations",
      "Click analytics tracking — logs visit count, timestamps, and referrer data per short link",
      "MongoDB for flexible document storage of URL mappings and analytics data",
      "Express.js backend with clean route architecture and input validation",
    ],
    techStack: ["Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/prateeeksagar/short-URL",
  },
  {
    title: "Flight Reservation System",
    slug: "flight-reservation",
    description:
      "Microservice architecture for searching and reserving flights. Designed for scalability with separate service boundaries.",
    details: [
      "Microservice-based architecture with separate services for search, booking, and user management",
      "Prisma ORM with MySQL for type-safe database operations and migration management",
      "Designed with clear service boundaries for independent scaling and deployment",
      "RESTful APIs with input validation and error handling across all services",
    ],
    techStack: ["Node.js", "Microservices", "Prisma", "MySQL"],
    githubLink: "https://github.com/prateeeksagar/FlightsandSearchService",
  },
  {
    title: "Lender System",
    slug: "lender-system",
    description:
      "A peer-to-peer lending platform with dedicated frontend and backend. Handles loan requests, lender matching, and fund tracking.",
    details: [
      "Full-stack peer-to-peer lending platform with separate frontend and backend repositories",
      "Loan request workflow — borrowers submit requests, system matches with eligible lenders",
      "Fund tracking dashboard for lenders to monitor active loans and repayment status",
      "React frontend with Node.js backend handling user authentication and transaction logic",
    ],
    techStack: ["React", "Node.js", "P2P Lending"],
    githubLink: "https://github.com/prateeeksagar/LenderSystemFrontend",
  },
]

export const WorkExperience = [
  {
    company: "Wishtales AI",
    position: "Full Stack Developer",
    duration: "October 2024 - Present",
    location: "Remote",
    description: [
      "Architected and scaled an AI-powered video editing platform from 0-to-1 using Next.js, MobX, and Fabric.js, establishing core project structure and state management patterns including features like drag and drop, editing timeline orchestration with canvas. ([supercut](https://www.wishtales.ai/supercut))",
      "Designed and implemented a high-performance frontend architecture for real-time video manipulation, managing complex client-side memory allocation and canvas rendering using fabric.js and mobX.",
      "Engineered an automated multilingual video dubbing engine, integrating AI models to handle localized audio alignment and multi-language video rendering pipelines using react, zustand & tanstack query. ([spark](https://www.wishtales.ai/spark))",
    ],
    logo: "/wishtales_logo.png",
    website: "https://wishtales.ai",
    linkedin: "https://www.linkedin.com/company/wishtales-ai",
    skills: [
      {
        name: "NextJS",
        image: "nextjs.svg"
      },
      {
        name: "Node JS",
        image: "nodejs.svg"
      },
      {
        name: "ReactJS",
        image: "react.svg"
      },
      {
        name: "Shadcn UI",
        image: "shadcn.svg"
      },
      {
        name: "Tailwind CSS",
        image: "tailwind.svg"
      },
      {
        name: "Material UI",
        image: "material-ui.svg"
      }
    ]
  },
  {
    company: "Faircent (Fairassets technologies india pvt. ltd.)",
    position: "Software Developer",
    location: "Gurugram, India",
    logo: "/faircent_logo.png",
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
    website: "https://faircent.com",
    linkedin: "https://www.linkedin.com/company/faircent",
    skills: [
      {
        name: "Node",
        image: "nodejs.svg"
      },
      {
        name: "Postman",
        image: "postman.svg"
      },
      {
        name: "MongoDB",
        image: "mongodb.svg"
      },
      {
        name: "MySQL",
        image: "mysql.svg"
      },
      {
        name: "React",
        image: "react.svg"
      },

    ]
  },
  {
    company: "Faircent  (Fairassets technologies india pvt. ltd.)",
    position: "Software Developer Intern",
    location: "Gurugram, India",
    logo: "/faircent_logo.png",
    duration: "Jan 2023 - June 2023",
    description: [
      "Streamlined payment processes with an automated PDF generator, reducing manual data entry by 15+ hours per week.",
      "Implemented multiple APIs to ensure efficiency, security, and unit testing with complete ownership.",
      "Integrated CCAvenue payment gateway for seamless transactions for 100,000+ users."
    ],
    website: "https://faircent.com",
    linkedin: "https://www.linkedin.com/company/faircent",
    skills: [
      {
        name: "Node",
        image: "nodejs.svg"
      },
      {
        name: "Postman",
        image: "postman.svg"
      },
      {
        name: "MongoDB",
        image: "mongodb.svg"
      },
      {
        name: "MySQL",
        image: "mysql.svg"
      },
      {
        name: "React",
        image: "react.svg"
      },
    ]
  },
]
