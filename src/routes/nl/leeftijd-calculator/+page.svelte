<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import AgeCalculator from '$lib/components/tools/AgeCalculator.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const meta = getToolMeta('ageCalc', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/leeftijd-calculator" alternatePath="/age-calculator" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/leeftijd-calculator" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'Leeftijd Calculator' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">Leeftijd Calculator</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><AgeCalculator /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Wat berekent deze tool?</h2>
			<p class="faq-answer">Bereken je exacte leeftijd in jaren, maanden en dagen. Zie ook je leeftijd in weken, uren en minuten, plus hoeveel dagen tot je volgende verjaardag.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Houdt het rekening met schrikkeljaren?</h3><p class="faq-answer">Ja, de berekening houdt volledig rekening met schrikkeljaren en de exacte lengte van elke maand.</p></div>
				<div><h3 class="faq-question">Kan ik ook een andere einddatum kiezen?</h3><p class="faq-answer">Ja! Je kunt elke datum kiezen om te berekenen hoe oud je op die datum was of zult zijn.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="leeftijd-calculator" category="calculators" />
	</div>
</div>
