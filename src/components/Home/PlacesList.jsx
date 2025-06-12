// Enhanced Tourist Attractions Component with Fixed Hover and No Description
// File: components/TouristAttractions/EnhancedPlaces.js

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { NextSeo } from 'next-seo';
const attractions = [
  {
    id: 1,
    slug: 'pauni-fort',
    title: 'Pauni Fort',
    location: 'Pauni,Maharashtra',
    image: '/pauni_tourism/Pauni_Fort-_Pauni_(Bhandara_District)-_Maharashtra-01.webp',
    alt: 'Pauni Fort near Wainganga river in Pauni - Ancient Maratha-era fortification with scenic surroundings',
    keywords: 'Pauni Fort, Maharashtra tourism, historical fort, Wainganga river, Maratha architecture'
  },

  {
    id: 5,
    slug: 'umred-pauni-karhandla-wildlife-sanctuary',
    title: 'Umred–Pauni–Karhandla Wildlife Sanctuary',
    location: 'Nagpur & Bhandara Districts, Maharashtra',
    image: '/pauni_tourism/Umred_Karhandla_Wildlife_Sanctuary_(Bhandara_District)-_Maharashtra-02.webp',
    alt: 'Tiger safari at Umred–Pauni–Karhandla Wildlife Sanctuary in Maharashtra with lush forest and diverse wildlife',
    keywords: 'Umred Karhandla Sanctuary, Tiger Safari Maharashtra, Wildlife near Nagpur, Sloth Bears, Bird Watching, Pauni Tourism'
  }
  ,

  {
    id: 6,
    slug: 'gosekhurd-dam',
    title: 'Gosekhurd Dam',
    location: 'Pauni, Maharashtra',
    image: '/pauni_tourism/goseDurgh_Pauni_(Bhandara_District)-_Maharashtra-01.webp',
    alt: 'Gosekhurd Dam near Pauni - Major irrigation and hydroelectric project on the Wainganga River',
    keywords: 'Gosekhurd Dam, Wainganga River, irrigation dam, Pauni attractions, Maharashtra hydro projects'
  }
  ,
  {
    id: 2,
    slug: 'waijeshwar-temple',
    title: 'Waijeshwar Temple',
    location: 'Pauni,Maharashtra',
    image: '/pauni_tourism/Waijeshwar_Temple_Pauni_(Bhandara_District)-_Maharashtra-01.webp',
    alt: 'Waijeshwar Temple in Pauni - Sacred temple surrounded by serene ghats',
    keywords: 'Waijeshwar Temple, Shiva temple, Pauni religious sites, Maharashtra temples'
  },
  {
    id: 3,
    slug: 'sindhpuri-buddha-temple',
    title: 'Sindhpuri Buddha Temple',
    location: 'Pauni,Maharashtra',
    image: '/pauni_tourism/Sindpuri_Temple_Pauni_Maharashtra.webp',
    alt: 'Sindhpuri Buddha Temple near Pauni - Tranquil religious place with spiritual significance',
    keywords: 'Sindhpuri Buddha Temple, Buddhist site, Pauni attractions, spiritual tourism'
  },
  {
    id: 4,
    slug: 'waijeshwar-ghat',
    title: 'Waijeshwar Ghat',
    location: 'Pauni, Maharashtra',
    image: '/pauni_tourism/Pauni_Ghat_Waijeshwar_Temple_(Bhandara_District)-_Maharashtra-02.webp', // Replace with correct path if available
    alt: 'Waijeshwar Ghat in Pauni - Sacred riverside cremation ghat for Hindus and Buddhists near Wainganga river',
    keywords: 'Waijeshwar Ghat, Pauni Ghats, cremation site, Wainganga river, Hindu Buddhist rituals, spiritual tourism'
  }
  ,



];

