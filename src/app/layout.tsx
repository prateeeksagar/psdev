import type { Metadata } from "next";
// import { fontMono, fontPixelSquare, fontSans } from "@/lib/fonts"
import { Alata } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import PageTransition from "@/components/pageTransition";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import Script from "next/script";

const fontSans = Alata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Prateek Sagar | Full Stack Developer",
  description:
    "Full-stack engineer with 3+ years shipping production systems across fintech and AI-product startups — from complex real-time frontends to distributed backend architectures.",
  keywords: [
    "Prateek Sagar",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Fastify",
    "MobX",
    "Fabric.js",
    "PostgreSQL",
    "Redis",
    "Distributed Systems",
    "Portfolio",
  ],
  authors: [{ name: "Prateek Sagar", url: "https://www.prateeksagar.com" }],
  creator: "Prateek Sagar",
  metadataBase: new URL("https://www.prateeksagar.com"),
  openGraph: {
    title: "Prateek Sagar | Full Stack Developer",
    description:
      "Full-stack engineer with 3+ years shipping production systems across fintech and AI-product startups.",
    url: "https://www.prateeksagar.com",
    siteName: "Prateek Sagar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prateek Sagar | Full Stack Developer",
    description:
      "Full-stack engineer with 3+ years shipping production systems across fintech and AI-product startups.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prateek Sagar",
  url: "https://www.prateeksagar.com",
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Wishtales AI",
  },
  sameAs: [
    "https://github.com/prateeeksagar",
    "https://www.linkedin.com/in/prateek-sagar/",
  ],
  knowsAbout: [
    "TypeScript",
    "JavaScript",
    "Next.js",
    "React",
    "Node.js",
    "Fastify",
    "BullMQ",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "MobX",
    "Fabric.js",
    "System Design",
    "Microservices",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={
        cn()
        // fontSans.variable,
        // fontMono.variable,
        // fontPixelSquare.variable
      }
      suppressHydrationWarning
    >
      <body className={`${fontSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {" "}
          <TooltipProvider>
            <PageTransition>{children}</PageTransition>
            {/* {children} */}
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
        <Script src="oneko/oneko.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
