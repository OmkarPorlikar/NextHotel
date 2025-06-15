import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12">
      {/* JSON-LD Schema for SEO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left - Contact Info */}
        <address className="not-italic">
          <div className="mb-4">
            <Image
              src="/sunshine_logo.png"
              alt="Hotel Sunshine Pauni Logo"
              width={160}
              height={80}
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">Hotel Sunshine Pauni</h2>
          <p>
            Khapri Road, Pauni Tahsil<br />
            Dist. Bhandara, Maharashtra 441910
          </p>
          <div className="mt-4 flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400" />
            <a href="tel:+919364012399" className="hover:underline">+91-9021431127</a>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            <a href="mailto:info@hotelsunshinepauni.com" className="hover:underline">
              info@hotelsunshinepauni.com
            </a>
          </div>
        </address>

        {/* Center - Navigation Links */}
        <nav aria-label="Footer navigation">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/rooms" className="hover:underline">Rooms</a></li>
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
          </ul>
        </nav>

        {/* Right - Google Map */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Find Us</h2>
          <iframe
            title="Google Map - Hotel Sunshine Pauni"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.539942509845!2d79.629993!3d20.79402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b58bdaf69a94d%3A0xa3433fd1623ff144!2sHotel%20Sunshine%20Pauni!5e0!3m2!1sen!2sin!4v1717056000000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
        <p><a href="/terms" className="hover:underline">Terms & Conditions</a></p>
        <p className="mt-1">© 2025 Hotel Sunshine Pauni. All rights reserved.</p>
      </div>
    </footer>
  );
}
