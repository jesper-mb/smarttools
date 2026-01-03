<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { getCategoryMeta, getToolMeta } from '$lib/seo/meta';
	import { getToolPath, getCategoryPath, getCategoryAlternateUrls } from '$lib/config';
	import { t } from '$lib/i18n';

	interface Props {
		data: {
			lang: 'en' | 'nl' | 'de' | 'es';
			categoryKey: string;
			categorySlug: string;
			tools: Array<{ key: string; slug: string; category: string }>;
		};
	}

	let { data }: Props = $props();

	// Use $derived for reactive values
	let lang = $derived(data.lang);
	let categoryKey = $derived(data.categoryKey);
	let categorySlug = $derived(data.categorySlug);
	let tools = $derived(data.tools);

	// Get metadata - all derived
	let categoryMeta = $derived(getCategoryMeta(categoryKey, lang)!);
	let canonicalPath = $derived(getCategoryPath(categoryKey as any, lang));
	let alternateUrls = $derived(getCategoryAlternateUrls(categoryKey as any));

	// Category colors
	const categoryColors: Record<string, { accent: string; bg: string; border: string }> = {
		everyday: { accent: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200 hover:border-orange-400' },
		tech: { accent: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200 hover:border-blue-400' },
		social: { accent: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-200 hover:border-pink-400' },
		travel: { accent: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200 hover:border-green-400' }
	};

	let colors = $derived(categoryColors[categoryKey] || categoryColors.everyday);

	// Get tool metadata
	function getToolInfo(toolKey: string) {
		const meta = getToolMeta(toolKey, lang);
		return {
			name: meta?.title.split(' - ')[0] || toolKey,
			description: meta?.description || ''
		};
	}
</script>

<SEOHead
	title={categoryMeta.title}
	description={categoryMeta.description}
	{lang}
	{canonicalPath}
	{alternateUrls}
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: categoryMeta.name }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold {colors.accent}">
				{#if categoryKey === 'everyday'}○{:else if categoryKey === 'tech'}&lt;/&gt;{:else if categoryKey === 'social'}@{:else if categoryKey === 'travel'}✈{/if}
			</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				{categoryMeta.name}
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			{categoryMeta.description}
		</p>
	</div>

	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
		{#each tools as tool}
			{@const info = getToolInfo(tool.key)}
			<a
				href={getToolPath(tool.key, lang)}
				class="group p-6 border-2 {colors.border} bg-white transition-all hover:shadow-lg"
			>
				<h3 class="font-bold text-neutral-950 mb-1 group-hover:{colors.accent}">
					{info.name}
				</h3>
				<p class="text-sm text-neutral-500 line-clamp-2">{info.description}</p>
			</a>
		{/each}
	</div>

	<div class="mt-8 p-8 {colors.bg} border-2 {colors.border.split(' ')[0]}">
		<h2 class="text-xl font-bold text-neutral-950 mb-4">
			{lang === 'nl' ? 'Over deze tools' : lang === 'de' ? 'Über diese Tools' : lang === 'es' ? 'Sobre estas herramientas' : 'About these tools'}
		</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				{#if lang === 'nl'}
					Deze tools zijn ontworpen voor snelheid en eenvoud. Geen registratie, geen downloads, geen advertenties. Gebruik ze direct in je browser met volledige toetsenbordondersteuning.
				{:else if lang === 'de'}
					Diese Tools sind für Geschwindigkeit und Einfachheit konzipiert. Keine Registrierung, keine Downloads, keine Werbung. Nutzen Sie sie direkt im Browser mit voller Tastaturunterstützung.
				{:else if lang === 'es'}
					Estas herramientas están diseñadas para rapidez y simplicidad. Sin registro, sin descargas, sin anuncios. Úsalas directamente en tu navegador con soporte completo de teclado.
				{:else}
					These tools are designed for speed and simplicity. No registration, no downloads, no ads. Use them directly in your browser with full keyboard support.
				{/if}
			</p>
			<p class="mt-4">
				<strong>{lang === 'nl' ? 'Pro tip:' : lang === 'de' ? 'Profi-Tipp:' : lang === 'es' ? 'Consejo:' : 'Pro tip:'}</strong>
				{lang === 'nl' ? 'Druk op' : lang === 'de' ? 'Drücke' : lang === 'es' ? 'Presiona' : 'Press'}
				<kbd class="px-1.5 py-0.5 bg-white border border-neutral-300 text-xs">K</kbd>
				{lang === 'nl' ? 'om snel te zoeken.' : lang === 'de' ? 'um schnell zu suchen.' : lang === 'es' ? 'para buscar rápidamente.' : 'to search quickly.'}
			</p>
		</div>
	</div>
</div>
