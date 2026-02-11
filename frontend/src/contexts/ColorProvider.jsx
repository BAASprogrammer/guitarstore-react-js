import React, { useContext, useState, useEffect, createContext } from 'react';

// Create context with default values
const ColorContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {}
})
// Helper function outside the component in case it needs to be used externally
const getBackgroundColor = (isDarkTheme) => { return isDarkTheme ? '#000000' : '#ffffff'}

export default function ColorProvider({children}) {
    // Variable that determines and function that sets the dark theme value, to activate CSS
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        try {
            // Get the stored theme value from localStorage
            const savedTheme = localStorage.getItem("isDarkTheme")
            // Return boolean
            return savedTheme === "true"
        } catch (error) {
            // Fallback to false if localStorage is not available
            console.warn('localStorage not available, using default theme:', error)
            return false
        }
    })
    // Sets the boolean value for theme change
    const toggleTheme = () => {
        // Sets the new value and stores the data in localStorage
        setIsDarkTheme(prevTheme => {
            const newTheme = !prevTheme
            try {
                localStorage.setItem("isDarkTheme", newTheme)
            } catch (error) {
                console.warn('Failed to save theme to localStorage:', error)
            }
            return newTheme
        })
    }
    
    useEffect(() => {
        // Saves the value of the new background color in the variable
        const newBackgroundColor = getBackgroundColor(isDarkTheme)
        document.body.style.backgroundColor = newBackgroundColor
        
        // Add/remove theme class to body for additional styling flexibility
        if (isDarkTheme) {
            document.body.classList.add('dark-theme-body')
            document.body.classList.remove('light-theme-body')
        } else {
            document.body.classList.add('light-theme-body')
            document.body.classList.remove('dark-theme-body')
        }
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
