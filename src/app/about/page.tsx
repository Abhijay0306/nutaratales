import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Nutura Tales, our sustainability mission, and content philosophy.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-8">About Nutura Tales</h1>
      
      <div className="prose prose-lg prose-green max-w-none text-text">
        <p className="lead text-xl text-text/80 mb-8 border-l-4 border-primary pl-6">
          Nutura Tales is dedicated to making sustainable living accessible, practical, and beautiful.
        </p>

        <h2 className="font-serif text-2xl text-dark mt-12 mb-4">Our Sustainability Mission</h2>
        <p>
          We believe that every small choice matters. From the way we prepare our food to the products we bring into our homes, our daily habits have a profound impact on the planet. Our mission is to empower individuals to make eco-friendly choices without sacrificing convenience or quality of life.
        </p>
        <p>
          Whether it&apos;s exploring low-energy cooking methods, adopting zero-waste kitchen habits, or finding the most reliable and sustainable products, we are here to guide you on your journey toward a greener lifestyle.
        </p>

        <h2 className="font-serif text-2xl text-dark mt-12 mb-4">Our Content Philosophy</h2>
        <p>
          Our content is built on three core pillars:
        </p>
        <ul className="space-y-2 mt-4">
          <li><strong>Practicality:</strong> We focus on actionable advice that you can implement in your daily life right away.</li>
          <li><strong>Authenticity:</strong> We thoroughly research our topics and only recommend products or practices we genuinely believe in.</li>
          <li><strong>Aesthetics:</strong> Sustainable living should be beautiful. We take pride in presenting our content in a clean, inspiring, and engaging format.</li>
        </ul>

        <h2 className="font-serif text-2xl text-dark mt-12 mb-4">The Nutura Tales Brand Story</h2>
        <p>
          Nutura Tales began with a simple question: <em>&quot;How can we minimize our footprint while maximizing our culinary and lifestyle experiences?&quot;</em>
        </p>
        <p>
          What started as a personal challenge to cook without fire and reduce kitchen waste quickly grew into a passion for exploring all facets of eco-friendly living. Today, Nutura Tales serves as a hub for a growing community of readers who share our commitment to a sustainable future.
        </p>
      </div>
    </div>
  );
}
