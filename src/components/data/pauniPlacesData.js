// Data objects for Pauni Tourism Places - Ready for dynamic page rendering
import { MapPin, Star, Waves, Coffee } from 'lucide-react';

const pauniPlacesData = [
  {
    name: "Pauni Fort",
    slug: 'pauni-fort',
    tagline: "Where History Echoes Through Time",
    location: "Pauni, Bhandara District, Maharashtra",
    description: "Experience the grandeur of ancient Maratha architecture surrounded by natural water barriers and pristine landscapes",
    heroImage: "/pauni_tourism/Pauni_Fort-_Pauni_(Bhandara_District)-_Maharashtra-01.webp",
    detailedDescription: [
      "Pauni Fort stands as a testament to Maharashtra&rsquo;s rich historical heritage, surrounded by an ingenious system of natural water barriers that once defended this ancient stronghold.",
      "The fort&rsquo;s strategic location near the Wainganga River showcases the brilliant military engineering of the Maratha era, with remnants of water channels that served as the first line of defense against invaders.",
      "What makes this fort truly remarkable is its integration with nature - small lakes dot the landscape around the fort walls, creating a scenic panorama that blends historical significance with natural beauty.",
      "Today, visitors can explore the fort ruins while enjoying the serene environment, making it a perfect destination for history enthusiasts and nature lovers alike."
    ],
    experienceImage: "/pauni_tourism/Pauni_Fort-_Pauni_(Bhandara_District)-_Maharashtra-_02.webp",
    stats: [
      { number: "4.5★", label: "Average Visitor Rating" },
      { number: "1K+", label: "Monthly Visitors" },
      { number: "100+", label: "Photos Tagged on Social Media" },
      { number: "365", label: "Days Open per Year" }
    ]
    ,
    accommodations: [
      {
        id: 1,
        name: "Deluxe Room",
        price: "₹1,499",
        rating: 4,
        image: "/sunshine_hotel_pauni_room1.jpeg",
        description: "Stay in comfort with our Executive Rooms at Sunshine Hotel Pauni, ideal for business and leisure travelers.",
        amenities: [
          "Near Tourist Attractions",
          "Peaceful Environment",
          "Parking Available",
          "Local Food Nearby"
        ]
      },
      {
        id: 2,
        name: "Non Deluxe Room",
        price: "₹999",
        rating: 4,
        image: "/sunshine_hotel_pauni_room2.jpeg",
        description: "Our well-appointed rooms offer a balance of comfort, simplicity, and accessibility.",
        amenities: [
          "Near Tourist Attractions",
          "Peaceful Environment",
          "Parking Available",
          "Local Food Nearby"
        ]
      }
    ],
    colors: {
      primary: '#0f1b2b',
      accent: '#c6a662'
    },
    features: [
      {
        icon: "MapPin",
        title: "Strategic Location",
        description: "Built near Wainganga River with natural water defenses"
      },
      {
        icon: "Star",
        title: "Historical Significance",
        description: "Ancient Maratha-era fortification with unique architecture"
      },
      {
        icon: "Waves",
        title: "Natural Beauty",
        description: "Surrounded by pristine lakes and scenic landscapes"
      }
    ],
    coordinates: "20.7939° N, 79.6368° E",
    bestTimeToVisit: "October to March",
    entryFee: "Free",
    timings: "Sunrise to Sunset"
  },

  {
    name: "Waijeshwar Temple",
    slug: 'waijeshwar-temple',
    tagline: "Sacred Serenity by the Holy Ghats",
    location: "Pauni, Bhandara District, Maharashtra",
    description: "Immerse yourself in divine tranquility at this ancient Shiva temple, blessed by the sacred waters of Wainganga River",
    heroImage: "/pauni_tourism/Waijeshwar_Temple_Pauni_(Bhandara_District)-_Maharashtra-01.webp",
    detailedDescription: [
      "Waijeshwar Temple stands as one of Maharashtra&rsquo;s most revered spiritual destinations, where devotees from across the region come to seek Lord Shiva&rsquo;s blessings in a setting of unparalleled natural beauty.",
      "Built in the magnificent Nagara style of architecture during the 12th century by the Yadava dynasty, this temple showcases intricate stone carvings and sculptures that speak of India&rsquo;s rich artistic heritage.",
      "The temple&rsquo;s location by the sacred ghats of the Wainganga River creates a mystical atmosphere, where the sound of flowing water mingles with ancient prayers and temple bells.",
      "What makes this temple truly special is its spiritual ambiance - surrounded by serene ghats, ancient trees, and the gentle flow of the holy river, offering visitors a complete spiritual retreat from the modern world."
    ],
    experienceImage: "/pauni_tourism/Waijeshwar_Temple_Pauni_(Bhandara_District)-_Maharashtra-0.webp",
    stats: [
      { number: "800+", label: "Years of Continuous Worship" },
      { number: "12th", label: "Century Construction" },
      { number: "365", label: "Days of Devotion" },
      { number: "1000+", label: "Daily Devotees" }
    ],
    accommodations: [
      {
        id: 1,
        name: "Deluxe Room",
        price: "₹1,499",
        rating: 4,
        image: "/sunshine_hotel_pauni_room1.jpeg",
        description: "Stay in comfort with our Executive Rooms at Sunshine Hotel Pauni, ideal for business and leisure travelers.",
        amenities: [
          "Near Tourist Attractions",
          "Peaceful Environment",
          "Parking Available",
          "Local Food Nearby"
        ]
      },
      {
        id: 2,
        name: "Non Deluxe Room",
        price: "₹999",
        rating: 4,
        image: "/sunshine_hotel_pauni_room2.jpeg",
        description: "Our well-appointed rooms offer a balance of comfort, simplicity, and accessibility.",
        amenities: [
          "Near Tourist Attractions",
          "Peaceful Environment",
          "Parking Available",
          "Local Food Nearby"
        ]
      }
    ],
    colors: {
      primary: '#0f1b2b',
      accent: '#c6a662'
    },
    features: [
      {
        icon: "Star",
        title: "Ancient Architecture",
        description: "12th-century Nagara style temple with intricate carvings"
      },
      {
        icon: "Waves",
        title: "Sacred Ghats",
        description: "Blessed by the holy waters of Wainganga River"
      },
      {
        icon: "Coffee",
        title: "Spiritual Ambiance",
        description: "Perfect environment for meditation and prayers"
      }
    ],
    coordinates: "20.7939° N, 79.6368° E",
    bestTimeToVisit: "All year round, special during Mahashivratri",
    entryFee: "Free",
    timings: "5:00 AM - 9:00 PM",
    specialEvents: "Mahashivratri Festival, Monday Special Prayers"
  },

  {
    name: "Sindhpuri Buddha Temple",
    slug: 'sindhpuri-buddha-temple',
    tagline: "Gateway to Enlightenment",
    location: "Sindhpuri Village, Near Pauni, Maharashtra",
    description: "Discover inner peace at this tranquil Buddhist temple, where ancient wisdom meets serene natural surroundings",
    heroImage: "/pauni_tourism/Sindpuri_Temple_Pauni_Maharashtra.webp",
    detailedDescription: [
      "Sindhpuri Buddha Temple represents the profound Buddhist heritage of the Pauni region, serving as a beacon of peace and enlightenment in the heart of Maharashtra.",
      "This sacred site holds special significance as Pauni was historically a major center of Hinayana Buddhism, from where Buddhist teachings and art spread throughout ancient Maharashtra and beyond to Andhra Pradesh.",
      "The temple&rsquo;s serene architecture and peaceful surroundings create an ideal environment for meditation, reflection, and understanding the timeless teachings of Lord Buddha.",
      "Visitors find themselves transported to a realm of tranquility, where the ancient wisdom of Buddhism comes alive through the temple&rsquo;s sacred atmosphere and the gentle guidance of resident monks."
    ],
    experienceImage: "/pauni_tourism/Sindpuri_Temple_Pauni_Maharashtra01.webp",
    stats: [
      { number: "2000+", label: "Years of Buddhism in Region" },
      { number: "1987", label: "Mahasamadhi Bhoomi Established" },
      { number: "365", label: "Days of Peace" },
      { number: "100+", label: "Meditation Sessions Monthly" }
    ],
    accommodations: [
      {
        id: 1,
        name: "Deluxe Room",
        price: "₹1,499",
        rating: 4,
        image: "/sunshine_hotel_pauni_room1.jpeg",
        description: "Stay in comfort with our Executive Rooms at Sunshine Hotel Pauni, ideal for business and leisure travelers.",
        amenities: [
          "Near Tourist Attractions",
          "Peaceful Environment",
          "Parking Available",
          "Local Food Nearby"
        ]
      },
      {
        id: 2,
        name: "Non Deluxe Room",
        price: "₹999",
        rating: 4,
        image: "/sunshine_hotel_pauni_room2.jpeg",
        description: "Our well-appointed rooms offer a balance of comfort, simplicity, and accessibility.",
        amenities: [
          "Near Tourist Attractions",
          "Peaceful Environment",
          "Parking Available",
          "Local Food Nearby"
        ]
      }
    ],
    colors: {
      primary: '#8B008B',
      accent: '#FF69B4'
    },
    features: [
      {
        icon: "Star",
        title: "Buddhist Heritage",
        description: "Ancient center of Hinayana Buddhism in Maharashtra"
      },
      {
        icon: "Coffee",
        title: "Meditation Haven",
        description: "Perfect environment for inner peace and reflection"
      },
      {
        icon: "MapPin",
        title: "Historical Importance",
        description: "Key site in the spread of Buddhism across India"
      }
    ],
    coordinates: "20.7939° N, 79.6368° E",
    bestTimeToVisit: "October to March, Buddha Purnima",
    entryFee: "Free",
    timings: "6:00 AM - 8:00 PM",
    specialEvents: "Buddha Purnima, Meditation Workshops, Dharma Sessions"
  },

  {
    name: "Waijeshwar Ghat",
    slug: "waijeshwar-ghat",
    tagline: "Where Traditions Meet the Sacred Waters",
    location: "Waijeshwar, Pauni, Bhandara District, Maharashtra",
    description: "A revered cremation ghat on the banks of the Wainganga River, where both Hindu and Buddhist rituals are carried out amidst spiritual serenity.",
    heroImage: "/pauni_tourism/Waijeshwar_Temple_Pauni_ghat01.webp", // update with actual image path
    detailedDescription: [
      "Waijeshwar Ghat is a sacred site located along the banks of the Wainganga River, just beside the historic Waijeshwar Temple. It has served for centuries as a spiritual and cremation ground for both Hindus and Buddhists.",
      "Locals believe that immersion or cremation rituals performed here help souls attain moksha (liberation), making it a deeply spiritual destination for families and spiritual seekers alike.",
      "The ghat is frequently visited during religious ceremonies and full moon nights, with sounds of chants, bells, and flowing river water creating an aura of peace and transcendence.",
      "Despite being a place of last rites, the atmosphere is not of sorrow but of respect and spiritual calm. Its riverside steps and banyan-shaded corners also attract those looking for quiet meditation or contemplation."
    ],
    experienceImage: "/pauni_tourism/Pauni_Ghat_Waijeshwar_Temple_(Bhandara_District)-_Maharashtra-02.webp", // sample peaceful riverbank
    stats: [
      { number: "1000+", label: "Annual Rituals Performed" },
      { number: "2", label: "Major Religions Served (Hindu & Buddhist)" },
      { number: "24/7", label: "Open for Rituals" },
      { number: "365", label: "Days Active" }
    ],
    accommodations: [
      {
        id: 1,
        name: "Deluxe Room",
        price: "₹1,499",
        rating: 4,
        image: "/sunshine_hotel_pauni_room1.jpeg",
        description: "Stay in comfort with our Executive Rooms at Sunshine Hotel Pauni, ideal for business and leisure travelers.",
        amenities: [
          "Near Tourist Attractions",
          "Peaceful Environment",
          "Parking Available",
          "Local Food Nearby"
        ]
      },
      {
        id: 2,
        name: "Non Deluxe Room",
        price: "₹999",
        rating: 4,
        image: "/sunshine_hotel_pauni_room2.jpeg",
        description: "Our well-appointed rooms offer a balance of comfort, simplicity, and accessibility.",
        amenities: [
          "Near Tourist Attractions",
          "Peaceful Environment",
          "Parking Available",
          "Local Food Nearby"
        ]
      }
    ],
    colors: {
      primary: '#4A5568',
      accent: '#A0AEC0'
    },
    features: [
      {
        icon: "Waves",
        title: "Sacred Riverfront",
        description: "Located on the holy Wainganga River, ideal for spiritual rituals"
      },
      {
        icon: "Star",
        title: "Cultural Significance",
        description: "Used by both Hindu and Buddhist communities for cremation rites"
      },
      {
        icon: "MapPin",
        title: "Peaceful Location",
        description: "Shaded by trees and frequented by spiritual seekers"
      }
    ],
    coordinates: "20.7939° N, 79.6368° E",
    bestTimeToVisit: "Early Morning or Dusk, Special on Amavasya & Purnima",
    entryFee: "Free",
    timings: "Open 24 Hours",
    specialEvents: "Full Moon Poojas, Amavasya Shraddha, Moksha Rituals"
  }
  ,

  {
    name: "Umred–Pauni–Karhandla Wildlife Sanctuary",
    slug: "umred-pauni-karhandla-wildlife-sanctuary",
    tagline: "A Tiger Safari Haven Near Nagpur",
    location: "Nagpur District & Bhandara District, Maharashtra",
    description: "A premier wildlife sanctuary offering tiger safaris, sloth bears, leopards, migratory birds, and rich biodiversity.",
    heroImage: "/pauni_tourism/Umred_Karhandla_Wildlife_Sanctuary_(Bhandara_District)-_Maharashtra-01.webp",
    detailedDescription: [
      "Located about 58 km southwest of Nagpur and 60 km from Bhandara, the sanctuary spans parts of Nagpur and Bhandara districts.",
      "The sanctuary is known for its thriving tiger population, as well as leopards, sloth bears, wild dogs, and over 90 species of birds, including several migratory ones.",
      "Declared a wildlife sanctuary in 2013, it covers around 180 square kilometers and serves as an important corridor connecting the Tadoba-Andhari, Pench, and Nagzira tiger reserves.",
      "The serene environment, dense forest patches, and rich biodiversity make it an excellent location for eco-tourism, wildlife photography, and conservation awareness."
    ],
    experienceImage: "/pauni_tourism/Umred_Karhandla_Wildlife_Sanctuary_(Bhandara_District)-_Maharashtra-02.webp", // sample peaceful riverbank
    stats: [
      { number: "180 sq. km", label: "Total Area" },
      { number: "90+", label: "Bird Species Observed" },
      { number: "2013", label: "Declared as Sanctuary" },
      { number: "4", label: "Main Tourist Gates" }
    ],
    colors: {
      primary: "#2F4F4F",
      accent: "#A0AEC0"
    },
    features: [
      {
        icon: "Tiger",
        title: "Tiger Sightings",
        description: "Home to several Bengal tigers, often spotted near waterholes and safari trails."
      },
      {
        icon: "Forest",
        title: "Diverse Habitat",
        description: "Dense dry deciduous forests and open grasslands support a wide variety of flora and fauna."
      },
      {
        icon: "Bird",
        title: "Birdwatcher’s Paradise",
        description: "Ideal for spotting migratory birds, raptors, and wetland species."
      }
    ],
    coordinates: "20.7752° N, 79.3890° E",
    bestTimeToVisit: "October to March (Safari season)",
    entryFee: "Varies by gate and vehicle type",
    timings: "6:00 AM – 11:00 AM, 3:00 PM – 6:00 PM",
    specialEvents: "Wildlife Week Celebrations, Forest Awareness Drives",
    accommodations: [
      {
        id: 1,
        name: "Deluxe Room",
        price: "₹1,499",
        rating: 4,
        image: "/sunshine_hotel_pauni_room1.jpeg",
        description: "Stay in comfort with our Executive Rooms at Sunshine Hotel Pauni, ideal for business and leisure travelers.",
        amenities: [
          "Near Tourist Attractions",
          "Peaceful Environment",
          "Parking Available",
          "Local Food Nearby"
        ]
      },
      {
        id: 2,
        name: "Non Deluxe Room",
        price: "₹999",
        rating: 4,
        image: "/sunshine_hotel_pauni_room2.jpeg",
        description: "Our well-appointed rooms offer a balance of comfort, simplicity, and accessibility.",
        amenities: [
          "Near Tourist Attractions",
          "Peaceful Environment",
          "Parking Available",
          "Local Food Nearby"
        ]
      }
    ],
    access: {
      overview: "The sanctuary is accessible via multiple entry gates, and is well-connected to Nagpur, Umred, and Pauni by road.",
      gates: [
        {
          name: "Karhandla Gate",
          location: "Near Umred, ~55 km from Nagpur",
          note: "Most popular for safaris and sightings."
        },
        {
          name: "Gothangaon Gate",
          location: "About 65 km from Nagpur, 33 km from Umred",
          note: "Less crowded, serene entry point."
        },
        {
          name: "Pauni Gate",
          location: "Near Pauni, ~85 km from Nagpur",
          note: "Convenient for travelers from Bhandara side."
        },
        {
          name: "Pullar Gate",
          location: "About 35 km from Umred",
          note: "Ideal for local visitors and short excursions."
        }
      ]
    }
  },


  {
    name: "Gosekhurd Dam",
    slug: "gosekhurd-dam",
    tagline: "A Majestic Dam on the Wainganga River",
    location: "Pauni, Bhandara District, Maharashtra",
    description: "One of Maharashtra&rsquo;s largest irrigation projects, offering scenic views, serene backwaters, and peaceful surroundings near Pauni.",
    heroImage: "/pauni_tourism/goseDurgh_Pauni_(Bhandara_District)-_Maharashtra-01.webp",
    detailedDescription: [
      "The Gosekhurd Dam is built on the Wainganga River and is a major irrigation and hydro project in the Vidarbha region.",
      "Located near Pauni, the dam creates a vast reservoir that supports agriculture in surrounding districts and offers tranquil scenic views.",
      "Visitors enjoy peaceful moments by the water, occasional boating, and bird watching, especially during early mornings and sunsets.",
      "While primarily functional for water management, the dam’s surroundings have become a local getaway spot for nature lovers."
    ],
    experienceImage: "/pauni_tourism/goseDurgh_Pauni_(Bhandara_District)-_Maharashtra-02.webp", // sample peaceful riverbank

    stats: [
      { number: "11,238 m", label: "Dam Length" },
      { number: "353 MCM", label: "Reservoir Capacity" },
      { number: "1982", label: "Construction Started" },
      { number: "2008", label: "Operational Since" }
    ],
    colors: {
      primary: "#005f73",
      accent: "#94d2bd"
    },
    features: [
      {
        icon: "Water",
        title: "Massive Reservoir",
        description: "Creates a large water body beneficial for irrigation, fishing, and environment."
      },
      {
        icon: "Sunset",
        title: "Sunset Views",
        description: "Known for breathtaking views during sunset over the backwaters."
      },
      {
        icon: "Bird",
        title: "Bird Spotting",
        description: "Occasional sightings of herons, egrets, and other water birds near the dam area."
      }
    ],
    coordinates: "20.7727° N, 79.5989° E",
    bestTimeToVisit: "October to February (pleasant climate, post-monsoon water levels)",
    entryFee: "Free",
    timings: "6:00 AM – 7:00 PM",
    specialEvents: "Occasional local festivals and fishing activities during post-monsoon season",
    accommodations: [
      {
        id: 1,
        name: "Deluxe Room",
        price: "₹1,499",
        rating: 4,
        image: "/sunshine_hotel_pauni_room1.jpeg",
        description: "Enjoy comfort and convenience near Gosekhurd Dam in our Deluxe Room.",
        amenities: [
          "Close to Gosekhurd Dam",
          "Scenic View Options",
          "Parking Available",
          "Local Food Nearby"
        ]
      },
      {
        id: 2,
        name: "Non Deluxe Room",
        price: "₹999",
        rating: 4,
        image: "/sunshine_hotel_pauni_room2.jpeg",
        description: "Simple and clean rooms perfect for short stays and nature visits.",
        amenities: [
          "Budget-Friendly",
          "Peaceful Environment",
          "Easy Access to Dam",
          "Parking Available"
        ]
      }
    ],
    access: {
      overview: "The dam is accessible by road from Pauni town, located about 5 km away. Local autos and cabs are available.",
      gates: [
        {
          name: "Main Access Point",
          location: "Via Pauni-Gosekhurd Road",
          note: "Well-paved and suitable for small vehicles and two-wheelers."
        }
      ]
    }
  }


];

// Export the data for use in your page router
export default pauniPlacesData;

// Usage example for your page component:
// import pauniPlacesData from './pauniPlacesData';
//
// export default function PlacePage({ params }) {
//   const placeData = pauniPlacesData[params.slug];
//
//   if (!placeData) {
//     return <div>Place not found</div>;
//   }
//
//   return <DynamicTourismPage placeData={placeData} />;
