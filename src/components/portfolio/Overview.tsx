import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "../ui/item";
import {
  CodeIcon,
  MapPinIcon,
  CallIcon,
  LinkIcon,
  MailIcon,
  MarsIcon,
  LinkedinIcon,
  GithubIcon,
} from "../svg/svg";
import Link from "next/link";

export default function Overview() {
  return (
    <section className="p-2">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 w-full">
          <Item className="p-0">
            <ItemMedia variant="icon" className="border-4 border-double">
              <CodeIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-sm md:text-lg">
                Software developer
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
          <Item className="p-0">
            <ItemMedia variant="icon" className="border-4 border-double">
              <CallIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-sm md:text-lg">+91 7827445441</ItemTitle>
            </ItemContent>
          </Item>
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
          <Item className="p-0">
            <ItemMedia variant="icon" className="border-4 border-double">
              <MailIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-sm md:text-lg">hi@prateeksagar.com</ItemTitle>
            </ItemContent>
          </Item>
          <Item className="p-0">
            <ItemMedia variant="icon" className="border-4 border-double">
              <MarsIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-sm md:text-lg">he/him</ItemTitle>
            </ItemContent>
          </Item>

          <Item className="p-0">
            <ItemMedia variant="icon" className="border-4 border-double">
            <LinkedinIcon className="" />
            </ItemMedia>
            <ItemContent>
            <Link href={"https://www.linkedin.com/in/prateek-sagar/"} target="_blank">  <ItemTitle className="text-sm md:text-lg hover:underline">Linkedin</ItemTitle></Link>
            </ItemContent>
          </Item>

          <Item className="p-0">
            <ItemMedia variant="icon" className="border-4 border-double">
              <GithubIcon className="" />
            </ItemMedia>
            <ItemContent>
            <Link href={"https://github.com/prateeeksagar"} target="_blank"><ItemTitle className="text-sm md:text-lg hover:underline">Github</ItemTitle></Link>
            </ItemContent>
          </Item>
        </div>
      </div>
    </section>
  );
}
