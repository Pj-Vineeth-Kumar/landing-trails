/** Primary nav with dropdown groups. Items with `children` render a dropdown;
 *  `href` on a parent (optional) makes the label itself a link to an overview. */
export const SITE_NAV = [
  { href: '/', label: 'Home' },
  {
    label: 'Product',
    children: [
      { href: '/platform', label: 'Platform', desc: 'CodioCMS & CodioForms' },
      { href: '/ai-agents', label: 'Codio AI Agents', desc: 'Eight specialized agents' },
      { href: '/network', label: 'CodioNetwork', desc: 'Global service providers' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { href: '/services', label: 'Services Overview', desc: 'Migration, IT support, audit, managed ops' },
      { href: '/rfp-response', label: 'RFP Response', desc: 'We draft your technical answers' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { href: '/for-law-firms', label: 'For Immigration Law Firms', desc: 'Solo to enterprise practices' },
      { href: '/for-corporate-teams', label: 'For Corporate Teams', desc: 'In-house mobility & HR' },
    ],
  },
  { href: '/security', label: 'Security' },
  { href: '/contact', label: 'Contact' },
  {
    label: 'Company',
    href: '/about',
    children: [
      { href: '/about', label: 'About', desc: 'The next chapter in immigration tech' },
      { href: '/letter-from-the-founder', label: "Founder's Letter", desc: 'From Umesh Vaidyamath' },
    ],
  },
];

/** Flat list - kept for the SEO shell, footer fallbacks, and any flat consumers. */
export const SITE_NAV_LINKS = [
  { href: '/platform', label: 'Platform' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/network', label: 'Network' },
  { href: '/services', label: 'Services' },
  { href: '/security', label: 'Security' },
  { href: '/about', label: 'About' },
];

export const SIGN_IN_URL = 'https://app.globalcodio.ai/login';
export const SITE_URL = 'https://www.globalcodio.ai';
export const SUPPORT_EMAIL = 'info@globalcodio.ai';
export const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;
export const AUDIT_URL = '/free-tech-audit';

export const FOOTER_COLUMNS = [
  {
    title: 'Products',
    links: [
      { href: '/platform', label: 'CodioCMS' },
      { href: '/platform', label: 'CodioForms' },
      { href: '/ai-agents', label: 'Codio AI Agents' },
      { href: '/network', label: 'CodioNetwork' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/services', label: 'Migration & Onboarding' },
      { href: '/services', label: 'Configuration & Optimization' },
      { href: '/services', label: 'IT Support Services' },
      { href: '/rfp-response', label: 'RFP Response Service' },
      { href: '/services', label: 'Managed Operations' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { href: '/for-law-firms', label: 'For Immigration Law Firms' },
      { href: '/for-corporate-teams', label: 'For Corporate Teams' },
      { href: '/security', label: 'Security & Compliance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/letter-from-the-founder', label: 'Letter from the Founder' },
      { href: '/contact', label: 'Contact Us' },
      { href: AUDIT_URL, label: 'Book Free Tech Audit' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: SUPPORT_MAILTO, label: SUPPORT_EMAIL },
      { href: 'https://www.linkedin.com/company/globalcodio', label: 'LinkedIn' },
    ],
  },
];
