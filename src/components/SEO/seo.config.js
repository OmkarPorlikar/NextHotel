// components/SEO/seo.config.js
export const DEFAULT_SEO = {
  title: 'Hotel Sunshine Pauni | Best Hotels in Pauni Maharashtra',
  description: 'Experience luxury accommodation at Hotel Sunshine Pauni. Located on Khapri Road, we offer premium rooms, excellent service, and easy access to Gosekhurd Dam, Pauni Fort & Karhandla Wildlife Sanctuary.',
  canonical: 'https://www.hotelsunshinepauni.com',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.hotelsunshinepauni.com',
    siteName: 'Hotel Sunshine Pauni',
    title: 'Hotel Sunshine Pauni | Best Hotels in Pauni Maharashtra',
    description: 'Experience luxury accommodation at Hotel Sunshine Pauni. Located on Khapri Road, we offer premium rooms, excellent service, and easy access to Gosekhurd Dam, Pauni Fort & Karhandla Wildlife Sanctuary.',
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
    handle: '@hotelsunshinepauni',
    site: '@hotelsunshinepauni',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Hotel Sunshine Pauni, hotels in pauni, pauni hotels, accommodation pauni, sunshine hotel pauni, pauni maharashtra hotels, gosekhurd dam hotels, pauni fort accommodation, karhandla wildlife sanctuary hotels',
    },
    {
      name: 'author',
      content: 'Hotel Sunshine Pauni',
    },
    {
      name: 'robots',
      content: 'index,follow',
    },
    {
      name: 'googlebot',
      content: 'index,follow',
    },
    {
      name: 'geo.region',
      content: 'IN-MH',
    },
    {
      name: 'geo.placename',
      content: 'Pauni, Maharashtra, India',
    },
    {
      name: 'geo.position',
      content: '20.79402;79.629993',
    },
    {
      name: 'ICBM',
      content: '20.79402, 79.629993',
    },
    {
      name: 'facebook',
      content: 'https://www.facebook.com/p/Hotel-SunshinePauni-Dist-Bhandara-100063960733454/',
    },
    {
      name: 'instagram',
      content: 'https://www.instagram.com/hotel_sunshine_pauni/',
    },

  ],
};

// Page-specific SEO configurations
export const PAGES_SEO = {
  home: {
    title: 'Hotel Sunshine Pauni | Best Hotels in Pauni Maharashtra',
    description: 'Experience luxury accommodation at Hotel Sunshine Pauni. Located on Khapri Road, we offer premium rooms, excellent service, and easy access to Gosekhurd Dam, Pauni Fort & Karhandla Wildlife Sanctuary.',
    canonical: 'https://www.hotelsunshinepauni.com',
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'Hotel Sunshine Pauni, sunshine hotel pauni, sun shine hotel pauni, pauni hotel sunshine, best hotels pauni, hotels in pauni maharashtra, pauni accommodation',
      },
    ],
  },
  rooms: {
    title: 'Hotel Rooms & Suites in Pauni | Hotel Sunshine Pauni',
    description: 'Comfortable and luxurious hotel rooms in Pauni. Choose from our range of well-appointed rooms and suites at Hotel Sunshine Pauni. Book your stay today!',
    canonical: 'https://www.hotelsunshinepauni.com/rooms',
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'hotel rooms pauni, accommodation pauni, pauni hotel rooms, sunshine hotel rooms, rooms in pauni, suites pauni',
      },
    ],
  },
  gosekhurd: {
    title: 'Hotels Near Gosekhurd Dam | Hotel Sunshine Pauni',
    description: 'Stay at Hotel Sunshine Pauni, conveniently located near Gosekhurd Dam. Perfect base for exploring the beautiful dam and surrounding attractions.',
    canonical: 'https://www.hotelsunshinepauni.com/locations/gosekhurd-dam',
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'gosekhurd dam hotels, hotels near gosekhurd dam, pauni gosekhurd accommodation, gosekhurd dam stay',
      },
    ],
  },
  pauniFort: {
    title: 'Hotels Near Pauni Fort | Hotel Sunshine Pauni',
    description: 'Experience heritage tourism with accommodation near Pauni Fort. Hotel Sunshine Pauni offers comfortable stay for fort visitors and history enthusiasts.',
    canonical: 'https://www.hotelsunshinepauni.com/locations/pauni-fort',
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'pauni fort accommodation, hotels near pauni fort, pauni fort hotels, heritage hotels pauni',
      },
    ],
  },
  karhandla: {
    title: 'Hotels Near Karhandla Wildlife Sanctuary | Hotel Sunshine Pauni',
    description: 'Perfect accommodation for wildlife enthusiasts visiting Karhandla Wildlife Sanctuary. Stay at Hotel Sunshine Pauni for comfortable jungle safari experience.',
    canonical: 'https://www.hotelsunshinepauni.com/locations/karhandla-wildlife',
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'karhandla wildlife sanctuary hotels, wildlife sanctuary accommodation pauni, jungle safari hotels pauni',
      },
    ],
  },
  umredRoute: {
    title: 'Hotels on Umred Pauni Route | Hotel Sunshine Pauni',
    description: 'Convenient stopover on Umred-Pauni route. Hotel Sunshine Pauni offers comfortable accommodation for travelers on NH353.',
    canonical: 'https://www.hotelsunshinepauni.com/locations/umred-pauni-route',
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'umred pauni route hotels, hotels on nh353, pauni highway hotels, umred to pauni accommodation',
      },
    ],
  },
};

// Structured Data for Local Business
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Hotel Sunshine Pauni",
  "description": "Best hotel in Pauni, Maharashtra offering comfortable accommodation and excellent service",
  "url": "https://www.hotelsunshinepauni.com",
  "telephone": "+91-XXXXXXXXXX", // Add your phone number
  "email": "info@hotelsunshinepauni.com", // Add your email
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Khapri Road",
    "addressLocality": "Pauni",
    "addressRegion": "Maharashtra",
    "postalCode": "441910",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.79402,
    "longitude": 79.629993
  },
  "image": "https://www.hotelsunshinepauni.com/images/hotel-exterior.jpg",
  "priceRange": "₹₹",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free WiFi"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Parking"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Restaurant"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "24/7 Reception"
    }
  ],
  "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.539942509845!2d79.629993!3d20.79402",
  "sameAs": [
    "https://www.facebook.com/p/Hotel-SunshinePauni-Dist-Bhandara-100063960733454/",
    "https://www.instagram.com/hotel_sunshine_pauni/"
  ]

};