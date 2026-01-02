<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import WheelSpinner from '$lib/components/tools/WheelSpinner.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'nl';
	const meta = getToolMeta('wheelSpinner', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/rad-van-fortuin"
	alternatePath="/en/wheel-spinner"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/rad-van-fortuin"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: $t.tools.wheelSpinner.name }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.wheelSpinner.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.wheelSpinner.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<WheelSpinner />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">Hoe werkt het</h2>
			<p class="text-neutral-600 leading-relaxed">
				Voeg je eigen opties toe aan het rad en druk op "Draaien" of de spatiebalk.
				Het rad draait willekeurig en landt op een van je opties. Perfect voor het maken van beslissingen,
				loterijen, of gewoon voor de lol!
			</p>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">Tips</h2>
			<ul class="space-y-2 text-neutral-600">
				<li class="flex items-start gap-2">
					<span class="text-orange-600">-</span>
					<span>Je kunt maximaal 12 opties toevoegen</span>
				</li>
				<li class="flex items-start gap-2">
					<span class="text-orange-600">-</span>
					<span>Klik op het × naast een optie om deze te verwijderen</span>
				</li>
				<li class="flex items-start gap-2">
					<span class="text-orange-600">-</span>
					<span>Druk op Spatie om snel te draaien</span>
				</li>
			</ul>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="font-bold text-neutral-950 mb-1">Is het rad echt willekeurig?</h3>
					<p class="text-neutral-600">
						Ja! Het rad gebruikt JavaScript's random functie om een willekeurige uitkomst te bepalen.
						Elke optie heeft een gelijke kans om geselecteerd te worden.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="rad-van-fortuin" category="random" />
	</div>
</div>
