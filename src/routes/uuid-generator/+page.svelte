<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import UuidGenerator from '$lib/components/tools/UuidGenerator.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const meta = getToolMeta('uuid', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/en/uuid-generator" alternatePath="/uuid-generator" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/en/uuid-generator" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'UUID Generator' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">UUID Generator</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><UuidGenerator /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">What is a UUID?</h2>
			<p class="faq-answer">A UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify objects in software systems.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Are UUIDs really unique?</h3><p class="faq-answer">Yes, the chance of a duplicate is astronomically small - you'd need to generate billions of UUIDs for a possible collision.</p></div>
				<div><h3 class="faq-question">What is UUID v4?</h3><p class="faq-answer">UUID v4 is based on random numbers, which is the most commonly used format for generating unique IDs.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="uuid-generator" category="calculators" />
	</div>
</div>
