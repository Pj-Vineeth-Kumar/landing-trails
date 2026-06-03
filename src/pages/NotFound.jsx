import React from 'react';
import { Seo } from '../components/Seo.jsx';
import { PageHero } from '../components/PageKit.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <PageHero
        eyebrow="404"
        lead="This page took"
        emphasis="a different route."
        sub="The page you’re looking for isn’t here. Let’s get you back on track."
        primary={{ href: '/', label: 'Back to home' }}
        secondary={{ href: '/contact', label: 'Book a tech audit' }}
      />
    </>
  );
}
