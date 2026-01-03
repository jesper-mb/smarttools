<script lang="ts">
	import type { Language } from '$lib/i18n';
	import type { SupportedLang } from '$lib/config';

	interface Props {
		title: string;
		description: string;
		keywords?: string[];
		lang: Language;
		canonicalPath: string;
		alternatePath?: string; // Kept for backwards compatibility (old routes)
		alternateUrls?: Record<SupportedLang, string>; // New: explicit URLs for each language
		type?: 'website' | 'article';
		image?: string;
	}

	let {
		title,
		description,
		keywords = [],
		lang,
		canonicalPath,
		alternatePath,
		alternateUrls,
		type = 'website',
		image = '/og-image.png'
	}: Props = $props();

	const baseUrl = 'https://ittytools.com';
	let canonicalUrl = $derived(`${baseUrl}${canonicalPath}`);

	// Generate hreflang URLs for all 4 languages
	// If alternateUrls is provided, use those (new dynamic routes)
	// Otherwise, fall back to path-based calculation (old static routes)
	function getBasePath(path: string): string {
		// Remove language prefix to get base path
		if (path === '/' || path === '/nl' || path === '/de' || path === '/es') {
			return '/';
		}
		if (path.startsWith('/nl/')) {
			return path.replace(/^\/nl/, '');
		}
		if (path.startsWith('/de/')) {
			return path.replace(/^\/de/, '');
		}
		if (path.startsWith('/es/')) {
			return path.replace(/^\/es/, '');
		}
		return path; // Already English (no prefix)
	}

	function getLangPath(basePath: string, targetLang: string): string {
		if (basePath === '/') {
			return targetLang === 'en' ? '/' : `/${targetLang}`;
		}
		return targetLang === 'en' ? basePath : `/${targetLang}${basePath}`;
	}

	let basePath = $derived(getBasePath(canonicalPath));

	// Use explicit alternateUrls if provided, otherwise calculate from path
	let hreflangUrls = $derived(
		alternateUrls
			? {
					en: `${baseUrl}${alternateUrls.en}`,
					nl: `${baseUrl}${alternateUrls.nl}`,
					de: `${baseUrl}${alternateUrls.de}`,
					es: `${baseUrl}${alternateUrls.es}`
				}
			: {
					en: `${baseUrl}${getLangPath(basePath, 'en')}`,
					nl: `${baseUrl}${getLangPath(basePath, 'nl')}`,
					de: `${baseUrl}${getLangPath(basePath, 'de')}`,
					es: `${baseUrl}${getLangPath(basePath, 'es')}`
				}
	);

	// x-default points to English version
	let xDefaultUrl = $derived(hreflangUrls.en);

	// Get og:locale based on language
	function getOgLocale(language: Language): string {
		const locales: Record<Language, string> = {
			en: 'en_US',
			nl: 'nl_NL',
			de: 'de_DE',
			es: 'es_ES'
		};
		return locales[language];
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if keywords.length > 0}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}

	<link rel="canonical" href={canonicalUrl} />

	<!-- hreflang tags for all 4 languages -->
	<link rel="alternate" hreflang="en" href={hreflangUrls.en} />
	<link rel="alternate" hreflang="nl" href={hreflangUrls.nl} />
	<link rel="alternate" hreflang="de" href={hreflangUrls.de} />
	<link rel="alternate" hreflang="es" href={hreflangUrls.es} />
	<link rel="alternate" hreflang="x-default" href={xDefaultUrl} />

	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{baseUrl}{image}" />
	<meta property="og:locale" content={getOgLocale(lang)} />
	<meta property="og:site_name" content="IttyTools" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{baseUrl}{image}" />

	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
</svelte:head>
