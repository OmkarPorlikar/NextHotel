// components/SEO/breadcrumb.config.js

export const BREADCRUMB_CONFIG = {
  // Home page - no breadcrumbs needed
  home: [],
  
  // Rooms page
  rooms: [
    { name: 'Rooms & Suites', href: null }
  ],
  
  // Specific room page
  roomDetail: (roomName) => [
    { name: 'Rooms & Suites', href: '/rooms' },
    { name: roomName, href: null }
  ],
  
  // Locations
  locations: [
    { name: 'Locations', href: null }
  ],
  
  // Specific location pages
  gosekhurdDam: [
    { name: 'Locations', href: '/locations' },
    { name: 'Near Gosekhurd Dam', href: null }
  ],
  
  pauniFort: [
    { name: 'Locations', href: '/locations' },
    { name: 'Near Pauni Fort', href: null }
  ],
  
  karhandlaWildlife: [
    { name: 'Locations', href: '/locations' },
    { name: 'Near Karhandla Wildlife Sanctuary', href: null }
  ],
  
  umredRoute: [
    { name: 'Locations', href: '/locations' },
    { name: 'Umred-Pauni Route', href: null }
  ],
  
  // Facilities
  facilities: [
    { name: 'Facilities', href: null }
  ],
  
  // Contact
  contact: [
    { name: 'Contact Us', href: null }
  ],
  
  // About
  about: [
    { name: 'About Hotel Sunshine', href: null }
  ],
  
  // Gallery
  gallery: [
    { name: 'Photo Gallery', href: null }
  ],
  
  // Booking
  booking: [
    { name: 'Book Now', href: null }
  ],
  
  // Blog (if you add blog)
  blog: [
    { name: 'Blog', href: null }
  ],
  
  blogPost: (postTitle) => [
    { name: 'Blog', href: '/blog' },
    { name: postTitle, href: null }
  ],
  
  // Reviews
  reviews: [
    { name: 'Guest Reviews', href: null }
  ],
  
  // Special offers
  offers: [
    { name: 'Special Offers', href: null }
  ]
};

// Helper function to get breadcrumbs for a page
export const getBreadcrumbs = (pageKey, ...params) => {
  const config = BREADCRUMB_CONFIG[pageKey];
  
  if (typeof config === 'function') {
    return config(...params);
  }
  
  return config || [];
};