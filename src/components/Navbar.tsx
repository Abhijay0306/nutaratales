"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-light/30 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90" onClick={() => setIsMenuOpen(false)}>
          <Image 
            src="/logo.svg" 
            alt="Nutara Tales" 
            width={180} 
            height={48} 
            className="h-8 w-auto md:h-10"
            priority
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-text hover:text-primary focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-light/20 bg-background/95 backdrop-blur-lg absolute w-full left-0 shadow-lg">
          <nav className="flex flex-col py-4 px-4 space-y-4">
            <Link href="/" className="text-base font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/blog" className="text-base font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/about" className="text-base font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-base font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
