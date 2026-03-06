import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"

type SkillCategoryProps = {
    title: string,
    skills: {name: string, image: string}[]
}

const SkillCategory = ({title, skills}: SkillCategoryProps) => {
  return (
    <Card>
      <CardTitle className="p-2">{title}</CardTitle>
      <CardContent className="p-2">
      <div className="flex flex-row gap-2 flex-wrap">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className="text-sm font-semibold border text-primary border-zinc-400 border-dotted shadow inset-shadow-sm inset-shadow-zinc-300 p-1 bg-background rounded-lg flex gap-1 px-2 items-center justify-center"
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
      ))}
    </div>
      </CardContent>
    </Card>
  )
}

export default SkillCategory
