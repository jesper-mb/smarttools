<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import SortLines from '$lib/components/tools/SortLines.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const toolMeta = getToolMeta('sortLines', lang)!;
</script>

<SEOHead
	title={toolMeta.title}
	description={toolMeta.description}
	{lang}
	canonicalPath="/tech/regels-sorteren"
	alternatePath="/en/tech/sort-lines"
/>

<ToolSchema
	name="Regels Sorteren"
	description={toolMeta.description}
	{lang}
	category="Tech"
	keywords={toolMeta.keywords}
	slug="tech/regels-sorteren"
/>

<div class="max-w-5xl mx-auto px-4 py-8">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/' },
			{ label: 'Tech', href: '/tech' },
			{ label: 'Regels Sorteren' }
		]}
	/>

	<header class="mb-8">
		<h1 class="text-4xl font-bold text-neutral-950 mb-2">Regels Sorteren</h1>
		<p class="text-neutral-500 text-lg max-w-2xl">
			Sorteer regels tekst alfabetisch of omgekeerd. Ondersteunt natuurlijke sortering voor nummers en optioneel duplicaten verwijderen.
		</p>
	</header>

	<SortLines />

	<section class="mt-12 prose prose-neutral max-w-none">
		<h2>Hoe werkt de regels sorteerder?</h2>
		<p>
			Plak je tekst met meerdere regels in het invoerveld. Elke regel wordt als apart item behandeld
			en alfabetisch gesorteerd.
		</p>

		<h3>Opties</h3>
		<ul>
			<li><strong>Natuurlijke sortering</strong> - "Item 2" komt voor "Item 10"</li>
			<li><strong>Duplicaten verwijderen</strong> - Houd alleen unieke regels</li>
			<li><strong>Hoofdlettergevoelig</strong> - A-Z voor a-z</li>
			<li><strong>Trimmen</strong> - Verwijder witruimte aan begin/eind</li>
		</ul>
	</section>
</div>
