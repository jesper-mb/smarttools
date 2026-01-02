<script lang="ts">
	import { goto } from '$app/navigation';
	import { t, currentLang } from '$lib/i18n';
	import { getAllToolsForLang } from '$lib/seo/meta';

	let open = $state(false);
	let search = $state('');
	let selectedIndex = $state(0);
	let inputEl: HTMLInputElement;

	let lang = $derived($currentLang);
	let allTools = $derived(getAllToolsForLang(lang));

	let filteredTools = $derived(
		allTools.filter(tool =>
			tool.title.toLowerCase().includes(search.toLowerCase()) ||
			tool.description.toLowerCase().includes(search.toLowerCase())
		)
	);

	function openPalette() {
		open = true;
		search = '';
		selectedIndex = 0;
		setTimeout(() => inputEl?.focus(), 10);
	}

	function closePalette() {
		open = false;
		search = '';
	}

	function selectTool(tool: typeof allTools[0]) {
		const path = lang === 'en' ? `/en/${tool.slug}` : `/${tool.slug}`;
		goto(path);
		closePalette();
	}

	function handleKeydown(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
			e.preventDefault();
			if (open) {
				closePalette();
			} else {
				openPalette();
			}
			return;
		}

		if (!open) return;

		switch (e.key) {
			case 'Escape':
				closePalette();
				break;
			case 'ArrowDown':
				e.preventDefault();
				selectedIndex = Math.min(selectedIndex + 1, filteredTools.length - 1);
				break;
			case 'ArrowUp':
				e.preventDefault();
				selectedIndex = Math.max(selectedIndex - 1, 0);
				break;
			case 'Enter':
				e.preventDefault();
				if (filteredTools[selectedIndex]) {
					selectTool(filteredTools[selectedIndex]);
				}
				break;
		}
	}

	$effect(() => {
		if (search) {
			selectedIndex = 0;
		}
	});
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div class="fixed inset-0 z-[100]">
		<div
			class="absolute inset-0 bg-neutral-950/50 backdrop-blur-sm"
			onclick={closePalette}
			role="button"
			tabindex="-1"
			onkeydown={(e) => e.key === 'Escape' && closePalette()}
		></div>

		<div class="relative max-w-xl mx-auto mt-[15vh] mx-4">
			<div class="bg-white border-2 border-neutral-950 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
				<div class="border-b-2 border-neutral-200 p-4">
					<div class="flex items-center gap-3">
						<span class="text-neutral-400">→</span>
						<input
							bind:this={inputEl}
							bind:value={search}
							type="text"
							placeholder={lang === 'nl' ? 'Zoek een tool...' : 'Search for a tool...'}
							class="flex-1 bg-transparent text-neutral-950 placeholder-neutral-400 focus:outline-none text-lg"
						/>
						<kbd class="px-2 py-1 text-xs bg-neutral-100 border border-neutral-300 text-neutral-500">ESC</kbd>
					</div>
				</div>

				<div class="max-h-80 overflow-y-auto">
					{#if filteredTools.length === 0}
						<div class="p-8 text-center text-neutral-400">
							{lang === 'nl' ? 'Geen tools gevonden' : 'No tools found'}
						</div>
					{:else}
						{#each filteredTools as tool, i}
							<button
								class="w-full text-left px-4 py-3 flex items-center justify-between gap-4 transition-colors {i === selectedIndex ? 'bg-neutral-950 text-white' : 'hover:bg-neutral-100'}"
								onclick={() => selectTool(tool)}
								onmouseenter={() => selectedIndex = i}
							>
								<div>
									<div class="font-bold {i === selectedIndex ? 'text-white' : 'text-neutral-950'}">
										{tool.title.split(' - ')[0]}
									</div>
									<div class="text-sm {i === selectedIndex ? 'text-neutral-400' : 'text-neutral-500'} line-clamp-1 font-sans">
										{tool.description}
									</div>
								</div>
								<span class="text-xs uppercase tracking-wider {i === selectedIndex ? 'text-orange-400' : 'text-orange-600'}">
									↵
								</span>
							</button>
						{/each}
					{/if}
				</div>

				<div class="border-t-2 border-neutral-200 px-4 py-2 flex items-center justify-between text-xs text-neutral-400">
					<div class="flex items-center gap-4">
						<span class="flex items-center gap-1">
							<kbd class="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300">↑</kbd>
							<kbd class="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300">↓</kbd>
							{lang === 'nl' ? 'navigeren' : 'navigate'}
						</span>
						<span class="flex items-center gap-1">
							<kbd class="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300">↵</kbd>
							{lang === 'nl' ? 'openen' : 'open'}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
