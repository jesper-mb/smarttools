<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import DiceRoller from '$lib/components/tools/DiceRoller.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'nl';
	const meta = getToolMeta('dice', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/dobbelsteen"
	alternatePath="/dice-roller"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/dobbelsteen"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Dobbelsteen' }]} />
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
			<h2 class="section-header">Beschikbare dobbelstenen</h2>
			<p class="faq-answer leading-relaxed">
				Kies uit verschillende dobbelsteen types: D4, D6, D8, D10, D12, D20 en D100.
				Perfect voor bordspellen, rollenspellen zoals D&D, en meer.
			</p>
		</section>

		<section>
			<h2 class="section-header">Sneltoetsen</h2>
			<div class="grid grid-cols-2 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">SPACE</kbd>
					<p class="text-neutral-500 mt-1">Gooi dobbelstenen</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">1-9</kbd>
					<p class="text-neutral-500 mt-1">Aantal instellen</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Zijn de worpen willekeurig?</h3>
					<p class="faq-answer">
						Ja, we gebruiken cryptografisch veilige willekeurige getallen voor eerlijke worpen.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Kan ik meerdere dobbelstenen tegelijk gooien?</h3>
					<p class="faq-answer">
						Ja! Stel het aantal in met de knoppen of toetsen 1-9 en gooi ze allemaal tegelijk.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="dobbelsteen" category="random" />
	</div>
</div>
