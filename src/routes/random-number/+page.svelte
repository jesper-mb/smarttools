<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import RandomNumber from '$lib/components/tools/RandomNumber.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'en';
	const meta = getToolMeta('randomNumber', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/en/random-number"
	alternatePath="/willekeurig-getal"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/random-number"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Random Number' }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.randomNumber.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.randomNumber.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<RandomNumber />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">How it works</h2>
			<p class="faq-answer leading-relaxed">
				Set a minimum and maximum value and generate a random number within that range.
				Perfect for raffles, games, or whenever you need a random number.
			</p>
		</section>

		<section>
			<h2 class="section-header">Shortcuts</h2>
			<div class="grid grid-cols-1 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">SPACE</kbd>
					<p class="text-neutral-500 mt-1">Generate new number</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">How random are the numbers?</h3>
					<p class="faq-answer">
						We use your browser's Crypto API for cryptographically secure random numbers.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Can I use negative numbers?</h3>
					<p class="faq-answer">
						Yes, you can set any integer as minimum or maximum.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="random-number" category="random" />
	</div>
</div>
