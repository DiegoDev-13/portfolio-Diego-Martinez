import { FaGithub } from "react-icons/fa";

export const CardProject = ({project}) => {
  return (
    <div className="bg-stone-950 rounded-md">
        <img src={project.image} alt={project.title}  className="w-full h-60 rounded-t-md"/>

        <div className="w-full px-4 pt-4 flex items-center flex-wrap gap-3">
          {
            project.stack.map((item, index) => (
              <div key={index} className="bg-stone-900 p-1 rounded-md flex justify-center items-center">
                <span className="text-xs text-purple-600">{item}</span>
              </div>
            ))
          }
        </div>

        <div className="p-4">
          <h3 className="text-stone-300 text-[16px] font-semibold">{project.title}</h3> 
          <p className="text-sm text-stone-500 ">{project.description}</p>
        </div>

        <div className="flex gap-4 p-4">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-purple-500 px-3 py-1.5 rounded-md text-[14px] uppercase font-semibold hover:bg-purple-600 transition-all duration-300 cursor-pointer">
            View Live

          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-stone-800 px-3 py-1.5  rounded-md text-white text-[14px] uppercase font-semibold hover:bg-stone-900 transition-all duration-300 cursor-pointer">
            GitHub
            <FaGithub />
          </a>
        </div>
    </div>
  )
}