<script lang="ts">
	import { Button, KeyboardHints } from '$lib/components/ui';
	import { t } from '$lib/i18n';
	import { vibrate } from '$lib/stores/preferences';

	let min = $state(1);
	let max = $state(100);
	let result: number | null = $state(null);
	let generating = $state(false);
	let history: number[] = $state([]);

	function generate() {
		if (generating || min >= max) return;

		generating = true;
		vibrate(30);

		// Animate through random numbers
		let count = 0;
		const interval = setInterval(() => {
			result = Math.floor(Math.random() * (max - min + 1)) + min;
			count++;

			if (count >= 15) {
				clearInterval(interval);
				generating = false;
				vibrate([50, 30, 50]);

				// Add to history (avoid duplicates in a row)
				if (history[0] !== result) {
					history = [result, ...history.slice(0, 9)];
				}
			}
		}, 50);
	}

	function clearHistory() {
		history = [];
		result = null;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
			return;
		}

		if (e.code === 'Space') {
			e.preventDefault();
			generate();
		}

		if (e.code === 'KeyR') {
			e.preventDefault();
			clearHistory();
		}
	}

	let keyboardHints = $derived([
		{ key: $t.keyboard.space, action: $t.common.generate },
		{ key: 'R', action: $t.common.clear }
	]);

	// Presets
	const presets = [
		{ label: '1-10', min: 1, max: 10 },
		{ label: '1-100', min: 1, max: 100 },
		{ label: '1-1000', min: 1, max: 1000 },
		{ label: '0-1', min: 0, max: 1 },
	];
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="flex flex-col items-center gap-8">
	<!-- Result display -->
	<div class="text-center">
		{#if result !== null}
			<div class="display-xl tabular-nums {generating ? 'text-neutral-400' : 'text-neutral-950'}">
				{result}
			</div>
		{:else}
			<div class="display-xl text-neutral-300">?</div>
		{/if}
	</div>

	<!-- Range inputs -->
	<div class="flex items-center gap-4">
		<div class="text-center">
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-1">Min</label>
			<input
				type="number"
				bind:value={min}
				class="w-24 px-3 py-2 text-center text-lg font-bold border-2 border-neutral-200 focus:border-neutral-950"
			/>
		</div>
		<span class="text-2xl text-neutral-300 mt-5">—</span>
		<div class="text-center">
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-1">Max</label>
			<input
				type="number"
				bind:value={max}
				class="w-24 px-3 py-2 text-center text-lg font-bold border-2 border-neutral-200 focus:border-neutral-950"
			/>
		</div>
	</div>

	<!-- Presets -->
	<div class="flex flex-wrap justify-center gap-2">
		{#each presets as preset}
			<button
				onclick={() => { min = preset.min; max = preset.max; }}
				class="px-4 py-2 text-sm border-2 transition-colors uppercase tracking-wide
					{min === preset.min && max === preset.max ? 'border-neutral-950 bg-neutral-950 text-white' : 'border-neutral-200 hover:border-neutral-950'}"
			>
				{preset.label}
			</button>
		{/each}
	</div>

	<Button variant="primary" size="lg" onclick={generate} disabled={generating || min >= max}>
		{generating ? '...' : $t.common.generate}
	</Button>

	{#if min >= max}
		<p class="text-sm text-orange-600">{$t.tools.randomNumber.invalidRange}</p>
	{/if}

	<KeyboardHints hints={keyboardHints} show={!generating} />

	<!-- History -->
	{#if history.length > 0}
		<div class="w-full max-w-md">
			<div class="flex items-center justify-between mb-2">
				<span class="text-xs text-neutral-400 uppercase tracking-wider">{$t.common.history}</span>
				<button onclick={clearHistory} class="text-xs text-neutral-400 hover:text-neutral-950">
					{$t.common.clear}
				</button>
			</div>
			<div class="flex flex-wrap gap-2">
				{#each history as num, i}
					<span class="px-3 py-1 border-2 {i === 0 ? 'border-neutral-950 font-bold' : 'border-neutral-200 text-neutral-500'}">
						{num}
					</span>
				{/each}
			</div>
		</div>
	{/if}
</div>
