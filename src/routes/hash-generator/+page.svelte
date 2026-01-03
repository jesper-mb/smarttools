<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import HashGenerator from '$lib/components/tools/HashGenerator.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const meta = getToolMeta('hash', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/hash-generator" alternatePath="/nl/hash-generator" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/en/hash-generator" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'Hash Generator' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">Hash Generator</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><HashGenerator /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Supported algorithms</h2>
			<p class="faq-answer">MD5, SHA-1, SHA-256, SHA-384 and SHA-512. Each hash is unique to the input - even a small change gives a completely different hash.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Which hash should I use?</h3><p class="faq-answer">SHA-256 is the best choice for most applications. MD5 and SHA-1 are outdated and not secure for security purposes.</p></div>
				<div><h3 class="faq-question">Can I reverse a hash to text?</h3><p class="faq-answer">No, hashes are one-way functions. They cannot be decoded back to the original text.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="hash-generator" category="calculators" />
	</div>
</div>
