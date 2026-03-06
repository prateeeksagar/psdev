import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { SkillListProps } from "../types"
import SkillBadge from "./SkillBadge"

type SkillCategoryProps = {
    title: string,
    skills: SkillListProps[]
}

const SkillCategory = ({title, skills}: SkillCategoryProps) => {
  return (
    <Card>
      <CardTitle className="p-2">{title}</CardTitle>
      <CardContent className="p-2">
      <div className="flex flex-row gap-2 flex-wrap">
      {skills.map((skill, idx) => (
        <SkillBadge skill={skill} key={idx}/>
      ))}
    </div>
      </CardContent>
    </Card>
  )
}

export default SkillCategory
