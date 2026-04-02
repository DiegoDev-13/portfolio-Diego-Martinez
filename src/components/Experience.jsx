import { AiFillCaretRight } from "react-icons/ai"
import { FaCircle } from "react-icons/fa"
import { IoMdCheckmarkCircle } from "react-icons/io"

export const Experience = () => {
  return (
    <div id="Experience" className="w-full flex flex-col justify-center p-10">
        <div>
            <h2 className="text-4xl text-white font-bold mb-8 text-center">Experience</h2>
        </div>
        <div className="flex justify-center items-center gap-3 mb-8 bg-stone-950/70 border border-stone-800 p-4 rounded-lg">
            <div className="w-2 h-2 bg-purple-600 rounded-full" />
            <h3 className="text-stone-200 text-2xl font-medium">Desarrollador Frontend Full-Stack light</h3>
        </div>
        <div className="grid grid-cols-1 gap-4 mx-14">
            <article className="w-full bg-stone-950/50 border relative border-stone-800 rounded-xl p-6 shadow-xs hover:shadow-[0px_0px_6px_0px_rgba(147,51,234,0.5)] transition-all duration-400">
                <h4 className="text-lg text-stone-200 font-medium my-6">Plataforma de Streaming y Gestión de Contenido (AnimeVista)</h4>

                <ul className="list-disc list-outside ml-5 space-y-4 text-stone-300 text-[16px]">
                    <li>Desarrollé una aplicación robusta de streaming con <strong>React y Supabase</strong>, integrando un sistema de autenticación completo <strong>(registro, login y recuperación de contraseña)</strong>.</li>
                    <li>
                        <strong>Gestión de Perfil de Usuario</strong>: Implementé una sección de perfil personalizable donde el usuario puede editar su nombre, descripción y foto de perfil <strong>(almacenada en Supabase Storage)</strong>, además de gestionar sus animes favoritos y comentarios.
                    </li>
                    <li>
                        <strong>Dashboard Administrativo</strong>: Creé un panel de control con visualización de métricas dinámicas (usuarios activos, reportes y vistas) y un sistema <strong>CRUD completo</strong> para la gestión de animes y capítulos.
                    </li>
                    <li>
                        <strong>Interacción en tiempo real</strong>: Sistema de reportes de fallos y comentarios, optimizando el estado global con <strong>Zustand</strong> para una respuesta inmediata de la interfaz.
                    </li>
                </ul>

                <div className="absolute top-4 right-4 px-3 py-2 rounded-xl border border-stone-800 text-xs text-stone-400">
                   JavaScript React - TanStack Query - Zustand - Tailwind - Supabase (PostgreSQL, Auth, Storage)
                </div>
            </article>

            <article className="w-full bg-stone-950/50 border relative border-stone-800 rounded-xl p-6 shadow-xs hover:shadow-[0px_0px_6px_0px_rgba(147,51,234,0.5)] transition-all duration-400">
                <h4 className="text-lg text-stone-200 font-medium my-6">E-commerce Full-Stack con Gestión de Logística (Mastercell)</h4>

                <ul className="list-disc list-outside ml-5 space-y-4 text-stone-300 text-[16px]">
                    <li>Construí una tienda virtual con un flujo de compra completo: desde el carrito de compras hasta el proceso de pago.</li>
                    <li>
                        <strong>Panel de Administrador</strong>: Implementé un dashboard con operaciones <strong>CRUD</strong> para la gestión de inventario de productos <strong>(crear, editar, eliminar)</strong>.
                    </li>
                    <li>
                        <strong>Sistema de Notificaciones</strong>: Desarrollé una funcionalidad logística donde el administrador, tras validar el pago, puede <strong>notificar al usuario</strong> que su paquete ha sido enviado, cerrando el ciclo de venta de manera efectiva.
                    </li>   
                </ul>

                <div className="absolute top-4 right-4 px-3 py-2 rounded-xl border border-stone-800 text-xs text-stone-400">
                   JavaScript React - TanStack Query - Zustand - Tailwind - Supabase (Auth, Storage)
                </div>
            </article>

            <article className="w-full bg-stone-950/50 border relative border-stone-800 rounded-xl p-6 shadow-xs hover:shadow-[0px_0px_6px_0px_rgba(147,51,234,0.5)] transition-all duration-400">
                <h4 className="text-lg text-stone-200 font-medium my-6">Ecosistema de Aplicaciones de Consumo de Datos (APIs)</h4>

                <ul className="list-disc list-outside ml-5 space-y-4 text-stone-300 text-[16px]">
                    <li><strong>Pokémon & Rick and Morty Dashboards</strong>: Desarrollé interfaces de alta velocidad para el consumo de datos masivos, implementando <strong>paginación, filtros avanzados y búsqueda</strong> en tiempo real.</li>
                    <li>
                        <strong>App de Clima (Weather App)</strong>: Creé una herramienta de consulta meteorológica que utiliza geolocalización y consumo de API externa para mostrar datos precisos en una interfaz minimalista.
                    </li>
                    <li>
                        <strong>Optimización Técnica</strong>: En todos estos proyectos apliqué estrategias de <strong>caching y manejo de estados asíncronos</strong> con <strong>TanStack Query</strong>, garantizando una experiencia de usuario sin interrupciones ni tiempos de carga innecesarios.
                    </li>   
                </ul>

                {/* <div className="absolute top-4 right-4 px-3 py-2 rounded-xl border border-stone-800 text-xs text-stone-400">
                   JavaScript React - TanStack Query - Zustand - Tailwind - Supabase (Auth, Storage)
                </div> */}
            </article>

        </div>
    </div>
  )
}