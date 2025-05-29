'use client';

import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Scenic Pauni Dam hero section"
    >
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/sunshine_hotel_bg.jpg"
        >
          <source src="/videos/pauni-dam-aerial.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-5xl mx-auto px-6 md:px-12">
        <h1 className="text-white text-3xl md:text-5xl font-semibold leading-snug mb-4">
          Experience <span className="text-amber-400">Pauni</span> — Gateway to Serenity
        </h1>
        <p className="text-white/90 text-base md:text-lg max-w-xl mb-6">
          Discover peaceful retreats by Indira Sagar Dam, local Vidarbha cuisine, and the spiritual essence of Pauni Fort.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/booking"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition"
          >
            Book Your Stay
          </a>
          <a
            href="/experiences"
            className="border border-white hover:bg-white hover:text-black text-white px-5 py-2.5 rounded-full text-sm font-medium transition"
          >
            View Experiences
          </a>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="absolute bottom-8 w-full px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[
            {
              icon: '🌊',
              title: 'Waterside Retreats',
              desc: 'Calm mornings at Pauni Dam’s edge.',
            },
            {
              icon: '🥘',
              title: 'Authentic Flavors',
              desc: 'Vidarbha’s rustic dishes, served with love.',
            },
            {
              icon: '🛶',
              title: 'Outdoor Adventures',
              desc: 'Boating, birdwatching & more by Gosekhurd.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 border border-white/20 text-white backdrop-blur-sm rounded-lg px-5 py-4 flex items-start space-x-4"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="text-base font-medium">{item.title}</h3>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
