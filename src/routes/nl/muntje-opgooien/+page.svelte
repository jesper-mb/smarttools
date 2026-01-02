<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import CoinFlip from '$lib/components/tools/CoinFlip.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'nl';
	const meta = getToolMeta('coinFlip', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/muntje-opgooien"
	alternatePath="/en/coin-flip"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/muntje-opgooien"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Muntje Opgooien' }]} />
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
			<h2 class="section-header">Hoe werkt het</h2>
			<p class="faq-answer leading-relaxed">
				Klik op de munt of druk op spatie om de munt op te gooien.
				De uitkomst is volledig willekeurig - perfect voor snelle beslissingen.
			</p>
		</section>

		<section>
			<h2 class="section-header">Sneltoetsen</h2>
			<div class="grid grid-cols-2 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">SPACE</kbd>
					<p class="text-neutral-500 mt-1">Gooi munt</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">R</kbd>
					<p class="text-neutral-500 mt-1">Reset statistieken</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Is het 50/50 kans?</h3>
					<p class="faq-answer">
						Ja, onze virtuele munt heeft exact 50% kans op kop en 50% kans op munt.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Worden de statistieken opgeslagen?</h3>
					<p class="faq-answer">
						De statistieken worden bijgehouden tijdens je sessie, maar niet permanent opgeslagen.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="muntje-opgooien" category="random" />
	</div>
</div>
