'use client'

import { Code, Database, Cpu, Zap } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, Next.js, TypeScript, Tailwind CSS' },
    { name: 'Backend Development', icon: Database, description: 'Node.js, Python, FastAPI, PostgreSQL' },
    { name: 'AI & Machine Learning', icon: Cpu, description: 'OpenAI API, TensorFlow, Computer Vision' },
    { name: 'DevOps & Cloud', icon: Zap, description: 'Docker, AWS, Vercel, CI/CD' }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate about creating innovative solutions that bridge the gap between technology and human needs.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollAnimation direction="left" delay={0.4}>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">My Journey</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                <p>
                  I&apos;m a Physics graduate with a passion for technology and innovation. My foundation in Medical Physics 
                  and Bioengineering from the University of the West Indies has equipped me with strong analytical skills 
                  and a deep appreciation for scientific methodology.
                </p>
                <p>
                  Currently working as a Laboratory Technician, I bring precision and attention to detail from environmental 
                  analysis and quality assurance into my programming work. My journey in web development is self-directed, 
                  driven by curiosity and the desire to create solutions that make a difference.
                </p>
                <p>
                  From conducting astrophysical research using Python to building web applications, I thrive on bridging 
                  the gap between scientific rigor and creative problem-solving. When I&apos;m not coding or analyzing data, 
                  you&apos;ll find me exploring astronomy, playing chess, or continuously learning new technologies.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.6}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <ScrollAnimation key={skill.name} direction="up" delay={0.8 + index * 0.1}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-3 flex-shrink-0">
                        <skill.icon size={20} className="text-blue-600 dark:text-blue-400 sm:w-6 sm:h-6" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{skill.name}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation direction="up" delay={1.2}>
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Let&apos;s Build Something Amazing Together</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
                I&apos;m always excited to work on new projects and collaborate with like-minded individuals. 
                Whether you have a startup idea or need help with an existing project, let&apos;s discuss how we can bring your vision to life.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default About
