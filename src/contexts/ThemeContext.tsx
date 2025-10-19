'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Default to light mode instead of system preference
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      
      // Force remove all theme classes first
      document.documentElement.classList.remove('dark', 'light')
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
        console.log('Added dark class to html element')
      } else {
        document.documentElement.classList.add('light')
        console.log('Added light class to html element')
      }
      
      // Also set data attribute for additional control
      document.documentElement.setAttribute('data-theme', theme)
      
      console.log('Current html classes:', document.documentElement.className)
      console.log('Current data-theme:', document.documentElement.getAttribute('data-theme'))
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      console.log('Toggling theme from', prevTheme, 'to', newTheme)
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
