<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import ColorPicker from '$lib/components/tools/ColorPicker.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const meta = getToolMeta('colorPicker', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/kleur-picker" alternatePath="/color-picker" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/kleur-picker" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'Kleur Picker' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">Kleur Picker</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><ColorPicker /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Ondersteunde formaten</h2>
			<p class="faq-answer">Converteer eenvoudig tussen HEX, RGB, HSL en CMYK kleurformaten. Perfect voor webdesign en grafisch ontwerp.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Wat is HEX?</h3><p class="faq-answer">HEX is een 6-cijferig hexadecimaal getal dat een kleur representeert, veel gebruikt in CSS en webdesign.</p></div>
				<div><h3 class="faq-question">Wanneer gebruik ik CMYK?</h3><p class="faq-answer">CMYK wordt gebruikt voor drukwerk. RGB en HEX zijn beter voor schermen en web.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="kleur-picker" category="calculators" />
	</div>
</div>
