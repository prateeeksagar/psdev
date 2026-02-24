import { WorkExperience } from "@/dataStatic/dataStatic";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold p-2 border-b">Experience</h2>
      <div className="">
        {WorkExperience.map(exp => (<div className=""><ExperienceCard data={exp}/></div>))}
        </div>
    </div>
  )
}

export default Experience;
