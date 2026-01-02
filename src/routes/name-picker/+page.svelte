<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import NamePicker from '$lib/components/tools/NamePicker.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'en';
	const meta = getToolMeta('namePicker', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/en/name-picker"
	alternatePath="/naam-picker"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/en/name-picker"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Name Picker' }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.namePicker.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.namePicker.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<NamePicker />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">How it works</h2>
			<p class="faq-answer leading-relaxed">
				Add names to the list, press 'Pick' and a random name will be chosen.
				Perfect for raffles, group assignments, or deciding who's turn it is.
			</p>
		</section>

		<section>
			<h2 class="section-header">Shortcuts</h2>
			<div class="grid grid-cols-2 gap-4 text-sm">
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">SPACE</kbd>
					<p class="text-neutral-500 mt-1">Pick name</p>
				</div>
				<div class="border-2 border-neutral-200 p-3">
					<kbd class="kbd">ENTER</kbd>
					<p class="text-neutral-500 mt-1">Add name</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Is the selection truly random?</h3>
					<p class="faq-answer">
						Yes, each name has an equal chance of being selected.
					</p>
				</div>
				<div>
					<h3 class="faq-question">Are my names saved?</h3>
					<p class="faq-answer">
						No, names are only temporarily stored in your browser and not sent to our servers.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="name-picker" category="random" />
	</div>
</div>
