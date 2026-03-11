import { getAllPosts, getPostBySlug } from '@/lib/getPosts';
import { MDXParser } from '@/lib/mdxParser';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { Metadata } from 'next';
import CategoryTag from '@/components/CategoryTag';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.metadata.title,
    description: post.metadata.excerpt,
    authors: [{ name: post.metadata.author }],
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.excerpt,
      type: 'article',
      publishedTime: post.metadata.date,
      authors: [post.metadata.author],
      images: [
        {
          url: post.metadata.image,
          width: 1200,
          height: 630,
          alt: post.metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata.title,
      description: post.metadata.excerpt,
      images: [post.metadata.image],
    },
  };
}

function safeParse(date: string | Date): Date {
  return typeof date === 'string' ? parseISO(date) : new Date(date);
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Calculate reading time (approx 200 words per minute)
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Determine related posts
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.category === post.metadata.category && p.slug !== post.slug)
    .slice(0, 3);

  const formattedDate = format(safeParse(post.metadata.date), 'MMMM d, yyyy');

  return (
    <article className="pb-24">
      {/* Header */}
      <header className="container mx-auto px-4 pt-16 pb-8 max-w-4xl text-center">
        <div className="mb-6">
          <CategoryTag category={post.metadata.category} clickable />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-6 leading-tight">
          {post.metadata.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-sm text-text/70 mb-8 font-medium">
          <span>{post.metadata.author}</span>
          <span className="w-1 h-1 rounded-full bg-light/50"></span>
          <time dateTime={post.metadata.date}>{formattedDate}</time>
          <span className="w-1 h-1 rounded-full bg-light/50"></span>
          <span>{readingTime} min read</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container mx-auto px-4 max-w-5xl mb-16">
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src={post.metadata.image}
            alt={post.metadata.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Body */}
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="prose prose-lg prose-green max-w-none mb-16">
          <MDXParser source={post.content} />
        </div>

        {/* Affiliate Disclosure Box */}
        <div className="bg-light/10 border border-light/30 rounded-lg p-6 text-sm text-text/80 mb-12">
          <strong className="font-semibold text-dark block mb-2">Affiliate Disclosure</strong>
          This article may contain affiliate links. If you purchase through these links, we may earn a small commission at no additional cost to you. We only recommend products we truly believe in.
        </div>

        {/* Share Buttons */}
        <div className="border-t border-b border-light/30 py-6 flex items-center justify-between mb-16">
          <span className="font-serif font-bold text-dark text-lg">Share this article</span>
          <div className="flex gap-3">
             <a 
               href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.metadata.title)}&url=${encodeURIComponent(`https://mutual-retails.vercel.app/blog/${post.slug}`)}`}
               target="_blank"
               rel="noopener noreferrer"
               className="px-4 py-2 bg-text text-background text-sm font-semibold rounded-md hover:bg-dark transition-colors"
             >
               Twitter
             </a>
             <a 
               href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://mutual-retails.vercel.app/blog/${post.slug}`)}`}
               target="_blank"
               rel="noopener noreferrer"
               className="px-4 py-2 bg-[#1877F2] text-white text-sm font-semibold rounded-md hover:bg-opacity-90 transition-colors"
             >
               Facebook
             </a>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-serif font-bold text-dark mb-6 border-b border-light/30 pb-4">
              More in {post.metadata.category}
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map(related => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group block border border-light/30 rounded-xl overflow-hidden hover:border-light transition-colors">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif font-bold text-lg text-dark group-hover:text-primary transition-colors line-clamp-2 mb-2">{related.title}</h4>
                    <span className="text-xs text-text/60">{format(safeParse(related.date), 'MMM d, yyyy')}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
