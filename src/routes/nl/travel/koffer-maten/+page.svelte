<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import LuggageSize from '$lib/components/tools/LuggageSize.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const toolMeta = getToolMeta('luggageSize', lang)!;
</script>

<SEOHead
	title={toolMeta.title}
	description={toolMeta.description}
	{lang}
	canonicalPath="/travel/koffer-maten"
	alternatePath="/en/travel/luggage-size"
/>

<ToolSchema
	name="Koffer Maten Gids"
	description={toolMeta.description}
	{lang}
	category="Travel"
	keywords={toolMeta.keywords}
	slug="travel/koffer-maten"
/>

<div class="max-w-5xl mx-auto px-4 py-8">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/' },
			{ label: 'Travel', href: '/travel' },
			{ label: 'Koffer Maten' }
		]}
	/>

	<header class="mb-8">
		<h1 class="text-4xl font-bold text-neutral-950 mb-2">Koffer Maten Gids</h1>
		<p class="text-neutral-500 text-lg max-w-2xl">
			Vergelijk koffer maten visueel en check handbagage afmetingen voor verschillende airlines. Vermijd verrassingen bij de gate.
		</p>
	</header>

	<LuggageSize />

	<section class="mt-12 prose prose-neutral max-w-none">
		<h2>Koffer maten begrijpen</h2>
		<p>
			De afmetingen van koffers worden gemeten inclusief wielen en handgrepen. Let op dat
			airlines hun eigen limieten hanteren - check altijd de regels van je specifieke luchtvaartmaatschappij.
		</p>

		<h3>Handbagage limieten</h3>
		<p>
			De meeste airlines staan handbagage toe tot 55x40x23 cm, maar budget airlines zijn vaak strenger.
			Gebruik de airline vergelijker om te zien welke maat je koffer moet hebben.
		</p>
	</section>
</div>
