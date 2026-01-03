<script lang="ts">
	import { currentLang } from '$lib/i18n';

	interface Crumb {
		label: string;
		href?: string;
	}

	interface Props {
		items: Crumb[];
	}

	let { items }: Props = $props();
	let lang = $derived($currentLang);
	let baseUrl = 'https://ittytools.com';
	let homeUrl = $derived(lang === 'en' ? baseUrl : `${baseUrl}/${lang}`);

	// Generate BreadcrumbList schema
	let schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: homeUrl
			},
			...items.map((item, i) => ({
				'@type': 'ListItem',
				position: i + 2,
				name: item.label,
				...(item.href ? { item: `${baseUrl}${item.href}` } : {})
			}))
		]
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm">
	<a
		href={lang === 'en' ? '/' : `/${lang}`}
		class="text-neutral-400 hover:text-neutral-950 transition-colors"
	>
		~
	</a>
	{#each items as item, i}
		<span class="text-neutral-300">/</span>
		{#if item.href && i < items.length - 1}
			<a
				href={item.href}
				class="text-neutral-400 hover:text-neutral-950 transition-colors"
			>
				{item.label}
			</a>
		{:else}
			<span class="text-neutral-950 font-medium">{item.label}</span>
		{/if}
	{/each}
</nav>
