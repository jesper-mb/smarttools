<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import Timer from '$lib/components/tools/Timer.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'nl';
	const meta = getToolMeta('timer', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/nl/timer"
	alternatePath="/timer"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/timer"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Timer' }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.timer.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.timer.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<Timer />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Hoe werkt het</h2>
			<p class="faq-answer leading-relaxed">
				Stel de gewenste tijd in met de knoppen of het invoerveld en druk op start.
				De timer telt af en geeft een geluidssignaal wanneer de tijd om is.
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
					<kbd class="kbd">↑↓</kbd>
					<p class="text-neutral-500 mt-1">Tijd aanpassen</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Kan ik de timer op de achtergrond laten lopen?</h3>
					<p class="faq-answer">
						Ja, de timer blijft doorlopen ook als je naar een andere tab gaat. Je krijgt een geluidssignaal wanneer de tijd om is.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Kan ik eigen tijden instellen?</h3>
					<p class="faq-answer">
						Ja! Gebruik de snelknoppen voor veelgebruikte tijden of stel handmatig uren, minuten en seconden in.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="timer" category="timers" />
	</div>
</div>
