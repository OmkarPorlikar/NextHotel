'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 transition-all border-b ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo and Tagline */}
        <Link href="/" aria-label="Hotel Sunshine Pauni Home">
          {pathname === '/' ? (
            <h1 className="text-xl font-semibold text-amber-800 tracking-tight">
              Hotel Sunshine Pauni
            </h1>
          ) : (
            <span className="text-xl font-semibold text-amber-800 tracking-tight">
              Hotel Sunshine Pauni
            </span>
          )}
          <span className="block text-xs text-gray-500">
            Near Gosekhurd Dam · Pauni Fort · Wildlife Sanctuary
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 items-center text-sm font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`transition-colors hover:text-amber-600 ${
                pathname === item.path ? 'text-amber-700' : 'text-gray-700'
              }`}
              aria-label={`Visit ${item.name} page`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/booking"
            className="ml-4 inline-block bg-amber-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-amber-700 transition-colors"
            aria-label="Book a room at Hotel Sunshine Pauni"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <MobileMenu menuItems={menuItems} />
        </div>
      </div>
    </header>
  );
};

// Mobile Menu Component
const MobileMenu = ({ menuItems }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle mobile menu"
        className="text-gray-800 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col p-4 space-y-2 text-gray-700">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`block py-2 px-3 rounded hover:bg-amber-50 ${
                    pathname === item.path ? 'text-amber-600 font-semibold' : ''
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/booking"
                className="block text-white bg-amber-600 hover:bg-amber-700 rounded-full text-center py-2 px-4"
                onClick={() => setOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
