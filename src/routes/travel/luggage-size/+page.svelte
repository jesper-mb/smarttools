<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import LuggageSize from '$lib/components/tools/LuggageSize.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const toolMeta = getToolMeta('luggageSize', lang)!;
</script>

<SEOHead
	title={toolMeta.title}
	description={toolMeta.description}
	{lang}
	canonicalPath="/travel/luggage-size"
	alternatePath="/travel/koffer-maten"
/>

<ToolSchema
	name="Luggage Size Guide"
	description={toolMeta.description}
	{lang}
	category="Travel"
	keywords={toolMeta.keywords}
	slug="en/travel/luggage-size"
/>

<div class="max-w-5xl mx-auto px-4 py-8">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/en' },
			{ label: 'Travel', href: '/en/travel' },
			{ label: 'Luggage Size' }
		]}
	/>

	<header class="mb-8">
		<h1 class="text-4xl font-bold text-neutral-950 mb-2">Luggage Size Guide</h1>
		<p class="text-neutral-500 text-lg max-w-2xl">
			Compare luggage sizes visually and check carry-on dimensions for different airlines. Avoid surprises at the gate.
		</p>
	</header>

	<LuggageSize />

	<section class="mt-12 prose prose-neutral max-w-none">
		<h2>Understanding luggage sizes</h2>
		<p>
			Suitcase dimensions are measured including wheels and handles. Note that airlines have
			their own limits - always check the rules of your specific carrier.
		</p>

		<h3>Carry-on limits</h3>
		<p>
			Most airlines allow carry-on luggage up to 55x40x23 cm, but budget airlines are often stricter.
			Use the airline comparison to see what size luggage you need.
		</p>
	</section>
</div>
