import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/components/PageHero';
import { CtaSection } from '@/components/CtaSection';
import { SectionHeader } from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { partnershipTypes, images } from '@/data/content';

export function PartnershipsPage() {
  useScrollAnimation();

  return (
    <>
      <Seo pageKey="partnerships" />
      <PageHero
        eyebrow="Partnerships"
        breadcrumb="Partnerships"
        title="Partner With Allied Development Venture"
        description="ADV works with healthcare providers, RCM companies, healthcare technology companies, and strategic partners to build collaborative healthcare operations and service models."
      >
        <div className="mt-8 animate-on-scroll">
          <Link to="/contact" className="btn-primary">
            Let's Discuss a Partnership
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* Partnership types */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <SectionHeader
            eyebrow="Partnership Models"
            title="How You Can Partner With ADV"
            description="ADV offers flexible partnership models designed around the needs of different healthcare organizations."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {partnershipTypes.map((partner, i) => (
              <div
                key={partner.title}
                className="card card-hover animate-on-scroll"
                style={{ transitionDelay: `${(i % 2) * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-soft shrink-0">
                    <partner.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink-900">{partner.title}</h3>
                    <p className="mt-2 text-sm text-ink-600 leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership image + value */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 animate-on-scroll">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-100/50 to-secondary-100/30 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-ink-100 shadow-soft-lg">
                  <img
                    src={images.partnership}
                    alt="Business partnership handshake representing healthcare RCM collaboration"
                    className="h-[400px] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 animate-on-scroll">
              <span className="eyebrow">Collaborative Model</span>
              <h2 className="mt-3 section-title">A Long-Term Operational Partner</h2>
              <p className="mt-5 text-ink-600 leading-relaxed">
                ADV positions itself as a long-term operational partner rather than simply a conventional medical billing vendor. We work collaboratively with RCM organizations, healthcare partners, and healthcare providers.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Flexible operational support based on client requirements',
                  'Collaborative engagement with existing teams and systems',
                  'Scalable delivery designed to grow with your organization',
                  'Technology-enabled workflows for visibility and consistency',
                  'India + U.S. connectivity for global delivery and local presence',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                    <CheckCircle2 className="h-5 w-5 text-success-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <SectionHeader
            eyebrow="Engagement Process"
            title="How Partnership Works"
            description="A straightforward engagement process designed to understand your needs and build the right operational support model."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-4">
            {[
              { step: '01', title: 'Initial Discussion', description: 'We discuss your organization, current RCM setup, and operational challenges.' },
              { step: '02', title: 'Needs Assessment', description: 'We assess your revenue cycle needs, practice profile, and service requirements.' },
              { step: '03', title: 'Partnership Design', description: 'We design a managed service model tailored to your operational requirements.' },
              { step: '04', title: 'Operational Launch', description: 'We establish workflows, communication, and reporting for ongoing RCM support.' },
            ].map((item, i) => (
              <div
                key={item.step}
                className="card card-hover animate-on-scroll text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-700 text-white font-bold text-sm font-display">
                  {item.step}
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-xs text-ink-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Let's Discuss a Partnership"
        description="Whether you're a healthcare provider, RCM company, healthcare technology company, or strategic partner — we'd welcome the conversation."
        primaryLabel="Let's Discuss a Partnership"
      />
    </>
  );
}
