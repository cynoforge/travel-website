import React from 'react'
import earth from '../assets/earth.jpg'

const Navbar = () => {

    return (
        <nav className="bg-white fixed w-full top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex h-16 items-center">
                        {/* Logo */}
                        <img src={earth} className='h-10 w-10 me-2' />
                        <div className="text-3xl font-display text-gray-800">TravelSite</div>
                    </div>
                    {/* Desktop Menu */}
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-700">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-700">About</a>
                        <a href="#" className="text-gray-600 hover:text-gray-700">Destination</a>
                        <a href="#" className="text-gray-600 hover:text-white rounded-md text-white px-4 py-2 bg-gray-700">Book Now</a>
                    </div>


                </div>
            </div>


        </nav>
    )
}

export default Navbar