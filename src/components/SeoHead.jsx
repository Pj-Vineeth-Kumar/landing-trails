import { useEffect } from 'react';
import {
  OG_IMAGE,
  OG_IMAGE_ALT,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_TITLE,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
  buildStructuredData,
} from '../config/seo.js';

const META = [
  { name: 'description', content: SEO_DESCRIPTION },
  { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
  { name: 'author', content: SITE_NAME },
  { name: 'keywords', content: SEO_KEYWORDS.join(', ') },
  { name: 'theme-color', content: '#1950C6' },
  { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { property: 'og:type', content: 'website' },
  { property: 'og:site_name', content: SITE_NAME },
  { property: 'og:url', content: SITE_URL },
  { property: 'og:title', content: SEO_TITLE },
  { property: 'og:description', content: SEO_DESCRIPTION },
  { property: 'og:image', content: OG_IMAGE },
  { property: 'og:image:alt', content: OG_IMAGE_ALT },
  { property: 'og:locale', content: 'en_US' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: TWITTER_HANDLE },
  { name: 'twitter:title', content: SEO_TITLE },
  { name: 'twitter:description', content: SEO_DESCRIPTION },
  { name: 'twitter:image', content: OG_IMAGE },
  { name: 'twitter:image:alt', content: OG_IMAGE_ALT },
];

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/** Injects canonical URL, social meta, and JSON-LD structured data. */
export function SeoHead() {
  useEffect(() => {
    document.title = SEO_TITLE;
    document.documentElement.lang = 'en';

    upsertLink('canonical', SITE_URL);

    META.forEach(({ name, property, content }) => {
      if (name) upsertMeta('name', name, content);
      if (property) upsertMeta('property', property, content);
    });

    upsertJsonLd('globalcodio-structured-data', buildStructuredData());
  }, []);

  return null;
}
