import { useState, createContext, useContext } from "react"; // 1. Agregamos useContext

// 2. Es buena práctica que el contexto empiece con Mayúscula también
export const MobileContext = createContext(); 

// 3. CAMBIO CLAVE: Nombre del componente en Mayúscula
export const MobileContextProvider = ({ children }) => {
    const [isActiveMobile, setIsActiveMobile] = useState(false);

    const toggleActiveMobile = () => setIsActiveMobile(!isActiveMobile);

    return (
        <MobileContext.Provider value={{ isActiveMobile, toggleActiveMobile }}>
            {children}
        </MobileContext.Provider>
    );
};

// 4. Tip Pro: Exporta un Hook personalizado para no tener que importar el contexto 
// en cada componente donde lo uses.
export const useMobile = () => useContext(MobileContext);
