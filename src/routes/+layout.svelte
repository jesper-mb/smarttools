<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { setLanguage, getLanguageFromPath, t } from '$lib/i18n';
	import { getAllToolsForLang } from '$lib/seo/meta';
	import { getTranslatedPath, getCategoryPath as getConfigCategoryPath, getToolPath as getConfigToolPath, getToolsByCategory, categoryKeys as configCategoryKeys, type SupportedLang, type CategoryKey } from '$lib/config';
	import { getToolMeta } from '$lib/seo/meta';
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import ShortcutsOverlay from '$lib/components/ShortcutsOverlay.svelte';
	import OrganizationSchema from '$lib/components/OrganizationSchema.svelte';

	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let lang = $derived(getLanguageFromPath(page.url.pathname));
	let tools = $derived(getAllToolsForLang(lang));
	let mobileMenuOpen = $state(false);
	let searchOpen = $state(false);
	let searchQuery = $state('');
	let searchInput: HTMLInputElement;
	let selectedIndex = $state(0);

	// Filter tools based on search
	let filteredTools = $derived(() => {
		if (!searchQuery.trim()) return tools.slice(0, 8);
		const query = searchQuery.toLowerCase();
		return tools.filter(tool =>
			tool.title.toLowerCase().includes(query) ||
			tool.description.toLowerCase().includes(query) ||
			tool.keywords.some(k => k.toLowerCase().includes(query))
		).slice(0, 8);
	});

	// Categories for nav - using keys, labels derived based on language
	const categoryKeys: CategoryKey[] = ['tech', 'social', 'travel', 'everyday'];
	const categoryLabels: Record<CategoryKey, Record<SupportedLang, string>> = {
		tech: { en: 'Tech', nl: 'Tech', de: 'Tech', es: 'Tech' },
		social: { en: 'Social', nl: 'Social', de: 'Social', es: 'Social' },
		travel: { en: 'Travel', nl: 'Reizen', de: 'Reise', es: 'Viaje' },
		everyday: { en: 'Everyday', nl: 'Dagelijks', de: 'Alltag', es: 'Cotidiano' }
	};

	// Get tools per category for footer
	let footerToolsByCategory = $derived(
		categoryKeys.map(catKey => ({
			key: catKey,
			label: categoryLabels[catKey][lang as SupportedLang],
			tools: getToolsByCategory(catKey).map(({ key: toolKey }) => {
				const meta = getToolMeta(toolKey, lang as SupportedLang);
				return {
					key: toolKey,
					name: meta?.title.split(' - ')[0] || toolKey,
					path: getConfigToolPath(toolKey, lang as SupportedLang)
				};
			})
		}))
	);

	$effect(() => {
		setLanguage(lang);
	});

	// Open search on 'k' key
	$effect(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && !e.metaKey && !e.ctrlKey && !searchOpen) {
				const target = e.target as HTMLElement;
				if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
					e.preventDefault();
					searchOpen = true;
					setTimeout(() => searchInput?.focus(), 50);
				}
			}
			if (e.key === 'Escape' && searchOpen) {
				searchOpen = false;
				searchQuery = '';
			}
		}
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});

	function handleSearchKeydown(e: KeyboardEvent) {
		const results = filteredTools();
		if (results.length === 0) return;

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			selectedIndex = (selectedIndex + 1) % results.length;
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			selectedIndex = selectedIndex === 0 ? results.length - 1 : selectedIndex - 1;
		} else if (e.key === 'Enter' && results[selectedIndex]) {
			e.preventDefault();
			goto(getToolPath(results[selectedIndex].slug));
			searchOpen = false;
			searchQuery = '';
		}
	}

	function getLangPrefix(): string {
		if (lang === 'nl') return '/nl';
		if (lang === 'de') return '/de';
		if (lang === 'es') return '/es';
		return '';
	}

	function getToolPath(slug: string): string {
		const prefix = getLangPrefix();
		return prefix ? `${prefix}/${slug}` : `/${slug}`;
	}

	function getCategoryPath(categoryKey: CategoryKey): string {
		return getConfigCategoryPath(categoryKey, lang as SupportedLang);
	}

	function getHomePath(): string {
		return getLangPrefix() || '/';
	}

	// Language switcher paths
	const langOptions = [
		{ code: 'en', label: 'EN' },
		{ code: 'nl', label: 'NL' },
		{ code: 'de', label: 'DE' },
		{ code: 'es', label: 'ES' }
	];

	function getLangPath(targetLang: string): string {
		const path = page.url.pathname;

		// Try to use the new path translation system first
		// This handles category-based routes with localized slugs
		try {
			const translated = getTranslatedPath(path, targetLang as SupportedLang);
			if (translated) return translated;
		} catch {
			// Fall back to old logic for non-category routes
		}

		// Fallback: simple prefix swap (for old routes or if translation fails)
		let basePath = path;
		if (path.startsWith('/nl/') || path.startsWith('/nl')) {
			basePath = path.replace(/^\/nl/, '');
		} else if (path.startsWith('/de/') || path.startsWith('/de')) {
			basePath = path.replace(/^\/de/, '');
		} else if (path.startsWith('/es/') || path.startsWith('/es')) {
			basePath = path.replace(/^\/es/, '');
		}
		if (!basePath || basePath === '') basePath = '/';

		// Add target lang prefix
		if (targetLang === 'en') {
			return basePath === '/' ? '/' : basePath;
		}
		return basePath === '/' ? `/${targetLang}` : `/${targetLang}${basePath}`;
	}
