<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import JsonFormatter from '$lib/components/tools/JsonFormatter.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const meta = getToolMeta('jsonFormatter', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/json-formatter" alternatePath="/nl/json-formatter" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/en/json-formatter" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'JSON Formatter' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">JSON Formatter</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><JsonFormatter /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">What does this tool do?</h2>
			<p class="faq-answer">This JSON formatter makes your JSON readable by adding proper indentation. It also validates your JSON for syntax errors.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">What is JSON?</h3><p class="faq-answer">JSON (JavaScript Object Notation) is a lightweight data format commonly used in web APIs and configuration files.</p></div>
				<div><h3 class="faq-question">What is minify?</h3><p class="faq-answer">Minify removes all unnecessary whitespace from JSON, reducing file size for faster transmission.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="json-formatter" category="calculators" />
	</div>
</div>
