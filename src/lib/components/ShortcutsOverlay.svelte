<script lang="ts">
	import { currentLang } from '$lib/i18n';

	let open = $state(false);
	let lang = $derived($currentLang);

	const globalShortcuts = {
		nl: [
			{ keys: ['⌘', 'K'], action: 'Zoeken' },
			{ keys: ['?'], action: 'Sneltoetsen tonen' },
			{ keys: ['F'], action: 'Volledig scherm' },
			{ keys: ['ESC'], action: 'Sluiten' }
		],
		en: [
			{ keys: ['⌘', 'K'], action: 'Search' },
			{ keys: ['?'], action: 'Show shortcuts' },
			{ keys: ['F'], action: 'Fullscreen' },
			{ keys: ['ESC'], action: 'Close' }
		]
	};

	const toolShortcuts = {
		nl: [
			{ keys: ['SPACE'], action: 'Primaire actie' },
			{ keys: ['R'], action: 'Reset' },
			{ keys: ['↑', '↓'], action: 'Aanpassen' }
		],
		en: [
			{ keys: ['SPACE'], action: 'Primary action' },
			{ keys: ['R'], action: 'Reset' },
			{ keys: ['↑', '↓'], action: 'Adjust' }
		]
	};

	function handleKeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
			return;
		}

		if (e.key === '?' && !e.metaKey && !e.ctrlKey) {
			e.preventDefault();
			open = !open;
		}

		if (e.key === 'Escape' && open) {
			open = false;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div class="fixed inset-0 z-[100]">
		<div
			class="absolute inset-0 bg-neutral-950/50 backdrop-blur-sm"
			onclick={() => open = false}
			role="button"
			tabindex="-1"
			onkeydown={(e) => e.key === 'Escape' && (open = false)}
		></div>

		<div class="relative max-w-lg mx-auto mt-[15vh] mx-4">
			<div class="bg-white border-2 border-neutral-950 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
				<div class="border-b-2 border-neutral-950 px-6 py-4 flex items-center justify-between">
					<h2 class="font-bold text-lg">
						{lang === 'nl' ? 'Sneltoetsen' : 'Keyboard Shortcuts'}
					</h2>
					<button onclick={() => open = false} class="text-neutral-400 hover:text-neutral-950 text-xl">
						×
					</button>
				</div>

				<div class="p-6 space-y-6">
					<div>
						<h3 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
							{lang === 'nl' ? 'Navigatie' : 'Navigation'}
						</h3>
						<div class="space-y-2">
							{#each globalShortcuts[lang] as shortcut}
								<div class="flex items-center justify-between py-2 border-b border-neutral-100">
									<span class="text-neutral-600 font-sans">{shortcut.action}</span>
									<div class="flex items-center gap-1">
										{#each shortcut.keys as key}
											<kbd class="px-2 py-1 bg-neutral-100 border-2 border-neutral-200 text-sm font-bold min-w-[2rem] text-center">
												{key}
											</kbd>
										{/each}
									</div>
								</div>
							{/each}
						</div>
					</div>

					<div>
						<h3 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
							{lang === 'nl' ? 'Tools' : 'Tools'}
						</h3>
						<div class="space-y-2">
							{#each toolShortcuts[lang] as shortcut}
								<div class="flex items-center justify-between py-2 border-b border-neutral-100">
									<span class="text-neutral-600 font-sans">{shortcut.action}</span>
									<div class="flex items-center gap-1">
										{#each shortcut.keys as key}
											<kbd class="px-2 py-1 bg-neutral-100 border-2 border-neutral-200 text-sm font-bold min-w-[2rem] text-center">
												{key}
											</kbd>
										{/each}
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<div class="border-t-2 border-neutral-200 px-6 py-3 bg-neutral-50">
					<p class="text-xs text-neutral-400 text-center font-sans">
						{lang === 'nl' ? 'Druk op ? om dit venster te sluiten' : 'Press ? to close this window'}
					</p>
				</div>
			</div>
		</div>
	</div>
{/if}
