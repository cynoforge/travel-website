import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

    const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      return (
        <nav className="bg-white/95 backdrop-blur-xl fixed w-full top-0 z-50 shadow-xl border-b border-gray-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-3 rounded-full shadow-lg">
                  <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  TravelSite
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-10">
                {['Home', 'Destinations', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-gray-800 font-semibold text-lg hover:text-indigo-600 transition-colors duration-300 group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Book Now
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-800 hover:text-indigo-600 transition-colors duration-300"
                >
                  {isMenuOpen ? (
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100/50 shadow-2xl">
                <div className="px-6 py-8 space-y-5">
                  {['Home', 'Destinations', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-800 font-semibold text-lg hover:text-indigo-600 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      );
    };

export default Navbar;