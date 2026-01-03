<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import PasswordGenerator from '$lib/components/tools/PasswordGenerator.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const meta = getToolMeta('password', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/nl/wachtwoord-generator" alternatePath="/password-generator" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/wachtwoord-generator" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'Wachtwoord Generator' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">Wachtwoord Generator</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><PasswordGenerator /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Tips voor sterke wachtwoorden</h2>
			<p class="faq-answer">Gebruik minimaal 12 karakters, mix hoofd- en kleine letters, cijfers en symbolen. Gebruik voor elke site een uniek wachtwoord.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Hoe lang moet mijn wachtwoord zijn?</h3><p class="faq-answer">Minimaal 12 karakters, maar 16+ is beter. Langere wachtwoorden zijn exponentieel veiliger.</p></div>
				<div><h3 class="faq-question">Worden mijn wachtwoorden opgeslagen?</h3><p class="faq-answer">Nee, alles wordt lokaal in je browser gegenereerd. Er wordt niets naar onze servers gestuurd.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="wachtwoord-generator" category="calculators" />
	</div>
</div>
