// components/SEO/SeoUtils.js

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// Generate FAQ schema
export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate review schema
export const generateReviewSchema = (reviews) => {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hotel Sunshine Pauni",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviews.averageRating,
      "reviewCount": reviews.totalReviews
    },
    "review": reviews.reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.authorName
      },
      "datePublished": review.date,
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating
      }
    }))
  };
};

// Common keywords for different pages
export const KEYWORD_SETS = {
  location: [
    'hotels in pauni',
    'pauni accommodation',
    'pauni maharashtra hotels',
    'hotel sunshine pauni',
    'sunshine hotel pauni'
  ],
  rooms: [
    'hotel rooms pauni',
    'accommodation pauni',
    'pauni hotel booking',
    'rooms in pauni'
  ],
  tourism: [
    'pauni tourism',
    'gosekhurd dam',
    'pauni fort',
    'karhandla wildlife sanctuary',
    'umred pauni route'
  ]
};

// Generate dynamic meta description
export const generateMetaDescription = (location, amenities = []) => {
  const base = `Stay at Hotel Sunshine Pauni${location ? ` near ${location}` : ''}. `;
  const amenityText = amenities.length > 0 ? `Enjoy ${amenities.join(', ')} and ` : '';
  const ending = 'excellent service in the heart of Pauni, Maharashtra.';
  
  return base + amenityText + ending;
};