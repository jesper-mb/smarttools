<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import PasswordGenerator from '$lib/components/tools/PasswordGenerator.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const meta = getToolMeta('password', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/en/password-generator" alternatePath="/wachtwoord-generator" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/en/password-generator" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'Password Generator' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">Password Generator</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><PasswordGenerator /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Tips for strong passwords</h2>
			<p class="faq-answer">Use at least 12 characters, mix uppercase and lowercase letters, numbers and symbols. Use a unique password for each site.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">How long should my password be?</h3><p class="faq-answer">At least 12 characters, but 16+ is better. Longer passwords are exponentially more secure.</p></div>
				<div><h3 class="faq-question">Are my passwords stored?</h3><p class="faq-answer">No, everything is generated locally in your browser. Nothing is sent to our servers.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="password-generator" category="calculators" />
	</div>
</div>
