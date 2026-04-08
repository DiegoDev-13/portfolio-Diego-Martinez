import { createContext, useContext, useState } from "react";

// 1. Definimos las traducciones
const translations = {
  es: {
    navbar: {
        navLinks: ['Proyectos', 'Experiencia', 'Sobre mi', 'Contacto'],
        buttonDownloadCv: 'Descargar cv'
    },
    hero: {
        title: "Hola, soy Diego Martinez",
        subTitle: 'Ingeniero de Computación.',
        titleDescription: "Mi especialidad es el desarrollo Frontend, me dedico a transformar problemas complejos en soluciones visuales de alto rendimiento.",
        buttonProjects: "Ver Mis Proyectos",
        buttonContact: "Contáctame",
        stack: 'Tecnologías'
    },
    projects: {
        title: "Proyectos Destacados",
        projectsData : [
            {
                image: 'https://images2.imgbox.com/f6/bf/tACqeIGj_o.png',
                title: 'AnimeVista',
                description: 'Aplicación web de streaming de anime con experiencia de usuario personalizada y panel administrativo robusto. Incluye sistema de favoritos, perfiles editables, visualización de episodios y reportes de errores. Implementa un Dashboard interactivo para el control total de contenidos y métricas en tiempo real.',
                stack: ["Javascript", "React", "Zustand", "TanStack", "Tailwind", "Supabase"],
                live: 'https://animevista.netlify.app/',
                github: "https://github.com/DiegoDev-13/Anime-TV",
            },
            {
                image: 'https://images2.imgbox.com/c5/80/HyUlZDrI_o.png',
                title: 'Mastercell Ecommerce',
                description: 'Plataforma integral de venta de dispositivos móviles con flujo completo de compra: desde el catálogo con stock dinámico hasta la simulación de pago. Incluye perfiles de usuario para el seguimiento de pedidos en tiempo real y un panel administrativo para el control total de inventario y logística de envíos.',
                stack: ["Javascript", "React", "Zustand", "TanStack", "Tailwind", "Supabase"],
                live: 'https://mastercell-diegodev.netlify.app/',
                github: "https://github.com/DiegoDev-13/Ecommerce-phones",
            },
            {
                image: 'https://images2.imgbox.com/c6/f8/RjIHWTOB_o.png',
                title: 'Pokedex',
                description: 'SPA enfocada en la eficiencia de datos. Utiliza TanStack Query para el manejo de caché y fetching asíncrono, y Zustand para una gestión de estado global ligera en la lista de favoritos. Implementa renderizado dinámico de una lista extensa de elementos con carga bajo demanda.',
                stack: ["Javascript", "React", "Zustand", "TanStack", "Tailwind"],
                live: 'https://pokedex-diegodev.netlify.app/',
                github: "https://github.com/DiegoDev-13/pokedex",
            },
            {
                image: 'https://images2.imgbox.com/79/3a/p2NQGGdb_o.png',
                title: 'RickAdnMorty',
                description: 'Aplicación enfocada en el manejo de peticiones asíncronas (Fetch API) y la manipulación dinámica del DOM. Incluye lógica de paginación lógica, renderizado de estados de carga y una arquitectura de componentes modular utilizando solo HTML5, CSS3 y JavaScript puro.',
                stack: ["HTML", "CSS", "Javascript",],
                live: 'https://rickandmorty-api-js.netlify.app/',
                github: "https://github.com/DiegoDev-13/RickAndMortyApp",
            }
        ]
    },
    experience: {
        title: 'Experiencia',
        subTitle: 'Desarrollador Frontend Full-Stack light',
        projects: [
            {
                title: 'Plataforma de Streaming y Gestión de Contenido (AnimeVista)',
                description1: 'Desarrollé una aplicación robusta de streaming con <strong>React y Supabase</strong>, integrando un sistema de autenticación completo <strong>(registro, login y recuperación de contraseña)</strong>.',
                description2: '<strong>Gestión de Perfil de Usuario</strong>: Implementé una sección de perfil personalizable donde el usuario puede editar su nombre, descripción y foto de perfil <strong>(almacenada en Supabase Storage)</strong>, además de gestionar sus animes favoritos y comentarios.',
                description3: '<strong>Dashboard Administrativo</strong>: Creé un panel de control con visualización de métricas dinámicas (usuarios activos, reportes y vistas) y un sistema <strong>CRUD completo</strong> para la gestión de animes y capítulos.',
                description4: '<strong>Interacción en tiempo real</strong>: Sistema de reportes de fallos y comentarios, optimizando el estado global con <strong>Zustand</strong> para una respuesta inmediata de la interfaz.',
            },
            {
                title: 'E-commerce Full-Stack con Gestión de Logística (Mastercell)',
                description1: 'Construí una tienda virtual con un flujo de compra completo: desde el carrito de compras hasta el proceso de pago.',
                description2: '<strong>Panel de Administrador</strong>: Implementé un dashboard con operaciones <strong>CRUD</strong> para la gestión de inventario de productos <strong>(crear, editar, eliminar)</strong>.',
                description3: '<strong>Sistema de Notificaciones</strong>: Desarrollé una funcionalidad logística donde el administrador, tras validar el pago, puede <strong>notificar al usuario</strong> que su paquete ha sido enviado, cerrando el ciclo de venta de manera efectiva.',
            },
            {
                title: 'Ecosistema de Aplicaciones de Consumo de Datos (APIs)',
                description1: '<strong>Pokémon & Rick and Morty Dashboards</strong>: Desarrollé interfaces de alta velocidad para el consumo de datos masivos, implementando <strong>paginación, filtros avanzados y búsqueda</strong> en tiempo real.',
                description2: '<strong>App de Clima (Weather App)</strong>: Creé una herramienta de consulta meteorológica que utiliza geolocalización y consumo de API externa para mostrar datos precisos en una interfaz minimalista.',
                description3: '<strong>Optimización Técnica</strong>: En todos estos proyectos apliqué estrategias de <strong>caching y manejo de estados asíncronos</strong> con <strong>TanStack Query</strong>, garantizando una experiencia de usuario sin interrupciones ni tiempos de carga innecesarios.',
            }
        ]
    },
    about: {
        title: 'Sobre mi',
        description1: 'Como Ingeniero de Computación especializado en el ecosistema Frontend, me dedico a construir interfaces de usuario de alto rendimiento que fusionan un diseño impecable con una arquitectura técnica sólida. Mi enfoque principal se centra en React, donde optimizo la experiencia de usuario mediante el manejo de estado ligero con Zustand y la gestión eficiente de datos asíncronos con TanStack Query.',
        description2: 'Cuento con un dominio avanzado de Tailwind CSS para el desarrollo de interfaces responsivas y utility-first, y poseo la capacidad de integrar soluciones robustas de backend y autenticación a través de Supabase, permitiéndome entregar aplicaciones completas y escalables.',
        description3: 'Más allá de escribir código en JavaScript, mi formación como ingeniero me permite abordar el desarrollo desde una perspectiva de resolución de problemas, priorizando siempre la optimización, la limpieza del código y la arquitectura sostenible. Estoy listo para transformar desafíos técnicos en productos digitales excepcionales.',
    },
    contact: {
        title: 'Empecemos Conectando',
        description: 'Actualmente acepto proyectos freelance y consultorías arquitectónicas de forma selectiva. Construyamos algo preciso.',
        labelTexts: ['Nombre', 'Correo', 'Mensaje'],
        inputDescription: 'Describe brevemente tu visión...',
        buttonSubmit: 'Enviar mensaje'
    },
    footer: {
        text: 'Construido con precisión.'
    }
  },
  en: {
    navbar: {
        navLinks: ['Projects', 'Experience', 'About', 'Contact'],
        buttonDownloadCv: 'Download cv'
    },
    hero: {
        title: "Hello, I'm Diego Martinez",
        subTitle: 'Computer Engineer.',
        titleDescription: "My specialty is Frontend development; I dedicate myself to transforming complex problems into high-performance visual solutions.",
        buttonProjects: "View Mys projects",
        buttonContact: "Contact Me",
        stack: 'tech tack'
    },
    projects: {
        title: "Featured Projects",
        projectsData : [
            {
                image: 'https://images2.imgbox.com/f6/bf/tACqeIGj_o.png',
                title: 'AnimeVista',
                description: 'Anime streaming web application with a customized user experience and robust admin panel. Includes a favorites system, editable profiles, episode viewing, and error reporting. Implements an interactive dashboard for complete control of content and real-time metrics.',
                stack: ["Javascript", "React", "Zustand", "TanStack", "Tailwind", "Supabase"],
                live: 'https://animevista.netlify.app/',
                github: "https://github.com/DiegoDev-13/Anime-TV",
            },
            {
                image: 'https://images2.imgbox.com/c5/80/HyUlZDrI_o.png',
                title: 'Mastercell Ecommerce',
                description: 'A comprehensive mobile device sales platform with a complete purchase flow: from a dynamic stock catalog to payment simulation. Includes user profiles for real-time order tracking and an administrative panel for complete inventory and shipping logistics control.',
                stack: ["Javascript", "React", "Zustand", "TanStack", "Tailwind", "Supabase"],
                live: 'https://mastercell-diegodev.netlify.app/',
                github: "https://github.com/DiegoDev-13/Ecommerce-phones",
            },
            {
                image: 'https://images2.imgbox.com/c6/f8/RjIHWTOB_o.png',
                title: 'Pokedex',
                description: 'A data-efficient SPA. It uses TanStack Query for cache management and asynchronous fetching, and Zustand for lightweight global state management in the favorites list. It implements dynamic rendering of a large list of items with on-demand loading.',
                stack: ["Javascript", "React", "Zustand", "TanStack", "Tailwind"],
                live: 'https://pokedex-diegodev.netlify.app/',
                github: "https://github.com/DiegoDev-13/pokedex",
            },
            {
                image: 'https://images2.imgbox.com/79/3a/p2NQGGdb_o.png',
                title: 'RickAdnMorty',
                description: 'An application focused on handling asynchronous requests (Fetch API) and dynamic DOM manipulation. It includes logical pagination, load state rendering, and a modular component architecture using only HTML5, CSS3, and pure JavaScript.',
                stack: ["HTML", "CSS", "Javascript",],
                live: 'https://rickandmorty-api-js.netlify.app/',
                github: "https://github.com/DiegoDev-13/RickAndMortyApp",
            }
        ]
    },
    experience: {
        title: 'Experience',
        subTitle: 'Frontend Developer Full-Stack light',
        projects: [
            {
                title: 'Streaming and Content Management Platform (AnimeVista)',
                description1: 'I developed a robust streaming application with <strong>React and Supabase</strong>, integrating a complete authentication system <strong>(registration, login, and password recovery)</strong>.',
                description2: '<strong>User Profile Management</strong>: I implemented a customizable profile section where the user can edit their name, description, and profile picture <strong>(stored in Supabase Storage)</strong>, as well as manage their favorite anime and comments.',
                description3: '<strong>Administrative Dashboard</strong>: I created a control panel with dynamic metrics visualization (active users, reports and views) and a <strong>complete CRUD</strong> system for managing anime and episodes.',
                description4: '<strong>Real-time interaction</strong>: Fault and feedback reporting system, optimizing the overall status with <strong>Zustand</strong> for an immediate interface response.',
            },
            {
                title: 'Full-Stack E-commerce with Logistics Management (Mastercell)',
                description1: 'I built an online store with a complete purchase flow: from the shopping cart to the checkout process.',
                description2: '<strong>Administrator Panel</strong>: I implemented a dashboard with <strong>CRUD</strong> operations for product inventory management <strong>(create, edit, delete)</strong>.',
                description3: '<strong>Notification System</strong>: I developed a logistics functionality where the administrator, after validating the payment, can <strong>notify the user</strong> that their package has been shipped, effectively closing the sales cycle.',
            },
            {
                title: 'Ecosystem of Data Consumption Applications (APIs)',
                description1: '<strong>Pokémon & Rick and Morty Dashboards</strong>: I developed high-speed interfaces for massive data consumption, <strong>implementing pagination, advanced filters, and real-time search</strong>.',
                description2: '<strong>Weather App</strong>: I created a weather query tool that uses geolocation and external API consumption to display accurate data in a minimalist interface.',
                description3: '<strong>Technical Optimization</strong>: In all these projects I applied <strong>caching strategies and asynchronous state management</strong> with <strong>TanStack Query</strong>, guaranteeing a user experience without interruptions or unnecessary loading times.',
            }
        ]
    },
    about: {
        title: 'About Me',
        description1: 'As a Computer Engineer specializing in the Frontend ecosystem, I dedicate myself to building high-performance user interfaces that merge impeccable design with a solid technical architecture. My primary focus is on React, where I optimize the user experience through lightweight state management with Zustand and efficient asynchronous data handling with TanStack Query.',
        description2: 'I have advanced proficiency in Tailwind CSS for developing responsive and utility-first interfaces, and I am able to integrate robust backend and authentication solutions through Supabase, allowing me to deliver complete and scalable applications.',
        description3: 'Beyond writing JavaScript code, my engineering background allows me to approach development from a problem-solving perspective, always prioritizing optimization, clean code, and sustainable architecture. Im ready to transform technical challenges into exceptional digital products.',
    },
    contact: {
        title: 'Start a Connection.',
        description: 'Currently accepting selective freelance projects and architecture consultations. Lets build something precise.',
        labelTexts: ['Identity', 'Email', 'Message'],
        inputDescription: 'Briefly describe your vision...',
        buttonSubmit: 'Send Message'
    },
    footer: {
        text: 'Built with Precision.'
    }
  }
};

const LanguageContext = createContext()

export const LanguageProvider = ({children}) => {
    // Estado para el idioma actual (por defecto español)
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'es')

    // Funcion para alternar idioma 
    const togleLenguage = () => {
        const newlang = language === 'es' ? 'en' : 'es'
        setLanguage(newlang)
        localStorage.setItem('language', newlang)
    }

    // El valor que compartiremos: el idioma, la función y los textos
    const value = {
        language,
        togleLenguage,
        texts: translations[language]
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

// Hook personalizado para usarlo fácilmente
export const useLanguage = () => useContext(LanguageContext);