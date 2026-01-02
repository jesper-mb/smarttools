<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import WheelSpinner from '$lib/components/tools/WheelSpinner.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'en';
	const meta = getToolMeta('wheelSpinner', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/en/wheel-spinner"
	alternatePath="/rad-van-fortuin"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/wheel-spinner"
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
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">How it works</h2>
			<p class="text-neutral-600 leading-relaxed">
				Add your own options to the wheel and press "Spin" or the spacebar.
				The wheel spins randomly and lands on one of your options. Perfect for making decisions,
				raffles, or just for fun!
			</p>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">Tips</h2>
			<ul class="space-y-2 text-neutral-600">
				<li class="flex items-start gap-2">
					<span class="text-orange-600">-</span>
					<span>You can add up to 12 options</span>
				</li>
				<li class="flex items-start gap-2">
					<span class="text-orange-600">-</span>
					<span>Click on the × next to an option to remove it</span>
				</li>
				<li class="flex items-start gap-2">
					<span class="text-orange-600">-</span>
					<span>Press Space to quickly spin</span>
				</li>
			</ul>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="font-bold text-neutral-950 mb-1">Is the wheel truly random?</h3>
					<p class="text-neutral-600">
						Yes! The wheel uses JavaScript's random function to determine a random outcome.
						Each option has an equal chance of being selected.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="wheel-spinner" category="random" />
	</div>
</div>
