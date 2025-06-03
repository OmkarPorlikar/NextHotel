'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const rooms = [
  {
    name: 'Club Suite',
    slug: 'club-suite',
    image: '/sunshine_hotel_pauni_room1.jpeg',
    size: '350 Sq Ft',
    bed: 'King Size Bed',
    sleeps: '2 Sleeps',
    price: '₹3,450',
  },
  {
    name: 'Executive Rooms',
    slug: 'executive',
    image: '/sunshine_hotel_pauni_room2.jpeg',
    size: '300 Sq Ft',
    bed: 'King Size Bed',
    sleeps: '2 Sleeps',
    price: '₹2,645',
  },
  {
    name: 'Standard Rooms',
    slug: 'standard',
    image: '/sunshine_hotel_pauni_room3.jpeg',
    size: '250 Sq Ft',
    bed: 'Queen Size Bed',
    sleeps: '2 Sleeps',
    price: '₹1,725',
  },
];

// animation variants (defined outside component)
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Rooms() {
  return (
    <div className="bg-[#fdf7f2] py-16 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Rooms</h2>
      <div className="w-20 h-[2px] bg-gray-900 mb-10"></div>

      <div className="grid md:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <motion.div
            key={room.slug}
            className="rounded-xl shadow-md bg-white overflow-hidden"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="relative">
              <Image
                src={room.image}
                alt={room.name}
                width={500}
                height={300}
                className="w-full h-[230px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 right-3 bg-white text-black font-semibold px-3 py-1 rounded-md shadow">
                {room.price}/Night
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{room.name}</h3>
              <p className="text-sm text-gray-600">
                {room.size} • {room.bed} • {room.sleeps}
              </p>

              <Link href={`/rooms/${room.slug}`} passHref>
                <button className="mt-4 bg-[#0c1b2a] text-white px-4 py-2 rounded-full text-sm hover:bg-[#1b2f4c] cursor-pointer">
                  View Details
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
