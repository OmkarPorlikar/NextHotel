'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-black/30 shadow-md' : 'backdrop-blur-md bg-black/30 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/sunshine_logo.png"
            alt="Hotel Sunshine Pauni Logo"
            width={50}
            height={50}
            className="h-18 w-20"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-white font-medium">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/rooms" className="hover:text-yellow-400">Rooms</Link>
          <Link href="/gallery" className="hover:text-yellow-400">Gallery</Link>
          <Link href="/faq" className="hover:text-yellow-400">FAQ</Link>
          <Link
            href="/book"
            className="ml-4 bg-[#d4b264] hover:bg-[#bfa24f] text-black font-semibold py-2 px-4 rounded"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4 font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
          <Link href="/rooms" onClick={() => setMenuOpen(false)} className="block">Rooms</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)} className="block">Gallery</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)} className="block">FAQ</Link>
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-[#d4b264] hover:bg-[#bfa24f] text-black font-semibold py-2 px-4 rounded"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
