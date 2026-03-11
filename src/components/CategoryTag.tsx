import Link from 'next/link';

type CategoryTagProps = {
  category: string;
  clickable?: boolean;
};

export default function CategoryTag({ category, clickable = false }: CategoryTagProps) {
  const content = (
    <span className="inline-block px-3 py-1 bg-light/40 text-dark text-xs font-semibold rounded-full border border-primary/20 hover:bg-light transition-colors">
      {category}
    </span>
  );

  if (clickable) {
    const slug = category.toLowerCase().replace(/\s+/g, '-');
    return (
      <Link href={`/blog?category=${slug}`} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
