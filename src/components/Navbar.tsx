import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-light/30 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <Image 
            src="/logo.svg" 
            alt="Nutura Tales" 
            width={180} 
            height={48} 
            className="h-8 w-auto md:h-10"
            priority
          />
        </Link>
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
        {/* Mobile Nav would go here, simplified for now */}
        <div className="md:hidden">
          <button className="text-text hover:text-primary">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
