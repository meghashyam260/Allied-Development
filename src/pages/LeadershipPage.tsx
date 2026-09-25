import { Link } from 'react-router-dom';
import { ArrowRight, UserCircle, Plus } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/components/PageHero';
import { CtaSection } from '@/components/CtaSection';
import { SectionHeader } from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { leaders } from '@/data/content';

export function LeadershipPage() {
  useScrollAnimation();

  return (
    <>
      <Seo pageKey="leadership" />
      <PageHero
        eyebrow="Leadership Team"
        breadcrumb="Leadership"
        title="The Team Behind Allied Development Venture"
        description="Meet the leadership building ADV's healthcare RCM and managed services capability. Photos and biographies will be added as they become available."
      />

      {/* Leadership cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-adv">
          <SectionHeader
            eyebrow="Our Team"
            title="Leadership at ADV"
            description="ADV's leadership team brings together ownership, vision, and operational management to build a scalable healthcare RCM organization."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader, i) => (
              <div
                key={leader.name}
                className="card card-hover text-center animate-on-scroll group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Photo placeholder */}
                <div className="relative mx-auto">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-primary-200 text-primary-600 transition-all duration-300 group-hover:from-primary-200 group-hover:to-primary-300">
                    {leader.photo ? (
                      <img
                        src={leader.photo}
                        alt={`${leader.name} — ${leader.role}`}
                        className="h-32 w-32 rounded-full object-cover"
                      />
                    ) : (
                      <UserCircle className="h-16 w-16" />
                    )}
                  </div>
                  {!leader.photo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-ink-200 text-ink-400 mt-20">
                        <Plus className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="mt-5 text-lg font-bold text-ink-900">{leader.name}</h3>
                <p className="mt-1.5 text-sm text-primary-700 font-medium leading-tight">{leader.role}</p>

                
              {/* Leadership Bio */}
<div className="mt-4 rounded-lg bg-ink-50/60 px-4 py-3">
  <p className="text-sm text-ink-600 leading-relaxed">
    {leader.bio}
  </p>
</div>
        ))}
          </div>
       <p className="mt-10 text-center text-sm text-ink-400 max-w-2xl mx-auto animate-on-scroll">
           Biographies, qualifications, and photos will be added as they are confirmed. ADV does not invent biographies, qualifications, education, certifications, years of experience, or previous companies.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <SectionHeader
            eyebrow="Leadership Values"
            title="How Our Team Operates"
            description="ADV's leadership is building an organization based on long-term partnership, operational excellence, and healthcare RCM focus."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Long-Term Partnership', description: 'Building relationships as a long-term operational partner, not a transactional vendor.' },
              { title: 'Healthcare RCM Focus', description: 'Dedicated to healthcare revenue cycle and administrative operations.' },
              { title: 'Operational Excellence', description: 'Process standardization, performance monitoring, and continuous improvement.' },
              { title: 'Technology-Enabled', description: 'Combining human expertise with technology and workflow automation.' },
              { title: 'Scalable Delivery', description: 'Building processes designed to scale with client requirements.' },
              { title: 'Collaborative Approach', description: 'Working collaboratively with RCM organizations, partners, and providers.' },
            ].map((value, i) => (
              <div
                key={value.title}
                className="card animate-on-scroll"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <h3 className="text-base font-bold text-ink-900">{value.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Want to Connect With Our Team?"
        description="Reach out to discuss how ADV's leadership and operational team can support your healthcare organization."
        primaryLabel="Contact Our Team"
      />
    </>
  );
}
