import { useState, type FormEvent } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  CheckCircle2,
  Send,
  AlertCircle,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/components/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { company } from '@/data/content';

interface FormData {
  fullName: string;
  organization: string;
  jobTitle: string;
  email: string;
  phone: string;
  specialty: string;
  numProviders: string;
  numLocations: string;
  currentRcmSetup: string;
  servicesNeeded: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: '',
  organization: '',
  jobTitle: '',
  email: '',
  phone: '',
  specialty: '',
  numProviders: '',
  numLocations: '',
  currentRcmSetup: '',
  servicesNeeded: '',
  message: '',
};

const specialtyOptions = [
  'Cardiology',
  'Primary Care',
  'Behavioral Health',
  'Dental',
  'Dermatology',
  'Orthopedics',
  'Physical Therapy',
  'Small/Medium Hospital',
  'Multi-Specialty Group',
  'Other',
];

const serviceOptions = [
  'Front-End Revenue Cycle',
  'Medical Billing & Claims',
  'Coding & Documentation Support',
  'Denial Management',
  'Accounts Receivable',
  'Payment & Financial Operations',
  'Patient Billing',
  'Provider & Practice Support',
  'End-to-End RCM',
  'Other',
];

export function ContactPage() {
  useScrollAnimation();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName || !formData.email || !formData.organization) {
      setError('Please fill in your name, email, and organization.');
      return;
    }

    // Build a mailto link as a functional fallback for lead capture
    const subject = `RCM Consultation Request — ${formData.fullName} (${formData.organization})`;
    const body = [
      `Name: ${formData.fullName}`,
      `Organization: ${formData.organization}`,
      `Job Title: ${formData.jobTitle}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Specialty: ${formData.specialty}`,
      `Number of Providers: ${formData.numProviders}`,
      `Number of Locations: ${formData.numLocations}`,
      `Current RCM Setup: ${formData.currentRcmSetup}`,
      `Services Needed: ${formData.servicesNeeded}`,
      `Message: ${formData.message}`,
    ].join('\n');

    const mailtoLink = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoLink;
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try emailing us directly.');
    }
  };

  return (
    <>
      <Seo pageKey="contact" />
      <PageHero
        eyebrow="Contact Us"
        breadcrumb="Contact"
        title="Talk to an RCM Specialist"
        description="Request an RCM consultation, discuss your revenue cycle needs, or explore partnership opportunities with Allied Development Venture."
      />

      {/* Contact info cards */}
      <section className="py-16 bg-white">
        <div className="container-adv">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card text-center animate-on-scroll">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-ink-900">Email</h3>
              <a
                href={`mailto:${company.email}`}
                className="mt-2 block text-sm text-primary-700 break-all hover:underline"
              >
                {company.email}
              </a>
            </div>

            <div className="card text-center animate-on-scroll">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-ink-900">Phone</h3>
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="mt-2 block text-sm text-primary-700 hover:underline"
              >
                {company.phone}
              </a>
            </div>

            <div className="card text-center animate-on-scroll">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-ink-900">Headquarters</h3>
              <p className="mt-2 text-sm text-ink-600">India</p>
            </div>

            <div className="card text-center animate-on-scroll">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-ink-900">U.S. Presence</h3>
              <p className="mt-2 text-sm text-ink-600">California &amp; Texas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="py-20 lg:py-28 bg-ink-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-adv relative">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left: info */}
            <div className="lg:col-span-4 animate-on-scroll">
              <span className="eyebrow">Lead Form</span>
              <h2 className="mt-3 text-display-sm font-bold text-ink-900">
                Request an RCM Consultation
              </h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                Fill out the form below and our team will get back to you to discuss your healthcare organization's revenue cycle needs.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl border border-primary-100 bg-primary-50/40 p-4">
                  <h3 className="text-sm font-bold text-ink-900">What to Expect</h3>
                  <ul className="mt-3 space-y-2">
                    {[
                      'An initial discussion about your RCM needs',
                      'Assessment of your current revenue cycle setup',
                      'Recommendations for managed service support',
                      'Partnership options tailored to your organization',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-ink-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-success-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-warning-200 bg-warning-50/50 p-4">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="h-4.5 w-4.5 text-warning-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-ink-700">
                      <strong>Please do not submit patient health information (PHI)</strong> through this form. This form is for business inquiries only.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-8 animate-on-scroll">
              <div className="card !p-8 lg:!p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-50 text-success-600">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-ink-900">Thank You</h3>
                    <p className="mt-3 text-ink-600 max-w-md">
                      Your email client should have opened with your inquiry pre-filled. If it didn't, please email us directly at{' '}
                      <a href={`mailto:${company.email}`} className="font-semibold text-primary-700 hover:underline">
                        {company.email}
                      </a>.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData(initialFormData);
                      }}
                      className="mt-6 btn-secondary"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="fullName" className="label-field">
                          Full Name <span className="text-error-500">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="organization" className="label-field">
                          Organization <span className="text-error-500">*</span>
                        </label>
                        <input
                          id="organization"
                          name="organization"
                          type="text"
                          required
                          value={formData.organization}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Organization Name"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="jobTitle" className="label-field">Job Title</label>
                        <input
                          id="jobTitle"
                          name="jobTitle"
                          type="text"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Practice Manager"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="label-field">
                          Email <span className="text-error-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="jane@organization.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="label-field">Phone</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="specialty" className="label-field">Specialty</label>
                        <select
                          id="specialty"
                          name="specialty"
                          value={formData.specialty}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select a specialty</option>
                          {specialtyOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="numProviders" className="label-field">Number of Providers</label>
                        <input
                          id="numProviders"
                          name="numProviders"
                          type="text"
                          value={formData.numProviders}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="e.g., 10-50"
                        />
                      </div>
                      <div>
                        <label htmlFor="numLocations" className="label-field">Number of Locations</label>
                        <input
                          id="numLocations"
                          name="numLocations"
                          type="text"
                          value={formData.numLocations}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="e.g., 1-3"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="currentRcmSetup" className="label-field">Current RCM Setup</label>
                        <select
                          id="currentRcmSetup"
                          name="currentRcmSetup"
                          value={formData.currentRcmSetup}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select an option</option>
                          <option value="In-house billing team">In-house billing team</option>
                          <option value="Outsourced to a billing company">Outsourced to a billing company</option>
                          <option value="Hybrid (in-house + outsourced)">Hybrid (in-house + outsourced)</option>
                          <option value="No dedicated RCM team">No dedicated RCM team</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="servicesNeeded" className="label-field">Services Needed</label>
                        <select
                          id="servicesNeeded"
                          name="servicesNeeded"
                          value={formData.servicesNeeded}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select a service area</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="label-field">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="input-field resize-none"
                        placeholder="Tell us about your revenue cycle needs, challenges, or partnership interests."
                      />
                    </div>

                    {error && (
                      <div className="rounded-xl border border-error-200 bg-error-50/50 px-4 py-3 text-sm text-error-700">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          {error}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-4 pt-2">
                      <p className="text-xs text-ink-400">
                        <strong>Notice:</strong> Do not submit PHI through this form.
                      </p>
                      <button type="submit" className="btn-primary">
                        Send Inquiry
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-white">
        <div className="container-adv">
          <div className="mx-auto max-w-2xl text-center animate-on-scroll">
            <h2 className="text-2xl font-bold text-ink-900">Prefer to Reach Out Directly?</h2>
            <p className="mt-3 text-ink-600">
              We're available by email and phone. We welcome conversations with healthcare providers, RCM companies, and strategic partners.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={`mailto:${company.email}`} className="btn-primary">
                <Mail className="h-4 w-4" />
                Email Our Team
              </a>
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn-secondary">
                <Phone className="h-4 w-4" />
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
