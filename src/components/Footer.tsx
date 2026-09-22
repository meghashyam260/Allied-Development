import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { navItems, company } from '@/data/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-300">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-adv py-14">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="text-display-sm font-bold text-white sm:text-2xl">
                Ready to discuss your RCM needs?
              </h3>
              <p className="mt-2 text-ink-400 max-w-xl">
                Talk to an RCM specialist about managed services, administrative support, and technology-enabled revenue cycle solutions.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Talk to an RCM Specialist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-adv py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Company info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white font-bold text-sm">
                ADV
              </div>
              <span className="text-sm font-bold text-white font-display">
                Allied Development Venture
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-400 max-w-sm">
              Healthcare Revenue Cycle Management, managed services, and technology-enabled solutions for U.S. healthcare providers.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-primary-400 shrink-0" />
                {company.email}
              </a>
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-primary-400 shrink-0" />
                {company.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-ink-400">
                <MapPin className="h-4 w-4 text-primary-400 shrink-0" />
                HQ: India &middot; U.S. Presence: California &amp; Texas
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-4">Pages</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-4">RCM Services</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-sm text-ink-400 transition-colors hover:text-white">Front-End Revenue Cycle</Link></li>
              <li><Link to="/services" className="text-sm text-ink-400 transition-colors hover:text-white">Medical Billing & Claims</Link></li>
              <li><Link to="/services" className="text-sm text-ink-400 transition-colors hover:text-white">Coding & Documentation</Link></li>
              <li><Link to="/services" className="text-sm text-ink-400 transition-colors hover:text-white">Denial Management</Link></li>
              <li><Link to="/services" className="text-sm text-ink-400 transition-colors hover:text-white">Accounts Receivable</Link></li>
              <li><Link to="/services" className="text-sm text-ink-400 transition-colors hover:text-white">Payment Posting</Link></li>
              <li><Link to="/services" className="text-sm text-ink-400 transition-colors hover:text-white">End-to-End RCM</Link></li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4">Specialties</h4>
            <ul className="space-y-2.5">
              <li><Link to="/specialties" className="text-sm text-ink-400 transition-colors hover:text-white">Cardiology</Link></li>
              <li><Link to="/specialties" className="text-sm text-ink-400 transition-colors hover:text-white">Primary Care</Link></li>
              <li><Link to="/specialties" className="text-sm text-ink-400 transition-colors hover:text-white">Behavioral Health</Link></li>
              <li><Link to="/specialties" className="text-sm text-ink-400 transition-colors hover:text-white">Dental</Link></li>
              <li><Link to="/specialties" className="text-sm text-ink-400 transition-colors hover:text-white">Orthopedics</Link></li>
              <li><Link to="/specialties" className="text-sm text-ink-400 transition-colors hover:text-white">Physical Therapy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-ink-500">
            &copy; {year} {company.full}. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Founded in 2024 &middot; Healthcare RCM &amp; Managed Services
          </p>
        </div>
      </div>
    </footer>
  );
}
