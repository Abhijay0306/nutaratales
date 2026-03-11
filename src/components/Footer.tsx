import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-background py-12 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-serif text-xl font-bold mb-4 text-light">Mutual Retails</h3>
          <p className="text-background/80 max-w-xs leading-relaxed">
            Your trusted source for sustainable living, eco-friendly cooking, and zero-waste habits.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-light">Quick Links</h4>
          <ul className="space-y-2 flex flex-col text-background/80">
            <li><Link href="/about" className="hover:text-background transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-background transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-background transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-light">Legal</h4>
          <ul className="space-y-2 flex flex-col text-background/80">
            <li><Link href="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</Link></li>
            {/* Affiliate Disclosure is mostly in article pages, but good to have a dedicated link if required, currently point to privacy-policy */}
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-light/20 flex flex-col md:flex-row justify-between items-center text-xs text-background/60">
        <p>&copy; {currentYear} Mutual Retails. All rights reserved.</p>
        <p className="mt-2 md:mt-0 text-center md:text-right max-w-md">
          Disclosure: As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </div>
    </footer>
  );
}
