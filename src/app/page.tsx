import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/getPosts';
import BlogCard from '@/components/BlogCard';
import Newsletter from '@/components/Newsletter';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 3);
  
  // A featured guide could just be a specific post or a hardcoded section. 
  // For this, we'll pick the first solar cooking post as the featured guide.
  const featuredGuide = posts.find(p => p.slug === 'beginner-guide-to-solar-cooking') || posts[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 border-b border-light/50 text-center px-4 flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Banner.png"
            alt="Nutara Tales Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Living lighter, <br className="hidden sm:block" />
            <span className="text-light italic drop-shadow-md">living better.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
            Your practical guide to sustainable living, zero-waste kitchen habits, and eco-friendly cooking methods that don&apos;t sacrifice flavor.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/blog" 
              className="bg-primary hover:bg-white hover:text-dark text-white font-medium px-8 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              Read Latest Articles
              <ArrowRight size={18} />
            </Link>
            <Link 
              href="/about" 
              className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-medium px-8 py-3.5 rounded-full transition-colors"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-dark mb-2">Latest from the Journal</h2>
            <p className="text-text/70">Fresh insights on sustainable living.</p>
          </div>
          <Link href="/blog" className="hidden sm:flex items-center gap-1 text-primary hover:text-dark font-medium transition-colors">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map(post => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
        
        <div className="mt-8 sm:hidden">
          <Link href="/blog" className="flex items-center justify-center w-full bg-light/20 border border-light/50 py-3 rounded-xl text-primary font-medium">
            View all articles
          </Link>
        </div>
      </section>

      {/* Featured Sustainability Guide */}
      {featuredGuide && (
        <section className="bg-dark text-background py-20 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-light/20">
                  <Image 
                    src={featuredGuide.image} 
                    alt={featuredGuide.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <span className="text-light uppercase tracking-widest text-sm font-bold mb-4 block">Featured Guide</span>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-white leading-tight">
                  {featuredGuide.title}
                </h2>
                <p className="text-background/80 text-lg mb-8 leading-relaxed max-w-lg">
                  {featuredGuide.excerpt}
                </p>
                <Link 
                  href={`/blog/${featuredGuide.slug}`} 
                  className="inline-flex items-center gap-2 bg-light hover:bg-white text-dark font-medium px-8 py-3.5 rounded-full transition-colors"
                >
                  Read the Guide
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Highlights */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-dark mb-10">Explore Topics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {['Sustainable Cooking', 'Zero Waste', 'Eco-friendly Products', 'Low Energy Living'].map((cat, i) => (
            <Link 
              key={i} 
              href={`/blog?category=${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className="group p-8 border border-light/40 rounded-2xl hover:border-primary hover:bg-light/10 transition-all flex flex-col items-center justify-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-light/30 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                <span className="font-serif italic text-lg">{i + 1}</span>
              </div>
              <h3 className="font-semibold text-dark text-sm sm:text-base">{cat}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <div className="container mx-auto px-4 pb-20">
        <Newsletter />
      </div>
    </div>
  );
}
