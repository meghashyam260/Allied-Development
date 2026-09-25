import {
  HeartPulse,
  ShieldCheck,
  ClipboardCheck,
  FileText,
  Receipt,
  CreditCard,
  Users,
  Stethoscope,
  Brain,
  Smile,
  Activity,
  Bone,
  Building2,
  Microscope,
  Server,
  BarChart3,
  Lock,
  Workflow,
  MonitorCheck,
  Network,
  Handshake,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  type LucideIcon,
} from 'lucide-react';

// ─── Company Info ───
export const company = {
  name: 'Allied Development Venture',
  abbr: 'ADV',
  full: 'Allied Development Venture (ADV)',
  founded: '2024',
  hq: 'India',
  usPresence: 'California & Texas',
  email: 'Allied@ADBPrivateLimited.online',
  phone: '+91 97406 98592',
  positioning: 'Healthcare Revenue Cycle Management, Managed Services & Technology Solutions',
  altPositioning: 'Building the Next Generation of Healthcare Revenue Cycle Management',
};

// ─── Navigation ───
export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'RCM Services', path: '/services' },
  { label: 'Specialties', path: '/specialties' },
  { label: 'Technology', path: '/technology' },
  { label: 'Security', path: '/security' },
  { label: 'Partnerships', path: '/partnerships' },
  { label: 'Leadership', path: '/leadership' },
  { label: 'Contact', path: '/contact' },
];

// ─── SEO Metadata ───
export interface SeoMeta {
  title: string;
  description: string;
}

export const seoData: Record<string, SeoMeta> = {
  home: {
    title: 'Allied Development Venture (ADV) — Healthcare Revenue Cycle Management',
    description:
      'Managed RCM services, administrative support, and technology-enabled solutions for U.S. healthcare organizations. Medical billing, coding, denials, A/R, and end-to-end revenue cycle management.',
  },
  about: {
    title: 'About ADV — Healthcare RCM & Global Capability Center | Allied Development Venture',
    description:
      'Founded in 2024, ADV connects India-based operational expertise with U.S. healthcare providers through a scalable RCM and Global Capability Center model.',
  },
  services: {
    title: 'RCM Services — End-to-End Revenue Cycle Management | ADV',
    description:
      'Front-end RCM, medical billing, coding support, claims, denial management, A/R, payment posting, patient billing, credentialing, and analytics services.',
  },
  specialties: {
    title: 'Specialties We Serve — Cardiology, Dental, Behavioral Health & More | ADV',
    description:
      'RCM support for cardiology, primary care, behavioral health, dental, dermatology, orthopedics, physical therapy, and small-to-medium-sized hospitals.',
  },
  technology: {
    title: 'Technology & Automation — Workflow-Enabled RCM | ADV',
    description:
      'Technology-enabled revenue cycle workflows, claims management, A/R tracking, denial workflows, reporting dashboards, and operational analytics.',
  },
  security: {
    title: 'Security & Compliance — Healthcare Data Protection | ADV',
    description:
      'Data privacy, access controls, secure data handling, workforce training, business continuity, and auditability for healthcare RCM operations.',
  },
  partnerships: {
    title: 'Partner With ADV — Healthcare RCM Partnerships | Allied Development Venture',
    description:
      'Partnership opportunities for healthcare providers, RCM companies, healthcare technology companies, and strategic partners.',
  },
  leadership: {
    title: 'Leadership Team | Allied Development Venture (ADV)',
    description:
      'Meet the leadership team behind Allied Development Venture — a healthcare RCM and managed services organization.',
  },
  contact: {
    title: 'Contact ADV — Talk to an RCM Specialist | Allied Development Venture',
    description:
      'Contact Allied Development Venture for RCM consultations, managed-service discussions, and strategic partnerships. Email and phone available.',
  },
};

// ─── Hero Alternatives ───
export const heroAlternatives: string[] = [
  'Healthcare Revenue Cycle Management Built for Scalable Growth',
  'Managed RCM Services for U.S. Healthcare Providers',
  'Your Healthcare Revenue Cycle Operations Partner',
  'Scalable RCM, Managed Services & Technology for Healthcare',
  'Building the Next Generation of Healthcare Revenue Cycle Management',
];

