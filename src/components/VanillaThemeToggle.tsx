'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function VanillaThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem("theme")
    console.log("Initial theme from localStorage:", savedTheme)
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true)
      console.log("Applied dark class on init")
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false)
      console.log("Removed dark class on init")
    }
    console.log("HTML classes after init:", document.documentElement.className)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    // Update React state to match DOM
    const newIsDark = document.documentElement.classList.contains("dark")
    setIsDark(newIsDark)

    // Debug logging
    console.log("HTML classes:", document.documentElement.className);
    console.log("Has dark class:", document.documentElement.classList.contains("dark"));
    console.log("New theme:", newIsDark ? "dark" : "light");

    // Save preference
    if (newIsDark) {
      localStorage.setItem("theme", "dark");
      console.log("Switched to dark mode");
    } else {
      localStorage.setItem("theme", "light");
      console.log("Switched to light mode");
    }
  }

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
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Current: ${isDark ? 'dark' : 'light'} mode - Click to switch`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-5 h-5"
      >
        {isDark ? (
          <Moon size={20} className="text-blue-400" />
        ) : (
          <Sun size={20} className="text-yellow-500" />
        )}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {isDark ? 'D' : 'L'}
        </div>
      </motion.div>
    </motion.button>
  )
}
