import React from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero, Section, CtaBand, SmartLink } from '../components/PageKit.jsx';
import { MapPin, Calendar, Monitor, ExternalLink } from 'lucide-react';

const EVENTS = [
  {
    id: 'aila-ac26',
    badge: 'National Flagship',
    badgeTone: 'blue',
    month: 'June 2026',
    name: 'AILA Annual Conference & Webcast',
    abbr: 'AILA AC26',
    dates: 'June 17 – 20, 2026',
    location: 'San Diego, California',
    venues: ['Marriott Marquis San Diego Marina', 'Manchester Grand Hyatt San Diego'],
    format: 'In-person & online webcast',
    scope: 'National & international',
    sessions: '110+ CLE-eligible sessions',
    topics: ['Family immigration', 'Business immigration', 'Removal defense'],
    special: [
      'Global Migration Forum — June 15–16',
      'San Diego Chapter Welcome Taco Party — June 17',
      'Saturday Night Party at the San Diego Zoo',
    ],
    website: '#',
    websiteLabel: 'AILA AC26 Conference Portal',
    accentColor: 'var(--blue)',
  },
  {
    id: 'aila-ca26',
    badge: 'Regional Deep-Dive',
    badgeTone: 'ink',
    month: 'November 2026',
    name: '39th Annual AILA California Chapters Conference',
    abbr: 'AILA CA Chapters',
    dates: 'November 5 – 7, 2026',
    location: 'San Francisco, California',
    venues: ['Hyatt Regency San Francisco Downtown-SOMA'],
    format: 'In-person & online webcast',
    scope: 'Regional & advanced',
    sessions: 'Advanced West Coast strategy tracks',
    topics: ['Ninth Circuit updates', 'Regional enforcement priorities', 'Specialized compliance panels'],
    special: [],
    website: '#',
    websiteLabel: 'AILA CA Chapters Conference Page',
    accentColor: 'var(--ink-2)',
  },
];

const COMPARISON = [
  { label: 'Scope', june: 'National & international', nov: 'Regional & advanced' },
  { label: 'Venues', june: 'Multi-property', nov: 'Single-property boutique' },
  { label: 'Sessions', june: '110+ CLE-eligible sessions', nov: 'Advanced West Coast tracks' },
  { label: 'Format', june: 'In-person & webcast', nov: 'In-person & webcast' },
];

function EventCard({ event, index }) {
  return (
    <article className={`event-card reveal d${(index % 3) + 1}`} aria-labelledby={`event-title-${event.id}`}>
      <div className="event-card-top">
        <div className="event-card-badges">
          <span className={`event-badge event-badge--${event.badgeTone}`}>{event.badge}</span>
          <span className="event-month mono">{event.month}</span>
        </div>
        <h2 className="display event-card-title" id={`event-title-${event.id}`}>{event.name}</h2>
      </div>

      <div className="event-card-meta">
        <div className="event-meta-row">
          <Calendar size={14} strokeWidth={1.75} aria-hidden="true" />
          <span>{event.dates}</span>
        </div>
        <div className="event-meta-row">
          <MapPin size={14} strokeWidth={1.75} aria-hidden="true" />
          <span>{event.location}</span>
        </div>
        <div className="event-meta-row">
          <Monitor size={14} strokeWidth={1.75} aria-hidden="true" />
          <span>{event.format}</span>
        </div>
      </div>

      <hr className="rule-blue" />

      <div className="event-card-body">
        <div className="event-venues">
          <span className="event-section-label mono">Venue{event.venues.length > 1 ? 's' : ''}</span>
          <ul className="event-venue-list">
            {event.venues.map(v => <li key={v}>{v}</li>)}
          </ul>
        </div>

        <div className="event-offerings">
          <span className="event-section-label mono">Key Offerings</span>
          <p className="event-sessions-lead">{event.sessions}</p>
          <ul className="event-topic-list">
            {event.topics.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>

        {event.special.length > 0 && (
          <div className="event-special">
            <span className="event-section-label mono">Special Events</span>
            <ul className="event-special-list">
              {event.special.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
        )}
      </div>

      <div className="event-card-footer">
        <SmartLink href={event.website} className="event-website-link">
          <ExternalLink size={13} strokeWidth={1.75} aria-hidden="true" />
          {event.websiteLabel}
        </SmartLink>
      </div>
    </article>
  );
}

export default function Events() {
  return (
    <>
      <Seo
        title="Events"
        description="GlobalCodio at the 2026 AILA conferences — June Annual Conference in San Diego and the November California Chapters Conference in San Francisco. Find us at both."
        path="/events"
      />

      <PageHero
        eyebrow="Events & Conferences"
        lead="Find us at AILA"
        emphasis="2026."
        headInline
        sub="GlobalCodio will be at both major 2026 AILA conferences. Meet our team, see the platform in action, and book a 30-minute tech audit on-site."
        primary={{ href: '/contact', label: 'Schedule a meeting' }}
        secondary={{ href: '/free-tech-audit', label: 'Book a free tech audit' }}
      />

      {/* Event cards */}
      <Section
        id="conferences"
        eyebrow="2026 Conferences"
        lead="Two events,"
        emphasis="one platform."
        headAlign="center"
        headInline
        intro="Both conferences offer in-person and webcast access. GlobalCodio will be present at each — reach out before the event to schedule time with our team."
      >
        <div className="events-grid">
          {EVENTS.map((ev, i) => <EventCard key={ev.id} event={ev} index={i} />)}
        </div>
      </Section>

      {/* Comparison table */}
      <Section
        id="comparison"
        tone="sec-surface"
        eyebrow="At a Glance"
        lead="June vs."
        emphasis="November."
        headAlign="center"
        headInline
      >
        <div className="events-compare reveal" style={{ marginTop: 'var(--space-3xl)' }}>
          <div className="events-compare-head">
            <div className="events-compare-label-col" />
            <div className="events-compare-col-head">
              <span className="mono" style={{ color: 'var(--blue)' }}>June — San Diego</span>
              <span className="display events-compare-col-title">AILA Annual</span>
            </div>
            <div className="events-compare-col-head">
              <span className="mono" style={{ color: 'var(--ink-3)' }}>November — San Francisco</span>
              <span className="display events-compare-col-title">CA Chapters</span>
            </div>
          </div>
          {COMPARISON.map(row => (
            <div key={row.label} className="events-compare-row">
              <div className="events-compare-label mono">{row.label}</div>
              <div className="events-compare-cell">{row.june}</div>
              <div className="events-compare-cell">{row.nov}</div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        lead="Attending an AILA"
        emphasis="conference this year?"
        sub="Book a 30-minute slot with our team before you arrive — or stop by and find us on the floor."
        primary={{ href: '/contact', label: 'Schedule a meeting' }}
        secondary={{ href: '/free-tech-audit', label: 'Book a free tech audit' }}
      />
    </>
  );
}
