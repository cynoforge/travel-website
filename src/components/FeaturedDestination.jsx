import React from 'react'
import Bern from '../assets/Bern.jpg'
import lanka from '../assets/lanka.jpg'
import Maldives from '../assets/Maldives.jpg'
import milan from '../assets/Milansquare.avif'
import norway from '../assets/norway.jpg'
import tokyo from '../assets/tokyo.jpg'


const FeaturedDestination = () => {
    const destinations = [
        {
            name: "Milan, Italy",
            description: "Italy’s fashion and business capital, famous for its stylish shopping streets, modern skyscrapers, and historic landmarks like the Duomo di Milano and La Scala opera house.",
            image: milan
        },
        {
            name: "Bern, Switzerland ",
            description: "known for its medieval old town, cobbled streets, and the iconic Zytglogge clock tower. Nestled along the Aare River, it’s a laid-back city with stunning views of the Alps, peaceful green spaces, and a mix of history and Swiss culture.",
            image: Bern
        },
        {
            name: "Tokyo, Japan ",
            description: "Japan’s vibrant capital, blending ultra-modern skyscrapers, neon-lit streets, and high-tech culture with historic temples, peaceful gardens, and traditional markets. From Shibuya Crossing to Asakusa’s Senso-ji, the city offers endless energy, unique food, and a mix of old and new Japan",
            image: tokyo
        },
        {
            name: "Maldives ",
            description: "Maldives is a tropical paradise in the Indian Ocean, famous for its crystal-clear waters, white sandy beaches, and luxury overwater villas. Spread across 1,000+ coral islands, it’s a top spot for snorkeling, diving, and enjoying serene sunsets by the sea.",
            image: Maldives
        },
        {
            name: "Norway ",
            description: "Norway is a Scandinavian gem known for its dramatic fjords, snowy mountains, and stunning Northern Lights. With cozy towns, Viking heritage, and scenic train routes, it’s a land of natural beauty and outdoor adventure all year round.",
            image: norway
        },
        {
            name: "Sri Lanka ",
            description: "Sri Lanka is a tropical island in the Indian Ocean, known for its lush tea plantations, golden beaches, and ancient temples. From the misty mountains of Nuwara Eliya to the wildlife-rich national parks like Yala, it’s a compact country full of natural beauty and cultural treasures.",
            image: lanka
        },
    ]
    return (
        <section className='py-12 bg-gray-50'>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Featured Destinations
            </h2>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                {destinations.map((dest) => (
                    <div className="rounded-2xl shadow-xl">
                        <img src={dest.image} className='h-48 w-full' />

                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-700">{dest.name}</h3>
                            <p className="text-gray-500 text-sm mb-3 mt-3">{dest.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedDestination