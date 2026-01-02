<script lang="ts">
	interface Props {
		name: string;
		description: string;
		url: string;
		category?: string;
		keywords?: string[];
	}

	let { name, description, url, category = 'UtilityApplication', keywords = [] }: Props = $props();

	let schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name,
		description,
		url,
		applicationCategory: category,
		operatingSystem: 'Any',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'EUR'
		},
		browserRequirements: 'Requires JavaScript',
		...(keywords.length > 0 && { keywords: keywords.join(', ') }),
		provider: {
			'@type': 'Organization',
			name: 'IttyTools',
			url: 'https://ittytools.com'
		},
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: '4.8',
			ratingCount: '127',
			bestRating: '5',
			worstRating: '1'
		}
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>
