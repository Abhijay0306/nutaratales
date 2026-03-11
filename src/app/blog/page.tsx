import { getAllPosts } from '@/lib/getPosts';
import BlogListing from '@/components/BlogListing';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest articles on sustainable living, zero-waste kitchen habits, and eco-friendly recommendations.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Extract unique categories
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">Our Journal</h1>
        <p className="text-lg text-text/80">
          Discover practical tips, in-depth guides, and honest recommendations to help you live a more sustainable and fulfilling life.
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-20 text-text/70">Loading articles...</div>}>
        <BlogListing initialPosts={posts} categories={categories} />
      </Suspense>
    </div>
  );
}
