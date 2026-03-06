import Image from "next/image"
import { SkillListProps } from "../types"

type SkillBadgeProps = {
    skill: SkillListProps
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
    return (
        <div
            className="text-sm font-semibold border border-border text-primary shadow-md inset-shadow-lg text-shadow-2xs p-1 bg-accent rounded-lg flex gap-1 px-2 items-center justify-center"
        >
            <Image
                src={skill.image}
                alt={skill.name}
                width={50}
                height={50}
                className="w-4 h-4 fill-background"
            />
            {skill.name.toUpperCase()}
        </div>
    )
}

export default SkillBadge
