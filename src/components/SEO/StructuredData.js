// components/StructuredData.js
export function HotelSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hotel Sunshine Pauni",
    "description": "Premier hotel in Pauni, Maharashtra, near Gosekhurd Dam and Pauni Fort",
    "url": "https://sunshinehotelpauni.com",
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@sunshinehotelpauni.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Pauni",
      "addressRegion": "Maharashtra",
      "postalCode": "441910",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.7883",
      "longitude": "79.6347"
    },
    "priceRange": "₹₹",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4"
    },
    "amenityFeature": [
      {"@type": "LocationFeatureSpecification", "name": "Free WiFi"},
      {"@type": "LocationFeatureSpecification", "name": "Restaurant"},
      {"@type": "LocationFeatureSpecification", "name": "Parking"},
      {"@type": "LocationFeatureSpecification", "name": "Air Conditioning"}
    ],
    "nearbyAttraction": [
      {
        "@type": "TouristAttraction",
        "name": "Gosekhurd Dam",
        "description": "Famous dam and tourist attraction near Pauni"
      },
      {
        "@type": "TouristAttraction", 
        "name": "Pauni Fort",
        "description": "Historic fort and heritage site"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}