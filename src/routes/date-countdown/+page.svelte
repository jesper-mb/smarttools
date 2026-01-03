<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import DateCountdown from '$lib/components/tools/DateCountdown.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'en';
	const meta = getToolMeta('dateCountdown', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/date-countdown"
	alternatePath="/nl/datum-aftellen"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/date-countdown"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Date Countdown' }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.dateCountdown.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.dateCountdown.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<DateCountdown />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">Popular countdowns</h2>
			<p class="faq-answer leading-relaxed">
				Choose from preset dates like New Year, Christmas, Valentine's Day and more.
				Or set your own date for birthdays, vacations or other special occasions.
			</p>
		</section>

		<section>
			<h2 class="section-header">Preset dates</h2>
			<div class="grid grid-cols-2 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">New Year</span>
					<p class="text-neutral-500">January 1</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Valentine's Day</span>
					<p class="text-neutral-500">February 14</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Halloween</span>
					<p class="text-neutral-500">October 31</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Christmas</span>
					<p class="text-neutral-500">December 25</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Can I set a specific time?</h3>
					<p class="faq-answer">
						Yes! You can choose both a date and a time for precise countdown.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Is my countdown saved?</h3>
					<p class="faq-answer">
						The countdown is not automatically saved. Bookmark the page to return later.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="date-countdown" category="timers" />
	</div>
</div>
