// // components/data/roomData.js

// export const rooms = [
//   {
//     name: 'Club Suite Rooms',
//     slug: 'club-suite-rooms',
//     image: '/sunshine_hotel_pauni_room1.jpeg',
//     size: '350 Sq Ft',
//     bed: 'King Size Bed',
//     sleeps: '2 Sleeps',
//     price: '₹3,450',
//     description: 'Spacious Club Suite with modern interiors, dam view, and premium amenities. Ideal for couples or business stays.',
//   },
//   {
//     name: 'Executive Rooms',
//     slug: 'executive-rooms',
//     image: '/sunshine_hotel_pauni_room2.jpeg',
//     size: '300 Sq Ft',
//     bed: 'King Size Bed',
//     sleeps: '2 Sleeps',
//     price: '₹2,645',
//     description: 'Comfortable Executive Room with elegant furnishing, suitable for both leisure and business travelers.',
//   },
//   {
//     name: 'Standard Rooms',
//     slug: 'standard-rooms',
//     image: '/sunshine_hotel_pauni_room3.jpeg',
//     size: '250 Sq Ft',
//     bed: 'Queen Size Bed',
//     sleeps: '2 Sleeps',
//     price: '₹1,725',
//     description: 'Budget-friendly Standard Room with essential amenities and a relaxing environment for a peaceful stay.',
//   },
// ];


// /data/roomData.js
const roomData = [
  {
    slug: 'deluxe-room',
    title: 'Deluxe Room',
    metaTitle: 'Club Suite Room | Sunshine Hotel Pauni',
    metaDescription: 'Book the luxurious Club Suite Room at Sunshine Hotel Pauni with top-notch amenities and comfort.',
    metaKeywords: 'Club Suite Room, Sunshine Hotel Pauni Rooms, Luxury Suite Pauni',
    image: '/sunshine_hotel_pauni_room1.jpeg',
    overview: 'Our Club Suite offers a blend of comfort and convenience for travelers, featuring a spacious layout and modern facilities.',
    facilities: [
      'Air Conditioner',
      'King Size Bed',
      'Sofa',
      'Tea',
      'BreakFast',
      'Attached Bathrooms',
      'Extra Bed Available (Chargeable)',
      'Free WiFi',
      'Smart TV',
    ],
    rules: [
      'Check-in: 1 PM | Check-out: 11 AM.',
      'Valid government ID required.',
      'Room tariff covers accommodation only.',
      'No pets allowed unless permitted by management.',
      'Hotel not responsible for vehicle safety.',
    ],
    details: {
      bed: 'King Size Bed',
      sleeps: '2 Sleeps',
      bathroom: '1 Bathroom',
      extraBed: 'Available (Additional Charge)',
      price: '₹1,499 INR',
    },
    otherRooms: [
      {
        title: 'Executive Rooms',
        bed: 'King Size Beds',
        sleeps: '2 Sleeps',
        price: '₹999/Night',
        image: '/sunshine_hotel_pauni_room2.jpeg',
        slug: 'executive',
      },
      {
        title: 'Standard Rooms',
        size: '250 Sq Ft',
        bed: 'Queen Size Beds',
        sleeps: '2 Sleeps',
        price: '₹1,725/Night',
        image: '/sunshine_hotel_pauni_room3.jpeg',
        slug: 'standard',
      },
    ],
  },
  {
    slug: 'non-deluxe-room',
    title: 'Non Deluxe Room',
    metaTitle: 'Executive Room | Sunshine Hotel Pauni',
    metaDescription: 'Stay in comfort with our Executive Rooms at Sunshine Hotel Pauni, ideal for business and leisure travelers.',
    metaKeywords: 'Executive Room, Business Hotel Room Pauni, Sunshine Hotel',
    image: '/sunshine_hotel_pauni_room2.jpeg',
    overview: 'Our Executive Rooms offer refined luxury with ample space, elegant interiors, and all essential amenities to make your stay comfortable.',
    facilities: [
      'BreakFast',
      'Air Conditioner',
      'King Size Bed',
      'Work Desk',
      'Coffee Maker',
      'Smart TV',
      'Attached Bathroom',
      'Free WiFi',
    ],
    rules: [
      'Check-in: 1 PM | Check-out: 11 AM.',
      'Government ID required at check-in.',
      'No outside food allowed.',
      'Pets not allowed.',
    ],
    details: {
      bed: 'King Size Bed',
      sleeps: '2 Sleeps',
      bathroom: '1 Bathroom',
      extraBed: 'Available on request',
      price: '₹999 INR',
    },
    otherRooms: [
      {
        title: 'Club Suite Room',
        size: '350 Sq Ft',
        bed: 'King Size Bed',
        sleeps: '2 Sleeps',
        price: '₹3,450/Night',
        image: '/sunshine_hotel_pauni_room1.jpeg',
        slug: 'club-suite',
      },
      {
        title: 'Standard Rooms',
        size: '250 Sq Ft',
        bed: 'Queen Size Beds',
        sleeps: '2 Sleeps',
        price: '₹1,725/Night',
        image: '/sunshine_hotel_pauni_room3.jpeg',
        slug: 'standard',
      },
    ],
  },
];

export default roomData;