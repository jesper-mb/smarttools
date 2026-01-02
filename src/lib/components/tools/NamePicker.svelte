<script lang="ts">
	import { Button, KeyboardHints } from '$lib/components/ui';
	import { t } from '$lib/i18n';
	import { vibrate } from '$lib/stores/preferences';

	let names = $state<string[]>([]);
	let newName = $state('');
	let winner: string | null = $state(null);
	let picking = $state(false);
	let currentHighlight = $state(-1);

	function addName() {
		const trimmed = newName.trim();
		if (trimmed && !names.includes(trimmed)) {
			names = [...names, trimmed];
			newName = '';
		}
	}

	function removeName(index: number) {
		names = names.filter((_, i) => i !== index);
		if (winner === names[index]) {
			winner = null;
		}
	}

	function pick() {
		if (picking || names.length < 2) return;

		picking = true;
		winner = null;
		vibrate(30);

		// Animate through names
		let count = 0;
		const totalIterations = 20 + Math.floor(Math.random() * 10);
		const interval = setInterval(() => {
			currentHighlight = Math.floor(Math.random() * names.length);
			count++;

			if (count >= totalIterations) {
				clearInterval(interval);
				picking = false;
				winner = names[currentHighlight];
				currentHighlight = -1;
				vibrate([100, 50, 100]);
			}
		}, 100 + count * 10); // Slow down over time
	}

	function clearAll() {
		names = [];
		winner = null;
		vibrate([30, 50, 30]);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
			return;
		}

		if (e.code === 'Space') {
			e.preventDefault();
			pick();
		}
	}

	function handleInputKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			addName();
		}
	}

	let keyboardHints = $derived([
		{ key: $t.keyboard.space, action: $t.common.pick }
	]);

	// Sample names for demo
	function loadSample() {
		names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'];
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="flex flex-col items-center gap-8">
	<!-- Winner display -->
	{#if winner}
		<div class="text-center border-2 border-neutral-950 px-8 py-6 bg-orange-600 text-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] animate-fade-in-up">
			<div class="text-xs uppercase tracking-wider text-white/70 mb-1">{$t.tools.namePicker.winner}</div>
			<div class="text-3xl font-bold">{winner}</div>
		</div>
	{/if}

	<!-- Name list -->
	{#if names.length > 0}
		<div class="flex flex-wrap justify-center gap-2 max-w-lg">
			{#each names as name, i}
				<div
					class="flex items-center gap-2 px-3 py-1.5 text-sm border-2 transition-all
						{currentHighlight === i ? 'bg-orange-600 text-white border-orange-600 scale-110' : 'border-neutral-200'}
						{winner === name && !picking ? 'bg-orange-600 text-white border-orange-600' : ''}"
				>
					<span class="font-medium">{name}</span>
					{#if !picking}
						<button
							onclick={() => removeName(i)}
							class="w-4 h-4 flex items-center justify-center opacity-50 hover:opacity-100"
							aria-label="Remove"
						>
							×
						</button>
					{/if}
				</div>
			{/each}
		</div>
	{:else}
		<div class="text-neutral-400 text-sm text-center">
			<p>{$t.tools.namePicker.addNames}</p>
			<button onclick={loadSample} class="underline hover:text-neutral-950 mt-2">
				{$t.tools.namePicker.loadSample}
			</button>
		</div>
	{/if}

	<!-- Add name input -->
	<div class="flex gap-2 w-full max-w-md">
		<input
			type="text"
			bind:value={newName}
			onkeydown={handleInputKeydown}
			placeholder={$t.tools.namePicker.placeholder}
			class="flex-1 px-4 py-2 border-2 border-neutral-200 focus:border-neutral-950 focus:outline-none font-sans"
			maxlength="50"
		/>
		<Button variant="secondary" onclick={addName} disabled={!newName.trim()}>
			{$t.common.add}
		</Button>
	</div>

	<div class="flex items-center gap-3">
		<Button variant="primary" size="lg" onclick={pick} disabled={picking || names.length < 2}>
			{picking ? '...' : $t.common.pick}
		</Button>

		{#if names.length > 0}
			<Button variant="ghost" size="lg" onclick={clearAll}>
				{$t.common.clear}
			</Button>
		{/if}
	</div>

	{#if names.length === 1}
		<p class="text-sm text-neutral-500">{$t.tools.namePicker.needMore}</p>
	{/if}

	<KeyboardHints hints={keyboardHints} show={!picking && names.length >= 2} />
</div>
