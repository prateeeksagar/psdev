import Image from "next/image"
import { SkillListProps } from "../types"
import { useTheme } from "next-themes"

type SkillBadgeProps = {
    skill: SkillListProps
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
    const {theme} = useTheme();
    return (
        <div
            className="text-sm font-semibold border border-border text-primary shadow-md inset-shadow-lg text-shadow-2xs p-1 bg-accent rounded-lg flex gap-1 px-2 items-center justify-center"
        >
            {skill.image && (
                <Image
                    src={theme == "light" ? `/light-${skill.image}` : `/dark-${skill.image}`}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className="w-4 h-4 fill-background"
                />
            )}
            {skill.name.toUpperCase()}
        </div>
    )
}

export default SkillBadge
