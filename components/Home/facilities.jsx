'use client';

import Image from 'next/image';

const facilities = [
  {
    label: 'Perfect for Events',
    title: 'Banquet Hall',
    description: 'Elegant venue for grand celebrations and corporate events with capacity up to 250 guests',
    image: '/Banquet_hall_mds_royal_resort_tulsipur.jpg',
  },
  {
    label: 'Business Meetings',
    title: 'Board Room',
    description: 'Professional meeting space equipped with modern technology for business needs',
    image: '/hotel_lawan.jpg',
  },
];

export default function OtherFacilities() {
  return (
    <div className="bg-[#fdf7f2] py-16 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Other Facilities</h2>
      <div className="w-24 h-[2px] bg-gray-900 mb-10"></div>

      <div className="grid md:grid-cols-2 gap-6">
        {facilities.map((facility) => (
          <div key={facility.title} className="relative rounded-2xl overflow-hidden shadow-md group">
            <Image
              src={facility.image}
              alt={facility.title}
              width={600}
              height={400}
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-[#0c1b2a] text-white text-xs px-3 py-1 rounded-full shadow">
              {facility.label}
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold">{facility.title}</h3>
              <p className="text-sm max-w-sm">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
