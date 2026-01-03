<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import Base64Tool from '$lib/components/tools/Base64Tool.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const meta = getToolMeta('base64', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/nl/base64" alternatePath="/base64" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/base64" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'Base64' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">Base64 Encoder/Decoder</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><Base64Tool /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Wat is Base64?</h2>
			<p class="faq-answer">Base64 is een methode om binaire data om te zetten naar tekst. Het wordt veel gebruikt in emails, data URLs en API communicatie.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Wanneer gebruik ik Base64?</h3><p class="faq-answer">Base64 wordt gebruikt om afbeeldingen in HTML in te sluiten, data veilig te verzenden via text-only protocollen, en in API authenticatie.</p></div>
				<div><h3 class="faq-question">Is Base64 versleuteling?</h3><p class="faq-answer">Nee, Base64 is geen encryptie. Het is encoding - iedereen kan Base64 decoderen. Gebruik het niet voor gevoelige data.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="base64" category="calculators" />
	</div>
</div>
