<script lang="ts">
	import { Display, Button, KeyboardHints } from '$lib/components/ui';
	import { t } from '$lib/i18n';
	import { vibrate } from '$lib/stores/preferences';

	let count = $state(0);

	function increment() {
		count++;
		vibrate(20);
	}

	function decrement() {
		if (count > 0) {
			count--;
			vibrate(20);
		}
	}

	function reset() {
		count = 0;
		vibrate([30, 50, 30]);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
			return;
		}

		switch (e.code) {
			case 'Space':
			case 'ArrowUp':
				e.preventDefault();
				increment();
				break;
			case 'ArrowDown':
				e.preventDefault();
				decrement();
				break;
			case 'KeyR':
				e.preventDefault();
				reset();
				break;
		}
	}

	let keyboardHints = $derived([
		{ key: $t.keyboard.space, action: '+1' },
		{ key: '↑', action: '+1' },
		{ key: '↓', action: '-1' },
		{ key: 'R', action: $t.common.reset }
	]);
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="flex flex-col items-center gap-8">
	<button
		onclick={increment}
		class="w-full max-w-sm aspect-square border-2 border-neutral-200 hover:border-neutral-950 active:bg-neutral-950 active:text-white flex items-center justify-center transition-colors cursor-pointer select-none group"
	>
		<Display value={count} size="xl" />
	</button>

	<div class="flex items-center gap-2">
		<Button variant="secondary" size="lg" onclick={decrement} disabled={count === 0}>
			-1
		</Button>

		<Button variant="primary" size="lg" onclick={increment}>
			+1
		</Button>

		{#if count > 0}
			<Button variant="ghost" size="lg" onclick={reset}>
				{$t.common.reset}
			</Button>
		{/if}
	</div>

	<KeyboardHints hints={keyboardHints} />
</div>
