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
  title: "Prateek Sagar",
  description: "prateek sagar portfolio",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          <TooltipProvider>
            <PageTransition>{children}</PageTransition>
            {/* {children} */}
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
        {/* <OnekoLoader/> */}
        <Script src="oneko/oneko.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
