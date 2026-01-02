<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { setLanguage, getLanguageFromPath, t } from '$lib/i18n';
	import { getAllToolsForLang } from '$lib/seo/meta';
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

	// Categories for nav
	const categories = [
		{ key: 'tech', label: 'Tech', href: '/tech' },
		{ key: 'social', label: 'Social', href: '/social' },
		{ key: 'travel', label: 'Travel', href: '/travel' },
		{ key: 'everyday', label: 'Everyday', href: '/everyday' }
	];

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

	function getCategoryPath(href: string): string {
		const prefix = getLangPrefix();
		return prefix ? `${prefix}${href}` : href;
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
		// Remove current lang prefix
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
					{#each categories as cat}
						<a
							href={getCategoryPath(cat.href)}
							class="px-3 py-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 transition-colors uppercase tracking-wider"
						>
							{cat.label}
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
							<span class="text-orange-600 font-mono">$</span>
							<span class="flex-1">Search tools...</span>
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
						{#each categories as cat}
							<a
								href={getCategoryPath(cat.href)}
								class="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-950 border border-neutral-200 hover:border-neutral-950"
								onclick={() => mobileMenuOpen = false}
							>
								{cat.label}
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
						<span class="text-orange-600 font-mono font-bold text-lg">$</span>
						<input
							bind:this={searchInput}
							bind:value={searchQuery}
							onkeydown={handleSearchKeydown}
							type="text"
							placeholder="Search tools..."
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
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
				<div>
					<h3 class="font-bold text-xs uppercase tracking-wider text-neutral-400 mb-4">Categories</h3>
					<ul class="space-y-2 text-sm">
						{#each categories as cat}
							<li><a href={getCategoryPath(cat.href)} class="text-neutral-600 hover:text-orange-600">{cat.label}</a></li>
						{/each}
					</ul>
				</div>
				<div>
					<h3 class="font-bold text-xs uppercase tracking-wider text-neutral-400 mb-4">Timers</h3>
					<ul class="space-y-2 text-sm">
						<li><a href={getToolPath('stopwatch')} class="text-neutral-600 hover:text-orange-600">Stopwatch</a></li>
						<li><a href={getToolPath('timer')} class="text-neutral-600 hover:text-orange-600">Timer</a></li>
						<li><a href={getToolPath('pomodoro')} class="text-neutral-600 hover:text-orange-600">Pomodoro</a></li>
					</ul>
				</div>
				<div>
					<h3 class="font-bold text-xs uppercase tracking-wider text-neutral-400 mb-4">Counters</h3>
					<ul class="space-y-2 text-sm">
						<li><a href={getToolPath('word-counter')} class="text-neutral-600 hover:text-orange-600">Word Counter</a></li>
						<li><a href={getToolPath('character-counter')} class="text-neutral-600 hover:text-orange-600">Character Counter</a></li>
						<li><a href={getToolPath('click-counter')} class="text-neutral-600 hover:text-orange-600">Click Counter</a></li>
					</ul>
				</div>
				<div>
					<h3 class="font-bold text-xs uppercase tracking-wider text-neutral-400 mb-4">Developers</h3>
					<ul class="space-y-2 text-sm">
						<li><a href={getToolPath('base64')} class="text-neutral-600 hover:text-orange-600">Base64</a></li>
						<li><a href={getToolPath('json-formatter')} class="text-neutral-600 hover:text-orange-600">JSON</a></li>
						<li><a href={getToolPath('hash-generator')} class="text-neutral-600 hover:text-orange-600">Hash</a></li>
						<li><a href={getToolPath('uuid-generator')} class="text-neutral-600 hover:text-orange-600">UUID</a></li>
					</ul>
				</div>
				<div>
					<h3 class="font-bold text-xs uppercase tracking-wider text-neutral-400 mb-4">Random</h3>
					<ul class="space-y-2 text-sm">
						<li><a href={getToolPath('wheel-spinner')} class="text-neutral-600 hover:text-orange-600">Wheel Spinner</a></li>
						<li><a href={getToolPath('dice-roller')} class="text-neutral-600 hover:text-orange-600">Dice Roller</a></li>
						<li><a href={getToolPath('coin-flip')} class="text-neutral-600 hover:text-orange-600">Coin Flip</a></li>
					</ul>
				</div>
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
							<a href={getLangPath(opt.code)} class="text-neutral-400 hover:text-neutral-950 {lang === opt.code ? 'text-orange-600' : ''}">{opt.label}</a>
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
