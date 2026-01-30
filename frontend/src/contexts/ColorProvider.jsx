import React, { useContext, useState, useEffect, createContext } from 'react';

// Crear contexto
const ColorContext = createContext()
// función auxiliar fuera del componente por si se requiere utilizar por fuera
const getBackgroundColor = (isDarkTheme) => { return isDarkTheme ? '#000000' : '#ffffff'}

export default function ColorProvider({children}) {
    // variable que determina y función que setea el valor del tema oscuro, para activar el CSS
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        // se obtiene valor almacena del tema guardado en localStorage
        const savedTheme = localStorage.getItem("isDarkTheme")
        // retorna booleano
        return savedTheme === "true"
    })
    // Setea el valor del booleano para el cambio de tema
    const toggleTheme = () => {
        // setea el nuevo valor y almacena el dato en localStorage
        setIsDarkTheme(prevTheme => {
            const newTheme = !prevTheme
            localStorage.setItem("isDarkTheme", newTheme)
            return newTheme
        })
    }
    
    useEffect(() => {
        // guarda el valor del nuevo color de fondo en la variable
        const newBackgroundColor = getBackgroundColor(isDarkTheme)
        document.body.style.backgroundColor = newBackgroundColor
    }, [isDarkTheme]);
    
    return(
        <ColorContext.Provider value={{isDarkTheme, toggleTheme}}>
            {children} 
        </ColorContext.Provider>
    )
}

export function useColor() {
    return useContext(ColorContext)
}
