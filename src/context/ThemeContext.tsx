'use client'

import type React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import type { DefaultTheme } from 'styled-components'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/theme'

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
    mode: ThemeMode
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [mode, setMode] = useState<ThemeMode>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as ThemeMode
            return savedTheme || 'light'
        }
        return 'light'
    })

    useEffect(() => {
        localStorage.setItem('theme', mode)
    }, [mode])

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }

    const theme: DefaultTheme = mode === 'light' ? lightTheme : darkTheme

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
