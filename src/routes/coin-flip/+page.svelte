<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import CoinFlip from '$lib/components/tools/CoinFlip.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'en';
	const meta = getToolMeta('coinFlip', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/en/coin-flip"
	alternatePath="/muntje-opgooien"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/coin-flip"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Coin Flip' }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.coinFlip.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.coinFlip.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<CoinFlip />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">How it works</h2>
			<p class="faq-answer leading-relaxed">
				Click the coin or press space to flip. The outcome is completely random -
				perfect for quick decisions.
			</p>
		</section>

		<section>
			<h2 class="section-header">Shortcuts</h2>
			<div class="grid grid-cols-2 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">SPACE</kbd>
					<p class="text-neutral-500 mt-1">Flip coin</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">R</kbd>
					<p class="text-neutral-500 mt-1">Reset stats</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Is it a 50/50 chance?</h3>
					<p class="faq-answer">
						Yes, our virtual coin has exactly 50% chance for heads and 50% for tails.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Are statistics saved?</h3>
					<p class="faq-answer">
						Statistics are tracked during your session but not permanently saved.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="coin-flip" category="random" />
	</div>
</div>
