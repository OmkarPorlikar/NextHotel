// pages/index.js
import { NextSeo } from 'next-seo';
import { GoogleTagManager } from '@next/third-parties/google';

import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Luxury Resort at Pauni Dam | Indira Sagar Waterfront Hotel | Kashi of Vidarbha"
        description="Experience luxury accommodation at the serene banks of Pauni Dam & Indira Sagar reservoir. Explore Gose Dam activities & the spiritual heritage of Pauni - the Kashi of Vidarbha."
        canonical="https://pauniresort.com/"
        openGraph={{
          url: 'https://pauniresort.com/',
          title: 'Luxury Resort at Pauni Dam | Indira Sagar Waterfront Experience',
          description: 'Discover premium accommodation at the beautiful Pauni Dam & Indira Sagar reservoir. Offering breathtaking views, water activities at Gose Dam, and spiritual experiences in the Kashi of Vidarbha.',
          images: [
            {
              url: 'https://pauniresort.com/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Pauni Riverside Resort at Indira Sagar Dam',
              type: 'image/jpeg',
            }
          ],
          siteName: 'Pauni Riverside Resort',
        }}
        twitter={{
          handle: '@pauniresort',
          site: '@pauniresort',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'pauni, indira sagar, gose dam, pauni dam, kashi of vidharbha, luxury resort, waterfront hotel, riverside accommodation, water activities, temple tourism'
          },
          {
            name: 'geo.region',
            content: 'IN-MH'
          },
          {
            name: 'geo.placename',
            content: 'Pauni, Maharashtra'
          }
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          }
        ]}
      />
      
      <main>
        <Header />
        <Hero />
        <Services />
        {/* Add more sections here */}
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
    </>
  );
}