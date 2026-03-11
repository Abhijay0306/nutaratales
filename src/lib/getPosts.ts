import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'blog');

export type PostMetadata = {
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  slug: string;
};

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    metadata: data as Omit<PostMetadata, 'slug'>,
    content,
  };
}

export function getAllPosts(): PostMetadata[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  
  const slugs = fs.readdirSync(contentDirectory);
  const posts = slugs
    .filter((slug) => slug.endsWith('.mdx'))
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      return {
        ...post.metadata,
        slug: post.slug,
      };
    })
    .filter((post): post is PostMetadata => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
