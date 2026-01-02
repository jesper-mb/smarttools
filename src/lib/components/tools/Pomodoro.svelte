<script lang="ts">
	import { Button, KeyboardHints } from '$lib/components/ui';
	import { t } from '$lib/i18n';
	import { vibrate } from '$lib/stores/preferences';

	type Phase = 'work' | 'shortBreak' | 'longBreak';

	const durations = {
		work: 25 * 60,
		shortBreak: 5 * 60,
		longBreak: 15 * 60
	};

	let phase: Phase = $state('work');
	let remaining = $state(durations.work);
	let running = $state(false);
	let sessions = $state(0);
	let interval: ReturnType<typeof setInterval> | null = null;

	function start() {
		if (running) {
			pause();
			return;
		}

		running = true;
		vibrate(30);

		interval = setInterval(() => {
			remaining--;
			if (remaining <= 0) {
				finishPhase();
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

	function finishPhase() {
		pause();
		vibrate([200, 100, 200]);
		playSound();

		if (phase === 'work') {
			sessions++;
			if (sessions % 4 === 0) {
				setPhase('longBreak');
			} else {
				setPhase('shortBreak');
			}
		} else {
			setPhase('work');
		}
	}

	function setPhase(newPhase: Phase) {
		phase = newPhase;
		remaining = durations[newPhase];
	}

	function reset() {
		pause();
		remaining = durations[phase];
		vibrate([30, 50, 30]);
	}

	function skip() {
		finishPhase();
	}

	function playSound() {
		try {
			const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
			const oscillator = audioContext.createOscillator();
			const gainNode = audioContext.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(audioContext.destination);

			oscillator.frequency.value = phase === 'work' ? 600 : 800;
			oscillator.type = 'sine';
			gainNode.gain.value = 0.2;

			oscillator.start();
			setTimeout(() => {
				oscillator.stop();
				audioContext.close();
			}, 300);
		} catch (e) {
			// Audio not supported
		}
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
			case 'KeyS':
				e.preventDefault();
				skip();
				break;
		}
	}

	let displayTime = $derived(() => {
		const m = Math.floor(remaining / 60);
		const s = remaining % 60;
		return `${m}:${s.toString().padStart(2, '0')}`;
	});

	let progress = $derived(() => {
		const total = durations[phase];
		return ((total - remaining) / total) * 100;
	});

	let phaseLabel = $derived(() => {
		const labels = {
			work: $t.tools.pomodoro.work,
			shortBreak: $t.tools.pomodoro.shortBreak,
			longBreak: $t.tools.pomodoro.longBreak
		};
		return labels[phase];
	});

	let phaseColor = $derived(() => {
		return phase === 'work' ? 'text-orange-600' : 'text-green-600';
	});

	let keyboardHints = $derived([
		{ key: $t.keyboard.space, action: running ? $t.common.pause : $t.common.start },
		{ key: 'R', action: $t.common.reset },
		{ key: 'S', action: $t.common.skip }
	]);
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="flex flex-col items-center gap-8">
	<div class="text-center">
		<div class="text-xs uppercase tracking-widest mb-2 {phaseColor()}">
			{phaseLabel()}
		</div>
		<div class="display-xl tabular-nums text-neutral-950">
			{displayTime()}
		</div>
	</div>

	<!-- Progress bar -->
	<div class="w-full max-w-xs h-2 bg-neutral-200 border-2 border-neutral-300">
		<div
			class="h-full transition-all duration-1000 {phase === 'work' ? 'bg-orange-600' : 'bg-green-600'}"
			style="width: {progress()}%"
		></div>
	</div>

	<!-- Session counter -->
	<div class="flex items-center gap-2">
		{#each Array(4) as _, i}
			<div
				class="w-3 h-3 border-2 border-neutral-950 {i < (sessions % 4) || (sessions % 4 === 0 && sessions > 0 && i === 3) ? 'bg-orange-600' : 'bg-transparent'}"
			></div>
		{/each}
		<span class="ml-2 text-sm text-neutral-500">
			{sessions} {$t.tools.pomodoro.sessions}
		</span>
	</div>

	<div class="flex items-center gap-3">
		<Button variant="primary" size="lg" onclick={start}>
			{running ? $t.common.pause : $t.common.start}
		</Button>

		<Button variant="secondary" size="lg" onclick={reset}>
			{$t.common.reset}
		</Button>

		<Button variant="ghost" size="lg" onclick={skip}>
			{$t.common.skip}
		</Button>
	</div>

	<!-- Phase selector -->
	<div class="flex gap-2">
		{#each ['work', 'shortBreak', 'longBreak'] as p}
			<button
				onclick={() => { if (!running) setPhase(p as Phase); }}
				class="px-3 py-1 text-xs uppercase tracking-wide border-2 transition-colors
					{phase === p ? 'border-neutral-950 bg-neutral-950 text-white' : 'border-neutral-200 text-neutral-500 hover:border-neutral-950'}"
				disabled={running}
			>
				{p === 'work' ? '25m' : p === 'shortBreak' ? '5m' : '15m'}
			</button>
		{/each}
	</div>

	<KeyboardHints hints={keyboardHints} show={!running} />
</div>
