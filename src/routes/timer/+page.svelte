<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import Timer from '$lib/components/tools/Timer.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'en';
	const meta = getToolMeta('timer', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/en/timer"
	alternatePath="/timer"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/timer"
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
			<h2 class="section-header">How it works</h2>
			<p class="faq-answer leading-relaxed">
				Set your desired time using the buttons or input field and press start.
				The timer counts down and plays an alarm sound when time is up.
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
					<kbd class="kbd">↑↓</kbd>
					<p class="text-neutral-500 mt-1">Adjust time</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Can I run the timer in the background?</h3>
					<p class="faq-answer">
						Yes, the timer keeps running even if you switch to another tab. You'll hear an alarm when time is up.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Can I set custom times?</h3>
					<p class="faq-answer">
						Yes! Use the quick buttons for common times or manually set hours, minutes and seconds.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="timer" category="timers" />
	</div>
</div>
