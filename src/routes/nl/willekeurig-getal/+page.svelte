<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import RandomNumber from '$lib/components/tools/RandomNumber.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'nl';
	const meta = getToolMeta('randomNumber', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/willekeurig-getal"
	alternatePath="/en/random-number"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/willekeurig-getal"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Willekeurig Getal' }]} />
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
			<h2 class="section-header">Hoe werkt het</h2>
			<p class="faq-answer leading-relaxed">
				Stel een minimum en maximum waarde in en genereer een willekeurig getal binnen dat bereik.
				Perfect voor loterijen, spelletjes, of wanneer je een random getal nodig hebt.
			</p>
		</section>

		<section>
			<h2 class="section-header">Sneltoetsen</h2>
			<div class="grid grid-cols-1 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">SPACE</kbd>
					<p class="text-neutral-500 mt-1">Genereer nieuw getal</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Hoe willekeurig zijn de getallen?</h3>
					<p class="faq-answer">
						We gebruiken de Crypto API van je browser voor cryptografisch veilige willekeurige getallen.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Kan ik negatieve getallen gebruiken?</h3>
					<p class="faq-answer">
						Ja, je kunt elk geheel getal als minimum of maximum instellen.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="willekeurig-getal" category="random" />
	</div>
</div>
