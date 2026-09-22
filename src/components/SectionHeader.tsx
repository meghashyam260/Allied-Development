import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
}

export function SectionHeader({ eyebrow, title, description, align = 'center', children }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignment} ${align === 'center' ? 'mx-auto' : ''}`}>
      {eyebrow && <span className="eyebrow animate-on-scroll">{eyebrow}</span>}
      <h2 className="mt-3 section-title animate-on-scroll text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-ink-600 leading-relaxed text-balance animate-on-scroll">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
