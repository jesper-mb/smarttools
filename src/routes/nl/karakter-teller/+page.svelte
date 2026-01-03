<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import CharacterCounter from '$lib/components/tools/CharacterCounter.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'nl';
	const meta = getToolMeta('characterCounter', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/karakter-teller"
	alternatePath="/character-counter"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/karakter-teller"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Karakter Teller' }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.characterCounter.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.characterCounter.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<CharacterCounter />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Platform limieten</h2>
			<p class="faq-answer leading-relaxed">
				Zie direct of je tekst past binnen de karakterlimieten van populaire platforms.
				Van Twitter's 280 karakters tot LinkedIn's 3000 karakters per post.
			</p>
		</section>

		<section>
			<h2 class="section-header">Ondersteunde platforms</h2>
			<div class="grid grid-cols-2 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Twitter/X</span>
					<p class="text-neutral-500">280 karakters</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Instagram Bio</span>
					<p class="text-neutral-500">150 karakters</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">TikTok Bio</span>
					<p class="text-neutral-500">80 karakters</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">LinkedIn</span>
					<p class="text-neutral-500">3000 karakters</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Tellen emoji's als 1 karakter?</h3>
					<p class="faq-answer">
						Dat hangt af van de emoji. Sommige emoji's tellen als 2 of meer karakters vanwege Unicode encoding.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Wat is het verschil met woorden teller?</h3>
					<p class="faq-answer">
						De karakter teller focust op individuele tekens en platform limieten, terwijl de woorden teller zich richt op woorden en leestijd.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="karakter-teller" category="counters" />
	</div>
</div>
