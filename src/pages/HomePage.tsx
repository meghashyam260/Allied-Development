import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Building2,
  Globe,
  Workflow,
  ShieldCheck,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { CtaSection } from '@/components/CtaSection';
import { SectionHeader } from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  company,
  valueCards,
  serviceCategories,
  endToEndRcm,
  specialties,
  whyPartner,
  businessPillars,
  leaders,
  images,
} from '@/data/content';

export function HomePage() {
  useScrollAnimation();

  return (
    <>
      <Seo pageKey="home" />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-white pt-28 lg:pt-36">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-secondary-100/40 blur-3xl" />

        <div className="container-adv relative pb-20 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-700 animate-on-scroll">
                <span className="flex h-2 w-2 rounded-full bg-success-500 animate-pulse-soft" />
                Healthcare RCM &middot; Managed Services &middot; Technology Solutions
              </div>

              <h1 className="mt-6 text-display-lg font-bold text-ink-900 text-balance animate-on-scroll sm:text-display-xl">
                Healthcare Revenue Cycle Management Built for{' '}
                <span className="bg-gradient-to-r from-primary-700 to-secondary-600 bg-clip-text text-transparent">
                  Scalable Growth
                </span>
              </h1>

              <p className="mt-6 text-lg text-ink-600 leading-relaxed max-w-2xl animate-on-scroll">
                Managed RCM services, administrative support, and technology-enabled solutions for U.S. healthcare organizations.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-on-scroll">
                <Link to="/contact" className="btn-primary">
                  Talk to an RCM Specialist
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore Our Services
                </Link>
              </div>

              {/* Quick highlights */}
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 animate-on-scroll">
                {[
                  { icon: Globe, label: 'India + U.S. Operations' },
                  { icon: Building2, label: 'GCC-Oriented Model' },
                  { icon: Workflow, label: 'Technology-Enabled' },
                  { icon: ShieldCheck, label: 'Security-Focused' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                      <item.icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-xs font-medium text-ink-700 leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="lg:col-span-5 animate-on-scroll">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-200/40 to-secondary-200/30 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-ink-100 shadow-soft-lg">
                  <img
                    src={images.healthcareTeam}
                    alt="Healthcare professionals collaborating in a hospital setting"
                    className="h-[420px] w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-ink-100 bg-white p-5 shadow-card-hover max-w-[240px] hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success-50 text-success-600">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink-900">End-to-End RCM</p>
                      <p className="text-[11px] text-ink-500">Eligibility to Reporting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Value Proposition ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <SectionHeader
            eyebrow="What We Do"
            title="Managed RCM, Technology & Partnership for Healthcare"
            description="ADV helps healthcare organizations improve their revenue-cycle operations by providing scalable managed services, administrative support, RCM expertise, and technology-enabled workflows."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((card, i) => (
              <div
                key={card.title}
                className="card card-hover animate-on-scroll group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors duration-300 group-hover:bg-primary-700 group-hover:text-white">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{card.title}</h3>
                <p className="mt-2.5 text-sm text-ink-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Business Model ─── */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <SectionHeader
            eyebrow="Business Model"
            title="Three Pillars of Healthcare RCM Operations"
            description="ADV combines managed services, technology, and a Global Capability Center model to support U.S. healthcare organizations."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {businessPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="relative animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="card card-hover h-full">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-soft">
                      <pillar.icon className="h-7 w-7" />
                    </div>
                    <span className="text-4xl font-bold text-primary-100 font-display">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink-900">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RCM Services Overview ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <SectionHeader
            eyebrow="RCM Services"
            title="Complete Revenue Cycle Coverage"
            description="From front-end patient access through back-end A/R and reporting — ADV provides operational support across the full revenue cycle."
          />

          {/* End-to-end flow */}
          <div className="mt-12 rounded-2xl border border-primary-100 bg-primary-50/40 p-6 lg:p-8 animate-on-scroll">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-primary-700 mb-5">
              End-to-End RCM Workflow
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3">
              {endToEndRcm.map((step, i) => (
                <div key={step} className="flex items-center gap-2 lg:gap-3">
                  <span className="rounded-lg bg-white border border-primary-200 px-3 py-2 text-xs font-semibold text-primary-800 shadow-sm">
                    {step}
                  </span>
                  {i < endToEndRcm.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-primary-400" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Service grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="card card-hover animate-on-scroll"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <cat.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900">{cat.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {cat.services.slice(0, 4).map((s) => (
                    <li key={s} className="flex items-start gap-2 text-xs text-ink-600">
                      <CheckCircle2 className="h-3.5 w-3.5 text-success-500 mt-0.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                  {cat.services.length > 4 && (
                    <li className="text-xs font-medium text-primary-700">
                      +{cat.services.length - 4} more
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center animate-on-scroll">
            <Link to="/services" className="btn-primary">
              View All RCM Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Specialties ─── */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <SectionHeader
            eyebrow="Specialties We Serve"
            title="RCM Support Across Healthcare Specialties"
            description="ADV provides RCM support for physician practices, specialty clinics, dental, behavioral health, physical therapy, and small-to-medium-sized hospitals."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((spec, i) => (
              <Link
                to="/specialties"
                key={spec.name}
                className="card card-hover animate-on-scroll group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 text-primary-700 transition-colors duration-300 group-hover:from-primary-700 group-hover:to-primary-800 group-hover:text-white">
                  <spec.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900 group-hover:text-primary-700 transition-colors">
                  {spec.name}
                </h3>
                <p className="mt-2 text-xs text-ink-500 leading-relaxed line-clamp-3">
                  {spec.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center animate-on-scroll">
            <Link to="/specialties" className="btn-secondary">
              Explore All Specialties
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Why Partner ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <SectionHeader
            eyebrow="Why ADV"
            title="Why Partner With Allied Development Venture?"
            description="ADV is building a scalable healthcare RCM organization designed to be a long-term operational partner — not just a conventional billing vendor."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyPartner.map((item, i) => (
              <div
                key={item.title}
                className="animate-on-scroll group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technology & Security Split ─── */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Technology */}
            <div className="card card-hover animate-on-scroll overflow-hidden">
              <div className="relative h-48 -m-6 mb-6 overflow-hidden">
                <img
                  src={images.techDashboard}
                  alt="Technology dashboard with data analytics for healthcare RCM operations"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <Workflow className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-ink-900">Technology & Automation</h3>
              </div>
              <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                Technology-enabled workflows can help improve visibility, consistency, and scalability across revenue cycle operations.
              </p>
              <Link to="/technology" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800">
                Explore Technology
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Security */}
            <div className="card card-hover animate-on-scroll overflow-hidden">
              <div className="relative h-48 -m-6 mb-6 overflow-hidden">
                <img
                  src={images.security}
                  alt="Security and compliance controls for healthcare data protection"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-ink-900">Security & Compliance</h3>
              </div>
              <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                Data privacy, access controls, secure data handling, workforce training, and business continuity practices for healthcare RCM operations.
              </p>
              <Link to="/security" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800">
                Explore Security
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Partnership Preview ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <SectionHeader
            eyebrow="Partnerships"
            title="Who We Support"
            description="ADV works with healthcare providers, RCM companies, healthcare technology companies, and strategic partners."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Independent physician practices',
              'Specialty clinics',
              'Multi-location healthcare practices',
              'Dental practices',
              'Behavioral health organizations',
              'Physical therapy organizations',
              'Small and medium-sized hospitals',
              'RCM companies seeking operational partnerships',
              'Healthcare organizations exploring managed RCM services',
            ].map((item, i) => (
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

          <div className="mt-10 text-center animate-on-scroll">
            <Link to="/partnerships" className="btn-primary">
              Partner With ADV
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Leadership Preview ─── */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <SectionHeader
            eyebrow="Leadership"
            title="Meet the ADV Leadership Team"
            description="The team building Allied Development Venture\u2019s healthcare RCM and managed services capability."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader, i) => (
              <div
                key={leader.name}
                className="card card-hover text-center animate-on-scroll"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-primary-200 text-primary-700 font-bold text-xl">
                  {leader.name.charAt(0)}
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900">{leader.name}</h3>
                <p className="mt-1 text-xs text-primary-700 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center animate-on-scroll">
            <Link to="/leadership" className="btn-secondary">
              View Leadership Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CtaSection
        title="Ready to Discuss Your RCM Needs?"
        description="Talk to an RCM specialist about managed services, administrative support, and technology-enabled revenue cycle solutions for your healthcare organization."
        primaryLabel="Talk to an RCM Specialist"
      />
    </>
  );
}
