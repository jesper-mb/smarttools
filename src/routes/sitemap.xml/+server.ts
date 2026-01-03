import { toolRegistry, categoryRegistry, getToolPath, getCategoryPath, getHomePath } from '$lib/config';
import type { SupportedLang } from '$lib/config';

const baseUrl = 'https://ittytools.com';
const languages: SupportedLang[] = ['en', 'nl', 'de', 'es'];

interface SitemapUrl {
	loc: string;
	priority: string;
	changefreq: string;
	alternates: Record<SupportedLang, string>;
}

export async function GET() {
	const today = new Date().toISOString().split('T')[0];
	const urls: SitemapUrl[] = [];

	// Homepage for all languages
	const homeAlternates: Record<SupportedLang, string> = {
		en: '/',
		nl: '/nl',
		de: '/de',
		es: '/es'
	};

	languages.forEach((lang) => {
		urls.push({
			loc: getHomePath(lang),
			priority: '1.0',
			changefreq: 'weekly',
			alternates: homeAlternates
		});
	});

	// Category pages for all languages
	for (const categoryKey of Object.keys(categoryRegistry) as Array<keyof typeof categoryRegistry>) {
		const alternates = {} as Record<SupportedLang, string>;
		languages.forEach((lang) => {
			alternates[lang] = getCategoryPath(categoryKey, lang);
		});

		languages.forEach((lang) => {
			urls.push({
				loc: getCategoryPath(categoryKey, lang),
				priority: '0.9',
				changefreq: 'weekly',
				alternates
			});
		});
	}

	// Tool pages for all languages
	for (const toolKey of Object.keys(toolRegistry)) {
		const alternates = {} as Record<SupportedLang, string>;
		languages.forEach((lang) => {
			alternates[lang] = getToolPath(toolKey, lang);
		});

		languages.forEach((lang) => {
			urls.push({
				loc: getToolPath(toolKey, lang),
				priority: '0.8',
				changefreq: 'monthly',
				alternates
			});
		});
	}

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
	.map(
		(page) => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${page.alternates.en}" />
    <xhtml:link rel="alternate" hreflang="nl" href="${baseUrl}${page.alternates.nl}" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}${page.alternates.de}" />
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${page.alternates.es}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.alternates.en}" />
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
