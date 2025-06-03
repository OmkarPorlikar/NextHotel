'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Banner() {
  return (
    <section className="bg-[#fdf7f2] px-4 md:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Restaurant</h2>
      <div className="w-20 h-[2px] bg-gray-900 mb-10"></div>

      <motion.div
        className="relative overflow-hidden rounded-2xl group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Background Image with Zoom on Hover */}
        <div className="w-full h-[420px] relative overflow-hidden">
          <Image
            src="/hotel_horizontal_image.jpeg"
            alt="FLAiR Restaurant"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        {/* Overlay Content */}
        <div className="absolute z-20 inset-0 flex flex-col justify-center p-6 md:p-12 text-white">
          <p className="uppercase tracking-wide text-sm mb-1">Hotel Sunshine Pauni </p>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">FLAiR Restaurant</h3>
          <p className="max-w-2xl text-md md:text-lg mb-6">
            Experience exquisite dining with our signature dishes and elegant ambiance. Our expert chefs prepare a variety of local and international cuisines using the finest ingredients.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
              Explore Menu
            </button>
            <button className="border-2 border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              View Gallery
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
