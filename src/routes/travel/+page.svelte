<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { categories } from '$lib/seo/meta';

	const lang = 'en';
	const category = categories.travel[lang];

	const tools = [
		{ slug: 'luggage-size', name: 'Luggage Size Guide', description: 'Compare luggage sizes visually', icon: '🧳', comingSoon: false },
		{ slug: 'weight-estimator', name: 'Luggage Weight Estimator', description: 'Estimate weight based on clothing', icon: '⚖️', comingSoon: false },
		{ slug: 'jetlag-planner', name: 'Jetlag Planner', description: 'Plan your sleep for timezone changes', icon: '✈️', comingSoon: false },
		{ slug: 'packing-list', name: 'Packing List Generator', description: 'Generate a packing list for your trip', icon: '📋', comingSoon: true },
		{ slug: 'flight-calculator', name: 'Flight Time Calculator', description: 'Calculate flight times and arrival', icon: '🌍', comingSoon: true }
	];
</script>

<SEOHead
	title={category.title}
	description={category.description}
	{lang}
	canonicalPath="/travel"
	alternatePath="/nl/travel"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Travel', href: '/en/travel' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-green-600">→</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Travel Tools
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Tools for travelers. Compare luggage sizes, estimate your baggage weight, and plan your sleep to avoid jetlag.
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
							<span class="text-xs text-neutral-400 uppercase tracking-wider">Coming soon</span>
						</div>
					</div>
				</div>
			{:else}
				<a href="/travel/{tool.slug}" class="group p-6 border-2 border-neutral-200 hover:border-green-400 bg-white transition-all hover:shadow-lg">
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
		<h2 class="text-xl font-bold text-neutral-950 mb-4">About Travel Tools</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				Prepare your trip perfectly. Our tools help you choose the right suitcase,
				estimate your baggage weight without a scale, and minimize jetlag with
				a smart sleep plan.
			</p>
		</div>
	</div>
</div>
