type Organization = {
  name: string;
  url: string;
  logo: string;
  description: string;
};

type Product = {
  name: string;
  description: string;
  image: string;
  manufacturer: Organization;
};

export function generateOrganizationSchema(locale: string): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://www.wheelweightsmachines.com",
    "name": "YILSA Wheel Weight Machines",
    "logo": "https://www.wheelweightsmachines.com/yilsa-logo.svg",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+90-xxx-xxx-xxxx",
      "contactType": "sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["en", "tr"]
    }],
    "sameAs": [
      "https://www.linkedin.com/company/yilsa",
      "https://www.youtube.com/@yilsa"
    ]
  };

  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

export function generateProductSchema(product: Product, locale: string): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "manufacturer": {
      "@type": "Organization",
      "name": product.manufacturer.name,
      "url": product.manufacturer.url,
      "logo": product.manufacturer.logo
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "Worldwide"
        }
      }
    }
  };

  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[], locale: string): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.wheelweightsmachines.com${item.url}`
    }))
  };

  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
