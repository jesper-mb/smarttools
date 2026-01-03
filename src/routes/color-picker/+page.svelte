<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import ColorPicker from '$lib/components/tools/ColorPicker.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const meta = getToolMeta('colorPicker', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/color-picker" alternatePath="/nl/kleur-picker" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/en/color-picker" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'Color Picker' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">Color Picker</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><ColorPicker /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Supported formats</h2>
			<p class="faq-answer">Easily convert between HEX, RGB, HSL and CMYK color formats. Perfect for web design and graphic design.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">What is HEX?</h3><p class="faq-answer">HEX is a 6-digit hexadecimal number representing a color, commonly used in CSS and web design.</p></div>
				<div><h3 class="faq-question">When do I use CMYK?</h3><p class="faq-answer">CMYK is used for print. RGB and HEX are better for screens and web.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="color-picker" category="calculators" />
	</div>
</div>
