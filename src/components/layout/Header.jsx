'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { whatsappNumber } from '../data/constant';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 300;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-black/30 shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center">
        {/* Logo with descriptive alt and priority */}
        <Link href="/" aria-label="Hotel Sunshine Pauni Home">
          <Image
            src="/sunshine_logo.png"
            alt="Hotel Sunshine Pauni Logo"
            width={50}
            height={50}
            priority
            className="h-18 w-20"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-6 text-white font-medium">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/rooms" className="hover:text-yellow-400">Rooms</Link>
          <Link href="/gallery" className="hover:text-yellow-400">Gallery</Link>
          <Link href="/pauni-tourism" className="hover:text-yellow-400">Places</Link>


          {/* Social Links */}
          <a
            href="https://www.instagram.com/hotel_sunshine_pauni/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:text-yellow-400"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/p/Hotel-SunshinePauni-Dist-Bhandara-100063960733454/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:text-yellow-400"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="ml-4 bg-[#d4b264] hover:bg-[#bfa24f] text-black font-semibold py-2 px-4 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </nav>


        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Mobile Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4 font-medium" aria-label="Mobile Navigation">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
          <Link href="/rooms" onClick={() => setMenuOpen(false)} className="block">Rooms</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)} className="block">Gallery</Link>
          <Link href="/pauni-tourism" onClick={() => setMenuOpen(false)} className="block">Places</Link>


          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.instagram.com/hotelsunshinepauni"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hover:text-yellow-400"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/hotelsunshinepauni"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hover:text-yellow-400"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-[#d4b264] hover:bg-[#bfa24f] text-black font-semibold py-2 px-4 rounded mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
