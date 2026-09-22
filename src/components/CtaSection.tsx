import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { company } from '@/data/content';

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  showContactInfo?: boolean;
}

export function CtaSection({
  title = 'Let\u2019s Discuss Your RCM Needs',
  description = 'Whether you\u2019re a healthcare provider seeking managed RCM support, an RCM company exploring operational partnership, or a strategic partner — we\u2019d welcome the conversation.',
  primaryLabel = 'Talk to an RCM Specialist',
  primaryTo = '/contact',
  showContactInfo = true,
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-20 lg:py-24">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary-500/15 blur-3xl" />

      <div className="container-adv relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-sm font-bold text-white text-balance sm:text-display-md">
            {title}
          </h2>
          <p className="mt-5 text-lg text-primary-100 leading-relaxed text-balance">
            {description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to={primaryTo} className="btn-primary bg-white text-primary-800 hover:bg-ink-100 hover:shadow-glow">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Email Our Team
            </a>
          </div>

          {showContactInfo && (
            <div className="mt-10 flex flex-col items-center justify-center gap-6 border-t border-white/10 pt-8 sm:flex-row sm:gap-10">
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2.5 text-sm text-primary-100 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 text-sm text-primary-100 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
