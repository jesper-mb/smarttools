<script lang="ts">
	import { onMount } from 'svelte';
	import { Display, Button, KeyboardHints } from '$lib/components/ui';
	import { t } from '$lib/i18n';
	import { vibrate } from '$lib/stores/preferences';

	let time = $state(0);
	let running = $state(false);
	let laps = $state<number[]>([]);
	let interval: ReturnType<typeof setInterval> | null = null;

	function formatTime(ms: number): string {
		const hours = Math.floor(ms / 3600000);
		const minutes = Math.floor((ms % 3600000) / 60000);
		const seconds = Math.floor((ms % 60000) / 1000);
		const centiseconds = Math.floor((ms % 1000) / 10);

		if (hours > 0) {
			return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
		}
		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
	}

	function start() {
		if (!running) {
			running = true;
			const startTime = Date.now() - time;
			interval = setInterval(() => {
				time = Date.now() - startTime;
			}, 10);
			vibrate(30);
		}
	}

	function stop() {
		if (running) {
			running = false;
			if (interval) {
				clearInterval(interval);
				interval = null;
			}
			vibrate(30);
		}
	}

	function toggle() {
		if (running) {
			stop();
		} else {
			start();
		}
	}

	function reset() {
		stop();
		time = 0;
		laps = [];
		vibrate([30, 50, 30]);
	}

	function lap() {
		if (running) {
			laps = [time, ...laps];
			vibrate(20);
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
			return;
		}

		switch (e.code) {
			case 'Space':
				e.preventDefault();
				toggle();
				break;
			case 'KeyR':
				e.preventDefault();
				reset();
				break;
			case 'KeyL':
				e.preventDefault();
				lap();
				break;
		}
	}

	onMount(() => {
		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	});

	let keyboardHints = $derived([
		{ key: $t.keyboard.space, action: running ? $t.common.stop : $t.common.start },
		{ key: 'R', action: $t.common.reset },
		{ key: 'L', action: $t.tools.stopwatch.lap }
	]);
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="flex flex-col items-center gap-8">
	<div class="text-center py-8">
		<Display value={formatTime(time)} size="xl" active={running} />
	</div>

	<div class="flex items-center gap-2">
		<Button
			variant={running ? 'danger' : 'primary'}
			size="lg"
			onclick={toggle}
		>
			{running ? $t.common.stop : $t.common.start}
		</Button>

		{#if time > 0 || laps.length > 0}
			<Button variant="secondary" size="lg" onclick={reset}>
				{$t.common.reset}
			</Button>
		{/if}

		{#if running}
			<Button variant="secondary" size="lg" onclick={lap}>
				{$t.tools.stopwatch.lap}
			</Button>
		{/if}
	</div>

	<KeyboardHints hints={keyboardHints} />

	{#if laps.length > 0}
		<div class="w-full max-w-sm mt-4">
			<h3 class="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">{$t.tools.stopwatch.laps}</h3>
			<div class="border-2 border-neutral-200 divide-y-2 divide-neutral-200">
				{#each laps as lapTime, i}
					<div class="flex justify-between items-center px-4 py-3 bg-white">
						<span class="text-sm text-neutral-500">{$t.tools.stopwatch.lap} {laps.length - i}</span>
						<span class="text-neutral-950 font-bold">{formatTime(lapTime)}</span>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
