import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getBaseUrl, getSeoForPath } from './seoConfig';

const upsertMetaByName = (name, content) => {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const upsertMetaByProperty = (property, content) => {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const upsertCanonical = (href) => {
  if (!href) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const { title, description } = getSeoForPath(location.pathname);
    const baseUrl = getBaseUrl();
    const canonicalUrl = baseUrl + (location.pathname === '/' ? '/' : location.pathname);

    document.title = title;
    upsertMetaByName('description', description);

    upsertCanonical(canonicalUrl);

    upsertMetaByProperty('og:title', title);
    upsertMetaByProperty('og:description', description);
    upsertMetaByProperty('og:url', canonicalUrl);

    upsertMetaByName('twitter:title', title);
    upsertMetaByName('twitter:description', description);
  }, [location.pathname]);

  return null;
};

export default SeoManager;

