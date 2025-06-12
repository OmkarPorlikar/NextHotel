// app/page.js (App Router version)
import { GoogleTagManager } from '@next/third-parties/google';
import Header from '../components/layout/Header';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import Footer from '../components/layout/Footer';
import Contact from '../components/Home/Contact';
import Rooms from '../components/Home/Rooms';
import Banner from '../components/Home/Banner';
import Facility from '../components/Home/facilities';
import Testimonials from '@/components/Home/Testimonials';
import Places from '@/components/Home/Places';

import { PAGES_SEO, LOCAL_BUSINESS_SCHEMA } from '../components/SEO/seo.config';

// This function is used by Next.js App Router for metadata
export function generateMetadata() {
  const seo = PAGES_SEO.home;
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.additionalMetaTags.find(tag => tag.name === 'keywords')?.content,
    authors: [{ name: 'Hotel Sunshine Pauni' }],
    creator: 'Hotel Sunshine Pauni',
    publisher: 'Hotel Sunshine Pauni',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: seo.canonical,
      siteName: 'Hotel Sunshine Pauni',
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: 'https://www.hotelsunshinepauni.com/images/hotel-exterior.jpg',
          width: 1200,
          height: 630,
          alt: 'Hotel Sunshine Pauni - Best Hotel in Pauni Maharashtra',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@hotelsunshinepauni',
      creator: '@hotelsunshinepauni',
      title: seo.title,
      description: seo.description,
      images: ['https://www.hotelsunshinepauni.com/images/hotel-exterior.jpg'],
    },
    other: {
      'geo.region': 'IN-MH',
      'geo.placename': 'Pauni, Maharashtra, India',
      'geo.position': '20.79402;79.629993',
      'ICBM': '20.79402, 79.629993',
    },
  };
}

export default function Home() {
  return (
    <div>
      <main>
        {/* <Header /> */}
        <Hero />
        <Services />
        <Rooms />
        <Banner />
        <Places />
        <Facility />
        <Testimonials />
        {/* <Contact /> */}
        {/* <Footer /> */}
      </main>

      <GoogleTagManager gtmId="GTM-XXXXXXX" />

      {/* Structured Data for Hotel */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) 
        }}
      />
    </div>
  );
}