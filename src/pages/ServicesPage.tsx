import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/components/PageHero';
import { CtaSection } from '@/components/CtaSection';
import { SectionHeader } from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  serviceCategories,
  endToEndRcm,
  whoWeSupport,
  images,
} from '@/data/content';

export function ServicesPage() {
  useScrollAnimation();

  return (
    <>
      <Seo pageKey="services" />
      <PageHero
        eyebrow="RCM Services"
        breadcrumb="RCM Services"
        title="Complete Healthcare Revenue Cycle Management Services"
        description="From front-end patient access through back-end A/R and reporting — ADV provides operational support across the full revenue cycle for U.S. healthcare organizations."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-on-scroll">
          <Link to="/contact" className="btn-primary">
            Request a Service Assessment
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/specialties" className="btn-secondary">
            View Specialties We Serve
          </Link>
        </div>
      </PageHero>

      {/* End-to-End flow */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-adv">
          <div className="rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50/60 to-secondary-50/40 p-8 lg:p-12 animate-on-scroll">
            <div className="text-center">
              <span className="eyebrow">End-to-End RCM</span>
              <h2 className="mt-3 text-display-sm font-bold text-ink-900 sm:text-2xl">
                The Complete Revenue Cycle Flow
              </h2>
              <p className="mt-3 text-ink-600 max-w-2xl mx-auto">
                ADV supports the full revenue cycle from eligibility through reporting.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 lg:gap-3">
              {endToEndRcm.map((step, i) => (
                <div key={step} className="flex items-center gap-2 lg:gap-3">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-primary-200 text-primary-700 font-bold text-sm shadow-sm">
                      {i + 1}
                    </div>
                    <span className="mt-2 text-xs font-medium text-ink-700">{step}</span>
                  </div>
                  {i < endToEndRcm.length - 1 && (
                    <ChevronRight className="h-5 w-5 text-primary-400 mt-[-20px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <SectionHeader
            eyebrow="Service Catalog"
            title="Full RCM Service Categories"
            description="Operational support across front-end, middle-office, and back-end revenue cycle functions."
          />

          <div className="mt-14 space-y-8">
            {serviceCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="card card-hover animate-on-scroll"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-soft shrink-0">
                        <cat.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-ink-900">{cat.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-ink-600 leading-relaxed">{cat.description}</p>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {cat.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-start gap-2.5 rounded-lg border border-ink-100 bg-white px-4 py-3"
                        >
                          <CheckCircle2 className="h-4.5 w-4.5 text-success-500 mt-0.5 shrink-0" />
                          <span className="text-sm font-medium text-ink-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="mt-10 rounded-2xl border border-warning-200 bg-warning-50/50 p-5 animate-on-scroll">
            <p className="text-sm text-ink-700">
              <strong>Note:</strong> Coding and documentation support services are positioned as administrative/RCM support and are not clinical care or clinical decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <SectionHeader
            eyebrow="Who We Support"
            title="Healthcare Organizations We Serve"
            description="ADV provides RCM and managed services support for a range of healthcare organizations and practice types."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeSupport.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-ink-100 bg-ink-50/40 px-5 py-4 animate-on-scroll"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <CheckCircle2 className="h-5 w-5 text-success-500 shrink-0" />
                <span className="text-sm font-medium text-ink-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-primary-50/60 border border-primary-100 p-6 animate-on-scroll">
            <p className="text-center text-ink-700">
              <strong>Target practice profile:</strong> Approximately 10&ndash;50 providers where appropriate, while remaining open to larger organizations and multi-location groups.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Need RCM Support for Your Practice?"
        description="Request a service assessment to discuss how ADV's managed RCM services can support your healthcare organization."
        primaryLabel="Request a Service Assessment"
      />
    </>
  );
}
