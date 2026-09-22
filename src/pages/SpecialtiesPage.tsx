import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/components/PageHero';
import { CtaSection } from '@/components/CtaSection';
import { SectionHeader } from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { specialties } from '@/data/content';

export function SpecialtiesPage() {
  useScrollAnimation();

  return (
    <>
      <Seo pageKey="specialties" />
      <PageHero
        eyebrow="Specialties We Serve"
        breadcrumb="Specialties"
        title="RCM Support Across Healthcare Specialties"
        description="ADV provides revenue cycle management support for physician practices, specialty clinics, dental practices, behavioral health organizations, physical therapy practices, and small-to-medium-sized hospitals."
      >
        <div className="mt-8 animate-on-scroll">
          <Link to="/contact" className="btn-primary">
            Discuss Your RCM Needs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* Specialties grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <SectionHeader
            eyebrow="Specialty Support"
            title="Common RCM Needs by Specialty"
            description="ADV provides RCM support across the following specialties. We use language such as \u201Ccommon RCM needs\u201D and \u201Careas where ADV can provide support\u201D rather than claiming every specialty has a particular problem."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {specialties.map((spec, i) => (
              <div
                key={spec.name}
                className="card card-hover animate-on-scroll"
                style={{ transitionDelay: `${(i % 2) * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-soft shrink-0">
                    <spec.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-ink-900">{spec.name}</h3>
                    <p className="mt-2 text-sm text-ink-600 leading-relaxed">{spec.description}</p>

                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
                        Areas Where ADV Can Provide Support
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {spec.services.map((service) => (
                          <span
                            key={service}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-800"
                          >
                            <CheckCircle2 className="h-3 w-3 text-success-500" />
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target profile */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <SectionHeader
            eyebrow="Practice Profile"
            title="Who We Support"
            description="ADV works with healthcare organizations of various sizes, with a focus on practices and groups that can benefit from managed RCM services."
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="card text-center animate-on-scroll">
              <p className="text-lg text-ink-700 leading-relaxed">
                <strong className="text-ink-900">Target practice profile:</strong> Approximately 10&ndash;50 providers where appropriate, while remaining open to larger organizations and multi-location groups.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {[
              'Independent physician practices',
              'Specialty clinics',
              'Multi-location healthcare practices',
              'Small and medium-sized medical groups',
              'Dental practices',
              'Behavioral health organizations',
              'Physical therapy organizations',
              'Small and medium-sized hospitals',
              'Healthcare organizations seeking additional RCM capacity',
            ].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-5 py-4 animate-on-scroll"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <CheckCircle2 className="h-5 w-5 text-success-500 shrink-0" />
                <span className="text-sm font-medium text-ink-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Looking for Specialty-Specific RCM Support?"
        description="Talk to an RCM specialist about how ADV can support your specialty practice or healthcare organization."
        primaryLabel="Talk to an RCM Specialist"
      />
    </>
  );
}
