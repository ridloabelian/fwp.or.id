import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, ogImage = '/og-image.jpg' }) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | Forum Wakaf Produktif` : 'Forum Wakaf Produktif';
  const canonical = `https://fwp.or.id${pathname}`;
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `https://fwp.or.id${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content="Forum Wakaf Produktif" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
    </Helmet>
  );
}
