// components/SEO/breadcrumb.config.js

const BREADCRUMB_CONFIG = {
  home: [
    { name: "Home", href: "/" }
  ],

  rooms: [
    { name: "Home", href: "/" },
    { name: "Rooms & Suites", href: undefined }
  ],

  roomDetail: (roomName) => [
    { name: "Home", href: "/" },
    { name: "Rooms & Suites", href: "/rooms" },
    { name: roomName, href: undefined }
  ],

  pauniTourism: [
    { name: "Home", href: "/" },
    { name: "Pauni Tourism", href: undefined }
  ],

  attractionDetail: (title) => [
    { name: "Home", href: "/" },
    { name: "Pauni Tourism", href: "/pauni-attractions" },
    { name: title, href: undefined }
  ]
};

// 🔧 Helper Function
export const getBreadcrumbs = (pageKey, ...params) => {
  const config = BREADCRUMB_CONFIG[pageKey];
  return typeof config === "function" ? config(...params) : config || [];
};

// 📍 Place Slug Mapping (Optional but Useful)
export const PLACE_LABELS = {
  "pauni-fort": "Pauni Fort",
  "waijeshwar-ghat": "Waijeshwar Ghat",
  "waijeshwar-temple": "Waijeshwar Temple",
  "sindhpuri-buddha-temple": "Sindhpuri Buddha Temple",
  "umred-pauni-karhandla-wildlife-sanctuary": "Umred–Pauni–Karhandla Wildlife Sanctuary"
};
