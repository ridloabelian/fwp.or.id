import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, ogImage = '/og-image.jpg' }) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | Forum Wakaf Produktif` : 'Forum Wakaf Produktif';
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <link rel="canonical" href={`https://fwp.or.id${pathname}`} />
    </Helmet>
  );
}
