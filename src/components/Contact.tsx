'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import AdvancedContactForm from './AdvancedContactForm'

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'singhjoe57@gmail.com',
      href: 'mailto:singhjoe57@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1(868)381-4539',
      href: 'tel:+18683814539'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Point Fortin, Trinidad and Tobago',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 to-slate-100 dark:from-indigo-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Subtle starfield */}
      <div className="absolute inset-0 starfield-subtle opacity-20 dark:opacity-30"></div>
      {/* Nebula overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-pink-50/30 dark:from-purple-950/20 dark:via-transparent dark:to-pink-950/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
              Let&apos;s discuss how we can work together to bring your ideas to life.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <ScrollAnimation direction="left" delay={0.4}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Let&apos;s Connect</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <ScrollAnimation key={info.title} direction="up" delay={0.6 + index * 0.1}>
                    <a
                      href={info.href}
                      className="flex items-center p-3 sm:p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-3 sm:mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-200 flex-shrink-0">
                        <info.icon size={20} className="text-blue-600 dark:text-blue-400 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{info.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base truncate">{info.details}</p>
                      </div>
                    </a>
                  </ScrollAnimation>
                ))}
              </div>

              <ScrollAnimation direction="up" delay={1.0}>
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Quick Response</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    I typically respond to messages within 24 hours. For urgent matters, 
                    feel free to call or text me directly.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation direction="right" delay={0.6}>
            <AdvancedContactForm />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Contact
