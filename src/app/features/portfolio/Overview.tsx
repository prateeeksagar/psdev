"use client";

import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "../../../components/ui/item";
import {
  CodeIcon,
  MapPinIcon,
  CallIcon,
  LinkIcon,
  MailIcon,
  MarsIcon,
  LinkedinIcon,
  GithubIcon,
} from "../../../components/svg/svg";
import Link from "next/link";
import { motion } from "motion/react";
import { Copy, Check, FileText } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Overview() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("prateeksagar2103@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("+917827445441");
    setCopiedPhone(true);
    toast.success("Phone number copied to clipboard!");
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <motion.section
      className="p-2"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Bio */}
      <motion.p
        className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 px-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        Full-stack engineer with 3+ years shipping production systems across fintech and AI-product startups — from complex, real-time frontends to backend systems handling regulated financial data (KYC, fraud detection). Comfortable owning features end-to-end in small, fast-moving remote teams.
      </motion.p>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 w-full">
          <Item className="p-0">
            <ItemMedia variant="icon" className="border-4 border-double">
              <CodeIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-sm md:text-lg">
                Software developer{" "}
                <Link
                  href={"https://www.wishtales.ai"}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @wishtales ai
                </Link>
              </ItemTitle>
            </ItemContent>
          </Item>
          <Item className="p-0">
            <ItemMedia variant="icon" className="border-4 border-double">
              <MapPinIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-sm md:text-lg">Delhi, India</ItemTitle>
            </ItemContent>
          </Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          {/* Phone */}
          <Item className="p-0 group justify-between pr-2">
            <div className="flex items-center gap-2">
              <ItemMedia variant="icon" className="border-4 border-double">
                <CallIcon />
              </ItemMedia>
              <ItemContent>
                <a href="tel:+917827445441" className="hover:underline">
                  <ItemTitle className="text-sm md:text-lg">+91 7827445441</ItemTitle>
                </a>
              </ItemContent>
            </div>
            <button
              onClick={handleCopyPhone}
              title="Copy phone number"
              className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </Item>

          {/* Website */}
          <Item className="p-0">
            <ItemMedia variant="icon" className="border-4 border-double">
              <LinkIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-sm md:text-lg">
                <Link href={"https://www.prateeksagar.com/"} target="_blank" className="hover:underline">
                  prateeksagar.com
                </Link>
              </ItemTitle>
            </ItemContent>
          </Item>

          {/* Email */}
          <Item className="p-0 group justify-between pr-2">
            <div className="flex items-center gap-2">
              <ItemMedia variant="icon" className="border-4 border-double">
                <MailIcon />
              </ItemMedia>
              <ItemContent>
                <a href="mailto:prateeksagar2103@gmail.com" className="hover:underline">
                  <ItemTitle className="text-sm md:text-lg">prateeksagar2103@gmail.com</ItemTitle>
                </a>
              </ItemContent>
            </div>
            <button
              onClick={handleCopyEmail}
              title="Copy email address"
              className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </Item>

          {/* Pronouns */}
          <Item className="p-0">
            <ItemMedia variant="icon" className="border-4 border-double">
              <MarsIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-sm md:text-lg">he/him</ItemTitle>
            </ItemContent>
          </Item>

          {/* LinkedIn */}
          <Item className="p-0">
            <ItemMedia variant="icon" className="border-4 border-double">
              <LinkedinIcon className="" />
            </ItemMedia>
            <ItemContent>
              <Link href={"https://www.linkedin.com/in/prateek-sagar/"} target="_blank">
                <ItemTitle className="text-sm md:text-lg hover:underline">Linkedin</ItemTitle>
              </Link>
            </ItemContent>
          </Item>

          {/* GitHub */}
          <Item className="p-0">
            <ItemMedia variant="icon" className="border-4 border-double">
              <GithubIcon className="" />
            </ItemMedia>
            <ItemContent>
              <Link href={"https://github.com/prateeeksagar"} target="_blank">
                <ItemTitle className="text-sm md:text-lg hover:underline">Github</ItemTitle>
              </Link>
            </ItemContent>
          </Item>

          {/* Resume Link */}
          <Item className="p-0 md:col-span-2">
            <ItemMedia variant="icon" className="border-4 border-double">
              <FileText className="w-5 h-5 text-primary" />
            </ItemMedia>
            <ItemContent>
              <div className="flex items-center gap-2">
                <ItemTitle className="text-sm md:text-lg font-medium">Resume:</ItemTitle>
                <a
                  href="/Prateek_Sagar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-lg text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  View PDF
                </a>
                <span className="text-muted-foreground text-sm">/</span>
                <a
                  href="/Prateek_Sagar_Resume.pdf"
                  download="Prateek_Sagar_Resume.pdf"
                  className="text-sm md:text-lg text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  Download
                </a>
              </div>
            </ItemContent>
          </Item>
        </div>
      </div>
    </motion.section>
  );
}
