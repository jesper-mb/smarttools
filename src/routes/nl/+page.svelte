<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { getAllToolsForLang, getSiteMeta, categories } from '$lib/seo/meta';
	import { getToolPath, getCategoryPath, type CategoryKey } from '$lib/config';
	import { goto } from '$app/navigation';

	const lang = 'nl';
	const siteMeta = getSiteMeta(lang);
	const tools = getAllToolsForLang(lang);

	// Helper to get proper tool URL
	function toolUrl(toolKey: string): string {
		return getToolPath(toolKey, lang);
	}

	// Helper to get proper category URL
	function categoryUrl(categoryKey: CategoryKey): string {
		return getCategoryPath(categoryKey, lang);
	}

	let searchQuery = $state('');
	let selectedIndex = $state(0);
	let searchInput: HTMLInputElement;
	let showSuggestTool = $state(false);
	let suggestedToolName = $state('');
	let suggestedToolDesc = $state('');

	// Initial animation state
	let hasAnimated = $state(false);

	// Filter tools based on search
	let filteredTools = $derived(() => {
		if (!searchQuery.trim()) return [];
		const query = searchQuery.toLowerCase();
		return tools.filter(tool =>
			tool.title.toLowerCase().includes(query) ||
			tool.description.toLowerCase().includes(query) ||
			tool.keywords.some(k => k.toLowerCase().includes(query))
		).slice(0, 8);
	});

	// Category data with icons and tools
	const categoryData: Array<{ key: CategoryKey; icon: string; name: string; description: string }> = [
		{
			key: 'tech',
			icon: '{ }',
			name: 'Tech',
			description: 'Encoding, hashing, JSON, wachtwoorden'
		},
		{
			key: 'social',
			icon: '@',
			name: 'Social',
			description: 'Safezones, bio tellers, voorvertoningen'
		},
		{
			key: 'travel',
			icon: '→',
			name: 'Reizen',
			description: 'Bagage, gewicht, jetlag planning'
		},
		{
			key: 'everyday',
			icon: '○',
			name: 'Dagelijks',
			description: 'Timers, tellers, calculators'
		}
	];

	function handleKeydown(e: KeyboardEvent) {
		const results = filteredTools();
		if (results.length === 0) return;

		if (e.key === 'ArrowDown' || e.key === 'Tab' && !e.shiftKey) {
			e.preventDefault();
			selectedIndex = (selectedIndex + 1) % results.length;
		} else if (e.key === 'ArrowUp' || e.key === 'Tab' && e.shiftKey) {
			e.preventDefault();
			selectedIndex = selectedIndex === 0 ? results.length - 1 : selectedIndex - 1;
		} else if (e.key === 'Enter' && results[selectedIndex]) {
			e.preventDefault();
			goto(toolUrl(results[selectedIndex].key));
		}
	}

	$effect(() => {
		// Reset selection when search changes
		searchQuery;
		selectedIndex = 0;
	});
</script>

<SEOHead
	title={siteMeta.title}
	description={siteMeta.description}
	{lang}
	canonicalPath="/nl"
	alternatePath="/"
/>

