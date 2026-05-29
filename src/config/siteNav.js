/** Primary nav - order matches on-page scroll order */
export const SITE_NAV_LINKS = [
  { href: '#pillars', label: 'Pillars' },
  { href: '#platform', label: 'Platform' },
  { href: '#agents', label: 'Agents' },
  { href: '#customers', label: 'Teams' },
  { href: '#how', label: 'Questions' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#metrics', label: 'ROI' },
];

export const SIGN_IN_URL = 'https://app.globalcodio.ai/login';
export const SITE_URL = 'https://www.globalcodio.ai';
export const SUPPORT_EMAIL = 'support@globalcodio.ai';
export const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;

export const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: SITE_NAV_LINKS,
  },
  {
    title: 'Solutions',
    links: [
      { href: '#agents', label: 'AI Agents' },
      { href: '#pillars', label: 'Managed Operations' },
      { href: '#platform', label: 'Global Ecosystem' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: '#cta', label: 'Schedule a call' },
      { href: SUPPORT_MAILTO, label: SUPPORT_EMAIL },
      { href: 'tel:+18004252346', label: '+1 (800) GBL-CDIO' },
    ],
  },
];
