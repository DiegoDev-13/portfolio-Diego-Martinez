import { useLanguage } from "../context/LanguageContext"
import { projectsData } from "../data"
import { CardProject } from "./CardProject"

export const GridProjects = () => {

    const {texts} = useLanguage()

  return (
    <div id={texts.navbar.navLinks[0]} className="w-full flex flex-col justify-center p-6 md:p-10">
        <div>
            <h2 className="text-4xl text-center md:text-start text-white font-bold mb-8">{texts.projects.title}</h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {
                projectsData.map((project, index) => (
                    <CardProject key={index} project={project} />
                ))
            }
        </div>
    </div>
  )
}