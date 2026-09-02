import React from "react";
import { WorkExperieceType } from "@/dataStatic/dataStatic";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const renderFormattedText = (text: string) => {
  const parts = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const [_, label, url] = match;
    parts.push(
      <Link
        key={match.index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 text-foreground hover:text-primary font-medium transition-colors"
      >
        {label}
      </Link>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const WorkCard = ({
  company,
  position,
  duration,
  description,
  website,
}: WorkExperieceType) => {
  return (
    <>
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{position}</CardTitle>
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Visit ${company} website`}
          >
            <ExternalLink size={18} />
          </Link>
        </div>
        <CardDescription className="flex justify-between items-center">
          <span>{company}</span>
          <span>{duration}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1">
          {description.map((point, idx) => (
            <li key={idx} className="text-sm text-muted-foreground">
              {renderFormattedText(point)}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
    </>
  );
};

export default WorkCard;
