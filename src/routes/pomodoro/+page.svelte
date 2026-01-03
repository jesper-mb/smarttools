<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import Pomodoro from '$lib/components/tools/Pomodoro.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'en';
	const meta = getToolMeta('pomodoro', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/pomodoro"
	alternatePath="/nl/pomodoro"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/pomodoro"
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
			<h2 class="section-header">What is the Pomodoro Technique?</h2>
			<p class="faq-answer leading-relaxed">
				The Pomodoro Technique is a time management method developed by Francesco Cirillo.
				You work focused for 25 minutes, followed by a short 5-minute break.
				After 4 sessions, you take a longer break of 15-30 minutes.
			</p>
		</section>

		<section>
			<h2 class="section-header">Shortcuts</h2>
			<div class="grid grid-cols-3 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">SPACE</kbd>
					<p class="text-neutral-500 mt-1">Start/Pause</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">R</kbd>
					<p class="text-neutral-500 mt-1">Reset</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">S</kbd>
					<p class="text-neutral-500 mt-1">Skip</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Why 25 minutes?</h3>
					<p class="faq-answer">
						Research shows that 25 minutes is the optimal time to work focused without mental fatigue.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Can I adjust the times?</h3>
					<p class="faq-answer">
						The classic Pomodoro uses 25/5/15 minutes, but you can experiment with what works for you.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="pomodoro" category="timers" />
	</div>
</div>
