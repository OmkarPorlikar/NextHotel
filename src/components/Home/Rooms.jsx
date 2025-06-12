'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const rooms = [
  {
    name: 'Deluxe Room',
    slug: 'deluxe-room',
    image: '/sunshine_hotel_pauni_room1.jpeg',
    bed: 'King Size Bed',
    sleeps: '2 Sleeps',
    price: '₹1,499',
  },
  {
    name: 'Non Deluxe Room',
    slug: 'non-deluxe-room',
    image: '/sunshine_hotel_pauni_room2.jpeg',
    bed: 'King Size Bed',
    sleeps: '2 Sleeps',
    price: '₹999',
  },
];

export default function Rooms() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 min-h-screen pt-16 pb-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Rooms
          </h2>
          <div className="w-24 h-1 bg-gradient-to-br from-[#B8860B] to-[#DAA520] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience comfort and luxury in our thoughtfully designed rooms
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                hoveredCard === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'slideUp 0.8s ease-out forwards'
              }}
            >
              {/* Room Image */}
              <div className="relative overflow-hidden h-64">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 font-bold px-4 py-2 rounded-full shadow-lg border border-gray-200">
                  <span className="text-lg">{room.price}</span>
                  <span className="text-sm text-gray-600 ml-1">/Night</span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  {room.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-6 space-x-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm">{room.bed}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                    <span className="text-sm">{room.sleeps}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <Link href={`/rooms/${room.slug}`}>
                  <button className="w-full bg-gradient-to-br from-[#B8860B] to-[#DAA520] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    View Details & Book Now
                  </button>
                </Link>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[40px] border-l-amber-500/20 border-b-[40px] border-b-transparent"></div>
            </div>
          ))}
        </div>

     
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}