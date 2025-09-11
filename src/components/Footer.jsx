import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-auto">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">TravelSite</h3>
                        <p className="text-gray-400">
                            Explore the world with us. Discover amazing destinations and plan your perfect trip.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Home</a></li>
                            <li><a href="#" className="hover:text-gray-300">Destinations</a></li>
                            <li><a href="#" className="hover:text-gray-300">About</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <div className="flex items-center space-x-2 text-gray-400 mb-4">
                            <FaEnvelope className='w-6 h-6 ' />
                            <span>Email: info@travelsite.com</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 mb-4">
                            <FaPhone className='w-6 h-6' />
                            <span>Phone: 077 999 9999</span>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-gray-300"><FaFacebook className='w-6 h-6' /></a>
                            <a href="#" className="hover:text-gray-300"><FaInstagram className='w-6 h-6' /></a>
                            <a href="#" className="hover:text-gray-300"><FaXTwitter className='w-6 h-6' /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} TravelSite. All rights reserved.
                </div>
            </div>
        </footer>)
}

export default Footer