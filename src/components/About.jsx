import diegoAbout from '../assets/diegoAbout.png'
import { useLanguage } from '../context/LanguageContext'

export const About = () => {

    const {texts} = useLanguage()

  return (
    <div id={texts.navbar.navLinks[2]} className='bg-stone-950 p-4 md:p-10 w-full'>
        <h3 className='text-4xl text-center text-white font-bold mb-8'>{texts.about.title}</h3>
        <div className="w-full flex flex-col md:flex-row justify-center space-y-4 space-x-20">
            <div className='w-full md:w-[30%] flex items-center'>
                <img src={diegoAbout} alt="" className='w-full md:w-100 md:h-110'/>
            </div>
            <div className='w-full md:w-[50%] p-4 md:p-0 flex flex-col space-y-4'>
                <p className='text-[16px] text-stone-400'>
                    {texts.about.description1}
                </p>
                <p className='text-[16px] text-stone-400'>
                    {texts.about.description2}
                </p>
                <p className='text-[16px] text-stone-400'>
                    {texts.about.description3}
                </p>

            </div>
        </div>
    </div>
  )
}