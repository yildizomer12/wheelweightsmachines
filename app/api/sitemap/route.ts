import { i18n } from '@/i18n-config';
import { NextResponse } from 'next/server';

const domain = 'https://www.adhesivewheelweight.com';

const routes = {
  // Priority 1.0 - Home
  home: { path: '', priority: '1.0', changefreq: 'weekly' },
  
  // Priority 0.9 - Machine Pages
  machines: [
    { path: 'wheel-weights', priority: '0.9', changefreq: 'weekly' },
    { path: 'chopping-and-marking-machine', priority: '0.9', changefreq: 'weekly' },
    { path: 'taping-and-packaging-machine', priority: '0.9', changefreq: 'weekly' },
    { path: 'decoiler-machine', priority: '0.9', changefreq: 'weekly' },
    { path: 'wire-flattening-machine', priority: '0.9', changefreq: 'weekly' },
    { path: 'rotary-punch', priority: '0.9', changefreq: 'weekly' },
  ],
  
  // Priority 0.8 - Information Pages
  info: [
    { path: 'about-us', priority: '0.8', changefreq: 'yearly' },
    { path: 'faq', priority: '0.8', changefreq: 'yearly' },
  ],
  
  // Priority 0.7 - Blog Pages
  blogs: [
    { path: 'blogs', priority: '0.7', changefreq: 'monthly' },
    { path: 'blogs/adhesive-wheel-weights-production', priority: '0.7', changefreq: 'monthly' },
  ],
};

function generateSitemapXML(): string {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  // Add home pages
  i18n.locales.forEach((locale) => {
    xml += `  <url>
    <loc>${domain}/${locale}${routes.home.path}</loc>
    ${i18n.locales
      .filter((l) => l !== locale)
      .map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${l}" href="${domain}/${l}${routes.home.path}"/>`
      )
      .join('\n')}
    <lastmod>${today}</lastmod>
    <changefreq>${routes.home.changefreq}</changefreq>
    <priority>${routes.home.priority}</priority>
  </url>\n`;
  });

  // Add machine pages
  routes.machines.forEach((page) => {
    i18n.locales.forEach((locale) => {
      xml += `  <url>
    <loc>${domain}/${locale}/${page.path}</loc>
    ${i18n.locales
      .filter((l) => l !== locale)
      .map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${l}" href="${domain}/${l}/${page.path}"/>`
      )
      .join('\n')}
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
    });
  });

  // Add information pages
  routes.info.forEach((page) => {
    i18n.locales.forEach((locale) => {
      xml += `  <url>
    <loc>${domain}/${locale}/${page.path}</loc>
    ${i18n.locales
      .filter((l) => l !== locale)
      .map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${l}" href="${domain}/${l}/${page.path}"/>`
      )
      .join('\n')}
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
    });
  });

  // Add blog pages
  routes.blogs.forEach((page) => {
    i18n.locales.forEach((locale) => {
      xml += `  <url>
    <loc>${domain}/${locale}/${page.path}</loc>
    ${i18n.locales
      .filter((l) => l !== locale)
      .map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${l}" href="${domain}/${l}/${page.path}"/>`
      )
      .join('\n')}
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
    });
  });

  xml += '</urlset>';
  return xml;
}

export async function GET() {
  const sitemap = generateSitemapXML();
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
