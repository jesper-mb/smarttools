<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import UrlEncoder from '$lib/components/tools/UrlEncoder.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const meta = getToolMeta('urlEncoder', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/en/url-encoder" alternatePath="/url-encoder" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/en/url-encoder" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'URL Encoder' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">URL Encoder/Decoder</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><UrlEncoder /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Why URL encoding?</h2>
			<p class="faq-answer">URL encoding converts special characters to a format safe for URLs. Spaces become %20, & becomes %26, etc.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">What's the difference between URI and Component?</h3><p class="faq-answer">URI preserves URL structure characters like : / ? #. Component encodes everything except letters, numbers and a few special characters.</p></div>
				<div><h3 class="faq-question">When should I use URL encoding?</h3><p class="faq-answer">When adding user input to URLs, query parameters, or when you want to transmit text via URLs.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="url-encoder" category="calculators" />
	</div>
</div>
