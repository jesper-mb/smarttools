<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import UrlEncoder from '$lib/components/tools/UrlEncoder.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const meta = getToolMeta('urlEncoder', lang)!;
</script>

<SEOHead title={meta.title} description={meta.description} keywords={meta.keywords} {lang} canonicalPath="/url-encoder" alternatePath="/url-encoder" />
<ToolSchema name={meta.title} description={meta.description} url="https://smarttools.nl/url-encoder" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6"><Breadcrumbs items={[{ label: 'URL Encoder' }]} /></div>
	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">URL Encoder/Decoder</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>
	<Card class="mb-16 relative" fullscreen><UrlEncoder /></Card>
	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Waarom URL encoding?</h2>
			<p class="faq-answer">URL encoding zet speciale tekens om naar een formaat dat veilig is voor URLs. Spaties worden %20, & wordt %26, etc.</p>
		</section>
		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div><h3 class="faq-question">Wat is het verschil tussen URI en Component?</h3><p class="faq-answer">URI behoudt URL-structuur tekens zoals : / ? #. Component encodeert alles behalve letters, cijfers en enkele speciale tekens.</p></div>
				<div><h3 class="faq-question">Wanneer moet ik URL encoding gebruiken?</h3><p class="faq-answer">Bij het toevoegen van gebruikersinvoer aan URLs, query parameters, of wanneer je tekst via URLs wilt versturen.</p></div>
			</div>
		</section>
		<RelatedTools currentSlug="url-encoder" category="calculators" />
	</div>
</div>
