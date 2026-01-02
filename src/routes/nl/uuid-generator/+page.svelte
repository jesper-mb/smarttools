<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import UuidGenerator from '$lib/components/tools/UuidGenerator.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const meta = getToolMeta('uuid', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/uuid-generator" alternatePath="/en/uuid-generator" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/uuid-generator" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'UUID Generator' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">UUID Generator</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><UuidGenerator /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Wat is een UUID?</h2>
			<p class="faq-answer">Een UUID (Universally Unique Identifier) is een 128-bit nummer dat gebruikt wordt om objecten uniek te identificeren in software systemen.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Zijn UUIDs echt uniek?</h3><p class="faq-answer">Ja, de kans op een duplicaat is astronomisch klein - je zou miljarden UUIDs moeten genereren voor een mogelijke botsing.</p></div>
				<div><h3 class="faq-question">Wat is UUID v4?</h3><p class="faq-answer">UUID v4 is gebaseerd op willekeurige getallen, wat het meest gebruikte formaat is voor het genereren van unieke IDs.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="uuid-generator" category="calculators" />
	</div>
</div>
