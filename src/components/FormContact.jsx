import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { IoMdSend } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { useLanguage } from "../context/LanguageContext";

export const FormContact = () => {
    const { texts } = useLanguage();
    const emailjsKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm(
            'service_wo4po41',
            'template_ha7wa29',
            form.current,
            `${emailjsKey}`
        ).then((result) => {
            setIsLoading(false);
            form.current.reset();
            toast.success('¡El mensaje se envió correctamente!');
        }, (error) => {
            setIsLoading(false);
            toast.error('Hubo un error al enviar el mensaje.');
        });
    };

    return (
        <motion.div 
            id={texts.navbar.navLinks[3]} 
            className="w-full p-6 md:p-10 flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h3 className='text-4xl text-white text-center md:text-start font-bold mb-4'>
                {texts.contact.title}
            </h3>
            <p className="mb-10 w-full md:w-[40%] text-[16px] text-stone-400 text-center"> 
                {texts.contact.description}
            </p>

            <motion.form 
                ref={form} 
                onSubmit={sendEmail} 
                className="bg-stone-950 p-5 md:p-10 w-full md:w-150 rounded-lg border border-stone-900"
                layout //Hace que el contenedor se ajuste suavemente al cambiar de tamaño
            >
                {/* AnimatePresence permite animar la salida del loader y la entrada del form */}
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <motion.div 
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full flex justify-center items-center my-35"
                        >
                            <AiOutlineLoading3Quarters size={70} className="text-stone-300 animate-spin" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form-content"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-5">
                                <div className="w-full flex flex-col space-y-3">
                                    <label htmlFor="from_name" className="text-xs text-stone-400 uppercase">{texts.contact.labelTexts[0]}</label>
                                    <input type="text" name="from_name" id="from_name" required className="w-full bg-stone-900 p-3 rounded-lg text-stone-200 focus:ring-2 focus:ring-purple-600 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="w-full flex flex-col space-y-3">
                                    <label htmlFor="reply_to" className="text-xs text-stone-400 uppercase">{texts.contact.labelTexts[1]}</label>
                                    <input type="email" name="reply_to" id="reply_to" required className="w-full bg-stone-900 p-3 rounded-lg text-stone-200 focus:ring-2 focus:ring-purple-600 outline-none transition-all" placeholder="John@domain.com" />
                                </div>
                            </div>

                            <div className="w-full my-6 flex flex-col space-y-3">
                                <label htmlFor="message" className="text-xs text-stone-400 uppercase">{texts.contact.labelTexts[2]}</label>
                                <textarea name="message" id="message" required className="w-full max-h-80 bg-stone-900 p-3 rounded-lg text-stone-200 focus:ring-2 focus:ring-purple-600 outline-none transition-all" rows="7" maxLength={600} placeholder={texts.contact.inputDescription}></textarea>
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit" 
                                className="w-full flex justify-center items-center gap-3 bg-purple-600 font-semibold uppercase text-[15px] py-3 rounded-md cursor-pointer hover:bg-purple-700 hover:text-stone-300 transition-all duration-300"
                            >
                                {texts.contact.buttonSubmit} <IoMdSend size={18} />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="w-full h-px bg-stone-700 my-8"/> 
            </motion.form>
        </motion.div>
    );
};
