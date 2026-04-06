import { useLanguage } from "../context/LanguageContext"

export const Experience = () => {

    const {texts} = useLanguage()

  return (
    <div id={texts.navbar.navLinks[1]} className="w-full flex flex-col justify-center p-4 md:p-10">
        <div>
            <h2 className="text-4xl text-white font-bold mb-8 text-center">{texts.experience.title}</h2>
        </div>
        <div className="flex justify-center items-center gap-3 mb-8 bg-stone-950/70 border border-stone-800 p-4 rounded-lg">
            <h3 className="text-stone-200 text-2xl text-center font-medium">{texts.experience.subTitle}</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 md:mx-10 xl:mx-16">
            <article className="w-full bg-stone-950/50 border relative border-stone-800 rounded-xl pt-16 md:pt-6 p-6 shadow-xs hover:shadow-[0px_0px_6px_0px_rgba(147,51,234,0.5)] hover:scale-103 transition-all duration-400">
                <h4 className="text-lg text-stone-200 font-medium my-6">{texts.experience.projects[0].title}</h4>

                <ul className="list-disc list-outside ml-5 space-y-4 text-stone-300 text-[16px]">
 
                    <li dangerouslySetInnerHTML={{__html: texts.experience.projects[0].description1}} />

                    <li dangerouslySetInnerHTML={{__html: texts.experience.projects[0].description2}} />

                    <li dangerouslySetInnerHTML={{__html: texts.experience.projects[0].description3}} />

                    <li dangerouslySetInnerHTML={{__html: texts.experience.projects[0].description4}} />
                </ul>

                <div className="absolute top-4 right-2 md:right-4 px-3 py-2 rounded-xl border border-stone-800 text-xs text-stone-400">
                   JavaScript React - TanStack Query - Zustand - Tailwind - Supabase (PostgreSQL, Auth, Storage)
                </div>
            </article>

            <article className="w-full bg-stone-950/50 border relative border-stone-800 rounded-xl pt-16 md:pt-6 p-6 shadow-xs hover:shadow-[0px_0px_6px_0px_rgba(147,51,234,0.5)] hover:scale-103 transition-all duration-400">
                <h4 className="text-lg text-stone-200 font-medium my-6">{texts.experience.projects[1].title}</h4>

                <ul className="list-disc list-outside ml-5 space-y-4 text-stone-300 text-[16px]">

                    <li dangerouslySetInnerHTML={{__html: texts.experience.projects[1].description1}} />

                    <li dangerouslySetInnerHTML={{__html: texts.experience.projects[1].description2}} />

                    <li dangerouslySetInnerHTML={{__html: texts.experience.projects[1].description3}} />
 
                </ul>

                <div className="absolute top-4 right-2 md:right-4 px-3 py-2 rounded-xl border border-stone-800 text-xs text-stone-400">
                   JavaScript React - TanStack Query - Zustand - Tailwind - Supabase (Auth, Storage)
                </div>
            </article>

            <article className="w-full bg-stone-950/50 border relative border-stone-800 rounded-xl p-6 shadow-xs hover:shadow-[0px_0px_6px_0px_rgba(147,51,234,0.5)] hover:scale-103 transition-all duration-400">
                <h4 className="text-lg text-stone-200 font-medium my-6">{texts.experience.projects[2].title}</h4>

                <ul className="list-disc list-outside ml-5 space-y-4 text-stone-300 text-[16px]">

                    <li dangerouslySetInnerHTML={{__html: texts.experience.projects[2].description1}} />

                    <li dangerouslySetInnerHTML={{__html: texts.experience.projects[2].description2}} />

                    <li dangerouslySetInnerHTML={{__html: texts.experience.projects[2].description3}} />
 
                </ul>
            </article>

        </div>
    </div>
  )
}