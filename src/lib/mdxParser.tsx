import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import AffiliateBox from '@/components/AffiliateBox';
import Image from 'next/image';

const components = {
  AffiliateBox,
  img: (props: React.ComponentPropsWithoutRef<'img'>) => (
    <span className="block relative w-full h-[400px] my-8 rounded-xl overflow-hidden border border-light/50">
      <Image 
        src={props.src as string}
        alt={props.alt || 'Blog Image'} 
        fill
        className="object-cover"
      />
    </span>
  ),
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <h2 className="text-3xl font-serif text-dark mt-12 mb-6" {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <h3 className="text-2xl font-serif text-dark mt-8 mb-4" {...props} />,
  p: (props: React.ComponentPropsWithoutRef<'p'>) => <p className="text-text/90 leading-relaxed mb-6" {...props} />,
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => <ul className="list-disc pl-6 space-y-2 mb-6 text-text/90" {...props} />,
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => <ol className="list-decimal pl-6 space-y-2 mb-6 text-text/90" {...props} />,
  li: (props: React.ComponentPropsWithoutRef<'li'>) => <li className="pl-2" {...props} />,
  blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className="border-l-4 border-primary pl-6 italic text-text/80 my-8 bg-light/10 p-4 rounded-r-lg" {...props} />
  ),
};

export function MDXParser({ source }: { source: string }) {
  return (
    <MDXRemote 
      source={source} 
      components={components} 
    />
  );
}