export default function PlacesList() {
  const [hoveredId, setHoveredId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState(new Set());
  const sectionRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(new Set());

  // Optimized intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Staggered animation for better performance
            attractions.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedItems(prev => new Set([...prev, index]));
              }, index * 150);
            });
            observer.disconnect(); // Disconnect after first trigger for performance
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Optimized image preloading
  useEffect(() => {
    const preloadImages = () => {
      attractions.forEach((attraction, index) => {
        const img = new window.Image();
        img.onload = () => {
          setIsImageLoaded(prev => new Set([...prev, index]));
        };
        img.src = attraction.image;
      });
    };

    if (typeof window !== 'undefined') {
      preloadImages();
    }
  }, []);

  const handleHover = useCallback((id) => {
    setHoveredId(id);
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredId(null);
  }, []);

  return (
    <>

      <NextSeo
        title="Best Tourist Places in Pauni, Maharashtra | Hotel Sunshine Pauni"
        description="Explore historical forts, ancient temples, and spiritual sites in Pauni. Book your stay at Hotel Sunshine Pauni for comfortable accommodation near all attractions."
        canonical="https://www.hotelsunshinepauni.com/pauni-tourism"
        openGraph={{
          type: 'website',
          url: 'https://www.hotelsunshinepauni.com/pauni-tourism',
          title: 'Best Tourist Places in Pauni | Hotel Sunshine Pauni',
          description: 'Explore historical forts, ancient temples, and spiritual sites in Pauni. Perfect destination for Maharashtra tourism.',
          images: [
            {
              url: 'https://www.hotelsunshinepauni.com/pauni_tourism/Pauni_Fort-_Pauni_(Bhandara_District)-_Maharashtra-01.webp',
              width: 800,
              height: 600,
              alt: 'Pauni Fort near Wainganga river in Pauni',
            },
          ],
          site_name: 'Hotel Sunshine Pauni',
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@hotelsunshinepauni',
          site: '@hotelsunshinepauni',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'Pauni tourism, hotels in Pauni, Pauni Fort, Waijeshwar Temple, places to visit in Pauni, Maharashtra tourism, Hotel Sunshine Pauni, accommodation near tourist attractions'
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0'
          }
        ]}
      />


      <section
        ref={sectionRef}
        className="py-12 sm:py-16 lg:py-20 bg-[#0e1529] relative overflow-hidden"
        aria-labelledby="places-heading"
        itemScope
        itemType="https://schema.org/TouristAttraction"
      >
        {/* Animated background pattern - GPU accelerated */}
        <div className="absolute inset-0 opacity-5 will-change-transform">
          <div
            className={`absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#B8860B] to-[#DAA520] blur-3xl transform transition-all duration-1000 will-change-transform ${isVisible ? 'scale-100 opacity-5' : 'scale-0 opacity-0'
              }`}
          />
          <div
            className={`absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#DAA520] to-[#B8860B] blur-3xl transform transition-all duration-1000 delay-300 will-change-transform ${isVisible ? 'scale-100 opacity-5' : 'scale-0 opacity-0'
              }`}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* SEO Optimized Header */}
          <header className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1
              id="places-heading"
              className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-4 transform transition-all duration-800 will-change-transform ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}
              itemProp="name"
            >
              Best Tourist Places to Visit in Pauni, Maharashtra
            </h1>
            <p
              className={`text-white/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-4 transform transition-all duration-800 delay-100 will-change-transform ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}
              itemProp="description"
            >
              Explore historical forts, ancient temples, and spiritual sites in Pauni - Hidden gems of Maharashtra tourism
            </p>
            <div
              className={`w-16 sm:w-20 lg:w-24 h-px bg-gradient-to-r from-transparent via-[#DAA520] to-transparent mx-auto transform transition-all duration-800 delay-200 will-change-transform ${isVisible
                  ? 'opacity-100 scale-x-100'
                  : 'opacity-0 scale-x-0'
                }`}
            />
          </header>

          {/* Attractions Grid - Performance Optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 justify-items-center">
            {attractions.map((attraction, index) => (
              <article
                key={attraction.id}
                className={`relative group max-w-xs sm:max-w-sm transform transition-all duration-700 will-change-transform ${animatedItems.has(index)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                  }`}
                itemScope
                itemType="https://schema.org/Place"
                onMouseEnter={() => handleHover(attraction.id)}
                onMouseLeave={handleLeave}
              >
                {/* Main Circle with Enhanced Text Visibility */}
                <div
                  className={`relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden cursor-pointer transform transition-all duration-500 ease-out will-change-transform ${hoveredId === attraction.id
                      ? 'scale-105 lg:scale-110 shadow-2xl shadow-[#DAA520]/40'
                      : hoveredId && hoveredId !== attraction.id
                        ? 'scale-95 opacity-70'
                        : 'scale-100'
                    }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleHover(attraction.id);
                    }
                  }}
                  aria-label={`View ${attraction.title} in ${attraction.location}`}
                >
                  {/* Optimized Image with Loading State */}
                  <div className="relative w-full h-full">
                    <Image
                      src={attraction.image}
                      alt={attraction.alt}
                      fill
                      sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                      className={`object-cover transform transition-all duration-700 will-change-transform ${hoveredId === attraction.id ? 'scale-110 brightness-110' : 'scale-100'
                        } ${isImageLoaded.has(index) ? 'opacity-100' : 'opacity-0'}`}
                      priority={index === 0}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      itemProp="image"
                      onLoad={() => setIsImageLoaded(prev => new Set([...prev, index]))}
                    />

                    {/* Loading skeleton */}
                    {!isImageLoaded.has(index) && (
                      <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-full" />
                    )}
                  </div>

                  {/* Enhanced Gradient Overlay for Better Text Visibility */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transform transition-all duration-500 will-change-auto ${hoveredId === attraction.id ? 'from-black/95 via-black/40' : ''
                      }`}
                  />

                  {/* Additional text backdrop for better readability */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/95 to-transparent transform transition-all duration-500 will-change-auto ${hoveredId === attraction.id ? 'h-24' : ''
                      }`}
                  />

                  {/* Golden Ring with Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-full border-2 transform transition-all duration-500 will-change-auto ${hoveredId === attraction.id
                        ? 'border-[#DAA520] shadow-lg shadow-[#DAA520]/50 ring-1 ring-[#DAA520]/30'
                        : 'border-white/20'
                      }`}
                  />

                  {/* Enhanced Content with Better Typography - No Description */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 lg:p-6 transform transition-all duration-300"
                  >
                    <h2
                      className="text-white text-lg sm:text-xl font-medium ml-6 mb-2 drop-shadow-lg filter"
                      itemProp="name"
                    >
                      {attraction.title}
                    </h2>
                    <p
                      className="text-[#DAA520] text-xs sm:text-sm font-medium drop-shadow-md filter ml-8"
                      itemProp="address"
                    >
                      {attraction.location}
                    </p>
                  </div>

                  {/* Animated Hover Ring */}
                  <div
                    className={`absolute inset-0 rounded-full border border-[#DAA520] transform transition-all duration-700 will-change-transform ${hoveredId === attraction.id
                        ? 'scale-110 opacity-100 rotate-12'
                        : 'scale-100 opacity-0 rotate-0'
                      }`}
                  />

                  {/* Pulse Animation on Hover */}
                  <div
                    className={`absolute inset-0 rounded-full bg-[#DAA520]/10 transform transition-all duration-1000 ${hoveredId === attraction.id
                        ? 'scale-125 opacity-0'
                        : 'scale-100 opacity-100'
                      }`}
                  />
                </div>

                {/* Floating Number with Enhanced Animation */}
                <div
                  className={`absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-[#B8860B] to-[#DAA520] flex items-center justify-center text-white text-xs sm:text-sm font-medium transform transition-all duration-500 will-change-transform ${hoveredId === attraction.id ? 'scale-125 shadow-lg rotate-12' : 'scale-100 rotate-0'
                    }`}
                  aria-hidden="true"
                >
                  {index + 1}
                </div>

                {/* Enhanced Action Button */}
                <Link
                  href={`/pauni-tourism/${attraction.slug}`}
                  className={`absolute inset-0 rounded-full flex items-center 
                    justify-center transform transition-all 
                    duration-500 focus:outline-none focus:ring-2 
                    focus:ring-[#DAA520] focus:ring-offset-2 
                    focus:ring-offset-[#0e1529] 
                    will-change-transform ${hoveredId === attraction.id
                      ? 'bg-black/20 backdrop-blur-sm opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                    }`}
                  aria-label={`Visit ${attraction.title} details page`}
                  itemProp="url"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#B8860B] to-[#DAA520] flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                {/* Hidden SEO content */}
                <div className="sr-only">
                  <span itemProp="keywords">{attraction.keywords}</span>
                </div>
              </article>
            ))}
          </div>

        
        </div>
      </section>

      {/* Enhanced JSON-LD for Better SEO */}


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Best Tourist Places in Pauni, Maharashtra",
            "description": "Discover top tourist attractions, historical sites, and temples in Pauni, Maharashtra. Complete guide to places worth visiting in Pauni. Stay at Hotel Sunshine Pauni for comfortable accommodation.",
            "numberOfItems": attractions.length,
            "url": "https://www.hotelsunshinepauni.com/pauni-tourism",
            "mainEntity": {
              "@type": "Place",
              "name": "Pauni",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pauni",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
              },
              "containsPlace": {
                "@type": "Hotel",
                "name": "Hotel Sunshine Pauni",
                "url": "https://www.hotelsunshinepauni.com",
                "telephone": "+91 YOUR_PHONE_NUMBER",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "YOUR_STREET_ADDRESS",
                  "addressLocality": "Pauni",
                  "addressRegion": "Maharashtra",
                  "postalCode": "YOUR_POSTAL_CODE",
                  "addressCountry": "India"
                },
                "image": "https://www.hotelsunshinepauni.com/path-to-hotel-image.jpg",
                "description": "Comfortable accommodation in Pauni near major tourist attractions like Pauni Fort and Waijeshwar Temple."
              }
            },
            "itemListElement": attractions.map((attraction, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "TouristAttraction",
                "name": attraction.title,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Pauni",
                  "addressRegion": "Maharashtra",
                  "addressCountry": "India"
                },
                "url": `https://www.hotelsunshinepauni.com/pauni-tourism/${attraction.slug}`,
                "image": {
                  "@type": "ImageObject",
                  "url": `https://www.hotelsunshinepauni.com${attraction.image}`,
                  "description": attraction.alt
                },
                "keywords": attraction.keywords,
                "touristType": ["Cultural Tourism", "Historical Tourism", "Religious Tourism"],
                "isAccessibleForFree": true,
                "publicAccess": true
              }
            }))
          })
        }}
      />

    </>




  );
}