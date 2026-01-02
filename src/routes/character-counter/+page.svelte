<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import CharacterCounter from '$lib/components/tools/CharacterCounter.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'en';
	const meta = getToolMeta('characterCounter', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/en/character-counter"
	alternatePath="/karakter-teller"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/character-counter"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Character Counter' }]} />
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
			<h2 class="section-header">Platform limits</h2>
			<p class="faq-answer leading-relaxed">
				See instantly if your text fits within the character limits of popular platforms.
				From Twitter's 280 characters to LinkedIn's 3000 characters per post.
			</p>
		</section>

		<section>
			<h2 class="section-header">Supported platforms</h2>
			<div class="grid grid-cols-2 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Twitter/X</span>
					<p class="text-neutral-500">280 characters</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Instagram Bio</span>
					<p class="text-neutral-500">150 characters</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">TikTok Bio</span>
					<p class="text-neutral-500">80 characters</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">LinkedIn</span>
					<p class="text-neutral-500">3000 characters</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Do emojis count as 1 character?</h3>
					<p class="faq-answer">
						It depends on the emoji. Some emojis count as 2 or more characters due to Unicode encoding.
					</p>
				</div>
				<div>
					<h3 class="faq-question">What's the difference with word counter?</h3>
					<p class="faq-answer">
						The character counter focuses on individual characters and platform limits, while the word counter focuses on words and reading time.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="character-counter" category="counters" />
	</div>
</div>
