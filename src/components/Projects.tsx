'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered E-Commerce Platform",
      description: "A full-stack e-commerce solution with AI-driven product recommendations, real-time inventory management, and seamless payment integration using Next.js, TypeScript, and machine learning algorithms.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "OpenAI API", "Stripe"],
      githubUrl: "https://github.com/admin/ai-ecommerce",
      liveUrl: "https://ai-ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Real-Time Collaboration Tool",
      description: "A collaborative workspace application with real-time document editing, video conferencing, and project management features. Built with WebRTC, Socket.io, and modern React patterns.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Express"],
      githubUrl: "https://github.com/admin/collab-tool",
      liveUrl: "https://collab-tool-demo.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "Smart Home IoT Dashboard",
      description: "An intuitive dashboard for managing smart home devices with real-time monitoring, automation rules, and energy consumption analytics. Features responsive design and mobile app integration.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Python", "FastAPI", "PostgreSQL", "MQTT", "Docker"],
      githubUrl: "https://github.com/admin/smart-home-dashboard",
      liveUrl: "https://smart-home-demo.vercel.app",
      featured: false
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
              Explore my latest work showcasing modern web technologies, AI integration, and innovative solutions.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} direction="up" delay={0.4 + index * 0.2}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3">
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

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200 text-sm"
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={1.0}>
          <div className="text-center mt-8 sm:mt-12 px-4">
            <a
              href="https://github.com/admin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Github size={18} />
              View All Projects on GitHub
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Projects
