'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Star, Users, ArrowRight } from 'lucide-react';

import pauniPlacesData from '@/components/data/pauniPlacesData';
import { whatsappNumber } from '@/components/data/constant';
import { getBreadcrumbs } from '@/components/SEO/breadcrumb.config';
import Breadcrumb from '@/components/SEO/Breadcrumbs';

const DynamicTourismPage = ({ placeData }) => {
  const [activeRoom, setActiveRoom] = useState(0);
  const rooms = placeData?.accommodations || [];

  // Generate breadcrumbs dynamically
  const breadcrumbs = getBreadcrumbs([
    { name: 'Home', href: '/' },
    { name: 'Pauni Attractions', href: '/pauni-attractions' },
    { name: placeData.name, href: `/pauni-attractions/${placeData.slug}` },
  ]);

  return (
    <>
      <NextSeo
        title={`${placeData.name} – Explore Hidden Gems of ${placeData.location}`}
        description={placeData.description}
        canonical={`https://www.hotelsunshinepauni.com/pauni-attractions/${placeData.slug}`}
        openGraph={{
          url: `https://www.hotelsunshinepauni.com/pauni-attractions/${placeData.slug}`,
          title: `${placeData.name} – Explore Hidden Gems of ${placeData.location}`,
          description: placeData.description,
          images: [
            {
              url: placeData.heroImage,
              width: 1200,
              height: 630,
              alt: `${placeData.name} Image`,
              type: 'image/jpeg',
            },
          ],
          siteName: 'Sunshine Hotel Pauni',
        }}
        twitter={{
          site: '@hotelsunshinepauni',
          cardType: 'summary_large_image',
        }}
      />

      <div className="min-h-screen bg-white">

        {/* Hero Section - Mobile Responsive */}
        <div className="relative h-[70vh] sm:h-[80vh] lg:h-screen bg-black text-white overflow-hidden">
          <Image
            src={placeData.heroImage}
            alt={`${placeData.name} Landscape`}
            layout="fill"
            objectFit="cover"
            className="brightness-[0.6] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider mb-2 sm:mb-4" style={{ color: '#c6a662' }}>
              {placeData.location?.toUpperCase()}&rsquo;S HIDDEN GEM
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 leading-tight">
              {placeData.name.toUpperCase()}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-4 sm:mb-6" style={{ color: '#c6a662' }}>
              {placeData.tagline}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-xs sm:max-w-md lg:max-w-2xl px-4">
              {placeData.description}
            </p>

            {/* Scroll cue - Hidden on mobile */}
            <div className="mt-8 sm:mt-16 animate-bounce hidden sm:block">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Description Section - Mobile Responsive */}
        <div className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23${placeData.colors.accent.replace('#', '')} fill-opacity=0.1%3E%3Ccircle cx=30 cy=30 r=4/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8" style={{ color: placeData.colors.primary }}>
                Beyond Ordinary
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-2 sm:mt-4" style={{ color: placeData.colors.accent }}>
                  Extraordinary Awaits
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
              {/* Left description */}
              <div className="space-y-6 sm:space-y-8">
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8" style={{ color: placeData.colors.primary }}>
                  {placeData.detailedDescription[0]}
                </p>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
                  {placeData.detailedDescription.slice(1).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
                  {placeData.stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 sm:p-6 rounded-2xl bg-gray-100">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2" style={{ color: placeData.colors.accent }}>
                        {stat.number}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right image */}
              <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[600px] rounded-3xl overflow-hidden group order-first lg:order-last">
                <Image
                  src={placeData.experienceImage}
                  alt={`${placeData.name} Experience`}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                  <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 sm:p-6 text-white">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Nature&rsquo;s Masterpiece</h3>
                    <p className="text-sm sm:text-base text-gray-200">Where every view tells a story</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accommodations - Mobile Responsive */}
        {rooms.length > 0 && (
          <div className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: placeData.colors.primary }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-8">
                  Exceptional <span style={{ color: placeData.colors.accent }}>Stays</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                  Choose from our collection of uniquely designed accommodations, each offering a different perspective on luxury in nature.
                </p>
              </div>

              {/* Room Selection Tabs - Mobile Responsive */}
              {rooms.length > 1 && (
                <div className="flex justify-center mb-8 sm:mb-12 px-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full p-1 sm:p-2 w-full max-w-md sm:max-w-none sm:w-auto overflow-x-auto">
                    <div className="flex space-x-1 sm:space-x-0">
                      {rooms.map((room, index) => (
                        <button
                          key={room.id}
                          onClick={() => setActiveRoom(index)}
                          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${activeRoom === index
                            ? 'text-white shadow-lg'
                            : 'text-gray-300 hover:text-white'
                            }`}
                          style={{
                            backgroundColor: activeRoom === index ? placeData.colors.accent : 'transparent'
                          }}
                        >
                          {room.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Selected Room - Mobile Responsive */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                {/* Room Details */}
                <div className="order-2 lg:order-1 bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 space-y-4 sm:space-y-0">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: placeData.colors.primary }}>
                      {rooms[activeRoom].name}
                    </h3>
                    <div className="flex" style={{ color: placeData.colors.accent }}>
                      {[...Array(rooms[activeRoom].rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 h-5 lg:w-6 lg:h-6 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">{rooms[activeRoom].description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {rooms[activeRoom].amenities?.map((a, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: placeData.colors.accent }}></div>
                        <span className="text-sm sm:text-base text-gray-600">{a}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <div>
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: placeData.colors.primary }}>
                        {rooms[activeRoom].price}
                      </span>
                      <span className="text-gray-500 ml-2 text-sm sm:text-base">per night</span>
                    </div>

                    <Link
                      href={`https://wa.me/${whatsappNumber}`}
                      className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-white hover:scale-105 transition-all text-sm sm:text-base"
                      style={{ backgroundColor: placeData.colors.primary }}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>

                {/* Room Image */}
                <div className="order-1 lg:order-2 relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-3xl overflow-hidden group">
                  <Image
                    src={rooms[activeRoom].image}
                    alt={rooms[activeRoom].name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white/20 backdrop-blur-lg rounded-full px-3 sm:px-4 py-1 sm:py-2 text-white font-medium text-xs sm:text-sm">
                    Premium Choice
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section - Mobile Responsive */}
        <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-white via-gray-50 to-white">
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8" style={{ color: placeData.colors.primary }}>
              Your Adventure
              <span className="block" style={{ color: placeData.colors.accent }}>Starts Here</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Step into a world where luxury meets wilderness, where every moment becomes a treasured memory.
            </p>
            <Link
              href={`https://wa.me/${whatsappNumber}`}
              className="group flex items-center px-12 py-6 rounded-full font-bold text-xl text-white hover:scale-105 transition-all shadow-2xl"
              style={{ backgroundColor: placeData.colors.accent }}
            >
              <Users className="w-6 h-6 mr-3" />
              Plan Your Escape
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>
        </div>
      </div>


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": placeData.name,
            "description": placeData.description,
            "image": [placeData.heroImage],
            "url": `https://www.hotelsunshinepauni.com/pauni-attractions/${placeData.slug}`,
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": placeData.coordinates.lat,
              "longitude": placeData.coordinates.lng
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pauni",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          })
        }}
      />


    </>
  );
};

export async function getServerSideProps({ params }) {
  const placeData = pauniPlacesData.find((r) => r.slug === params.places);

  if (!placeData) {
    return { notFound: true };
  }

  return {
    props: {
      placeData,
    },
  };
}

export default DynamicTourismPage;
