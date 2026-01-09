const DEFAULT_SEO = {
  title: 'Psiquiatra en Arequipa | Dr. Gustavo Paucar Chávez | Galene',
  description:
    'Psiquiatra en Arequipa. Atención presencial y online con el Dr. Gustavo Paucar Chávez (CMP 79326, RNE 048301). Especialista en ansiedad, depresión, insomnio y adicciones.',
};

const ROUTE_SEO = {
  '/': DEFAULT_SEO,
  '/privacidad': {
    title: 'Política de Privacidad | Galene',
    description: 'Política de privacidad del sitio web de Galene Salud Mental e Integrativa.',
  },
  '/terminos': {
    title: 'Términos de Uso | Galene',
    description: 'Términos de uso del sitio web de Galene Salud Mental e Integrativa.',
  },
};

const CANONICAL_HOST = 'www.galenesalud.com';
const FALLBACK_BASE_URL = `https://${CANONICAL_HOST}`;

const normalizeSiteUrl = (value) => {
  if (!value) return '';
  const trimmed = String(value).trim();
  if (!trimmed) return '';
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  return withScheme.replace(/\/+$/, '');
};

const canonicalizeSiteUrl = (value) => {
  if (!value) return '';
  try {
    const url = new URL(value);
    if (url.hostname === 'galenesalud.com') {
      url.hostname = CANONICAL_HOST;
    }
    if (url.hostname === CANONICAL_HOST) {
      url.protocol = 'https:';
    }
    return url.toString().replace(/\/$/, '');
  } catch {
    return value;
  }
};

export function getSeoForPath(pathname) {
  if (!pathname) return DEFAULT_SEO;
  return ROUTE_SEO[pathname] ?? DEFAULT_SEO;
}

export function getBaseUrl() {
  let envUrl = import.meta.env.VITE_SITE_URL || import.meta.env.PUBLIC_SITE_URL;
  if (!envUrl && typeof process !== 'undefined') {
    envUrl = process.env.VITE_SITE_URL || process.env.PUBLIC_SITE_URL;
  }
  const raw = envUrl || FALLBACK_BASE_URL;
  return canonicalizeSiteUrl(normalizeSiteUrl(raw));
}
