import { toolsMeta } from '$lib/seo/meta';

const baseUrl = 'https://ittytools.com';

export async function GET() {
	const today = new Date().toISOString().split('T')[0];

	// Static pages
	const staticPages = [
		{ url: '', priority: '1.0', changefreq: 'weekly' },
		{ url: '/en', priority: '1.0', changefreq: 'weekly' }
	];

	// Tool pages from meta
	const toolPages: Array<{ url: string; priority: string; changefreq: string }> = [];

	for (const [, meta] of Object.entries(toolsMeta)) {
		// Dutch version
		toolPages.push({
			url: `/${meta.nl.slug}`,
			priority: '0.8',
			changefreq: 'monthly'
		});
		// English version
		toolPages.push({
			url: `/en/${meta.en.slug}`,
			priority: '0.8',
			changefreq: 'monthly'
		});
	}

	const allPages = [...staticPages, ...toolPages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages
	.map(
		(page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
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
