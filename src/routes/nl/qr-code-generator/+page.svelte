<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import QrCodeGenerator from '$lib/components/tools/QrCodeGenerator.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const meta = getToolMeta('qrCode', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/qr-code-generator" alternatePath="/en/qr-code-generator" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/qr-code-generator" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'QR Code Generator' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">QR Code Generator</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><QrCodeGenerator /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Wat kun je in een QR code stoppen?</h2>
			<p class="faq-answer">URLs, tekst, e-mailadressen, telefoonnummers, WiFi-instellingen, contactgegevens en meer. Perfect voor visitekaartjes en marketing.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Welk formaat moet ik kiezen?</h3><p class="faq-answer">SVG is beter voor drukwerk (schaalt oneindig), PNG is beter voor web en sociale media.</p></div>
				<div><h3 class="faq-question">Hoe groot moet de QR code zijn?</h3><p class="faq-answer">Voor print minimaal 2x2 cm. Voor schermen hangt het af van de kijkafstand.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="qr-code-generator" category="calculators" />
	</div>
</div>
