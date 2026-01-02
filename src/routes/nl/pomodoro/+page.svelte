<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import Pomodoro from '$lib/components/tools/Pomodoro.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'nl';
	const meta = getToolMeta('pomodoro', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/pomodoro"
	alternatePath="/en/pomodoro"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/pomodoro"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Pomodoro Timer' }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.pomodoro.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.pomodoro.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<Pomodoro />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Wat is de Pomodoro Techniek?</h2>
			<p class="faq-answer leading-relaxed">
				De Pomodoro Techniek is een tijdmanagement methode ontwikkeld door Francesco Cirillo.
				Je werkt 25 minuten gefocust, gevolgd door een korte pauze van 5 minuten.
				Na 4 sessies neem je een langere pauze van 15-30 minuten.
			</p>
		</section>

		<section>
			<h2 class="section-header">Sneltoetsen</h2>
			<div class="grid grid-cols-3 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">SPACE</kbd>
					<p class="text-neutral-500 mt-1">Start/Pauze</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">R</kbd>
					<p class="text-neutral-500 mt-1">Reset</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">S</kbd>
					<p class="text-neutral-500 mt-1">Overslaan</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Waarom 25 minuten?</h3>
					<p class="faq-answer">
						Onderzoek toont aan dat 25 minuten de optimale tijd is om gefocust te werken zonder mentale vermoeidheid.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Kan ik de tijden aanpassen?</h3>
					<p class="faq-answer">
						De klassieke Pomodoro gebruikt 25/5/15 minuten, maar je kunt experimenteren met wat voor jou werkt.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="pomodoro" category="timers" />
	</div>
</div>
