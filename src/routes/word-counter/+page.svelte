<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import WordCounter from '$lib/components/tools/WordCounter.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'en';
	const meta = getToolMeta('wordCounter', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/word-counter"
	alternatePath="/nl/woorden-teller"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/word-counter"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: $t.tools.wordCounter.name }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.wordCounter.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.wordCounter.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<WordCounter />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">How it works</h2>
			<p class="text-neutral-600 leading-relaxed">
				Paste or type your text in the input field and instantly see the number of words, characters, sentences and paragraphs.
				Reading time is calculated based on an average reading speed of 200 words per minute.
			</p>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="font-bold text-neutral-950 mb-1">How are words counted?</h3>
					<p class="text-neutral-600">
						Words are separated by spaces. Hyphens and other punctuation within words
						(like "e-mail" or "it's") are counted as one word.
					</p>
				</div>
				<div>
					<h3 class="font-bold text-neutral-950 mb-1">Does this work with all languages?</h3>
					<p class="text-neutral-600">
						Yes, our word counter works with all languages that use spaces as word separators,
						including English, Dutch, German, French and more.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="word-counter" category="counters" />
	</div>
</div>
