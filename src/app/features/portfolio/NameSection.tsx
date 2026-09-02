"use client";

import { InfiniteCarousel } from "./InfiniteCaraousel";
import { FileText, Download, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function NameSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("prateeksagar2103@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex flex-col p-3 gap-3">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-3xl font-bold tracking-wide text-shadow-sm">
            Hi, I am Prateek Sagar
          </h2>
          <div className="mt-1">
            <InfiniteCarousel />
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium w-fit shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Open to Opportunities
        </div>
      </div>

      {/* Quick Action CTAs */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <a
          href="/Prateek_Sagar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-card hover:bg-accent text-xs font-medium transition-colors shadow-2xs"
        >
          <FileText className="w-3.5 h-3.5 text-primary" />
          View Resume
        </a>
        <a
          href="/Prateek_Sagar_Resume.pdf"
          download="Prateek_Sagar_Resume.pdf"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-primary text-primary-foreground hover:opacity-90 text-xs font-medium transition-opacity shadow-2xs"
        >
          <Download className="w-3.5 h-3.5" />
          Download Resume
        </a>
        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-card hover:bg-accent text-xs font-medium text-muted-foreground hover:text-foreground transition-colors shadow-2xs"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-green-500" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
          {copied ? "Copied Email!" : "Copy Email"}
        </button>
      </div>
    </section>
  );
}