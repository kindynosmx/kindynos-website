import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, LOGO_URL, SITE_NAME, SITE_URL } from '@/lib/site'

export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: LOGO_URL,
        email: CONTACT_EMAIL,
        sameAs: [GITHUB_URL, LINKEDIN_URL],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'MX',
          addressLocality: 'Aguascalientes',
        },
      },
      {
        '@type': 'ProfessionalService',
        name: SITE_NAME,
        url: SITE_URL,
        image: LOGO_URL,
        email: CONTACT_EMAIL,
        areaServed: 'Worldwide',
        priceRange: '$$',
        serviceType: [
          'Blockchain development',
          'Smart contract engineering',
          'Web3 infrastructure',
          'Custom web applications',
          'Backend and API development',
          'Technical consulting',
        ],
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
