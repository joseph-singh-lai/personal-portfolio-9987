import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/josephsingh', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/josephsingh', icon: Linkedin },
    { name: 'Email', href: 'mailto:joseph@example.com', icon: Mail },
    { name: 'Twitter', href: 'https://twitter.com/josephsingh', icon: Twitter },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Joseph Singh</h3>
            <p className="text-gray-400 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Full-stack developer passionate about creating amazing digital experiences with modern technologies.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              Available for freelance projects and collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#home" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Home</a></li>
              <li><a href="#about" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">About</a></li>
              <li><a href="#projects" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Contact</a></li>
              <li><a href="/verify" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Verify</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect</h4>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 dark:hover:bg-gray-700 rounded-lg"
                    aria-label={link.name}
                  >
                    <Icon size={20} className="sm:w-6 sm:h-6" />
                  </a>
                )
              })}
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4">
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-300 text-sm sm:text-base">
            © 2024 Joseph Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

