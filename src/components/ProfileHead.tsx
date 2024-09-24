import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ProfileHead() {
  return (
    /* main div */
    <div className="flex flex-col">
      {/* name and logo */}
      <div className="flex flex-row gap-2 mt-5">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Prateek Sagar
        </h3>
      </div>

      {/* full stack developer */}
      <p className="text-lg text-muted-foreground mb-2 text-zinc-600">
        Full Stack Developer
      </p>
      {/* logos */}
      <div className="flex space-x-4">
        <a
          href="https://github.com/prateeeksagar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com/in/prateek-sagar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prateeksagar2103@gmail.com&su=Opportunity&body=Hi,%20I%20am%20here%20to%20discuss%20regarding%20an%20opportunity." target="_blank">
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
