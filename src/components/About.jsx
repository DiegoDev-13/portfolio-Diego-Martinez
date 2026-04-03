import diegoAbout from '../assets/diegoAbout.png'
import { useLanguage } from '../context/LanguageContext'

export const About = () => {

    const {texts} = useLanguage()

  return (
    <div id={texts.navbar.navLinks[2]} className="w-ful bg-stone-950 p-10 flex flex-col md:flex-row justify-center space-x-20">
        <div className=''>
            <img src={diegoAbout} alt="" className='w-100 h-110'/>
        </div>
        <div className='w-[50%]'>
            <h3 className='text-4xl text-white font-bold mb-8'>{texts.about.title}</h3>
            <div className='flex flex-col space-y-4'>

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