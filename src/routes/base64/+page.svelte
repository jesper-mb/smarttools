<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import Base64Tool from '$lib/components/tools/Base64Tool.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const meta = getToolMeta('base64', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/base64" alternatePath="/nl/base64" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/en/base64" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'Base64' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">Base64 Encoder/Decoder</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><Base64Tool /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">What is Base64?</h2>
			<p class="faq-answer">Base64 is a method for encoding binary data as text. It's commonly used in emails, data URLs and API communication.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">When do I use Base64?</h3><p class="faq-answer">Base64 is used to embed images in HTML, safely transmit data via text-only protocols, and in API authentication.</p></div>
				<div><h3 class="faq-question">Is Base64 encryption?</h3><p class="faq-answer">No, Base64 is not encryption. It's encoding - anyone can decode Base64. Don't use it for sensitive data.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="base64" category="calculators" />
	</div>
</div>
