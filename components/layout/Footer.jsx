// components/layout/Footer.jsx

"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Pauni Riverside Resort</h3>
            <p className="text-gray-400">
              A serene riverside stay in the spiritual town of Pauni. Enjoy peaceful rooms, local cuisine, and scenic views near the Pauni and Gose Dams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                ['Home', '/'],
                ['Rooms & Suites', '/rooms-suites'],
                ['Dining', '/dining'],
                ['Gallery', '/gallery'],
                ['Contact Us', '/contact']
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400 text-sm">
              <p>Riverside Road, Near Pauni Dam</p>
              <p>Pauni, Maharashtra – 441901</p>
              <p>Phone: <span className="text-white">+91 1234567890</span></p>
              <p>Email: <span className="text-white">info@pauniresort.com</span></p>
            </address>
            <div className="mt-4">
              <a href="#" className="inline-block bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition-colors">
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 text-sm text-gray-500 text-center">
          <p>© {new Date().getFullYear()} Pauni Riverside Resort. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white">Terms</Link>
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
