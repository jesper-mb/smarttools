<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import ClickCounter from '$lib/components/tools/ClickCounter.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'en';
	const meta = getToolMeta('clickCounter', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/en/click-counter"
	alternatePath="/klik-teller"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/click-counter"
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
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">How it works</h2>
			<p class="text-neutral-600 leading-relaxed">
				Click on the large counting area or use your keyboard to count. Perfect for inventory,
				counting people at an event, or keeping score.
			</p>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">Shortcuts</h2>
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
					<h3 class="font-bold text-neutral-950 mb-1">Is my count saved?</h3>
					<p class="text-neutral-600">
						No, the count is not saved. If you refresh or close the page, the counter starts again at 0.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="click-counter" category="counters" />
	</div>
</div>
