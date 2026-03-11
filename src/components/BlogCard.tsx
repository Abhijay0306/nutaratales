import Link from 'next/link';
import Image from 'next/image';
import CategoryTag from './CategoryTag';
import { format, parseISO } from 'date-fns';

type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
};

export default function BlogCard({ slug, title, excerpt, date, image, category }: BlogCardProps) {
  const parsedDate = typeof date === 'string' ? parseISO(date) : new Date(date);
  const formattedDate = format(parsedDate, 'MMMM d, yyyy');

  return (
    <article className="group flex flex-col justify-start h-full border border-light/50 rounded-2xl overflow-hidden hover:shadow-lg hover:border-light transition-all duration-300 bg-white">
      <Link href={`/blog/${slug}`} className="block relative h-48 sm:h-64 w-full overflow-hidden">
        {/* We use a placeholder logic if the image isn't available, but standard is Next Image */}
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <CategoryTag category={category} />
          <time className="text-xs text-text/60 font-medium" dateTime={date}>
            {formattedDate}
          </time>
        </div>
        <Link href={`/blog/${slug}`} className="block group-hover:text-primary transition-colors">
          <h3 className="font-serif text-xl font-bold mb-3 line-clamp-2">{title}</h3>
        </Link>
        <p className="text-text/70 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
          {excerpt}
        </p>
        <Link 
          href={`/blog/${slug}`} 
          className="mt-auto inline-flex items-center text-sm font-bold text-primary hover:text-dark transition-colors"
        >
          Read Article &rarr;
        </Link>
      </div>
    </article>
  );
}
