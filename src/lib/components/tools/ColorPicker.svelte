<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { currentLang } from '$lib/i18n';

	let color = $state('#ea580c'); // Orange accent as default
	let copied = $state<string | null>(null);

	let lang = $derived($currentLang);

	// Convert HEX to RGB
	function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	// Convert RGB to HSL
	function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
		r /= 255; g /= 255; b /= 255;
		const max = Math.max(r, g, b), min = Math.min(r, g, b);
		let h = 0, s = 0;
		const l = (max + min) / 2;

		if (max !== min) {
			const d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
				case g: h = ((b - r) / d + 2) / 6; break;
				case b: h = ((r - g) / d + 4) / 6; break;
			}
		}
		return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
	}

	// Convert RGB to CMYK
	function rgbToCmyk(r: number, g: number, b: number): { c: number; m: number; y: number; k: number } {
		if (r === 0 && g === 0 && b === 0) {
			return { c: 0, m: 0, y: 0, k: 100 };
		}
		r /= 255; g /= 255; b /= 255;
		const k = 1 - Math.max(r, g, b);
		const c = (1 - r - k) / (1 - k);
		const m = (1 - g - k) / (1 - k);
		const y = (1 - b - k) / (1 - k);
		return {
			c: Math.round(c * 100),
			m: Math.round(m * 100),
			y: Math.round(y * 100),
			k: Math.round(k * 100)
		};
	}

	// Derived values
	let rgb = $derived(hexToRgb(color));
	let hsl = $derived(rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null);
	let cmyk = $derived(rgb ? rgbToCmyk(rgb.r, rgb.g, rgb.b) : null);

	// Format strings
	let hexString = $derived(color.toUpperCase());
	let rgbString = $derived(rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : '');
	let hslString = $derived(hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : '');
	let cmykString = $derived(cmyk ? `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)` : '');

	function copy(value: string, type: string) {
		navigator.clipboard.writeText(value);
		copied = type;
		setTimeout(() => copied = null, 2000);
	}

	// Preset colors
	const presets = [
		'#ea580c', '#ef4444', '#f97316', '#eab308', '#22c55e',
		'#14b8a6', '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6',
		'#ec4899', '#f43f5e', '#0a0a0a', '#525252', '#fafafa'
	];

	function randomColor() {
		color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
	}
</script>

