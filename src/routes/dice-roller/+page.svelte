<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import DiceRoller from '$lib/components/tools/DiceRoller.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'en';
	const meta = getToolMeta('dice', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/en/dice-roller"
	alternatePath="/dobbelsteen"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/dice-roller"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Dice Roller' }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.dice.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.dice.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<DiceRoller />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Available dice</h2>
			<p class="faq-answer leading-relaxed">
				Choose from different dice types: D4, D6, D8, D10, D12, D20 and D100.
				Perfect for board games, role-playing games like D&D, and more.
			</p>
		</section>

		<section>
			<h2 class="section-header">Shortcuts</h2>
			<div class="grid grid-cols-2 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">SPACE</kbd>
					<p class="text-neutral-500 mt-1">Roll dice</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">1-9</kbd>
					<p class="text-neutral-500 mt-1">Set count</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Are the rolls truly random?</h3>
					<p class="faq-answer">
						Yes, we use cryptographically secure random numbers for fair rolls.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Can I roll multiple dice at once?</h3>
					<p class="faq-answer">
						Yes! Set the count using the buttons or keys 1-9 and roll them all at once.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="dice-roller" category="random" />
	</div>
</div>
