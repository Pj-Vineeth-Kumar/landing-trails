import React from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero, Section, FeatureGrid, CtaBand } from '../components/PageKit.jsx';
import { GitMerge, Settings, FileSearch, Server, Workflow, FileCheck } from 'lucide-react';

const SERVICE_LAYERS = [
  {
    Icon: GitMerge,
    n: '01',
    h: 'Migration & Onboarding',
    b: 'Move your firm from your existing case management platform to CodioCMS. Includes data migration, parallel operations, user training, and process documentation.',
    stat: 'Most migrations complete in 6 weeks',
  },
  {
    Icon: Settings,
    n: '02',
    h: 'Configuration & Optimization',
    b: "Configure CodioCMS to match your firm's exact workflows. Build templates, automations, and integrations that reflect how your firm actually operates - not generic out-of-the-box defaults.",
  },
  {
    Icon: FileSearch,
    n: '03',
    h: 'Process Documentation',
    b: "Capture the tribal knowledge that lives in your team's heads. We document every workflow your firm runs - turning institutional knowledge into systems that survive staff turnover.",
  },
  {
    Icon: Server,
    n: '04',
    h: 'IT Support Services',
    b: 'Full IT support for your firm. Helpdesk, device procurement and management, employee onboarding and offboarding, software provisioning, network and security monitoring. You stop being your own IT department.',
  },
  {
    Icon: Workflow,
    n: '05',
    h: 'Managed Operations',
    b: 'Ongoing day-to-day management of your complete GlobalCodio technology operation. Platform updates, AI agent tuning, network coordination, performance monitoring, and proactive support - handled by our team continuously.',
    featured: true,
  },
  {
    Icon: FileCheck,
    n: '06',
    h: 'RFP Response Support',
    b: 'When corporate clients send you RFPs with deep technical and security questions, we draft your responses. Available as a bundled add-on.',
    links: [{ href: '/rfp-response', label: 'Learn more' }],
  },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services - Your Complete Tech Partner"
        description="GlobalCodio Services is the team behind your technology operation: migration, configuration, IT support, security, RFP response, and managed operations. One partner. Everything handled."
        path="/services"
      />

      <PageHero
        eyebrow="GlobalCodio Services"
        lead="Your Complete"
        emphasis="Tech Partner."
        sub="GlobalCodio Services is the team behind your technology operation - migration, configuration, IT support, security, RFP response, and ongoing managed operations. One partner. Everything handled."
        primary={{ href: '/free-tech-audit', label: 'Book a free tech audit' }}
        secondary={{ href: '/rfp-response', label: 'See the RFP service' }}
      />

      <Section
        id="service-layers"
        eyebrow="What We Handle"
        lead="The Six"
        emphasis="Service Layers."
        intro="We handle migration, platform configuration, IT support, security, RFP response, and day-to-day operations-so your firm runs on one accountable partner instead of a patchwork of vendors and internal fixes."
        introMaxWidth="76ch"
        headAlign="center"
        headInline
      >
        <FeatureGrid items={SERVICE_LAYERS} cols={3} />
      </Section>

      <CtaBand
        lead="Stop managing technology."
        emphasis="Start winning cases."
        primary={{ href: '/free-tech-audit', label: 'Book your free tech audit' }}
        secondary={{ href: 'mailto:info@globalcodio.ai', label: 'Talk to our team' }}
      />
    </>
  );
}
