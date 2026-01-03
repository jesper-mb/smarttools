<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import UnitConverter from '$lib/components/tools/UnitConverter.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const meta = getToolMeta('unitConverter', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/unit-converter" alternatePath="/nl/eenheden-omrekenen" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/en/unit-converter" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'Unit Converter' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">Unit Converter</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><UnitConverter /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Supported categories</h2>
			<p class="faq-answer">Length, weight, temperature, area, volume, speed and data. Convert between metric and imperial systems.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">What units are supported?</h3><p class="faq-answer">Common units like meters, kilometers, miles, kilograms, pounds, Celsius, Fahrenheit, liters, gallons and more.</p></div>
				<div><h3 class="faq-question">How accurate are the conversions?</h3><p class="faq-answer">All conversions use exact conversion factors with high precision decimals.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="unit-converter" category="calculators" />
	</div>
</div>