<div class="min-h-[calc(100vh-200px)] flex flex-col">
	<!-- Hero Section - Split Layout -->
	<div class="flex-1 border-b-2 border-neutral-200">
		<div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
			<div class="grid lg:grid-cols-2 gap-8 lg:gap-0 min-h-[520px] items-center">
				<!-- Left: Branding -->
				<div class="py-12 lg:py-16 lg:pr-16">
					<div class="animate-fade-in-up">
						<div class="flex items-baseline gap-2 mb-6">
							<span class="text-orange-600 text-4xl sm:text-5xl font-bold leading-none">_</span>
							<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight leading-none">
								ittytools
							</h1>
						</div>
						<p class="text-lg sm:text-xl text-neutral-600 font-sans max-w-sm mb-8 leading-relaxed">
							Simpele tools die gewoon werken.<br/>
							<span class="text-neutral-400">Geen registratie. Geen advertenties.</span>
						</p>

						<!-- Quick Stats -->
						<div class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-400">
							<span class="font-mono">50+ tools</span>
							<span class="text-neutral-300">•</span>
							<span>NL & EN</span>
							<span class="text-neutral-300">•</span>
							<span>100% gratis</span>
						</div>
					</div>
				</div>

				<!-- Right: Search -->
				<div class="py-8 lg:py-16 lg:pl-16 lg:border-l-2 border-neutral-200">
					<div class="animate-fade-in-up max-w-md" style="animation-delay: 100ms; opacity: 0;">
						<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Zoek een tool</label>
						<div class="relative">
							<div class="flex items-center border-2 border-neutral-950 bg-white shadow-lg">
								<span class="pl-4 pr-2 w-2.5 h-5 bg-orange-500 animate-blink flex-shrink-0"></span>
								<input
									bind:this={searchInput}
									bind:value={searchQuery}
									onkeydown={handleKeydown}
									onfocus={() => hasAnimated = true}
									type="text"
									placeholder="typ om te zoeken..."
									class="flex-1 py-3.5 pr-4 bg-transparent outline-none font-mono text-base placeholder:text-neutral-300"
									autocomplete="off"
									spellcheck="false"
								/>
								<div class="pr-3 flex items-center gap-1.5">
									<kbd class="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300 text-xs font-mono text-neutral-500">↑↓</kbd>
									<kbd class="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300 text-xs font-mono text-neutral-500">⏎</kbd>
								</div>
							</div>

							<!-- Search Results / Default Suggestions -->
							<div class="border-2 border-t-0 border-neutral-950 bg-white max-h-72 overflow-y-auto">
								{#if filteredTools().length > 0}
									{#each filteredTools() as tool, i}
										<a
											href={toolUrl(tool.key)}
											class="flex items-center gap-3 px-4 py-2.5 transition-colors {i === selectedIndex ? 'bg-neutral-950 text-white' : 'hover:bg-neutral-100'}"
										>
											<span class="font-mono text-orange-600 text-sm {i === selectedIndex ? 'text-orange-400' : ''}">&gt;</span>
											<div class="flex-1 min-w-0">
												<div class="font-medium text-sm truncate">{tool.title.split(' - ')[0]}</div>
												<div class="text-xs truncate {i === selectedIndex ? 'text-neutral-400' : 'text-neutral-500'}">{tool.description}</div>
											</div>
											{#if i === selectedIndex}
												<span class="text-xs text-neutral-400">⏎</span>
											{/if}
										</a>
									{/each}
								{:else}
									<!-- Default tool suggestions when empty -->
									<div
										class="px-4 py-2 text-xs text-neutral-400 uppercase tracking-wider border-b border-neutral-100 bg-neutral-50 {!hasAnimated ? 'animate-fade-in-fast' : ''}"
										style={!hasAnimated ? 'animation-delay: 400ms' : ''}
									>Populaire tools</div>
									{#each tools.slice(0, 5) as tool, i}
										<a
											href={toolUrl(tool.key)}
											class="flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-100 transition-colors {!hasAnimated ? 'animate-fade-in-fast' : ''}"
											style={!hasAnimated ? `animation-delay: ${500 + i * 80}ms` : ''}
										>
											<span class="font-mono text-neutral-300 text-sm">&gt;</span>
											<div class="flex-1 min-w-0">
												<div class="font-medium text-sm truncate text-neutral-700">{tool.title.split(' - ')[0]}</div>
											</div>
										</a>
									{/each}
									<!-- Missing tool suggestion -->
									<div class="px-4 py-3 bg-neutral-50 border-t border-neutral-200">
										<button
											onclick={() => showSuggestTool = true}
											class="text-sm text-orange-600 hover:text-orange-700 font-medium"
										>
											+ Stel een tool voor
										</button>
									</div>
								{/if}
							</div>
						</div>

						<p class="text-xs text-neutral-400 mt-3 font-sans">
							Druk op <kbd class="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300 text-xs font-mono">K</kbd>
							<span class="ml-1">om overal te zoeken</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Categories Grid -->
	<div class="py-16 bg-neutral-50 border-b border-neutral-200">
		<div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
			<div class="flex items-baseline justify-between mb-8">
				<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400">Categorieën</h2>
				<span class="text-xs text-neutral-300 font-mono">4 categorieën</span>
			</div>
			<div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
				{#each categoryData as category, i}
					<a
						href={categoryUrl(category.key)}
						class="group relative p-5 sm:p-6 border-2 border-neutral-200 bg-white transition-all hover:border-neutral-950 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
					>
						<div class="flex items-start justify-between mb-4">
							<span class="text-2xl sm:text-3xl font-mono font-bold text-neutral-300 group-hover:text-orange-600 transition-colors">{category.icon}</span>
							<span class="text-xs text-neutral-300 font-mono opacity-0 group-hover:opacity-100 transition-opacity">→</span>
						</div>
						<h3 class="text-base sm:text-lg font-bold text-neutral-950 mb-1">{category.name}</h3>
						<p class="text-xs sm:text-sm text-neutral-500 font-sans leading-relaxed">{category.description}</p>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Popular Tools Section -->
	<div class="py-16">
		<div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
			<div class="flex items-baseline justify-between mb-8">
				<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400">Populaire tools</h2>
				<a href={categoryUrl('everyday')} class="text-xs text-neutral-400 hover:text-orange-600 transition-colors font-mono">
					Bekijk alle →
				</a>
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
				{#each tools.slice(0, 9) as tool, i}
					<a
						href="/{tool.slug}"
						class="group flex items-center gap-4 p-4 border-2 border-neutral-100 hover:border-neutral-950 bg-white transition-all hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
					>
						<span class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-neutral-100 text-neutral-400 font-mono text-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
							{String(i + 1).padStart(2, '0')}
						</span>
						<div class="flex-1 min-w-0">
							<h3 class="font-bold text-neutral-950 text-sm truncate group-hover:text-orange-600 transition-colors">{tool.title.split(' - ')[0]}</h3>
							<p class="text-xs text-neutral-500 font-sans truncate">{tool.description}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Features Section -->
	<div class="py-16 bg-neutral-950 text-white">
		<div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
			<div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
				<div>
					<div class="text-orange-500 font-mono text-sm mb-3">01</div>
					<h3 class="text-lg font-bold mb-2">Privacy first</h3>
					<p class="text-sm text-neutral-400 font-sans leading-relaxed">
						Alle tools draaien in je browser. Je data verlaat nooit je apparaat.
					</p>
				</div>
				<div>
					<div class="text-orange-500 font-mono text-sm mb-3">02</div>
					<h3 class="text-lg font-bold mb-2">Keyboard shortcuts</h3>
					<p class="text-sm text-neutral-400 font-sans leading-relaxed">
						Elke tool heeft sneltoetsen. Space om te starten, R om te resetten.
					</p>
				</div>
				<div>
					<div class="text-orange-500 font-mono text-sm mb-3">03</div>
					<h3 class="text-lg font-bold mb-2">Geen rommel</h3>
					<p class="text-sm text-neutral-400 font-sans leading-relaxed">
						Geen pop-ups, geen cookies, geen advertenties. Alleen de tool.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Stats Section -->
	<div class="py-12 border-t border-neutral-200">
		<div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
			<div class="flex flex-wrap justify-center gap-12 sm:gap-16 lg:gap-24">
				<div class="text-center">
					<div class="text-3xl sm:text-4xl font-bold text-neutral-950 font-mono">50+</div>
					<div class="text-xs text-neutral-400 font-sans mt-1 uppercase tracking-wider">Tools</div>
				</div>
				<div class="text-center">
					<div class="text-3xl sm:text-4xl font-bold text-neutral-950 font-mono">0</div>
					<div class="text-xs text-neutral-400 font-sans mt-1 uppercase tracking-wider">Advertenties</div>
				</div>
				<div class="text-center">
					<div class="text-3xl sm:text-4xl font-bold text-neutral-950 font-mono">2</div>
					<div class="text-xs text-neutral-400 font-sans mt-1 uppercase tracking-wider">Talen</div>
				</div>
				<div class="text-center">
					<div class="text-3xl sm:text-4xl font-bold text-orange-600 font-mono">∞</div>
					<div class="text-xs text-neutral-400 font-sans mt-1 uppercase tracking-wider">Gratis</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Suggest Tool Modal -->
{#if showSuggestTool}
	<div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onclick={() => showSuggestTool = false}>
		<div class="bg-white border-2 border-neutral-950 max-w-md w-full p-6" onclick={(e) => e.stopPropagation()}>
			<div class="flex items-center justify-between mb-6">
				<h2 class="text-xl font-bold">Stel een tool voor</h2>
				<button onclick={() => showSuggestTool = false} class="text-2xl text-neutral-400 hover:text-neutral-950">&times;</button>
			</div>

			<p class="text-sm text-neutral-500 mb-6">
				Mis je een tool? Laat het ons weten en we bouwen hem binnen 10 minuten!
			</p>

			<div class="space-y-4">
				<div>
					<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Tool naam</label>
					<input
						type="text"
						bind:value={suggestedToolName}
						placeholder="bijv. Markdown Previewer"
						class="w-full px-4 py-3 border-2 border-neutral-200 focus:border-orange-500 outline-none"
					/>
				</div>
				<div>
					<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Beschrijving</label>
					<textarea
						bind:value={suggestedToolDesc}
						placeholder="Wat moet de tool doen?"
						class="w-full h-24 px-4 py-3 border-2 border-neutral-200 focus:border-orange-500 outline-none resize-none"
					></textarea>
				</div>
			</div>

			<div class="mt-6 flex gap-3">
				<button
					onclick={() => {
						// In production: send to API
						alert(`Bedankt! We gaan aan de slag met: ${suggestedToolName}`);
						showSuggestTool = false;
						suggestedToolName = '';
						suggestedToolDesc = '';
					}}
					disabled={!suggestedToolName.trim()}
					class="flex-1 px-4 py-3 bg-orange-600 text-white font-medium hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Verstuur suggestie
				</button>
				<button
					onclick={() => showSuggestTool = false}
					class="px-4 py-3 border-2 border-neutral-200 hover:border-neutral-400"
				>
					Annuleren
				</button>
			</div>

			<p class="mt-4 text-xs text-neutral-400 text-center">
				We bouwen nieuwe tools zo snel mogelijk. Gemiddelde tijd: 10 minuten.
			</p>
		</div>
	</div>
{/if}
