'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const textColorClass = isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-gray-900';

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className={`text-2xl font-medium ${textColorClass}`}>
          Pradeep Electrodes
        </Link>
        
        <div className="space-x-8">
          <Link 
            href="/services" 
            className={`${textColorClass} ${pathname === '/services' ? 'underline' : ''}`}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className={`${textColorClass} ${pathname === '/about' ? 'underline' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`${textColorClass} ${pathname === '/contact' ? 'underline' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 