<div class="flex flex-col gap-8">
	<!-- Color picker area -->
	<div class="flex flex-col md:flex-row gap-6 items-center justify-center">
		<!-- Native color picker -->
		<div class="relative">
			<input
				type="color"
				bind:value={color}
				class="w-48 h-48 cursor-pointer border-2 border-neutral-200 p-0"
				style="background: {color}"
			/>
		</div>

		<!-- Large preview -->
		<div
			class="w-48 h-48 border-2 border-neutral-950 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
			style="background: {color}"
		></div>
	</div>

	<!-- HEX Input -->
	<div class="flex justify-center">
		<div class="flex items-center gap-2">
			<label class="text-sm font-bold">HEX:</label>
			<input
				type="text"
				bind:value={color}
				class="w-32 px-3 py-2 border-2 border-neutral-200 focus:border-neutral-950 font-mono text-center uppercase"
				maxlength="7"
			/>
		</div>
	</div>

	<!-- Presets -->
	<div class="flex flex-wrap justify-center gap-2">
		{#each presets as preset}
			<button
				onclick={() => color = preset}
				class="w-8 h-8 border-2 transition-all {color === preset ? 'border-neutral-950 scale-110' : 'border-neutral-200 hover:border-neutral-400'}"
				style="background: {preset}"
				title={preset}
			></button>
		{/each}
		<button
			onclick={randomColor}
			class="w-8 h-8 border-2 border-neutral-200 hover:border-neutral-950 flex items-center justify-center"
			title={lang === 'nl' ? 'Willekeurige kleur' : 'Random color'}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
			</svg>
		</button>
	</div>

	<!-- Color values -->
	<div class="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto w-full">
		<!-- HEX -->
		<button
			onclick={() => copy(hexString, 'hex')}
			class="flex items-center justify-between p-4 border-2 border-neutral-200 hover:border-neutral-950 transition-colors text-left"
		>
			<div>
				<div class="text-xs text-neutral-400 uppercase tracking-wider">HEX</div>
				<div class="font-mono font-bold">{hexString}</div>
			</div>
			{#if copied === 'hex'}
				<span class="text-green-600 text-xs">{lang === 'nl' ? 'Gekopieerd!' : 'Copied!'}</span>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-neutral-400">
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
					<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
				</svg>
			{/if}
		</button>

		<!-- RGB -->
		<button
			onclick={() => copy(rgbString, 'rgb')}
			class="flex items-center justify-between p-4 border-2 border-neutral-200 hover:border-neutral-950 transition-colors text-left"
		>
			<div>
				<div class="text-xs text-neutral-400 uppercase tracking-wider">RGB</div>
				<div class="font-mono font-bold">{rgbString}</div>
			</div>
			{#if copied === 'rgb'}
				<span class="text-green-600 text-xs">{lang === 'nl' ? 'Gekopieerd!' : 'Copied!'}</span>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-neutral-400">
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
					<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
				</svg>
			{/if}
		</button>

		<!-- HSL -->
		<button
			onclick={() => copy(hslString, 'hsl')}
			class="flex items-center justify-between p-4 border-2 border-neutral-200 hover:border-neutral-950 transition-colors text-left"
		>
			<div>
				<div class="text-xs text-neutral-400 uppercase tracking-wider">HSL</div>
				<div class="font-mono font-bold">{hslString}</div>
			</div>
			{#if copied === 'hsl'}
				<span class="text-green-600 text-xs">{lang === 'nl' ? 'Gekopieerd!' : 'Copied!'}</span>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-neutral-400">
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
					<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
				</svg>
			{/if}
		</button>

		<!-- CMYK -->
		<button
			onclick={() => copy(cmykString, 'cmyk')}
			class="flex items-center justify-between p-4 border-2 border-neutral-200 hover:border-neutral-950 transition-colors text-left"
		>
			<div>
				<div class="text-xs text-neutral-400 uppercase tracking-wider">CMYK</div>
				<div class="font-mono font-bold text-sm">{cmykString}</div>
			</div>
			{#if copied === 'cmyk'}
				<span class="text-green-600 text-xs">{lang === 'nl' ? 'Gekopieerd!' : 'Copied!'}</span>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-neutral-400">
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
					<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
				</svg>
			{/if}
		</button>
	</div>

	<!-- RGB Sliders -->
	{#if rgb}
		<div class="max-w-lg mx-auto w-full space-y-4">
			<div class="flex items-center gap-4">
				<span class="w-4 font-bold text-red-600">R</span>
				<input
					type="range"
					min="0"
					max="255"
					value={rgb.r}
					oninput={(e) => color = `#${(e.target as HTMLInputElement).value.toString().padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`}
					class="flex-1"
				/>
				<span class="w-8 text-right tabular-nums text-sm">{rgb.r}</span>
			</div>
			<div class="flex items-center gap-4">
				<span class="w-4 font-bold text-green-600">G</span>
				<input
					type="range"
					min="0"
					max="255"
					value={rgb.g}
					oninput={(e) => color = `#${rgb.r.toString(16).padStart(2, '0')}${parseInt((e.target as HTMLInputElement).value).toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`}
					class="flex-1"
				/>
				<span class="w-8 text-right tabular-nums text-sm">{rgb.g}</span>
			</div>
			<div class="flex items-center gap-4">
				<span class="w-4 font-bold text-blue-600">B</span>
				<input
					type="range"
					min="0"
					max="255"
					value={rgb.b}
					oninput={(e) => color = `#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${parseInt((e.target as HTMLInputElement).value).toString(16).padStart(2, '0')}`}
					class="flex-1"
				/>
				<span class="w-8 text-right tabular-nums text-sm">{rgb.b}</span>
			</div>
		</div>
	{/if}
</div>
