import { WorkExperience } from "@/dataStatic/dataStatic";
import ExperienceCard from "./ExperienceCard";
import { Badge } from "@/components/ui/badge";


const Experience = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-between items-center p-2 border-b">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <Badge variant={"secondary"} className="w-fit h-fit"><span>Total: 3+ years</span></Badge>
      </div>
      <div className="">
        {WorkExperience.map((exp,idx) => (<div key={idx} className=""><ExperienceCard data={exp}/></div>))}
        </div>
    </div>
  )
}

export default Experience;
