<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import ClickCounter from '$lib/components/tools/ClickCounter.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'nl';
	const meta = getToolMeta('clickCounter', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/klik-teller"
	alternatePath="/click-counter"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/klik-teller"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: $t.tools.clickCounter.name }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.clickCounter.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.clickCounter.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<ClickCounter />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">Hoe werkt het</h2>
			<p class="text-neutral-600 leading-relaxed">
				Klik op het grote telgebied of gebruik je toetsenbord om te tellen. Perfect voor inventarisatie,
				het tellen van mensen bij een evenement, of het bijhouden van scores.
			</p>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">Sneltoetsen</h2>
			<div class="grid grid-cols-3 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="font-bold text-neutral-950">SPACE</kbd>
					<p class="text-neutral-500 mt-1">+1</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="font-bold text-neutral-950">↑ / ↓</kbd>
					<p class="text-neutral-500 mt-1">+1 / -1</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="font-bold text-neutral-950">R</kbd>
					<p class="text-neutral-500 mt-1">Reset</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="font-bold text-neutral-950 mb-1">Wordt mijn telling opgeslagen?</h3>
					<p class="text-neutral-600">
						Nee, de telling wordt niet opgeslagen. Als je de pagina vernieuwt of sluit, begint de teller opnieuw bij 0.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="klik-teller" category="counters" />
	</div>
</div>
