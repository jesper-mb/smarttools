<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import PercentageCalculator from '$lib/components/tools/PercentageCalculator.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'nl';
	const meta = getToolMeta('percentageCalc', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/percentage-calculator"
	alternatePath="/en/percentage-calculator"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/percentage-calculator"
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
			<h2 class="section-header">Wat kun je berekenen?</h2>
			<div class="space-y-3 faq-answer leading-relaxed">
				<p><strong>Wat is X% van Y?</strong> - Bereken bijv. 15% van 200</p>
				<p><strong>X is hoeveel % van Y?</strong> - Bereken welk percentage een getal is van een ander getal</p>
				<p><strong>Verhogen/Verlagen</strong> - Bereken een bedrag plus of min een percentage</p>
				<p><strong>Procentueel verschil</strong> - Bereken het verschil tussen twee getallen in procenten</p>
			</div>
		</section>

		<section>
			<h2 class="section-header">Veelvoorkomende berekeningen</h2>
			<div class="grid grid-cols-2 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">BTW berekenen</span>
					<p class="text-neutral-500">21% van bedrag</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Korting berekenen</span>
					<p class="text-neutral-500">X% verlagen</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Fooi berekenen</span>
					<p class="text-neutral-500">10-15% van rekening</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Prijsverschil</span>
					<p class="text-neutral-500">% verschil</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Hoe bereken ik korting?</h3>
					<p class="faq-answer">
						Gebruik 'Verhogen/Verlagen'. Vul het oorspronkelijke bedrag in en het kortingspercentage om de nieuwe prijs te zien.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Hoe werkt procentueel verschil?</h3>
					<p class="faq-answer">
						Het berekent hoeveel procent het ene getal groter of kleiner is dan het andere. Positief = stijging, negatief = daling.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="percentage-calculator" category="calculators" />
	</div>
</div>
