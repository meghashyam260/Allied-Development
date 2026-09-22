import { useEffect } from 'react';
import { seoData } from '@/data/content';

interface SeoProps {
  pageKey: keyof typeof seoData;
}

export function Seo({ pageKey }: SeoProps) {
  useEffect(() => {
    const meta = seoData[pageKey];
    if (!meta) return;

    document.title = meta.title;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', meta.description);
    setMeta('og:title', meta.title, 'property');
    setMeta('og:description', meta.description, 'property');
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
  }, [pageKey]);

  return null;
}
