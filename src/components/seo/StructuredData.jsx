import React, { useMemo } from 'react';
import {
  BRAND_INFO,
  DOCTOR_DATA,
  FAQS,
  FOOTER_CONTENT,
} from '../../data/content';
import { getBaseUrl } from './seoConfig';

const normalizePhoneE164 = (raw) => {
  const digits = String(raw || '').replace(/\D/g, '');
  if (!digits) return undefined;
  if (digits.startsWith('51')) return `+${digits}`;
  return `+51${digits}`;
};

const parseAddress = (raw) => ({
  '@type': 'PostalAddress',
  streetAddress: raw,
  addressLocality: 'Arequipa',
  addressRegion: 'Arequipa',
  addressCountry: 'PE',
});

const StructuredData = () => {
  const jsonLd = useMemo(() => {
    const baseUrl = getBaseUrl();
    const phone = normalizePhoneE164(BRAND_INFO.phone);
    const sameAs = (FOOTER_CONTENT.social || [])
      .map((item) => item?.href)
      .filter(Boolean);

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          url: `${baseUrl}/`,
          name: 'Galene Salud Mental e Integrativa',
          inLanguage: 'es-PE',
        },
        {
          '@type': ['MedicalClinic', 'LocalBusiness'],
          '@id': `${baseUrl}/#clinic`,
          name: 'Galene Salud Mental e Integrativa',
          url: `${baseUrl}/`,
          telephone: phone,
          address: parseAddress(BRAND_INFO.address),
          areaServed: [{ '@type': 'City', name: 'Arequipa' }],
          medicalSpecialty: 'Psychiatry',
          hasMap: BRAND_INFO.mapLink,
          sameAs,
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:00',
              closes: '20:00',
            },
          ],
        },
        {
          '@type': 'Physician',
          '@id': `${baseUrl}/#doctor`,
          name: DOCTOR_DATA.name,
          jobTitle: DOCTOR_DATA.specialty,
          telephone: phone,
          address: parseAddress(BRAND_INFO.address),
          areaServed: [{ '@type': 'City', name: 'Arequipa' }],
          medicalSpecialty: 'Psychiatry',
          affiliation: { '@id': `${baseUrl}/#clinic` },
          sameAs,
        },
        {
          '@type': 'FAQPage',
          '@id': `${baseUrl}/#faq`,
          mainEntity: (FAQS || []).map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };
  }, []);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;

