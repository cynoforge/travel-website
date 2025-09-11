import React from 'react';
import { Globe, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

   const Footer = () => {
      return (
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-3 rounded-full shadow-lg">
                    <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    TravelSite
                  </div>
                </div>
                <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-sm">
                  Explore the world with us. We craft extraordinary travel experiences that inspire wanderlust and create lasting memories.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: 'M17 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7m0 15c-3.14 0-5.7-2.56-5.7-5.7s2.56-5.7 5.7-5.7m0-15C9.86 2.3 7.3 4.86 7.3 8s2.56 5.7 5.7 5.7m0 15c3.14 0 5.7-2.56 5.7-5.7s-2.56-5.7-5.7-5.7', href: '#', color: 'blue-600' },
                    { icon: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.91 8-4.94 8-9.95z', href: '#', color: 'blue-400' },
                    { icon: 'M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.87 8.14 6.84 9.49.5.09.68-.22.68-.48v-3.38c-2.79.61-3.38-1.34-3.38-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.56 4.94.36.31.56.92.56 1.85v2.74c0 .26.19.57.69.49 3.96-1.35 6.83-5.08 6.83-9.49 0-5.5-4.46-9.96-9.96-9.96z', href: '#', color: 'pink-600' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`bg-gray-800 p-3 rounded-full hover:bg-${social.color} transition-all duration-300 group shadow-md`}
                    >
                      <svg className="h-5 w-5 text-gray-400 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  {['Home', 'Destinations', 'About Us', 'Tours', 'Blog', 'Contact'].map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm font-medium"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <svg className="h-5 w-5 text-indigo-500 mt-1 flex-shrink-0 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:info@travelsite.com" className="text-white hover:text-indigo-400 transition-colors duration-300">
                        info@travelsite.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <svg className="h-5 w-5 text-green-500 mt-1 flex-shrink-0 group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+94779999999" className="text-white hover:text-green-400 transition-colors duration-300">
                        +94 77 999 9999
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 transition-all duration-300"
                    />
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 rounded-r-xl hover:shadow-lg transition-all duration-300">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} TravelSite. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                    <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    };

export default Footer;