// ─── Value Proposition Cards ───
export interface ValueCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const valueCards: ValueCard[] = [
  {
    icon: ClipboardCheck,
    title: 'Managed RCM Services',
    description:
      'End-to-end operational support across the revenue cycle — from eligibility and authorization through claims, payment posting, denials, and A/R.',
  },
  {
    icon: Server,
    title: 'Technology-Enabled Operations',
    description:
      'Technology and automation designed to improve workflow visibility, consistency, and scalability across revenue cycle operations.',
  },
  {
    icon: Stethoscope,
    title: 'Specialty-Focused Support',
    description:
      'RCM support across physician practices, specialty clinics, dental, behavioral health, physical therapy, and small-to-medium-sized hospitals.',
  },
  {
    icon: Handshake,
    title: 'Collaborative Partnership',
    description:
      'Flexible support for healthcare providers, RCM companies, and strategic partners — built around your operational requirements.',
  },
];

// ─── Business Model Pillars ───
export interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const businessPillars: Pillar[] = [
  {
    icon: ClipboardCheck,
    title: 'Managed RCM Services',
    description:
      'Operational support across the healthcare revenue cycle, including front-end, middle-office, and back-end RCM functions.',
  },
  {
    icon: Workflow,
    title: 'Technology & Automation',
    description:
      'Technology-enabled workflows and automation designed to improve operational efficiency, visibility, consistency, and scalability.',
  },
  {
    icon: Globe,
    title: 'Global Capability Center Model',
    description:
      'A scalable healthcare RCM GCC model that supports U.S. healthcare organizations and collaborates with RCM companies and healthcare partners.',
  },
];

