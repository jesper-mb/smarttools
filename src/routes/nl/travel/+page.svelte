<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { categories } from '$lib/seo/meta';

	const lang = 'nl';
	const category = categories.travel[lang];

	const tools = [
		{ slug: 'koffer-maten', name: 'Koffer Maten Gids', description: 'Vergelijk koffer maten visueel', icon: '🧳', comingSoon: false },
		{ slug: 'gewicht-schatter', name: 'Bagage Gewicht Schatter', description: 'Schat gewicht op basis van kleding', icon: '⚖️', comingSoon: false },
		{ slug: 'jetlag-planner', name: 'Jetlag Planner', description: 'Plan je slaap voor tijdzone wisseling', icon: '✈️', comingSoon: false },
		{ slug: 'paklijst-generator', name: 'Paklijst Generator', description: 'Genereer een paklijst voor je reis', icon: '📋', comingSoon: true },
		{ slug: 'vlucht-tracker', name: 'Vlucht Tijd Calculator', description: 'Bereken vluchttijden en aankomst', icon: '🌍', comingSoon: true }
	];
</script>

<SEOHead
	title={category.title}
	description={category.description}
	{lang}
	canonicalPath="/nl/travel"
	alternatePath="/travel"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Travel', href: '/travel' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-green-600">→</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Reis Tools
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Tools voor reizigers. Vergelijk koffer maten, schat je bagage gewicht, en plan je slaap om jetlag te voorkomen.
		</p>
	</div>

	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each tools as tool}
			{#if tool.comingSoon}
				<div class="p-6 border-2 border-dashed border-neutral-200 bg-neutral-50 opacity-60">
					<div class="flex items-start gap-3">
						<span class="text-2xl">{tool.icon}</span>
						<div class="flex-1">
							<h2 class="font-bold text-neutral-950 mb-1">{tool.name}</h2>
							<p class="text-sm text-neutral-500 mb-2">{tool.description}</p>
							<span class="text-xs text-neutral-400 uppercase tracking-wider">Binnenkort</span>
						</div>
					</div>
				</div>
			{:else}
				<a href="/nl/travel/{tool.slug}" class="group p-6 border-2 border-neutral-200 hover:border-green-400 bg-white transition-all hover:shadow-lg">
					<div class="flex items-start gap-3">
						<span class="text-2xl group-hover:scale-110 transition-transform">{tool.icon}</span>
						<div class="flex-1">
							<h2 class="font-bold text-neutral-950 mb-1 group-hover:text-green-700">{tool.name}</h2>
							<p class="text-sm text-neutral-500">{tool.description}</p>
						</div>
					</div>
				</a>
			{/if}
		{/each}
	</div>

	<div class="mt-16 p-8 bg-green-50 border-2 border-green-200">
		<h2 class="text-xl font-bold text-neutral-950 mb-4">Over Reis Tools</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				Bereid je reis perfect voor. Onze tools helpen je om de juiste koffer te kiezen,
				je bagage gewicht in te schatten zonder weegschaal, en jetlag te minimaliseren met
				een slim slaapplan.
			</p>
		</div>
	</div>
</div>
