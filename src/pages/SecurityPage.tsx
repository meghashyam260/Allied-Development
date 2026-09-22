import { Link } from 'react-router-dom';
import { ArrowRight, Lock, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/components/PageHero';
import { CtaSection } from '@/components/CtaSection';
import { SectionHeader } from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { securityAreas, complianceStatuses, images } from '@/data/content';

export function SecurityPage() {
  useScrollAnimation();

  return (
    <>
      <Seo pageKey="security" />
      <PageHero
        eyebrow="Security & Compliance"
        breadcrumb="Security"
        title="Security & Compliance for Healthcare RCM"
        description="ADV applies data privacy practices, access controls, secure data handling, workforce training, and business continuity planning appropriate for a healthcare outsourcing organization."
      >
        <div className="mt-8 animate-on-scroll">
          <Link to="/contact" className="btn-primary">
            Contact Our Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* Important disclaimer */}
      <section className="pt-12 bg-white">
        <div className="container-adv">
          <div className="rounded-2xl border border-warning-200 bg-warning-50/50 p-5 animate-on-scroll">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-warning-600 shrink-0 mt-0.5" />
              <p className="text-sm text-ink-700">
                <strong>Important:</strong> Compliance and certification statuses listed on this page are placeholders. ADV does not claim HIPAA compliance, SOC 2 certification, ISO certification, or any other certification unless and until confirmed. All statuses will be updated as they are verified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security areas */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <SectionHeader
            eyebrow="Security Practices"
            title="Operational Security Focus Areas"
            description="ADV applies security practices and controls across its healthcare RCM operations to support data protection and operational integrity."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityAreas.map((area, i) => (
              <div
                key={area.title}
                className="card card-hover animate-on-scroll group"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors duration-300 group-hover:bg-primary-700 group-hover:text-white">
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900">{area.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance statuses */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <SectionHeader
            eyebrow="Compliance Status"
            title="Certification & Compliance Information"
            description="The following compliance and certification statuses are pending confirmation and will be updated as verified information becomes available."
          />

          <div className="mt-14 max-w-4xl mx-auto">
            <div className="grid gap-5 sm:grid-cols-2">
              {complianceStatuses.map((item, i) => (
                <div
                  key={item.label}
                  className="card animate-on-scroll flex items-center justify-between gap-4"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-50 text-ink-400 shrink-0">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-ink-900">{item.label}</p>
                  </div>
                  <span className="text-xs font-bold text-warning-700 bg-warning-50 rounded-lg px-3 py-1.5 whitespace-nowrap">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-ink-400 max-w-2xl mx-auto">
              ADV will never state that it is HIPAA compliant, SOC 2 certified, ISO certified, or otherwise certified unless confirmed. All compliance statuses will be verified before publication.
            </p>
          </div>
        </div>
      </section>

      {/* Data handling visual */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 animate-on-scroll order-2 lg:order-1">
              <span className="eyebrow">Secure Operations</span>
              <h2 className="mt-3 section-title">Secure Remote Operations for Healthcare RCM</h2>
              <p className="mt-5 text-ink-600 leading-relaxed">
                ADV's operational model includes secure remote operations with controlled system access, role-based permissions, and monitored environments.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Controlled, role-based access to client systems',
                  'Confidentiality agreements and workforce obligations',
                  'Secure communication channels',
                  'Incident response procedures for security events',
                  'Business continuity planning for operational resilience',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-success-50 text-success-600 shrink-0 mt-0.5">
                      <Lock className="h-3.5 w-3.5" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 animate-on-scroll order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-100/50 to-secondary-100/30 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-ink-100 shadow-soft-lg">
                  <img
                    src={images.security}
                    alt="Security and data protection technology for healthcare RCM operations"
                    className="h-[400px] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Questions About Security & Compliance?"
        description="Contact our team to discuss ADV's security practices, compliance status, and data protection approach for healthcare RCM operations."
        primaryLabel="Contact Our Team"
      />
    </>
  );
}
