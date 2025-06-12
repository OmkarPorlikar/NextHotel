'use client';

import { motion } from 'framer-motion';
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

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2 + 0.4,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function RoomsList() {
  return (
    <motion.section
      className="bg-[#fdf7f2] min-h-screen pt-7 mt-10 pb-20 px-4 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center"
        variants={sectionVariants}
      >
        Our Rooms
      </motion.h2>
      <motion.div
        className="w-20 h-[2px] bg-gray-900 mb-10 text-center my-0 mx-auto"
        variants={sectionVariants}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {rooms.map((room, index) => (
          <motion.div
            key={room.name}
            className="rounded-xl shadow-md bg-white overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="relative group overflow-hidden">
              <Image
                src={room.image}
                alt={room.name}
                width={500}
                height={300}
                className="w-full h-[230px] object-cover transition-transform duration-500 group-hover:scale-110"
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
              <Link href={`/rooms/${room.slug}`}>
                <button className="mt-4 bg-[#0c1b2a] text-white px-4 py-2 
                rounded-full text-sm hover:bg-[#1b2f4c] transition cursor-pointer">
                  View Details
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
