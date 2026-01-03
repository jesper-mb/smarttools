<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import AgeCalculator from '$lib/components/tools/AgeCalculator.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const meta = getToolMeta('ageCalc', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/age-calculator" alternatePath="/nl/leeftijd-calculator" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/en/age-calculator" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'Age Calculator' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">Age Calculator</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><AgeCalculator /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">What does this tool calculate?</h2>
			<p class="faq-answer">Calculate your exact age in years, months and days. Also see your age in weeks, hours and minutes, plus how many days until your next birthday.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Does it account for leap years?</h3><p class="faq-answer">Yes, the calculation fully accounts for leap years and the exact length of each month.</p></div>
				<div><h3 class="faq-question">Can I choose a different end date?</h3><p class="faq-answer">Yes! You can choose any date to calculate how old you were or will be on that date.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="age-calculator" category="calculators" />
	</div>
</div>
