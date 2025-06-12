// File: components/Home/facilities.js

'use client';

import Image from 'next/image';
import { useState } from 'react';

const facilitiesData = [
  {
    id: 1,
    title: 'Board Room',
    badge: 'Perfect for Events',
    description: 'Elegant venue ideal for grand celebrations, weddings, and corporate events, offering a refined and versatile setting',
    image: '/', // Replace with your actual image path
    alt: 'Banquet Hall with elegant seating arrangement for events and celebrations',
    features: ['Audio/Video Equipment', 'Catering Available', 'Event Planning Support']
  },
  {
    id: 2,
    title: 'Meeting Hall / Business Meetings',
    badge: 'Business Meetings',
    description: 'Professional meeting space equipped with modern technology for business needs',
    image: '/dining_sunshine_hotel.jpeg', // Replace with your actual image path
    alt: 'Professional board room with modern meeting facilities and technology',
    features: ['Modern Technology', 'Wi-Fi Connectivity', 'Presentation Equipment', 'Coffee Service']
  }
];

// Individual Facility Card Component
function FacilityCard({ facility, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
      style={{
        animationDelay: `${index * 200}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      {/* Image with loading state */}
      <div className="relative w-full h-full">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
        )}
        
        <Image
          src={facility.image}
          alt={facility.alt}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Badge */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg border border-white/20">
        {facility.badge}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-shadow-lg group-hover:text-yellow-300 transition-colors duration-300">
          {facility.title}
        </h3>
        
        <p className="text-sm md:text-base text-gray-100 leading-relaxed mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          {facility.description}
        </p>

        {/* Features List - appears on hover */}
        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <div className="flex flex-wrap gap-2">
            {facility.features.slice(0, 2).map((feature, idx) => (
              <span
                key={idx}
                className="bg-yellow-600/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 rounded-2xl transition-all duration-300" />
    </div>
  );
}

// Main OtherFacilities Component
export default function OtherFacilities({ showTitle = true, containerClass = "", title = "Other Facilities" }) {
  return (
    <section className={`py-12 ${containerClass}`}>
      {showTitle && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium facilities designed to enhance your stay and make every moment memorable
          </p>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {facilitiesData.map((facility, index) => (
          <FacilityCard 
            key={facility.id} 
            facility={facility} 
            index={index}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}

// Export individual components for flexibility
export { FacilityCard };

// Alternative export for when you need just the cards without section wrapper
export function OtherFacilitiesCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {facilitiesData.map((facility, index) => (
        <FacilityCard 
          key={facility.id} 
          facility={facility} 
          index={index}
        />
      ))}
    </div>
  );
}