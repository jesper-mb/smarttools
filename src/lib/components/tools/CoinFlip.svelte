<script lang="ts">
	import { Button, KeyboardHints } from '$lib/components/ui';
	import { t } from '$lib/i18n';
	import { vibrate } from '$lib/stores/preferences';

	let result: 'heads' | 'tails' | null = $state(null);
	let flipping = $state(false);
	let rotation = $state(0);
	let stats = $state({ heads: 0, tails: 0 });

	function flip() {
		if (flipping) return;

		flipping = true;
		vibrate(50);

		// Random number of rotations (3-5 full rotations)
		const rotations = 3 + Math.random() * 2;
		const isHeads = Math.random() < 0.5;
		const finalRotation = rotation + rotations * 360 + (isHeads ? 0 : 180);

		rotation = finalRotation;

		setTimeout(() => {
			result = isHeads ? 'heads' : 'tails';
			flipping = false;
			vibrate([50, 30, 50]);

			if (isHeads) {
				stats.heads++;
			} else {
				stats.tails++;
			}
		}, 1000);
	}

	function reset() {
		result = null;
		rotation = 0;
		stats = { heads: 0, tails: 0 };
		vibrate([30, 50, 30]);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
			return;
		}

		if (e.code === 'Space') {
			e.preventDefault();
			flip();
		}

		if (e.code === 'KeyR') {
			e.preventDefault();
			reset();
		}
	}

	let total = $derived(stats.heads + stats.tails);

	let keyboardHints = $derived([
		{ key: $t.keyboard.space, action: $t.common.flip },
		{ key: 'R', action: $t.common.reset }
	]);
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="flex flex-col items-center gap-8">
	<!-- Coin -->
	<button
		onclick={flip}
		disabled={flipping}
		class="relative w-48 h-48 cursor-pointer focus:outline-none"
		style="perspective: 1000px;"
	>
		<div
			class="w-full h-full transition-transform duration-1000 ease-out"
			style="transform-style: preserve-3d; transform: rotateY({rotation}deg);"
		>
			<!-- Heads -->
			<div
				class="absolute inset-0 w-full h-full rounded-full border-4 border-neutral-950 flex items-center justify-center bg-gradient-to-br from-amber-300 to-amber-500 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
				style="backface-visibility: hidden;"
			>
				<span class="text-6xl font-bold text-neutral-950">K</span>
			</div>

			<!-- Tails -->
			<div
				class="absolute inset-0 w-full h-full rounded-full border-4 border-neutral-950 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
				style="backface-visibility: hidden; transform: rotateY(180deg);"
			>
				<span class="text-6xl font-bold text-neutral-950">M</span>
			</div>
		</div>
	</button>

	<!-- Result -->
	{#if result && !flipping}
		<div class="text-center border-2 border-neutral-950 px-8 py-4 bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
			<div class="text-3xl font-bold text-neutral-950 uppercase tracking-wider">
				{result === 'heads' ? $t.tools.coinFlip.heads : $t.tools.coinFlip.tails}
			</div>
		</div>
	{:else if flipping}
		<div class="h-[72px]"></div>
	{:else}
		<div class="text-neutral-400 uppercase tracking-wider text-sm h-[72px] flex items-center">
			{$t.tools.coinFlip.clickToFlip}
		</div>
	{/if}

	<Button variant="primary" size="lg" onclick={flip} disabled={flipping}>
		{flipping ? '...' : $t.common.flip}
	</Button>

	<KeyboardHints hints={keyboardHints} show={!flipping} />

	<!-- Stats -->
	{#if total > 0}
		<div class="w-full max-w-xs">
			<div class="flex items-center justify-between text-sm mb-2">
				<span class="text-neutral-500">{$t.tools.coinFlip.heads}: {stats.heads}</span>
				<span class="text-neutral-500">{$t.tools.coinFlip.tails}: {stats.tails}</span>
			</div>
			<div class="h-2 bg-neutral-200 border-2 border-neutral-300 flex">
				<div
					class="h-full bg-amber-400 transition-all"
					style="width: {(stats.heads / total) * 100}%"
				></div>
				<div
					class="h-full bg-amber-600 transition-all"
					style="width: {(stats.tails / total) * 100}%"
				></div>
			</div>
			<div class="text-center mt-2 text-xs text-neutral-400">
				{total} {$t.common.total.toLowerCase()}
				<button onclick={reset} class="ml-2 underline hover:text-neutral-950">{$t.common.reset}</button>
			</div>
		</div>
	{/if}
</div>
