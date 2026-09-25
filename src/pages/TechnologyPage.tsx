import { Link } from 'react-router-dom';
import { ArrowRight, Workflow, Server } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/components/PageHero';
import { CtaSection } from '@/components/CtaSection';
import { SectionHeader } from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { techAreas, techPlaceholders, images } from '@/data/content';

export function TechnologyPage() {
  useScrollAnimation();

  return (
    <>
      <Seo pageKey="technology" />
      <PageHero
        eyebrow="Technology & Automation"
        breadcrumb="Technology"
        title="Technology-Enabled Revenue Cycle Workflows"
        description="ADV combines human expertise with technology and workflow automation to improve operational efficiency, visibility, consistency, and scalability across revenue cycle operations."
      >
        <div className="mt-8 animate-on-scroll">
          <Link to="/contact" className="btn-primary">
            Discuss Your RCM Needs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 animate-on-scroll">
              <span className="eyebrow">Our Approach</span>
              <h2 className="mt-3 section-title">Managed Services + Technology-Enabled Operations</h2>
              <p className="mt-5 text-ink-600 leading-relaxed">
                ADV positions itself as a managed-services and technology-enabled RCM organization. Technology-enabled workflows can help improve visibility, consistency, and scalability across revenue cycle operations.
              </p>
              <p className="mt-4 text-ink-600 leading-relaxed">
                We do not claim specific AI technologies, automation capabilities, or integrations unless confirmed. Technology is described generally as workflow automation and operational tooling that supports our managed services model.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700 shrink-0">
                    <Workflow className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Workflow Automation</p>
                    <p className="text-xs text-ink-500">Structured RCM workflows</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700 shrink-0">
                    <Server className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Operational Tooling</p>
                    <p className="text-xs text-ink-500">Visibility & monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 animate-on-scroll">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-100/50 to-secondary-100/30 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-ink-100 shadow-soft-lg">
                  <img
                    src={images.techDashboard}
                    alt="Technology dashboard showing data analytics and operational reporting"
                    className="h-[400px] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Areas Grid */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <SectionHeader
            eyebrow="Capabilities"
            title="Technology & Automation Focus Areas"
            description="ADV leverages technology across the revenue cycle to support organized, visible, and scalable operations."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techAreas.map((area, i) => (
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

    
{/* Technology Stack */}
<section className="py-20 lg:py-28 bg-white">
  <div className="container-adv">
    <SectionHeader
      eyebrow="Systems & Platforms"
      title="Technology Stack Information"
      description="Our technology stack supports efficient healthcare revenue cycle operations through EHR/PM systems, workflow automation, and analytics."
    />

    <div className="mt-12 max-w-4xl mx-auto">
      <div className="grid gap-5 sm:grid-cols-3">
        {techPlaceholders.map((item, i) => (
          <div
            key={item.label}
            className="card text-center animate-on-scroll"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-ink-50 text-ink-400">
              <Server className="h-6 w-6" />
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-400">
              {item.label}
            </p>

            <p className="mt-3 text-base font-bold text-primary-700 font-display">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-ink-400 max-w-2xl mx-auto">
        ADV utilizes Epic and eClinicalWorks for EHR/PM workflows, Microsoft Power Automate for workflow automation, and Power BI for analytics and reporting.
      </p>
    </div>
  </div>
</section>
```

      <CtaSection
        title="Interested in Technology-Enabled RCM?"
        description="Discuss how ADV's technology-enabled workflows can support your healthcare organization's revenue cycle operations."
        primaryLabel="Explore RCM Services"
        primaryTo="/services"
      />
    </>
  );
}
