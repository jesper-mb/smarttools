<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { getAllToolsForLang, getSiteMeta } from '$lib/seo/meta';
	import { goto } from '$app/navigation';

	const lang = 'es';
	const siteMeta = getSiteMeta('en'); // Use English meta for now
	const tools = getAllToolsForLang('en'); // Use English tools

	let searchQuery = $state('');
	let selectedIndex = $state(0);
	let searchInput: HTMLInputElement;

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

	// Category data with icons
	const categoryData = [
		{
			key: 'tech',
			icon: '{ }',
			name: 'Tech',
			description: 'Codificación, hashing, JSON, contraseñas',
			href: '/tech'
		},
		{
			key: 'social',
			icon: '@',
			name: 'Social',
			description: 'Zonas seguras, contadores de bio, vistas previas',
			href: '/social'
		},
		{
			key: 'travel',
			icon: '->',
			name: 'Viajes',
			description: 'Equipaje, peso, planificación de jetlag',
			href: '/travel'
		},
		{
			key: 'everyday',
			icon: 'O',
			name: 'Cotidiano',
			description: 'Temporizadores, contadores, calculadoras',
			href: '/everyday'
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
			goto(`/${results[selectedIndex].slug}`);
		}
	}

	$effect(() => {
		searchQuery;
		selectedIndex = 0;
	});
</script>

<SEOHead
	title="IttyTools - Herramientas Online Simples | Gratis y Privadas"
	description="50+ herramientas online gratuitas: temporizadores, contadores, convertidores y más. Sin registro, sin anuncios. Todas las herramientas funcionan localmente en tu navegador."
	{lang}
	canonicalPath="/es"
/>

<div class="min-h-[calc(100vh-200px)] flex flex-col">
	<!-- Hero Section -->
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
							Herramientas simples que funcionan.<br/>
							<span class="text-neutral-400">Sin registro. Sin anuncios.</span>
						</p>

						<!-- Quick Stats -->
						<div class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-400">
							<span class="font-mono">50+ herramientas</span>
							<span class="text-neutral-300">•</span>
							<span>4 idiomas</span>
							<span class="text-neutral-300">•</span>
							<span>100% gratis</span>
						</div>
					</div>
				</div>

				<!-- Right: Search -->
				<div class="py-8 lg:py-16 lg:pl-16 lg:border-l-2 border-neutral-200">
					<div class="animate-fade-in-up max-w-md" style="animation-delay: 100ms; opacity: 0;">
						<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Buscar herramienta</label>
						<div class="relative">
							<div class="flex items-center border-2 border-neutral-950 bg-white shadow-lg">
								<span class="pl-4 pr-2 text-orange-600 font-mono font-bold text-lg">$</span>
								<input
									bind:this={searchInput}
									bind:value={searchQuery}
									onkeydown={handleKeydown}
									type="text"
									placeholder="escribe para buscar..."
									class="flex-1 py-3.5 pr-4 bg-transparent outline-none font-mono text-base placeholder:text-neutral-300"
									autocomplete="off"
									spellcheck="false"
								/>
								<div class="pr-3 flex items-center gap-1.5">
									<kbd class="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300 text-xs font-mono text-neutral-500">↑↓</kbd>
									<kbd class="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300 text-xs font-mono text-neutral-500">⏎</kbd>
								</div>
							</div>

							<!-- Search Results -->
							<div class="border-2 border-t-0 border-neutral-950 bg-white max-h-72 overflow-y-auto">
								{#if filteredTools().length > 0}
									{#each filteredTools() as tool, i}
										<a
											href="/{tool.slug}"
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
									<div class="px-4 py-2 text-xs text-neutral-400 uppercase tracking-wider border-b border-neutral-100 bg-neutral-50">Herramientas populares</div>
									{#each tools.slice(0, 5) as tool}
										<a
											href="/{tool.slug}"
											class="flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-100 transition-colors"
										>
											<span class="font-mono text-neutral-300 text-sm">&gt;</span>
											<div class="flex-1 min-w-0">
												<div class="font-medium text-sm truncate text-neutral-700">{tool.title.split(' - ')[0]}</div>
											</div>
										</a>
									{/each}
								{/if}
							</div>
						</div>

						<p class="text-xs text-neutral-400 mt-3 font-sans">
							<kbd class="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300 text-xs font-mono">⌘K</kbd>
							<span class="ml-1">disponible en todas partes</span>
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
				<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400">Categorías</h2>
				<span class="text-xs text-neutral-300 font-mono">4 categorías</span>
			</div>
			<div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
				{#each categoryData as category}
					<a
						href={category.href}
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
				<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400">Herramientas populares</h2>
				<a href="/everyday" class="text-xs text-neutral-400 hover:text-orange-600 transition-colors font-mono">
					Ver todas →
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
					<h3 class="text-lg font-bold mb-2">Privacidad primero</h3>
					<p class="text-sm text-neutral-400 font-sans leading-relaxed">
						Todas las herramientas funcionan en tu navegador. Tus datos nunca salen de tu dispositivo.
					</p>
				</div>
				<div>
					<div class="text-orange-500 font-mono text-sm mb-3">02</div>
					<h3 class="text-lg font-bold mb-2">Atajos de teclado</h3>
					<p class="text-sm text-neutral-400 font-sans leading-relaxed">
						Cada herramienta tiene atajos. Espacio para iniciar, R para reiniciar.
					</p>
				</div>
				<div>
					<div class="text-orange-500 font-mono text-sm mb-3">03</div>
					<h3 class="text-lg font-bold mb-2">Sin desorden</h3>
					<p class="text-sm text-neutral-400 font-sans leading-relaxed">
						Sin pop-ups, sin cookies, sin anuncios. Solo la herramienta.
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
					<div class="text-xs text-neutral-400 font-sans mt-1 uppercase tracking-wider">Herramientas</div>
				</div>
				<div class="text-center">
					<div class="text-3xl sm:text-4xl font-bold text-neutral-950 font-mono">0</div>
					<div class="text-xs text-neutral-400 font-sans mt-1 uppercase tracking-wider">Anuncios</div>
				</div>
				<div class="text-center">
					<div class="text-3xl sm:text-4xl font-bold text-neutral-950 font-mono">4</div>
					<div class="text-xs text-neutral-400 font-sans mt-1 uppercase tracking-wider">Idiomas</div>
				</div>
				<div class="text-center">
					<div class="text-3xl sm:text-4xl font-bold text-orange-600 font-mono">∞</div>
					<div class="text-xs text-neutral-400 font-sans mt-1 uppercase tracking-wider">Gratis</div>
				</div>
			</div>
		</div>
	</div>
</div>
