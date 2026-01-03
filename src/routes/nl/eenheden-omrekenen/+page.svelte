<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import UnitConverter from '$lib/components/tools/UnitConverter.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const meta = getToolMeta('unitConverter', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/nl/eenheden-omrekenen" alternatePath="/unit-converter" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/eenheden-omrekenen" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'Eenheden Omrekenen' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">Eenheden Omrekenen</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><UnitConverter /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Ondersteunde categorieën</h2>
			<p class="faq-answer">Lengte, gewicht, temperatuur, oppervlakte, volume, snelheid en data. Reken om tussen metrisch en imperial systeem.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Welke eenheden worden ondersteund?</h3><p class="faq-answer">Veelgebruikte eenheden zoals meters, kilometers, mijlen, kilogram, pounds, Celsius, Fahrenheit, liters, gallons en meer.</p></div>
				<div><h3 class="faq-question">Hoe nauwkeurig zijn de conversies?</h3><p class="faq-answer">Alle conversies gebruiken exacte conversiefactoren met hoge precisie decimalen.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="eenheden-omrekenen" category="calculators" />
	</div>
</div>
