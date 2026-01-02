<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import FAQSchema from '$lib/components/FAQSchema.svelte';
	import { Card } from '$lib/components/ui';
	import Stopwatch from '$lib/components/tools/Stopwatch.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'nl';
	const meta = getToolMeta('stopwatch', lang)!;

	const faqs = [
		{
			question: 'Blijft de stopwatch lopen als ik de tab sluit?',
			answer: 'Ja, de stopwatch blijft nauwkeurig lopen zolang je de browser niet volledig sluit.'
		},
		{
			question: 'Kan ik rondetijden bijhouden?',
			answer: 'Ja. Druk op de L-toets om de huidige tijd vast te leggen zonder de stopwatch te stoppen.'
		},
		{
			question: 'Hoe nauwkeurig is de stopwatch?',
			answer: 'De stopwatch meet tot op de honderdste van een seconde nauwkeurig, perfect voor timing van activiteiten.'
		}
	];
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/stopwatch"
	alternatePath="/en/stopwatch"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/stopwatch"
	keywords={meta.keywords}
/>
<FAQSchema {faqs} />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Stopwatch' }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.stopwatch.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.stopwatch.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<Stopwatch />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Hoe werkt het</h2>
			<p class="faq-answer leading-relaxed">
				Deze stopwatch is perfect voor het nauwkeurig meten van tijd. Of je nu een workout doet,
				kookt, of een presentatie timed - tot op de honderdste van een seconde nauwkeurig.
			</p>
		</section>

		<section>
			<h2 class="section-header">Sneltoetsen</h2>
			<div class="grid grid-cols-3 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">SPACE</kbd>
					<p class="text-neutral-500 mt-1">Start/Stop</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">R</kbd>
					<p class="text-neutral-500 mt-1">Reset</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">L</kbd>
					<p class="text-neutral-500 mt-1">Rondetijd</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				{#each faqs as faq}
					<div>
						<h3 class="faq-question">{faq.question}</h3>
						<p class="faq-answer">{faq.answer}</p>
					</div>
				{/each}
			</div>
		</section>

		<RelatedTools currentSlug="stopwatch" category="timers" />
	</div>
</div>
