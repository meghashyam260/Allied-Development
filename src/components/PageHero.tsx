import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 to-white pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
      <div className="absolute top-10 left-0 h-64 w-64 rounded-full bg-secondary-100/40 blur-3xl" />

      <div className="container-adv relative">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-1.5 text-sm">
          <Link to="/" className="text-ink-400 transition-colors hover:text-primary-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-ink-300" />
          <span className="font-medium text-primary-700">{breadcrumb}</span>
        </nav>

        <div className="max-w-3xl">
          <span className="eyebrow animate-on-scroll">{eyebrow}</span>
          <h1 className="mt-3 text-display-md font-bold text-ink-900 text-balance animate-on-scroll">
            {title}
          </h1>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed text-balance animate-on-scroll">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
