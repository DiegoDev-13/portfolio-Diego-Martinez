import { projectsData } from "../data"
import { CardProject } from "./CardProject"

export const GridProjects = () => {
  return (
    <div id="Projects" className="w-full flex flex-col justify-center p-10">
        <div>
            <h2 className="text-4xl text-white font-bold mb-8">Featured Projects</h2>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8">
            {
                projectsData.map((project, index) => (
                    <CardProject key={index} project={project} />
                ))
            }
        </div>
    </div>
  )
}