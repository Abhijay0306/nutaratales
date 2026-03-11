import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

type AffiliateBoxProps = {
  title: string;
  description: string;
  imageUrl: string;
  amazonUrl: string;
};

export default function AffiliateBox({ title, description, imageUrl, amazonUrl }: AffiliateBoxProps) {
  return (
    <div className="not-prose my-8 p-6 rounded-xl border-2 border-primary/20 bg-light/10 flex flex-col sm:flex-row gap-6 items-center sm:items-start transition-colors hover:border-primary/40">
      <div className="relative w-32 h-32 flex-shrink-0 bg-white rounded-lg p-2 border border-light/50 flex items-center justify-center">
        {imageUrl ? (
           <Image 
             src={imageUrl} 
             alt={title} 
             width={112}
             height={112}
             className="object-contain max-h-full"
           />
        ) : (
          <div className="w-full h-full bg-light/20 flex items-center justify-center text-text/30 text-xs text-center border border-dashed border-light">No Image</div>
        )}
      </div>
      
      <div className="flex flex-col flex-1 text-center sm:text-left">
        <h4 className="font-serif text-xl font-bold text-dark mb-2">{title}</h4>
        <p className="text-text/80 text-sm mb-4 leading-relaxed">{description}</p>
        
        <div className="mt-auto pt-2">
          <a 
            href={amazonUrl} 
            target="_blank" 
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center gap-2 bg-[#f0c14b] hover:bg-[#ddb347] text-[#111] font-medium px-6 py-2.5 rounded-md transition-colors w-full sm:w-auto text-sm border border-[#a88734] shadow-sm"
          >
            Check Price on Amazon
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
