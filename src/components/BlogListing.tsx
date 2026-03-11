'use client';

import { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';
import BlogCard from './BlogCard';
import { PostMetadata } from '@/lib/getPosts';
import { Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

type BlogListingProps = {
  initialPosts: PostMetadata[];
  categories: string[];
};

const POSTS_PER_PAGE = 6;

export default function BlogListing({ initialPosts, categories }: BlogListingProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') 
    ? categories.find(c => c.toLowerCase().replace(/\s+/g, '-') === searchParams.get('category')) || 'All'
    : 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);

  // Set up Fuse.js
  const fuse = useMemo(() => new Fuse(initialPosts, {
    keys: ['title', 'category', 'excerpt'],
    threshold: 0.3,
  }), [initialPosts]);

  // Handle filtering
  const filteredPosts = useMemo(() => {
    let result = initialPosts;

    if (searchQuery.trim()) {
      result = fuse.search(searchQuery).map(item => item.item);
    }

    if (selectedCategory !== 'All') {
      result = result.filter(post => post.category === selectedCategory);
    }

    return result;
  }, [initialPosts, searchQuery, selectedCategory, fuse]);

  // Handle pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
              selectedCategory === 'All' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-transparent text-text border-light/50 hover:border-primary'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                selectedCategory === category 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-transparent text-text border-light/50 hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-light/50 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-light w-5 h-5 pointer-events-none" />
        </div>
      </div>

      {/* Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-light/30">
          <h3 className="text-xl font-serif text-dark mb-2">No articles found</h3>
          <p className="text-text/70">Try adjusting your search or category filters.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-light/50 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-light/20 transition-colors font-medium text-text bg-white"
          >
            Previous
          </button>
          <span className="text-sm font-medium text-text/70 mx-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-light/50 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-light/20 transition-colors font-medium text-text bg-white"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
