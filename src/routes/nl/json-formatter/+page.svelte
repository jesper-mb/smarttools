<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import JsonFormatter from '$lib/components/tools/JsonFormatter.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const meta = getToolMeta('jsonFormatter', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/nl/json-formatter" alternatePath="/json-formatter" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/json-formatter" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'JSON Formatter' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">JSON Formatter</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><JsonFormatter /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Wat doet deze tool?</h2>
			<p class="faq-answer">Deze JSON formatter maakt je JSON leesbaar door correcte inspringing toe te voegen. Ook valideert het je JSON op syntaxfouten.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Wat is JSON?</h3><p class="faq-answer">JSON (JavaScript Object Notation) is een lichtgewicht data formaat dat veel gebruikt wordt in web APIs en configuratiebestanden.</p></div>
				<div><h3 class="faq-question">Wat is minify?</h3><p class="faq-answer">Minify verwijdert alle onnodige witruimte uit JSON, wat het bestandsformaat verkleint voor snellere overdracht.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="json-formatter" category="calculators" />
	</div>
</div>
