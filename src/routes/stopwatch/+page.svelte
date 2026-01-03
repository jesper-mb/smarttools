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

	const lang = 'en';
	const meta = getToolMeta('stopwatch', lang)!;

	const faqs = [
		{
			question: 'Does the stopwatch keep running if I close the tab?',
			answer: 'Yes, the stopwatch continues to run accurately as long as you don\'t completely close the browser.'
		},
		{
			question: 'Can I track lap times?',
			answer: 'Yes! Press the L key to record the current time without stopping the stopwatch.'
		},
		{
			question: 'How accurate is the stopwatch?',
			answer: 'The stopwatch is accurate to the hundredth of a second, perfect for timing any activity.'
		}
	];
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/stopwatch"
	alternatePath="/nl/stopwatch"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/stopwatch"
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
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">How it works</h2>
			<p class="text-neutral-600 leading-relaxed">
				This free online stopwatch is perfect for accurately measuring time. Whether you're doing a workout,
				cooking, or timing a presentation - our stopwatch is accurate to the hundredth of a second.
			</p>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">Shortcuts</h2>
			<div class="grid grid-cols-3 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="font-bold text-neutral-950">SPACE</kbd>
					<p class="text-neutral-500 mt-1">Start/Stop</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="font-bold text-neutral-950">R</kbd>
					<p class="text-neutral-500 mt-1">Reset</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="font-bold text-neutral-950">L</kbd>
					<p class="text-neutral-500 mt-1">Lap</p>
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
