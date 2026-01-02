<script lang="ts">
	interface FAQ {
		question: string;
		answer: string;
	}

	interface Props {
		faqs: FAQ[];
	}

	let { faqs }: Props = $props();

	let schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map(faq => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>
