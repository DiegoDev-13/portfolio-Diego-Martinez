import diegoAbout from '../assets/diegoAbout.png'

export const About = () => {
  return (
    <div id="About" className="w-ful bg-stone-950 p-10 flex flex-col md:flex-row justify-center space-x-20">
        <div className=''>
            <img src={diegoAbout} alt="" className='w-100 h-110'/>
        </div>
        <div className='w-[50%]'>
            <h3 className='text-4xl text-white font-bold mb-8'>About Me</h3>
            <div className='flex flex-col space-y-4'>

                <p className='text-[16px] text-stone-400'>
                    Como Ingeniero de Computación especializado en el ecosistema Frontend, me dedico a construir interfaces de usuario de alto rendimiento que fusionan un diseño impecable con una arquitectura técnica sólida. Mi enfoque principal se centra en React, donde optimizo la experiencia de usuario mediante el manejo de estado ligero con Zustand y la gestión eficiente de datos asíncronos con TanStack Query.
                </p>
                <p className='text-[16px] text-stone-400'>
                    Cuento con un dominio avanzado de Tailwind CSS para el desarrollo de interfaces responsivas y utility-first, y poseo la capacidad de integrar soluciones robustas de backend y autenticación a través de Supabase, permitiéndome entregar aplicaciones completas y escalables.
                </p>
                <p className='text-[16px] text-stone-400'>
                    Más allá de escribir código en JavaScript, mi formación como ingeniero me permite abordar el desarrollo desde una perspectiva de resolución de problemas, priorizando siempre la optimización, la limpieza del código y la arquitectura sostenible. Estoy listo para transformar desafíos técnicos en productos digitales excepcionales.
                </p>

            </div>
        </div>
    </div>
  )
}