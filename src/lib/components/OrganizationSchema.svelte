<script lang="ts">
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'IttyTools',
		url: 'https://ittytools.com',
		logo: 'https://ittytools.com/favicon.svg',
		description: 'Free online tools for tech, social media, and travel. Simple tools that just work. No registration, no ads.',
		sameAs: [],
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer support',
			availableLanguage: ['Dutch', 'English']
		}
	};

	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'IttyTools',
		url: 'https://ittytools.com',
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: 'https://ittytools.com/?q={search_term_string}'
			},
			'query-input': 'required name=search_term_string'
		}
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`}
</svelte:head>
