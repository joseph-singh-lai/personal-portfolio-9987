'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 w-9 h-9" />
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Current: ${theme} mode - Click to switch`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="relative w-5 h-5"
      >
        {theme === 'light' ? (
          <Sun size={20} className="text-yellow-500" />
        ) : (
          <Moon size={20} className="text-blue-400" />
        )}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {theme === 'light' ? 'L' : 'D'}
        </div>
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
