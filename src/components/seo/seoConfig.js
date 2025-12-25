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

export function getSeoForPath(pathname) {
  if (!pathname) return DEFAULT_SEO;
  return ROUTE_SEO[pathname] ?? DEFAULT_SEO;
}

export function getBaseUrl() {
  let envUrl = import.meta.env.VITE_SITE_URL || import.meta.env.PUBLIC_SITE_URL;
  if (!envUrl && typeof process !== 'undefined') {
    envUrl = process.env.VITE_SITE_URL || process.env.PUBLIC_SITE_URL;
  }
  const raw = typeof envUrl === 'string' ? envUrl.trim() : '';
  if (raw) return raw.replace(/\/+$/, '');
  return '';
}