// ─── RCM Service Categories ───
export interface ServiceCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  services: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    icon: Users,
    title: 'Front-End Revenue Cycle',
    description:
      'Patient access and front-end RCM functions to support accurate and efficient revenue cycle starts.',
    services: [
      'Patient Registration & Demographic Management',
      'Insurance Eligibility Verification',
      'Benefits Verification',
      'Prior Authorization Support',
      'Patient Information Validation',
      'Insurance Verification',
    ],
  },
  {
    icon: FileText,
    title: 'Medical Billing & Claims',
    description:
      'Core billing and claims operations, from charge entry through submission, scrubbing, and follow-up.',
    services: [
      'Charge Entry',
      'Medical Billing',
      'Claims Submission',
      'Claim Scrubbing / Claim Quality Review',
      'Claim Status Follow-Up',
      'Electronic Claim Management',
      'Insurance Follow-Up',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Coding & Documentation Support',
    description:
      'Administrative coding and documentation support for RCM purposes — not clinical care or clinical decision-making.',
    services: [
      'Medical Coding',
      'Coding Support',
      'Clinical Documentation Review',
      'Documentation Quality Support',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Denial Management',
    description:
      'Identification, analysis, and follow-up on denied claims, with root-cause focus and appeals support.',
    services: [
      'Denial Identification',
      'Denial Analysis',
      'Denial Follow-Up',
      'Claim Correction',
      'Appeals Support',
      'Denial Trend Reporting',
      'Root-Cause Analysis',
    ],
  },
  {
    icon: Receipt,
    title: 'Accounts Receivable',
    description:
      'Comprehensive A/R management — from routine follow-up to aging analysis, underpayments, and A/R cleanup.',
    services: [
      'A/R Follow-Up',
      'Aging A/R Management',
      'Insurance A/R',
      'Patient A/R',
      'Underpayment Identification',
      'Underpayment Recovery',
      'A/R Cleanup',
      'A/R Reporting',
    ],
  },
  {
    icon: CreditCard,
    title: 'Payment & Financial Operations',
    description:
      'Payment posting, remittance processing, credit balance, refund, and reconciliation support.',
    services: [
      'Payment Posting',
      'Electronic Remittance Processing',
      'Manual Payment Posting',
      'Credit Balance Support',
      'Refund Support',
      'Reconciliation Support',
    ],
  },
  {
    icon: FileText,
    title: 'Patient Billing',
    description:
      'Patient-facing billing operations, including statements, inquiries, and patient A/R follow-up.',
    services: [
      'Patient Statements',
      'Patient Billing Support',
      'Patient A/R Follow-Up',
      'Billing Inquiry Support',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Provider & Practice Support',
    description:
      'Credentialing, enrollment, RCM reporting, analytics, and operational reporting for practices and providers.',
    services: [
      'Credentialing Support',
      'Provider Enrollment Support',
      'RCM Reporting',
      'Revenue Cycle Analytics',
      'Operational Reporting',
    ],
  },
];

export const endToEndRcm: string[] = [
  'Eligibility',
  'Authorization',
  'Charge Entry',
  'Coding Support',
  'Claims',
  'Payment Posting',
  'Denials',
  'A/R',
  'Reporting',
];

// ─── Specialties ───
export interface Specialty {
  icon: LucideIcon;
  name: string;
  slug: string;
  description: string;
  services: string[];
}

export const specialties: Specialty[] = [
  {
    icon: HeartPulse,
    name: 'Cardiology',
    slug: 'cardiology',
    description:
      'RCM support for cardiology practices, including billing operations, claims, coding support, denials, and A/R management.',
    services: ['Billing operations', 'Claims management', 'Coding support', 'Denial management', 'A/R management'],
  },
  {
    icon: Stethoscope,
    name: 'Primary Care',
    slug: 'primary-care',
    description:
      'Support for primary-care practices with eligibility, claims, billing operations, denial management, and A/R.',
    services: ['Eligibility verification', 'Claims management', 'Billing operations', 'Denial management', 'A/R follow-up'],
  },
  {
    icon: Brain,
    name: 'Behavioral Health',
    slug: 'behavioral-health',
    description:
      'Support for behavioral-health organizations with eligibility, authorization support, claims, denials, billing, and A/R.',
    services: ['Eligibility verification', 'Authorization support', 'Claims management', 'Denial management', 'Billing & A/R'],
  },
  {
    icon: Smile,
    name: 'Dental',
    slug: 'dental',
    description:
      'Support for dental practices with eligibility verification, insurance claims, billing, payment posting, insurance follow-up, and A/R.',
    services: ['Eligibility verification', 'Insurance claims', 'Billing', 'Payment posting', 'Insurance follow-up', 'A/R'],
  },
  {
    icon: Activity,
    name: 'Dermatology',
    slug: 'dermatology',
    description:
      'Support for dermatology practices with billing, coding support, claims, denials, and A/R management.',
    services: ['Billing operations', 'Coding support', 'Claims management', 'Denial management', 'A/R management'],
  },
  {
    icon: Bone,
    name: 'Orthopedics',
    slug: 'orthopedics',
    description:
      'Support for orthopedic practices with authorization support, billing, coding support, claims, denials, and A/R management.',
    services: ['Authorization support', 'Billing operations', 'Coding support', 'Claims management', 'Denial & A/R management'],
  },
  {
    icon: Activity,
    name: 'Physical Therapy',
    slug: 'physical-therapy',
    description:
      'Support for PT organizations with eligibility, authorization support, claims, billing, and A/R follow-up.',
    services: ['Eligibility verification', 'Authorization support', 'Claims management', 'Billing operations', 'A/R follow-up'],
  },
  {
    icon: Building2,
    name: 'Small & Medium-Sized Hospitals',
    slug: 'small-medium-hospitals',
    description:
      'Scalable RCM and administrative support for small and medium-sized hospitals.',
    services: ['Scalable RCM support', 'Administrative support', 'A/R management', 'Denial management', 'Operational reporting'],
  },
];

// ─── Who We Support ───
export const whoWeSupport: string[] = [
  'Independent physician practices',
  'Specialty clinics',
  'Multi-location healthcare practices',
  'Small and medium-sized medical groups',
  'Dental practices',
  'Behavioral health organizations',
  'Physical therapy organizations',
  'Small and medium-sized hospitals',
  'Healthcare organizations seeking additional RCM capacity',
  'RCM companies seeking operational partnerships',
  'Healthcare organizations exploring managed RCM services',
];

// ─── Why Partner ───
export interface WhyPartner {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyPartner: WhyPartner[] = [
  {
    icon: HeartPulse,
    title: 'Healthcare RCM Focus',
    description: 'ADV focuses on healthcare revenue cycle and administrative operations.',
  },
  {
    icon: ClipboardCheck,
    title: 'Managed Service Model',
    description: 'Flexible operational support based on the client\u2019s requirements.',
  },
  {
    icon: Server,
    title: 'Technology-Enabled Operations',
    description: 'Combine human expertise with technology and workflow automation where appropriate.',
  },
  {
    icon: Network,
    title: 'Scalable Delivery',
    description: 'Build processes designed to scale with client requirements.',
  },
  {
    icon: Globe,
    title: 'India + U.S. Connectivity',
    description: 'Headquartered in India with U.S. presence in California and Texas.',
  },
  {
    icon: Handshake,
    title: 'Collaborative Partnership Model',
    description: 'Work collaboratively with RCM organizations, healthcare partners, and providers.',
  },
  {
    icon: Building2,
    title: 'GCC-Oriented Vision',
    description: 'Developing a Global Capability Center approach for healthcare RCM and managed services.',
  },
  {
    icon: BarChart3,
    title: 'Administrative Efficiency',
    description: 'Help address revenue-cycle administrative workload so internal teams can focus on core operations.',
  },
];

// ─── Partnership Types ───
export interface PartnershipType {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const partnershipTypes: PartnershipType[] = [
  {
    icon: HeartPulse,
    title: 'Healthcare Providers',
    description: 'Support internal teams with managed RCM and administrative services.',
  },
  {
    icon: Network,
    title: 'RCM Companies',
    description: 'Collaborate as an operational / service-delivery partner where appropriate.',
  },
  {
    icon: Server,
    title: 'Healthcare Technology Companies',
    description: 'Explore technology-enabled RCM and workflow opportunities.',
  },
  {
    icon: Handshake,
    title: 'Strategic Partners',
    description: 'Develop collaborative healthcare operations and service models.',
  },
];

// ─── Leadership ───
export interface Leader {
  name: string;
  role: string;
  photo: string | null;
}

export const leaders: Leader[] = [
  { name: 'Anand Velu', role: 'Owner & Investor', photo:'/and.jpg' },
  { name: 'Mega Shyam', role: 'Founder & CEO','/meg.jpg'  },
  { name: 'Saravanan', role: 'COO & Internal Management / Employee Operations Head', photo:'/sar.jpg' },
  { name: 'Mytheli', role: 'COO / Finance / Employee Operations', photo: null },
];

// ─── Capabilities (placeholders) ───
export interface Capability {
  label: string;
  value: string;
}

export const capabilities: Capability[] = [
  { label: 'Years of Combined Leadership Experience', value: '[TO BE CONFIRMED]' },
  { label: 'Healthcare Clients Supported', value: '[TO BE CONFIRMED]' },
  { label: 'Providers Supported', value: '[TO BE CONFIRMED]' },
  { label: 'Monthly Claims Processed', value: '[TO BE CONFIRMED]' },
  { label: 'RCM Professionals', value: '[TO BE CONFIRMED]' },
  { label: 'States Served', value: '[TO BE CONFIRMED]' },
  { label: 'Client Retention', value: '[TO BE CONFIRMED]' },
  { label: 'Average Turnaround Metrics', value: '[TO BE CONFIRMED]' },
];

// ─── Technology Areas ───
export interface TechArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const techAreas: TechArea[] = [
  { icon: Workflow, title: 'Workflow Automation', description: 'Automated revenue cycle workflows to reduce manual effort and improve consistency.' },
  { icon: Network, title: 'Revenue Cycle Workflow Management', description: 'Structured workflow management across the full revenue cycle.' },
  { icon: FileText, title: 'Claims Workflow', description: 'Organized claims processing workflows from submission through resolution.' },
  { icon: Receipt, title: 'A/R Tracking', description: 'A/R tracking and aging visibility to support follow-up prioritization.' },
  { icon: ShieldCheck, title: 'Denial Workflow', description: 'Structured denial management workflows for identification, analysis, and resolution.' },
  { icon: BarChart3, title: 'Reporting Dashboards', description: 'Operational dashboards for visibility into RCM performance.' },
  { icon: MonitorCheck, title: 'Operational Analytics', description: 'Analytics to support decision-making and operational improvement.' },
  { icon: Globe, title: 'Data Visibility', description: 'Improved data visibility across revenue cycle operations.' },
  { icon: ClipboardCheck, title: 'Process Standardization', description: 'Standardized processes for consistency and quality.' },
  { icon: ClipboardCheck, title: 'Task Management', description: 'Task-level management for organized operational execution.' },
  { icon: Activity, title: 'Performance Monitoring', description: 'Ongoing performance monitoring across RCM functions.' },
  { icon: Network, title: 'Integration-Ready Workflows', description: 'Workflows designed to be integration-ready where appropriate.' },
];

export const techPlaceholders: Capability[] = [
  { label: 'EHR/PM Systems Supported', value: '[ADD SYSTEMS]' },
  { label: 'Automation Platforms', value: '[ADD PLATFORMS]' },
  { label: 'Analytics / Reporting Tools', value: '[ADD TOOLS]' },
];

// ─── Security & Compliance ───
export interface SecurityArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const securityAreas: SecurityArea[] = [
  { icon: Lock, title: 'Data Privacy', description: 'Practices and controls to support the protection of sensitive healthcare data.' },
  { icon: ShieldCheck, title: 'Access Controls', description: 'Controlled system access with authentication and authorization mechanisms.' },
  { icon: Users, title: 'Role-Based Access', description: 'Access granted on a role-based, need-to-know basis.' },
  { icon: Lock, title: 'Secure Data Handling', description: 'Procedures for secure handling, processing, and storage of data.' },
  { icon: ShieldCheck, title: 'Employee Confidentiality', description: 'Confidentiality agreements and workforce obligations.' },
  { icon: Globe, title: 'Secure Communication', description: 'Secure channels for communication and data exchange.' },
  { icon: Lock, title: 'Controlled System Access', description: 'Restricted and monitored access to client systems and data.' },
  { icon: ClipboardCheck, title: 'Workforce Training', description: 'Training programs focused on data privacy and security awareness.' },
  { icon: MonitorCheck, title: 'Auditability', description: 'Processes designed to support auditability and traceability.' },
  { icon: ShieldCheck, title: 'Business Continuity', description: 'Business continuity planning to support operational resilience.' },
  { icon: Activity, title: 'Incident Response', description: 'Incident response procedures for security events.' },
  { icon: Globe, title: 'Secure Remote Operations', description: 'Secure remote operational models with appropriate controls.' },
];

export const complianceStatuses: Capability[] = [
  { label: 'HIPAA Compliance / HIPAA Program', value: '[CONFIRM STATUS]' },
  { label: 'Business Associate Agreement', value: '[CONFIRM WHETHER OFFERED]' },
  { label: 'SOC 2', value: '[IF CERTIFIED, ADD DETAILS]' },
  { label: 'ISO Certification', value: '[IF CERTIFIED, ADD DETAILS]' },
  { label: 'Other Certifications', value: '[ADD]' },
];

// ─── CTA Presets ───
export const ctaPresets = {
  primary: 'Talk to an RCM Specialist',
  secondary: 'Explore Our Services',
  consultation: 'Request an RCM Consultation',
  discuss: 'Discuss Your RCM Needs',
  explore: 'Explore RCM Services',
  partner: 'Partner With ADV',
  assessment: 'Request a Service Assessment',
  contact: 'Contact Our Team',
};

// ─── Contact info icons ───
export const contactIcons = { Mail, Phone, MapPin, Globe };

// ─── Images ───
export const images = {
  heroMedical: 'https://images.pexels.com/photos/7195195/pexels-photo-7195195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  healthcareTeam: 'https://images.pexels.com/photos/6129499/pexels-photo-6129499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  doctorWriting: 'https://images.pexels.com/photos/8376184/pexels-photo-8376184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  techDashboard: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  partnership: 'https://images.pexels.com/photos/6918529/pexels-photo-6918529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  security: 'https://images.pexels.com/photos/4973899/pexels-photo-4973899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  patientConsult: 'https://images.pexels.com/photos/7579823/pexels-photo-7579823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  codingScreen: 'https://images.pexels.com/photos/15277956/pexels-photo-15277956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  hospitalHallway: 'https://images.pexels.com/photos/6129644/pexels-photo-6129644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
};

// Re-export icons that pages may need directly
export { ArrowRight, Microscope };
