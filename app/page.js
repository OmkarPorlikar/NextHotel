// pages/index.js
"use client";
import { GoogleTagManager } from '@next/third-parties/google';

import Header from '../components/layout/Header';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import Footer from '../components/layout/Footer';
import Contact  from '../components/Home/Contact';
 

// app/page.js (home page)

 const metadata = {
  title: 'Hotel Sunshine Pauni | Near Pauni Dam | Kashi of Vidarbha',
  description: 'Stay at Hotel Sunshine Pauni near Indira Sagar Project. Book now for clean rooms, peaceful surroundings, and spiritual tourism.',
  keywords: 'pauni hotel, indira sagar dam, kashi of vidarbha, spiritual tourism, budget stay',
  openGraph: {
    title: 'Hotel Sunshine Pauni | Comfort Near Pauni Dam',
    description: 'Peaceful hotel near Pauni Dam and Indira Sagar. Spiritual tourism in Vidarbha with modern amenities.',
    url: 'https://hotelsunshinepauni.com',
  },
};


export default function Home() {
  return (
    <div> 
   
      
      <main>
        <Header />
        <Hero />
        <Services />
      
        {/* Add more sections here */}
        <Contact/>
        <Footer />
      </main>
      
      <GoogleTagManager gtmId="GTM-XXXXXXX" />
      
      {/* Structured Data for Hotel */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Pauni Riverside Resort",
            "description": "Luxury resort located at the banks of Pauni Dam and Indira Sagar reservoir in the Kashi of Vidarbha.",
            "url": "https://pauniresort.com",
            "telephone": "+91-1234567890",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Riverside Road",
              "addressLocality": "Pauni",
              "addressRegion": "Maharashtra",
              "postalCode": "441901",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "20.7836",
              "longitude": "79.6342"
            },
            "starRating": {
              "@type": "Rating",
              "ratingValue": "4.5"
            },
            "priceRange": "₹₹₹",
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "Riverside Views"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Waterfront Activities"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Spa and Wellness"
              }
            ],
            "photo": "https://pauniresort.com/images/resort-view.jpg"
          })
        }}
      />
    </div>
  );
}
