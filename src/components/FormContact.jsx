import { IoMdSend } from "react-icons/io";

export const FormContact = () => {
  return (
    <div id="contact" className="w-full p-10 flex flex-col justify-center items-center ">
        <h3 className='text-4xl text-white font-bold mb-4'>Start a Connection.</h3>
        <p className="mb-10 w-[40%] text-[16px] text-stone-400 text-center"> 
            Currently accepting selective freelance projects and architecture consultations. Let's build something precise.
        </p>
        <form className="bg-stone-950 p-10 w-150 rounded-lg">
            <div className="flex justify-between space-x-5">
                <div className="w-full flex flex-col space-y-3 transition-all duration-300">
                    <label htmlFor="" className="text-xs text-stone-400 uppercase">identity</label>
                    <input type="text" className="w-full bg-stone-900 p-3 rounded-lg text-stone-200" placeholder="John Doe" />
                </div>
                <div className="w-full flex flex-col space-y-3">
                    <label htmlFor="" className="text-xs text-stone-400 uppercase">identity</label>
                    <input type="text" className="w-full bg-stone-900 p-3 rounded-lg text-stone-200" placeholder="John@domain.com" />
                </div>
            </div>

            <div className="w-full my-6 flex flex-col space-y-3">
                <label htmlFor="" className="text-xs text-stone-400 uppercase">message</label>
                <textarea className="w-full max-h-80 bg-stone-900 p-3 rounded-lg text-stone-200" rows="7" cols="10" maxLength={600} placeholder="Briefly describe your vision...">

                </textarea>
            </div>

            <button className="w-full flex justify-center items-center gap-3 bg-purple-600 font-semibold uppercase text-[15px] py-3 rounded-md cursor-pointer hover:bg-purple-700 hover:text-stone-300 transition-all duration-300">
                Send message
                <IoMdSend size={18} />
            </button>

            <div className="w-full h-px bg-stone-700 my-8"/> 
        </form>
    </div>
  )
}