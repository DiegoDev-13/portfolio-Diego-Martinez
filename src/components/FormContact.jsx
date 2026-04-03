import { useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { useLanguage } from "../context/LanguageContext";

export const FormContact = () => {

    const {texts} = useLanguage()

    const emailjsKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const [isLoading, setIsLoading] = useState(false)

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        setIsLoading(true)

        emailjs.sendForm(
            'service_wo4po41',
            'template_ha7wa29',
            form.current,
            `${emailjsKey}`
        ).then((result) => {
            console.log(result.text)
            setIsLoading(false)
            form.current.reset()
            toast.success('The email was sent successfully!')
        }, (error) => {
            console.log(error.text)
            setIsLoading(false)
        })
        
    }

  return (
    <div id={texts.navbar.navLinks[3]} className="w-full p-10 flex flex-col justify-center items-center ">
        <h3 className='text-4xl text-white font-bold mb-4'>{texts.contact.title}</h3>
        <p className="mb-10 w-[40%] text-[16px] text-stone-400 text-center"> 
            {texts.contact.description}
        </p>
        <form ref={form} onSubmit={sendEmail} className="bg-stone-950 p-10 w-150 rounded-lg">
            
            {
                isLoading 
                    ? <div className="w-full flex justify-center items-center my-35">
                        <AiOutlineLoading3Quarters size={70} className="text-stone-300 animate-spin" />
                    </div>
                    : <>
                        <div className="flex justify-between space-x-5">
                            <div className="w-full flex flex-col space-y-3 transition-all duration-300">
                                <label htmlFor="from_nam" className="text-xs text-stone-400 uppercase">{texts.contact.labelTexts[0]}</label>
                                <input type="text" name="from_name" id="from_name" required className="w-full bg-stone-900 p-3 rounded-lg text-stone-200" placeholder="John Doe" />
                            </div>
                            <div className="w-full flex flex-col space-y-3">
                                <label htmlFor="reply_to" className="text-xs text-stone-400 uppercase">{texts.contact.labelTexts[1]}</label>
                                <input type="email" name="reply_to" id="reply_to" required className="w-full bg-stone-900 p-3 rounded-lg text-stone-200" placeholder="John@domain.com" />
                            </div>
                        </div>

                        <div className="w-full my-6 flex flex-col space-y-3">
                            <label htmlFor="message" className="text-xs text-stone-400 uppercase">{texts.contact.labelTexts[2]}</label>
                            <textarea name="message" id="message" required className="w-full max-h-80 bg-stone-900 p-3 rounded-lg text-stone-200" rows="7" cols="10" maxLength={600} placeholder={texts.contact.inputDescription}>

                            </textarea>
                        </div>

                        <button type="submit" className="w-full flex justify-center items-center gap-3 bg-purple-600 font-semibold uppercase text-[15px] py-3 rounded-md cursor-pointer hover:bg-purple-700 hover:text-stone-300 transition-all duration-300">
                            {texts.contact.buttonSubmit} <IoMdSend size={18} />
                        </button>
                    </>
            }

            <div className="w-full h-px bg-stone-700 my-8"/> 
        </form>
    </div>
  )
}