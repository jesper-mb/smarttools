<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import DateCountdown from '$lib/components/tools/DateCountdown.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'nl';
	const meta = getToolMeta('dateCountdown', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/datum-aftellen"
	alternatePath="/en/date-countdown"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/datum-aftellen"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Datum Aftellen' }]} />
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
			<h2 class="section-header">Populaire countdowns</h2>
			<p class="faq-answer leading-relaxed">
				Kies uit vooringestelde datums zoals Nieuwjaar, Kerst, Koningsdag en meer.
				Of stel je eigen datum in voor verjaardagen, vakanties of andere speciale gelegenheden.
			</p>
		</section>

		<section>
			<h2 class="section-header">Vooringestelde datums</h2>
			<div class="grid grid-cols-2 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Nieuwjaar</span>
					<p class="text-neutral-500">1 januari</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Valentijnsdag</span>
					<p class="text-neutral-500">14 februari</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Koningsdag</span>
					<p class="text-neutral-500">27 april</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<span class="font-bold">Kerst</span>
					<p class="text-neutral-500">25 december</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Kan ik een specifieke tijd instellen?</h3>
					<p class="faq-answer">
						Ja! Je kunt zowel een datum als een tijd kiezen voor nauwkeurig aftellen.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Wordt mijn countdown opgeslagen?</h3>
					<p class="faq-answer">
						De countdown wordt niet automatisch opgeslagen. Bookmark de pagina om terug te keren.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="datum-aftellen" category="timers" />
	</div>
</div>
