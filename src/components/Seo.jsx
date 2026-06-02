import { useEffect } from 'react';
import { SITE_NAME, SITE_URL, SEO_TITLE, SEO_DESCRIPTION, OG_IMAGE, OG_IMAGE_ALT, TWITTER_HANDLE } from '../config/seo.js';

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

/**
 * Per-page SEO. Pass a page-specific title/description/path; falls back to the
 * site defaults. The home page's <title> stays the locked SEO_TITLE.
 */
export function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SEO_TITLE;
  const desc = description || SEO_DESCRIPTION;
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = 'en';
    upsertLink('canonical', url);
    upsertMeta('name', 'description', desc);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', desc);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', OG_IMAGE);
    upsertMeta('property', 'og:image:alt', OG_IMAGE_ALT);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:site', TWITTER_HANDLE);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', desc);
    upsertMeta('name', 'twitter:image', OG_IMAGE);
  }, [fullTitle, desc, url]);

  return null;
}
