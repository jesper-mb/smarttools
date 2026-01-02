<script lang="ts">
	import { Button, KeyboardHints } from '$lib/components/ui';
	import { t } from '$lib/i18n';
	import { vibrate } from '$lib/stores/preferences';

	let diceCount = $state(1);
	let diceSides = $state(6);
	let results: number[] = $state([]);
	let rolling = $state(false);
	let history: { dice: number; sides: number; results: number[]; total: number }[] = $state([]);

	const diceTypes = [4, 6, 8, 10, 12, 20, 100];

	function roll() {
		if (rolling) return;

		rolling = true;
		vibrate(50);
		results = [];

		// Animate rolling
		let rollCount = 0;
		const rollInterval = setInterval(() => {
			results = Array.from({ length: diceCount }, () =>
				Math.floor(Math.random() * diceSides) + 1
			);
			rollCount++;

			if (rollCount >= 10) {
				clearInterval(rollInterval);
				rolling = false;
				vibrate([50, 30, 50]);

				// Add to history
				history = [
					{ dice: diceCount, sides: diceSides, results: [...results], total: results.reduce((a, b) => a + b, 0) },
					...history.slice(0, 9)
				];
			}
		}, 50);
	}

	function clearHistory() {
		history = [];
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
			return;
		}

		if (e.code === 'Space') {
			e.preventDefault();
			roll();
		}

		// Number keys 1-9 set dice count
		if (e.key >= '1' && e.key <= '9') {
			e.preventDefault();
			diceCount = parseInt(e.key);
		}
	}

	let total = $derived(results.reduce((a, b) => a + b, 0));

	let keyboardHints = $derived([
		{ key: $t.keyboard.space, action: $t.common.roll },
		{ key: '1-9', action: $t.tools.dice.setCount }
	]);

	function getDieFace(value: number, sides: number): string {
		if (sides === 6) {
			const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
			return faces[value - 1] || value.toString();
		}
		return value.toString();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="flex flex-col items-center gap-8">
	<!-- Dice display -->
	<div class="flex flex-wrap justify-center gap-4 min-h-[120px] items-center">
		{#if results.length > 0}
			{#each results as result, i}
				<div
					class="w-20 h-20 border-2 border-neutral-950 flex items-center justify-center
						{rolling ? 'animate-pulse' : ''} bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
				>
					{#if diceSides === 6}
						<span class="text-5xl">{getDieFace(result, diceSides)}</span>
					{:else}
						<span class="text-3xl font-bold">{result}</span>
					{/if}
				</div>
			{/each}
		{:else}
			<div class="text-neutral-400 uppercase tracking-wider text-sm">
				{$t.tools.dice.clickToRoll}
			</div>
		{/if}
	</div>

	<!-- Total -->
	{#if results.length > 1}
		<div class="text-center border-2 border-neutral-950 px-6 py-2">
			<span class="text-sm text-neutral-500 uppercase tracking-wider">{$t.common.total}: </span>
			<span class="text-2xl font-bold">{total}</span>
		</div>
	{/if}

	<!-- Controls -->
	<div class="flex flex-wrap justify-center gap-4">
		<div class="flex items-center gap-2">
			<span class="text-sm text-neutral-500 uppercase tracking-wide">{$t.tools.dice.count}:</span>
			<div class="flex">
				{#each [1, 2, 3, 4, 5, 6] as count}
					<button
						onclick={() => diceCount = count}
						class="w-10 h-10 border-2 border-neutral-200 text-sm font-bold transition-colors
							{diceCount === count ? 'bg-neutral-950 text-white border-neutral-950' : 'hover:border-neutral-950'}"
					>
						{count}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<div class="flex flex-wrap justify-center gap-2">
		<span class="text-sm text-neutral-500 uppercase tracking-wide w-full text-center mb-2">{$t.tools.dice.type}:</span>
		{#each diceTypes as sides}
			<button
				onclick={() => diceSides = sides}
				class="px-4 py-2 border-2 text-sm font-bold transition-colors
					{diceSides === sides ? 'bg-neutral-950 text-white border-neutral-950' : 'border-neutral-200 hover:border-neutral-950'}"
			>
				D{sides}
			</button>
		{/each}
	</div>

	<Button variant="primary" size="lg" onclick={roll} disabled={rolling}>
		{rolling ? '...' : `${$t.common.roll} ${diceCount}D${diceSides}`}
	</Button>

	<KeyboardHints hints={keyboardHints} show={!rolling} />

	<!-- History -->
	{#if history.length > 0}
		<div class="w-full max-w-md mt-4">
			<div class="flex items-center justify-between mb-2">
				<span class="text-xs text-neutral-400 uppercase tracking-wider">{$t.common.history}</span>
				<button onclick={clearHistory} class="text-xs text-neutral-400 hover:text-neutral-950">
					{$t.common.clear}
				</button>
			</div>
			<div class="space-y-1 text-sm">
				{#each history as roll, i}
					<div class="flex items-center justify-between py-1 border-b border-neutral-100 {i === 0 ? 'font-bold' : 'text-neutral-500'}">
						<span>{roll.dice}D{roll.sides}: [{roll.results.join(', ')}]</span>
						<span>= {roll.total}</span>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
