<script lang="ts">
	import { Button, KeyboardHints } from '$lib/components/ui';
	import { t } from '$lib/i18n';
	import { vibrate } from '$lib/stores/preferences';

	let options = $state(['Optie 1', 'Optie 2', 'Optie 3', 'Optie 4']);
	let newOption = $state('');
	let rotation = $state(0);
	let spinning = $state(false);
	let winner = $state<string | null>(null);

	function spin() {
		if (spinning || options.length < 2) return;

		spinning = true;
		winner = null;

		const spins = 5 + Math.random() * 5;
		const extraDegrees = Math.random() * 360;
		const totalRotation = spins * 360 + extraDegrees;

		rotation += totalRotation;

		vibrate(50);

		setTimeout(() => {
			spinning = false;
			const normalizedRotation = rotation % 360;
			const segmentSize = 360 / options.length;
			const winnerIndex = Math.floor((360 - normalizedRotation + segmentSize / 2) % 360 / segmentSize);
			winner = options[winnerIndex % options.length];
			vibrate([100, 50, 100]);
		}, 4000);
	}

	function addOption() {
		if (newOption.trim() && options.length < 12) {
			options = [...options, newOption.trim()];
			newOption = '';
		}
	}

	function removeOption(index: number) {
		options = options.filter((_, i) => i !== index);
		winner = null;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
			return;
		}

		if (e.code === 'Space') {
			e.preventDefault();
			spin();
		}
	}

	let keyboardHints = $derived([
		{ key: $t.keyboard.space, action: $t.common.spin }
	]);

	function getSegmentPath(index: number, total: number): string {
		const angle = 360 / total;
		const startAngle = index * angle - 90;
		const endAngle = startAngle + angle;

		const startRad = (startAngle * Math.PI) / 180;
		const endRad = (endAngle * Math.PI) / 180;

		const x1 = 50 + 45 * Math.cos(startRad);
		const y1 = 50 + 45 * Math.sin(startRad);
		const x2 = 50 + 45 * Math.cos(endRad);
		const y2 = 50 + 45 * Math.sin(endRad);

		const largeArc = angle > 180 ? 1 : 0;

		return `M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArc} 1 ${x2} ${y2} Z`;
	}

	function getTextPosition(index: number, total: number): { x: number; y: number; angle: number } {
		const angle = 360 / total;
		const midAngle = index * angle + angle / 2 - 90;
		const rad = (midAngle * Math.PI) / 180;

		return {
			x: 50 + 28 * Math.cos(rad),
			y: 50 + 28 * Math.sin(rad),
			angle: midAngle + 90
		};
	}

	// Vibrant wheel colors
	const wheelColors = [
		'#ef4444', // red
		'#f97316', // orange
		'#eab308', // yellow
		'#22c55e', // green
		'#06b6d4', // cyan
		'#3b82f6', // blue
		'#8b5cf6', // violet
		'#ec4899', // pink
		'#14b8a6', // teal
		'#f59e0b', // amber
		'#6366f1', // indigo
		'#84cc16', // lime
	];

	function getSegmentColor(index: number): string {
		return wheelColors[index % wheelColors.length];
	}

	function getTextColor(_index: number): string {
		return '#ffffff';
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="flex flex-col items-center gap-8">
	<div class="relative">
		<div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
			<div class="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-orange-600"></div>
		</div>

		<svg
			viewBox="0 0 100 100"
			class="w-72 h-72 sm:w-80 sm:h-80"
			style="transform: rotate({rotation}deg); transition: transform {spinning ? '4s' : '0s'} cubic-bezier(0.17, 0.67, 0.12, 0.99);"
		>
			<circle cx="50" cy="50" r="48" fill="none" stroke="#0a0a0a" stroke-width="2" />
			{#each options as option, i}
				<path
					d={getSegmentPath(i, options.length)}
					fill={getSegmentColor(i)}
					stroke="#0a0a0a"
					stroke-width="1"
				/>
				{@const pos = getTextPosition(i, options.length)}
				<text
					x={pos.x}
					y={pos.y}
					text-anchor="middle"
					dominant-baseline="middle"
					fill={getTextColor(i)}
					font-size="4"
					font-weight="600"
					transform="rotate({pos.angle}, {pos.x}, {pos.y})"
					class="select-none pointer-events-none uppercase"
					style="font-family: monospace;"
				>
					{option.length > 8 ? option.slice(0, 8) + '..' : option}
				</text>
			{/each}
			<circle cx="50" cy="50" r="6" fill="#0a0a0a" />
		</svg>
	</div>

	{#if winner}
		{@const winnerIndex = options.indexOf(winner)}
		<div
			class="text-center border-2 border-neutral-950 px-8 py-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] animate-fade-in-up"
			style="background-color: {wheelColors[winnerIndex % wheelColors.length]}"
		>
			<div class="text-xs uppercase tracking-wider text-white/70 mb-1">{$t.tools.wheelSpinner.winner}</div>
			<div class="text-2xl font-bold text-white drop-shadow-sm">{winner}</div>
		</div>
	{/if}

	<Button variant="primary" size="lg" onclick={spin} disabled={spinning || options.length < 2}>
		{spinning ? '...' : $t.common.spin}
	</Button>

	<KeyboardHints hints={keyboardHints} show={!spinning} />

	<div class="w-full max-w-md space-y-4">
		<div class="flex gap-2">
			<input
				type="text"
				bind:value={newOption}
				placeholder={$t.tools.wheelSpinner.addOption}
				class="flex-1 px-4 py-2 border-2 border-neutral-200 focus:border-neutral-950 focus:outline-none font-sans"
				onkeydown={(e) => e.key === 'Enter' && addOption()}
				maxlength="30"
			/>
			<Button variant="secondary" onclick={addOption} disabled={!newOption.trim() || options.length >= 12}>
				{$t.common.add}
			</Button>
		</div>

		<div class="flex flex-wrap gap-2">
			{#each options as option, i}
				<div
					class="flex items-center gap-2 px-3 py-1.5 text-sm border-2 border-neutral-950 text-white"
					style="background-color: {wheelColors[i % wheelColors.length]}"
				>
					<span class="uppercase tracking-wide text-xs font-medium drop-shadow-sm">{option}</span>
					<button
						onclick={() => removeOption(i)}
						class="w-4 h-4 flex items-center justify-center opacity-70 hover:opacity-100"
						aria-label="Remove"
					>
						×
					</button>
				</div>
			{/each}
		</div>
	</div>
</div>
