'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const showBg = !isHome || scrolled;
  const textColorClass = showBg
    ? 'text-black hover:text-gray-700'
    : 'text-white hover:text-gray-300';

  const linkUnderline = (route: string) =>
    pathname === route ? 'underline underline-offset-4' : '';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ease-in-out
          ${showBg ? 'bg-white/60 backdrop-blur-md shadow-md' : 'bg-transparent'}
        `}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className={`text-2xl font-semibold transition-colors duration-300 ${textColorClass}`}
          >
            Pradeep Electrodes
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-base font-medium transition-colors duration-300">
            <Link href="/" className={`${textColorClass} ${linkUnderline('/')}`}>Home</Link>
            <Link href="/services" className={`${textColorClass} ${linkUnderline('/services')}`}>Products</Link>
            <Link href="/about" className={`${textColorClass} ${linkUnderline('/about')}`}>About</Link>
            <Link href="/contact" className={`${textColorClass} ${linkUnderline('/contact')}`}>Contact</Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden focus:outline-none transition-colors duration-300 ${textColorClass}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/30 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col pt-20 px-6 space-y-6 text-black text-lg font-medium relative">
          {/* Close Button Inside Sidebar */}
          <button
            className="absolute top-4 right-4 text-black"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>

          <h3 className="font-bold text-2xl">Navigation</h3>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      {/* Translucent Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-opacity-30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
