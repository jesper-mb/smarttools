<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { categories, getAllToolsForLang } from '$lib/seo/meta';

	const lang = 'en';
	const category = categories.everyday[lang];
	const allTools = getAllToolsForLang(lang);

	// Group tools by subcategory
	const toolGroups = [
		{
			name: 'Timers',
			icon: '⏱',
			tools: allTools.filter(t => ['stopwatch', 'timer', 'pomodoro', 'date-countdown'].includes(t.slug))
		},
		{
			name: 'Counters',
			icon: '123',
			tools: allTools.filter(t => ['word-counter', 'character-counter', 'click-counter'].includes(t.slug))
		},
		{
			name: 'Random',
			icon: '🎲',
			tools: allTools.filter(t => ['wheel-spinner', 'dice-roller', 'coin-flip', 'random-number', 'name-picker'].includes(t.slug))
		},
		{
			name: 'Calculators',
			icon: '=',
			tools: allTools.filter(t => ['percentage-calculator', 'age-calculator', 'unit-converter'].includes(t.slug))
		}
	];
</script>

<SEOHead
	title={category.title}
	description={category.description}
	{lang}
	canonicalPath="/everyday"
	alternatePath="/nl/everyday"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Everyday', href: '/en/everyday' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-orange-600">○</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Everyday Tools
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Simple tools for daily use. Timers, counters, calculators and more - all instantly available without installation.
		</p>
	</div>

	{#each toolGroups as group}
		{#if group.tools.length > 0}
			<section class="mb-12">
				<h2 class="section-header flex items-center gap-2">
					<span class="text-lg">{group.icon}</span>
					{group.name}
				</h2>
				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{#each group.tools as tool}
						<a href="/{tool.slug}" class="group p-6 border-2 border-neutral-200 hover:border-orange-400 bg-white transition-all hover:shadow-lg">
							<h3 class="font-bold text-neutral-950 mb-1 group-hover:text-orange-700">{tool.title.split(' - ')[0]}</h3>
							<p class="text-sm text-neutral-500 line-clamp-2">{tool.description}</p>
						</a>
					{/each}
				</div>
			</section>
		{/if}
	{/each}

	<div class="mt-8 p-8 bg-orange-50 border-2 border-orange-200">
		<h2 class="text-xl font-bold text-neutral-950 mb-4">About Everyday Tools</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				These tools are designed for speed and simplicity. No registration, no downloads,
				no ads. Use them directly in your browser with full keyboard support.
			</p>
			<p class="mt-4">
				<strong>Pro tip:</strong> Press <kbd class="px-1.5 py-0.5 bg-white border border-neutral-300 text-xs">⌘K</kbd> to search quickly.
			</p>
		</div>
	</div>
</div>
