import React from 'react';
import { MapPin, Star, ArrowRight } from 'lucide-react';

 const FeaturedDestinations = () => {
      const destinations = [
        {
          id: 1,
          name: 'Bali, Indonesia',
          description: 'Tropical paradise with stunning beaches and rich culture',
          image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          rating: 4.8,
          price: '$899',
          duration: '7 days'
        },
        {
          id: 2,
          name: 'Paris, France',
          description: 'City of lights with iconic landmarks and cuisine',
          image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          rating: 4.9,
          price: '$1299',
          duration: '5 days'
        },
        {
          id: 3,
          name: 'Tokyo, Japan',
          description: 'Modern metropolis blending tradition with innovation',
          image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          rating: 4.7,
          price: '$1599',
          duration: '8 days'
        }
      ];

      return (
        <section id="destinations" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Explore Top
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}Destinations
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover hand-picked destinations offering unforgettable experiences and breathtaking adventures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                      <div className="flex items-center space-x-1.5">
                        <svg className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-800">{destination.rating}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-indigo-600 mb-3">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm font-semibold">{destination.name}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{destination.description}</h3>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-extrabold text-indigo-600">{destination.price}</span>
                        <span className="text-gray-500 text-sm">{destination.duration}</span>
                      </div>
                    </div>
                    <button className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3">
                      <span>Book Now</span>
                      <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-600 hover:text-white hover:shadow-lg transition-all duration-300">
                View All Destinations
              </button>
            </div>
          </div>
        </section>
      );
    };
export default FeaturedDestinations;