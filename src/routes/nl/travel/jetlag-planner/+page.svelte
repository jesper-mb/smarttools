<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import JetlagPlanner from '$lib/components/tools/JetlagPlanner.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const toolMeta = getToolMeta('jetlagPlanner', lang)!;
</script>

<SEOHead
	title={toolMeta.title}
	description={toolMeta.description}
	{lang}
	canonicalPath="/nl/travel/jetlag-planner"
	alternatePath="/travel/jetlag-planner"
/>

<ToolSchema
	name="Jetlag Planner"
	description={toolMeta.description}
	{lang}
	category="Travel"
	keywords={toolMeta.keywords}
	slug="travel/jetlag-planner"
/>

<div class="max-w-5xl mx-auto px-4 py-8">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/' },
			{ label: 'Travel', href: '/travel' },
			{ label: 'Jetlag Planner' }
		]}
	/>

	<header class="mb-8">
		<h1 class="text-4xl font-bold text-neutral-950 mb-2">Jetlag Planner</h1>
		<p class="text-neutral-500 text-lg max-w-2xl">
			Plan je slaapschema om jetlag te minimaliseren. Krijg gepersonaliseerde tips voor oost- of westwaarts reizen.
		</p>
	</header>

	<JetlagPlanner />

	<section class="mt-12 prose prose-neutral max-w-none">
		<h2>Hoe werkt jetlag?</h2>
		<p>
			Jetlag ontstaat wanneer je biologische klok niet meer synchroon loopt met de lokale tijd.
			Je lichaam heeft gemiddeld 1 dag per uur tijdsverschil nodig om aan te passen.
		</p>

		<h3>Tips om jetlag te verminderen</h3>
		<ul>
			<li>Begin enkele dagen voor vertrek met aanpassen van je slaaptijden</li>
			<li>Drink voldoende water tijdens de vlucht</li>
			<li>Vermijd alcohol en cafeine</li>
			<li>Zoek daglicht op je bestemming</li>
		</ul>
	</section>
</div>
