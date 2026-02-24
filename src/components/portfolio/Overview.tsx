import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "../ui/item"
import { CodeIcon, MapPinIcon, CallIcon, LinkIcon, MailIcon, MarsIcon } from "../svg/svg"
import Link from "next/link"

export default function Overview() {
    return (
        <section className="p-2 border-x">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 w-full">
                    <Item className="p-0">
                        <ItemMedia variant="icon">
                            <CodeIcon />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>Software developer<Link href={"https:://www.wishtales.ai"} className="hover:underline">@wishtales ai</Link></ItemTitle>
                        </ItemContent>
                    </Item>
                    <Item className="p-0">
                        <ItemMedia variant="icon">
                            <MapPinIcon />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>Delhi, India</ItemTitle>
                        </ItemContent>
                    </Item>
                </div>
                <div className="grid grid-cols-2 gap-2 w-full">
                <Item className="p-0">
                        <ItemMedia variant="icon">
                            <CallIcon />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>+91 7827445441</ItemTitle>
                        </ItemContent>
                    </Item>
                    <Item className="p-0">
                        <ItemMedia variant="icon">
                            <LinkIcon />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle><Link href={"https://psdev-ten.vercel.app/"}>prateeksagar.com</Link></ItemTitle>
                        </ItemContent>
                    </Item>
                    <Item className="p-0">
                        <ItemMedia variant="icon">
                            <MailIcon />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>prateeksagar2103@gmail.com</ItemTitle>
                        </ItemContent>
                    </Item>
                    <Item className="p-0">
                        <ItemMedia variant="icon">
                            <MarsIcon />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>he/him</ItemTitle>
                        </ItemContent>
                    </Item>


                </div>

            </div>
        </section>
    )
}