</script>

<OrganizationSchema />

<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-neutral-950 focus:text-white focus:outline-none">
	Skip to content
</a>

<div class="min-h-screen flex flex-col bg-white">
	<header class="border-b-2 border-neutral-950 sticky top-0 z-50 bg-white" role="banner">
		<nav class="max-w-6xl mx-auto px-4 sm:px-6">
			<div class="flex items-center justify-between h-14 gap-4">
				<!-- Logo -->
				<a href={getHomePath()} class="flex items-center gap-2 text-neutral-950 flex-shrink-0">
					<span class="text-orange-600 font-bold text-lg">_</span>
					<span class="font-bold tracking-tight">ittytools</span>
				</a>

				<!-- Categories - Desktop -->
				<div class="hidden lg:flex items-center gap-1">
					{#each categoryKeys as catKey}
						<a
							href={getCategoryPath(catKey)}
							class="px-3 py-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 transition-colors uppercase tracking-wider"
						>
							{categoryLabels[catKey][lang as SupportedLang]}
						</a>
					{/each}
				</div>

				<!-- Search Bar - Wide -->
				<div class="flex-1 max-w-md hidden sm:block">
					<div class="relative">
						<button
							onclick={() => { searchOpen = true; setTimeout(() => searchInput?.focus(), 50); }}
							class="w-full flex items-center gap-3 px-4 py-2 text-sm text-neutral-400 border-2 border-neutral-200 hover:border-neutral-400 bg-neutral-50 transition-colors text-left"
						>
							<span class="flex-1">{lang === 'nl' ? 'Zoek tools...' : lang === 'de' ? 'Tools suchen...' : lang === 'es' ? 'Buscar herramientas...' : 'Search tools...'}</span>
							<kbd class="px-1.5 py-0.5 bg-white border border-neutral-300 text-[10px] font-mono">K</kbd>
						</button>
					</div>
				</div>

				<!-- Right side -->
				<div class="flex items-center gap-2">
					<!-- Privacy badge -->
					<span class="hidden md:inline-flex items-center gap-1 px-2 py-1 text-[10px] text-neutral-400 border border-neutral-200 uppercase tracking-wider">
						<span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
						Privacy first
					</span>

					<!-- Language switcher -->
					<div class="relative group">
						<button class="px-2 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-950 border-2 border-neutral-300 hover:border-neutral-950 transition-colors">
							{lang.toUpperCase()}
						</button>
						<div class="absolute right-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
							<div class="bg-white border-2 border-neutral-950 py-1 min-w-16">
								{#each langOptions as opt}
									<a
										href={getLangPath(opt.code)}
										data-sveltekit-reload
										class="block px-3 py-1.5 text-xs font-bold uppercase tracking-wider {lang === opt.code ? 'text-orange-600 bg-neutral-100' : 'text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100'}"
									>
										{opt.label}
									</a>
								{/each}
							</div>
						</div>
					</div>

					<!-- Mobile search -->
					<button
						class="sm:hidden p-2 text-neutral-500 hover:text-neutral-950"
						onclick={() => { searchOpen = true; setTimeout(() => searchInput?.focus(), 50); }}
						aria-label="Search"
					>
						<span class="text-lg">⌕</span>
					</button>

					<!-- Mobile menu -->
					<button
						class="lg:hidden p-1 text-neutral-950"
						onclick={() => mobileMenuOpen = !mobileMenuOpen}
						aria-label="Menu"
					>
						<span class="text-lg font-bold">{mobileMenuOpen ? '×' : '≡'}</span>
					</button>
				</div>
			</div>

			<!-- Mobile menu -->
			{#if mobileMenuOpen}
				<div class="lg:hidden py-4 border-t-2 border-neutral-200">
					<div class="flex flex-wrap gap-2 mb-4">
						{#each categoryKeys as catKey}
							<a
								href={getCategoryPath(catKey)}
								class="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-950 border border-neutral-200 hover:border-neutral-950"
								onclick={() => mobileMenuOpen = false}
							>
								{categoryLabels[catKey][lang as SupportedLang]}
							</a>
						{/each}
					</div>
					<div class="grid grid-cols-2 gap-1">
						{#each tools.slice(0, 8) as tool}
							<a
								href={getToolPath(tool.slug)}
								class="px-2 py-2 text-sm text-neutral-500 hover:text-neutral-950"
								onclick={() => mobileMenuOpen = false}
							>
								{tool.title.split(' - ')[0]}
							</a>
						{/each}
					</div>
				</div>
			{/if}
		</nav>
	</header>

	<!-- Search Overlay -->
	{#if searchOpen}
		<div class="fixed inset-0 z-[100] bg-black/50" onclick={() => { searchOpen = false; searchQuery = ''; }}>
			<div class="max-w-2xl mx-auto mt-20 mx-4" onclick={(e) => e.stopPropagation()}>
				<div class="bg-white border-2 border-neutral-950 shadow-2xl">
					<div class="flex items-center gap-3 px-4 py-3 border-b-2 border-neutral-200">
						<span class="w-2.5 h-5 bg-orange-500 animate-blink flex-shrink-0"></span>
						<input
							bind:this={searchInput}
							bind:value={searchQuery}
							onkeydown={handleSearchKeydown}
							type="text"
							placeholder={lang === 'nl' ? 'Zoek tools...' : lang === 'de' ? 'Tools suchen...' : lang === 'es' ? 'Buscar herramientas...' : 'Search tools...'}
							class="flex-1 bg-transparent outline-none font-mono text-lg"
							autocomplete="off"
							spellcheck="false"
						/>
						<kbd class="px-2 py-1 bg-neutral-100 border border-neutral-300 text-xs font-mono">ESC</kbd>
					</div>
					<div class="max-h-96 overflow-y-auto">
						{#each filteredTools() as tool, i}
							<a
								href={getToolPath(tool.slug)}
								class="flex items-center gap-4 px-4 py-3 transition-colors {i === selectedIndex ? 'bg-neutral-950 text-white' : 'hover:bg-neutral-100'}"
								onclick={() => { searchOpen = false; searchQuery = ''; }}
							>
								<span class="font-mono text-orange-600 {i === selectedIndex ? 'text-orange-400' : ''}">&gt;</span>
								<div class="flex-1 min-w-0">
									<div class="font-medium truncate">{tool.title.split(' - ')[0]}</div>
									<div class="text-sm truncate {i === selectedIndex ? 'text-neutral-400' : 'text-neutral-500'}">{tool.description}</div>
								</div>
								{#if i === selectedIndex}
									<span class="text-xs text-neutral-400">⏎</span>
								{/if}
							</a>
						{/each}
					</div>
					<div class="px-4 py-2 border-t border-neutral-200 bg-neutral-50 text-xs text-neutral-400 flex justify-between">
						<span>↑↓ to navigate</span>
						<span>⏎ to select</span>
						<span>ESC to close</span>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<main id="main-content" class="flex-1" role="main">
		{@render children()}
	</main>

	<footer class="border-t-2 border-neutral-200 mt-auto bg-neutral-50" role="contentinfo">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
				{#each footerToolsByCategory as category}
					<div>
						<h3 class="font-bold text-xs uppercase tracking-wider text-neutral-400 mb-4">
							<a href={getCategoryPath(category.key)} class="hover:text-orange-600">{category.label}</a>
						</h3>
						<ul class="space-y-2 text-sm">
							{#each category.tools as tool}
								<li><a href={tool.path} class="text-neutral-600 hover:text-orange-600">{tool.name}</a></li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
			<div class="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
				<div class="flex items-center gap-4">
					<div class="flex items-center gap-2">
						<span class="text-orange-600 font-bold">_</span>
						<span class="font-bold text-neutral-950">ittytools</span>
					</div>
					<span class="text-neutral-300">|</span>
					<span class="text-xs text-neutral-400 flex items-center gap-1">
						<span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
						Privacy first — all tools run locally
					</span>
				</div>
				<div class="flex items-center gap-4">
					<div class="flex gap-2 text-xs">
						{#each langOptions as opt}
							<a href={getLangPath(opt.code)} data-sveltekit-reload class="text-neutral-400 hover:text-neutral-950 {lang === opt.code ? 'text-orange-600' : ''}">{opt.label}</a>
						{/each}
					</div>
					<p class="text-xs text-neutral-400">
						© {new Date().getFullYear()} IttyTools
					</p>
				</div>
			</div>
		</div>
	</footer>

	<CommandPalette />
	<ShortcutsOverlay />
</div>
