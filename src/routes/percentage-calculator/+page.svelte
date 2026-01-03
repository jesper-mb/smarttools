<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import PercentageCalculator from '$lib/components/tools/PercentageCalculator.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'en';
	const meta = getToolMeta('percentageCalc', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/percentage-calculator"
	alternatePath="/nl/percentage-calculator"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/percentage-calculator"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Percentage Calculator' }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.percentage.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.percentage.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<PercentageCalculator />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">What can you calculate?</h2>
			<div class="space-y-3 faq-answer leading-relaxed">
				<p><strong>What is X% of Y?</strong> - Calculate e.g. 15% of 200</p>
				<p><strong>X is what % of Y?</strong> - Calculate what percentage one number is of another</p>
				<p><strong>Increase/Decrease</strong> - Calculate an amount plus or minus a percentage</p>
				<p><strong>Percentage difference</strong> - Calculate the difference between two numbers in percent</p>
			</div>
		</section>

		<section>
			<h2 class="section-header">Common calculations</h2>
			<div class="grid grid-cols-2 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Calculate VAT</span>
					<p class="text-neutral-500">X% of amount</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Calculate discount</span>
					<p class="text-neutral-500">X% decrease</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Calculate tip</span>
					<p class="text-neutral-500">10-15% of bill</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Price difference</span>
					<p class="text-neutral-500">% difference</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">How do I calculate a discount?</h3>
					<p class="faq-answer">
						Use 'Increase/Decrease'. Enter the original amount and the discount percentage to see the new price.
					</p>
				</div>
				<div>
					<h3 class="faq-question">How does percentage difference work?</h3>
					<p class="faq-answer">
						It calculates how much percent one number is larger or smaller than another. Positive = increase, negative = decrease.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="percentage-calculator" category="calculators" />
	</div>
</div>
