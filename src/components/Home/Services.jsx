'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import icons to reduce initial bundle
const FaSnowflake = dynamic(() => import('react-icons/fa').then(mod => mod.FaSnowflake), { ssr: false });
const FaWifi = dynamic(() => import('react-icons/fa').then(mod => mod.FaWifi), { ssr: false });
const FaUtensils = dynamic(() => import('react-icons/fa').then(mod => mod.FaUtensils), { ssr: false });
const FaGlassCheers = dynamic(() => import('react-icons/fa').then(mod => mod.FaGlassCheers), { ssr: false });
const FaBatteryFull = dynamic(() => import('react-icons/fa').then(mod => mod.FaBatteryFull), { ssr: false });
const FaTshirt = dynamic(() => import('react-icons/fa').then(mod => mod.FaTshirt), { ssr: false });
const MdSecurity = dynamic(() => import('react-icons/md').then(mod => mod.MdSecurity), { ssr: false });

const amenities = [
  {
    Icon: FaSnowflake,
    title: 'Air Conditioning',
    description: 'Climate-controlled comfort throughout the hotel for a pleasant stay in any weather.'
  },
  {
    Icon: FaWifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet access available throughout the property for seamless connectivity.'
  },
  {
    Icon: FaGlassCheers,
    title: 'Banquet',
    description: 'Elegant banquet facilities perfect for hosting special events and celebrations.'
  },
  {
    Icon: FaUtensils,
    title: 'Restaurant',
    description: 'Fine dining restaurant serving exquisite cuisine for breakfast, lunch, and dinner.'
  },
  {
    Icon: MdSecurity,
    title: 'Security',
    description: 'Round-the-clock security services for your safety and peace of mind.'
  },
  {
    Icon: FaTshirt,
    title: 'Laundry',
    description: 'Professional laundry and dry-cleaning services available for our guests.'
  }
];

export default function Services() {
  return (
    // bg-[#0f1b2b] -> blue
    // #fdf7f2 -> white
    <section className="bg-[#0f1b2b] py-16 px-4 text-center">
      <motion.h3
        className="text-sm tracking-widest text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        HOTEL FACILITIES
      </motion.h3>
      <motion.h2
        className="text-4xl font-bold text-white mt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Premium Amenities
      </motion.h2>
      <motion.p
        className="text-gray-300 max-w-xl mx-auto mt-4  font-light"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Experience comfort and convenience with our comprehensive range of modern facilities and services.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        {amenities.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-[#fdf7f2] text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 text-yellow-400">
              <item.Icon size={40} />
            </div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
