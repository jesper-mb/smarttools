<script lang="ts">
	import { Display, Button, KeyboardHints } from '$lib/components/ui';
	import { t } from '$lib/i18n';
	import { vibrate } from '$lib/stores/preferences';

	let hours = $state(0);
	let minutes = $state(5);
	let seconds = $state(0);
	let totalSeconds = $state(0);
	let remaining = $state(0);
	let running = $state(false);
	let interval: ReturnType<typeof setInterval> | null = null;
	let finished = $state(false);

	function start() {
		if (running) {
			pause();
			return;
		}

		if (remaining === 0) {
			totalSeconds = hours * 3600 + minutes * 60 + seconds;
			remaining = totalSeconds;
		}

		if (remaining <= 0) return;

		running = true;
		finished = false;
		vibrate(30);

		interval = setInterval(() => {
			remaining--;
			if (remaining <= 0) {
				finish();
			}
		}, 1000);
	}

	function pause() {
		running = false;
		if (interval) {
			clearInterval(interval);
			interval = null;
		}
		vibrate(30);
	}

	function reset() {
		pause();
		remaining = 0;
		finished = false;
		vibrate([30, 50, 30]);
	}

	function finish() {
		pause();
		remaining = 0;
		finished = true;
		vibrate([200, 100, 200, 100, 200]);
		playAlarm();
	}

	function playAlarm() {
		try {
			const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
			const oscillator = audioContext.createOscillator();
			const gainNode = audioContext.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(audioContext.destination);

			oscillator.frequency.value = 800;
			oscillator.type = 'sine';
			gainNode.gain.value = 0.3;

			oscillator.start();
			setTimeout(() => {
				oscillator.stop();
				audioContext.close();
			}, 500);
		} catch (e) {
			// Audio not supported
		}
	}

	function adjustTime(field: 'hours' | 'minutes' | 'seconds', delta: number) {
		if (running) return;

		if (field === 'hours') {
			hours = Math.max(0, Math.min(23, hours + delta));
		} else if (field === 'minutes') {
			minutes = Math.max(0, Math.min(59, minutes + delta));
		} else {
			seconds = Math.max(0, Math.min(59, seconds + delta));
		}
		remaining = 0;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
			return;
		}

		switch (e.code) {
			case 'Space':
				e.preventDefault();
				start();
				break;
			case 'KeyR':
				e.preventDefault();
				reset();
				break;
			case 'ArrowUp':
				e.preventDefault();
				adjustTime('minutes', 1);
				break;
			case 'ArrowDown':
				e.preventDefault();
				adjustTime('minutes', -1);
				break;
		}
	}

	let displayTime = $derived(() => {
		const time = remaining > 0 ? remaining : hours * 3600 + minutes * 60 + seconds;
		const h = Math.floor(time / 3600);
		const m = Math.floor((time % 3600) / 60);
		const s = time % 60;

		if (h > 0) {
			return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
		}
		return `${m}:${s.toString().padStart(2, '0')}`;
	});

	let keyboardHints = $derived([
		{ key: $t.keyboard.space, action: running ? $t.common.pause : $t.common.start },
		{ key: 'R', action: $t.common.reset },
		{ key: '↑↓', action: $t.common.adjust }
	]);

	// Preset times
	const presets = [
		{ label: '1m', seconds: 60 },
		{ label: '5m', seconds: 300 },
		{ label: '10m', seconds: 600 },
		{ label: '15m', seconds: 900 },
		{ label: '30m', seconds: 1800 },
		{ label: '1h', seconds: 3600 },
	];

	function setPreset(secs: number) {
		if (running) return;
		hours = Math.floor(secs / 3600);
		minutes = Math.floor((secs % 3600) / 60);
		seconds = secs % 60;
		remaining = 0;
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="flex flex-col items-center gap-8">
	<div class="text-center">
		<div class="display-xl tabular-nums {finished ? 'text-orange-600 animate-pulse-subtle' : 'text-neutral-950'}">
			{displayTime()}
		</div>
		{#if finished}
			<div class="mt-4 text-lg font-bold text-orange-600 uppercase tracking-wider">
				{$t.tools.timer.finished}
			</div>
		{/if}
	</div>

	{#if !running && remaining === 0}
		<div class="flex items-center gap-4">
			<div class="text-center">
				<button onclick={() => adjustTime('hours', 1)} class="block w-12 h-8 hover:bg-neutral-100 text-neutral-400 hover:text-neutral-950">▲</button>
				<input
					type="number"
					bind:value={hours}
					min="0"
					max="23"
					class="w-12 text-center text-2xl font-bold border-b-2 border-neutral-200 focus:border-neutral-950 bg-transparent"
				/>
				<button onclick={() => adjustTime('hours', -1)} class="block w-12 h-8 hover:bg-neutral-100 text-neutral-400 hover:text-neutral-950">▼</button>
				<span class="text-xs text-neutral-400 uppercase">{$t.time.hours}</span>
			</div>
			<span class="text-2xl font-bold text-neutral-300">:</span>
			<div class="text-center">
				<button onclick={() => adjustTime('minutes', 1)} class="block w-12 h-8 hover:bg-neutral-100 text-neutral-400 hover:text-neutral-950">▲</button>
				<input
					type="number"
					bind:value={minutes}
					min="0"
					max="59"
					class="w-12 text-center text-2xl font-bold border-b-2 border-neutral-200 focus:border-neutral-950 bg-transparent"
				/>
				<button onclick={() => adjustTime('minutes', -1)} class="block w-12 h-8 hover:bg-neutral-100 text-neutral-400 hover:text-neutral-950">▼</button>
				<span class="text-xs text-neutral-400 uppercase">{$t.time.minutes}</span>
			</div>
			<span class="text-2xl font-bold text-neutral-300">:</span>
			<div class="text-center">
				<button onclick={() => adjustTime('seconds', 1)} class="block w-12 h-8 hover:bg-neutral-100 text-neutral-400 hover:text-neutral-950">▲</button>
				<input
					type="number"
					bind:value={seconds}
					min="0"
					max="59"
					class="w-12 text-center text-2xl font-bold border-b-2 border-neutral-200 focus:border-neutral-950 bg-transparent"
				/>
				<button onclick={() => adjustTime('seconds', -1)} class="block w-12 h-8 hover:bg-neutral-100 text-neutral-400 hover:text-neutral-950">▼</button>
				<span class="text-xs text-neutral-400 uppercase">{$t.time.seconds}</span>
			</div>
		</div>

		<div class="flex flex-wrap justify-center gap-2">
			{#each presets as preset}
				<button
					onclick={() => setPreset(preset.seconds)}
					class="px-4 py-2 text-sm border-2 border-neutral-200 hover:border-neutral-950 transition-colors uppercase tracking-wide"
				>
					{preset.label}
				</button>
			{/each}
		</div>
	{/if}

	<div class="flex items-center gap-3">
		<Button
			variant="primary"
			size="lg"
			onclick={start}
			disabled={!running && hours === 0 && minutes === 0 && seconds === 0 && remaining === 0}
		>
			{running ? $t.common.pause : $t.common.start}
		</Button>

		{#if remaining > 0 || running || finished}
			<Button variant="secondary" size="lg" onclick={reset}>
				{$t.common.reset}
			</Button>
		{/if}
	</div>

	<KeyboardHints hints={keyboardHints} show={!running || finished} />
</div>
