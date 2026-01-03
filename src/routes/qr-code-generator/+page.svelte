<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import QrCodeGenerator from '$lib/components/tools/QrCodeGenerator.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const meta = getToolMeta('qrCode', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/qr-code-generator" alternatePath="/nl/qr-code-generator" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/en/qr-code-generator" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'QR Code Generator' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">QR Code Generator</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><QrCodeGenerator /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">What can you put in a QR code?</h2>
			<p class="faq-answer">URLs, text, email addresses, phone numbers, WiFi settings, contact info and more. Perfect for business cards and marketing.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Which format should I choose?</h3><p class="faq-answer">SVG is better for print (scales infinitely), PNG is better for web and social media.</p></div>
				<div><h3 class="faq-question">How big should the QR code be?</h3><p class="faq-answer">For print at least 2x2 cm. For screens it depends on viewing distance.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="qr-code-generator" category="calculators" />
	</div>
</div>
