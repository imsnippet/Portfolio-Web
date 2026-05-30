import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /
Disallow: /subhan-kashif-resume.pdf

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
    const sitemapURL = new URL('sitemap-index.xml', site);
    return new Response(getRobotsTxt(sitemapURL));
};
