import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Building2,
  Target,
  Eye,
  Users,
  Workflow,
  CheckCircle2,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/components/PageHero';
import { CtaSection } from '@/components/CtaSection';
import { SectionHeader } from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  company,
  businessPillars,
  leaders,
  capabilities,
  images,
} from '@/data/content';

export function AboutPage() {
  useScrollAnimation();

  return (
    <>
      <Seo pageKey="about" />
      <PageHero
        eyebrow="About Us"
        breadcrumb="About"
        title="Building the Next Generation of Healthcare Revenue Cycle Management"
        description="Founded in 2024, Allied Development Venture connects India-based operational expertise with the needs of U.S. healthcare providers through a scalable RCM and Global Capability Center model."
      />

      {/* Company story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 animate-on-scroll">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-100/50 to-secondary-100/30 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-ink-100 shadow-soft-lg">
                  <img
                    src={images.doctorWriting}
                    alt="Healthcare professional working in a clinical office setting"
                    className="h-[440px] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 animate-on-scroll">
              <span className="eyebrow">Our Story</span>
              <h2 className="mt-3 section-title">A Healthcare RCM Partner Built for Long-Term Operations</h2>
              <div className="mt-5 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  Allied Development Venture was founded in <strong className="text-ink-900">2024</strong> with a vision to build a strong healthcare Revenue Cycle Management capability connecting India-based operational expertise with the needs of U.S. healthcare providers.
                </p>
                <p>
                  ADV is developing a <strong className="text-ink-900">Global Capability Center (GCC)-oriented healthcare RCM model</strong>, combining skilled professionals, managed services, operational support, and technology automation.
                </p>
                <p>
                  ADV collaborates with RCM organizations and healthcare service partners across India and works with U.S. healthcare providers to address revenue cycle and administrative challenges.
                </p>
                <p>
                  ADV positions itself as a <strong className="text-ink-900">long-term operational partner</strong>, rather than simply a conventional medical billing vendor — helping healthcare organizations improve their revenue-cycle operations by providing scalable managed services, administrative support, RCM expertise, and technology-enabled workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Vision */}
            <div className="card card-hover animate-on-scroll">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-soft">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-ink-900">Our Vision</h3>
              <p className="mt-4 text-ink-600 leading-relaxed">
                Building a globally connected healthcare Revenue Cycle Management and Global Capability Center ecosystem that helps healthcare organizations operate more efficiently through people, process, technology, and strategic partnerships.
              </p>
            </div>

            {/* Mission */}
            <div className="card card-hover animate-on-scroll">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary-600 to-secondary-800 text-white shadow-soft">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-ink-900">Our Mission</h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  'Deliver reliable healthcare RCM services',
                  'Support U.S. healthcare organizations with administrative operations',
                  'Combine skilled professionals with technology',
                  'Build scalable managed-service capabilities',
                  'Develop long-term partnerships with healthcare providers and RCM organizations',
                  'Help clients improve operational visibility and revenue-cycle efficiency',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600">
                    <CheckCircle2 className="h-4.5 w-4.5 text-success-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GCC Model */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <SectionHeader
            eyebrow="GCC Model"
            title="Global Capability Center for Healthcare RCM"
            description="ADV is developing a scalable healthcare RCM GCC model that can support U.S. healthcare organizations and collaborate with RCM companies and healthcare partners."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {businessPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="card card-hover animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-900">{pillar.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India + U.S. Presence */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <SectionHeader
            eyebrow="Global Presence"
            title="India Headquarters, U.S. Operations"
            description="ADV is headquartered in India with a U.S. presence in California and Texas, connecting global delivery capability with U.S. healthcare provider needs."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="card card-hover text-center animate-on-scroll">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-soft">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink-900">Headquarters</h3>
              <p className="mt-2 text-3xl font-bold text-primary-700 font-display">India</p>
              <p className="mt-2 text-sm text-ink-500">Global delivery and operations center</p>
            </div>

            <div className="card card-hover text-center animate-on-scroll">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary-600 to-secondary-800 text-white shadow-soft">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink-900">U.S. Presence</h3>
              <p className="mt-2 text-3xl font-bold text-secondary-700 font-display">CA &amp; TX</p>
              <p className="mt-2 text-sm text-ink-500">California &amp; Texas</p>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-ink-400 max-w-2xl mx-auto">
            [ADD U.S. OFFICE ADDRESSES]
          </p>
        </div>
      </section>

      {/* Leadership preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <SectionHeader
            eyebrow="Leadership"
            title="The Team Behind ADV"
            description="Meet the leadership building Allied Development Venture's healthcare RCM and managed services capability."
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
              View Full Leadership Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities placeholders */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <SectionHeader
            eyebrow="Experience & Capabilities"
            title="Building a Scalable Healthcare RCM Operation"
            description="ADV is building a scalable healthcare RCM operation designed to support organizations across multiple specialties and practice environments."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <div
                key={cap.label}
                className="card text-center animate-on-scroll"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">{cap.label}</p>
                <p className="mt-3 text-lg font-bold text-primary-700 font-display">{cap.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-ink-400 max-w-2xl mx-auto">
            Metrics will be updated as verified information becomes available. ADV does not publish unconfirmed performance statistics.
          </p>
        </div>
      </section>

      <CtaSection
        title="Want to Learn More About ADV?"
        description="We'd welcome a conversation about how ADV can support your healthcare organization's revenue cycle operations."
        primaryLabel="Contact Our Team"
      />
    </>
  );
}
