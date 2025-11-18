'use client'

import { FileText } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Astronomy for the Visually Impaired",
      description: "A research project investigating accessibility and availability of resources for visually impaired or blind individuals learning astronomy. This work explored the creation of an accessible Hertzsprung-Russell (HR) diagram and proposed innovative solutions to make tertiary-level astronomy education more interactive and inclusive. The project examined disparities in STEM education and identified feasible approaches to accommodate visual disabilities while generating greater interest in astronomical studies.",
      pdfUrl: "/astronomy-visually-impaired.pdf",
      technologies: ["Astronomy", "Accessibility", "STEM Education", "Research", "Inclusive Design"],
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore my research work and academic contributions.
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} direction="up" delay={0.4 + index * 0.2}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                    <div className="flex items-center justify-center h-40 sm:h-48">
                      <FileText size={64} className="text-blue-600 dark:text-blue-400 opacity-50" />
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs sm:text-sm rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <a
                        href={project.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm sm:text-base font-semibold w-full sm:w-auto"
                      >
                        <FileText size={18} />
                        View PDF
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
