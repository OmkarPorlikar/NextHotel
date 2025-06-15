'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { whatsappNumber } from '../data/constant';


const images = [
  '/sunshine_hotel_pauni_room4.webp',
  '/sunshine_hotel_pauni_room2.jpeg',
  '/sunshine_hotel_pauni_room5.webp',
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6 seconds delay for animation
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden pt-0">

      <NextSeo
        title="Hotel Sunshine Pauni | Comfortable Stay Near Pauni Fort"
        description="Book your stay at Hotel Sunshine Pauni for peaceful and budget-friendly lodging near Waijeshwar Ghat and Pauni Fort."
        canonical="https://www.hotelsunshinepauni.com/"
        openGraph={{
          url: 'https://www.hotelsunshinepauni.com/',
          title: 'Hotel Sunshine Pauni | Comfortable Stay Near Pauni Fort',
          description:
            'Book your stay at Hotel Sunshine Pauni for peaceful and budget-friendly lodging near Waijeshwar Ghat and Pauni Fort.',
          images: [
            {
              url: 'https://www.hotelsunshinepauni.com/og-home.jpg',
              width: 1200,
              height: 630,
              alt: 'Hotel Sunshine Pauni room photo with logo',
            },
          ],
          site_name: 'Hotel Sunshine Pauni',
        }}
      />

      <div className="absolute inset-0 transition-all duration-1000">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Hero ${i}`}
            fill
            priority={i === index}
            className={`object-cover absolute inset-0 transition-all duration-[3000ms] ease-in-out 
              ${i === index ? 'opacity-100 scale-110 animate-zoom' : 'opacity-0 scale-100'}
            `}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to <br /> Hotel SunShine
        </h1>


        <Link
          href={`https://wa.me/${whatsappNumber}`}
          target='_blank'
          className="mt-6 group inline-flex items-center bg-[#C6A662] text-black font-semibold py-3 px-6 rounded text-lg transition-colors duration-300 hover:bg-white"
        >
          Book Now
          <span className="ml-3 relative inline-flex items-center justify-center w-8 h-8 rounded bg-white group-hover:bg-[#C6A662] transition-all duration-300">
            <svg
              className="w-4 h-4 text-black group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>

      <style jsx>{`
        @keyframes zoom {
          0% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        .animate-zoom {
          animation: zoom 5s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}
