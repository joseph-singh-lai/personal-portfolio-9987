import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/joseph-singh-lai/', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joseph-singh-90a87b161/', icon: Linkedin },
    { name: 'Email', href: 'mailto:singhjoe57@gmail.com', icon: Mail },
    { name: 'Twitter', href: 'https://x.com/josephsingh9987', icon: Twitter },
  ]

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-indigo-950 to-black dark:from-black dark:via-slate-950 dark:to-indigo-950 text-white relative overflow-hidden">
      {/* Subtle starfield */}
      <div className="absolute inset-0 starfield-subtle opacity-15 dark:opacity-25"></div>
      {/* Nebula overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20 dark:from-indigo-950/30 dark:via-transparent dark:to-purple-950/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Joseph Singh</h3>
            <p className="text-gray-400 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Physics graduate with a passion for technology and innovation. Bridging science and technology to create innovative solutions through self-directed learning in web development.
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
              Let&apos;s connect and build something amazing together!
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

