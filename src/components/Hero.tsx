'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-black dark:from-black dark:via-slate-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 starfield"></div>
      
      {/* Nebula overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-pink-900/30 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-pink-950/40"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20 dark:from-indigo-900/30 dark:via-transparent dark:to-purple-900/30"></div>
      
      {/* Nebula clouds with scroll animations */}
      <ScrollAnimation direction="fade" delay={0.5} duration={2}>
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/20 dark:bg-indigo-400/15 rounded-full blur-3xl animate-pulse"></div>
      </ScrollAnimation>
      <ScrollAnimation direction="fade" delay={1} duration={2}>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 dark:bg-purple-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </ScrollAnimation>
      <ScrollAnimation direction="fade" delay={1.5} duration={2}>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/20 dark:bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </ScrollAnimation>
      <ScrollAnimation direction="fade" delay={0.8} duration={2}>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-500/20 dark:bg-pink-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </ScrollAnimation>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 relative z-10 leading-tight">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Joseph Singh
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto relative z-10 px-4"
            >
              Physics Graduate & Emerging Developer
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto relative z-10 px-4"
            >
              Bridging science and technology to create innovative solutions. From laboratory analysis to web development, I bring precision and analytical thinking to every project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 relative z-10 px-4"
            >
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Mail size={20} />
                Get In Touch
              </button>
              
              <div className="flex gap-3 sm:gap-4 justify-center">
                <a
                  href="https://github.com/joseph-singh-lai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg border border-white/30 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-white sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joseph-singh-90a87b161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg border border-white/30 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white sm:w-6 sm:h-6" />
                </a>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={scrollToNext}
              className="text-white/60 hover:text-white transition-colors duration-200 relative z-10"
              aria-label="Scroll to next section"
            >
              <ChevronDown size={32} className="animate-bounce" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
