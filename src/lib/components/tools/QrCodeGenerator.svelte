<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { currentLang } from '$lib/i18n';
	import { onMount } from 'svelte';

	let text = $state('https://smarttools.nl');
	let size = $state(256);
	let qrDataUrl = $state('');
	let error = $state('');

	let lang = $derived($currentLang);

	// Simple QR code generation using canvas
	// We'll use a minimal QR code library approach
	async function generateQR() {
		if (!text.trim()) {
			qrDataUrl = '';
			error = '';
			return;
		}

		try {
			error = '';
			// Use the QR Server API for generation
			const encodedText = encodeURIComponent(text);
			qrDataUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedText}&format=svg`;
		} catch (e) {
			error = lang === 'nl' ? 'Kon QR code niet genereren' : 'Could not generate QR code';
			qrDataUrl = '';
		}
	}

	function downloadQR() {
		if (!qrDataUrl) return;

		const link = document.createElement('a');
		link.href = qrDataUrl;
		link.download = `qrcode-${Date.now()}.svg`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	function downloadPNG() {
		if (!qrDataUrl) return;

		// Create PNG version
		const pngUrl = qrDataUrl.replace('format=svg', 'format=png');
		const link = document.createElement('a');
		link.href = pngUrl;
		link.download = `qrcode-${Date.now()}.png`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	// Generate on mount and when text changes
	$effect(() => {
		generateQR();
	});

	// Presets
	const presets = [
		{ label: 'URL', icon: '🔗', placeholder: 'https://example.com' },
		{ label: 'Email', icon: '✉️', placeholder: 'mailto:name@example.com' },
		{ label: 'Tel', icon: '📞', placeholder: 'tel:+31612345678' },
		{ label: 'SMS', icon: '💬', placeholder: 'sms:+31612345678' },
		{ label: 'WiFi', icon: '📶', placeholder: 'WIFI:T:WPA;S:NetworkName;P:Password;;' }
	];
</script>

<div class="flex flex-col items-center gap-8">
	<!-- QR Code display -->
	<div class="relative">
		{#if qrDataUrl}
			<div class="p-4 bg-white border-2 border-neutral-950 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
				<img
					src={qrDataUrl}
					alt="QR Code"
					width={size}
					height={size}
					class="block"
				/>
			</div>
		{:else}
			<div
				class="flex items-center justify-center bg-neutral-100 border-2 border-neutral-200"
				style="width: {size}px; height: {size}px;"
			>
				<span class="text-neutral-400 text-sm">
					{lang === 'nl' ? 'Voer tekst in' : 'Enter text'}
				</span>
			</div>
		{/if}
	</div>

	{#if error}
		<div class="p-3 bg-red-50 border-2 border-red-200 text-red-700 text-sm">
			{error}
		</div>
	{/if}

	<!-- Input -->
	<div class="w-full max-w-lg">
		<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
			{lang === 'nl' ? 'Tekst of URL' : 'Text or URL'}
		</label>
		<textarea
			bind:value={text}
			placeholder={lang === 'nl' ? 'Voer tekst, URL of data in...' : 'Enter text, URL or data...'}
			class="w-full h-24 px-4 py-3 border-2 border-neutral-200 focus:border-neutral-950 focus:outline-none resize-none font-mono text-sm"
		></textarea>
	</div>

	<!-- Presets -->
	<div class="flex flex-wrap justify-center gap-2">
		{#each presets as preset}
			<button
				onclick={() => text = preset.placeholder}
				class="px-3 py-1.5 text-sm border-2 border-neutral-200 hover:border-neutral-950 transition-colors"
				title={preset.placeholder}
			>
				{preset.icon} {preset.label}
			</button>
		{/each}
	</div>

	<!-- Size selector -->
	<div class="flex items-center gap-4">
		<label class="text-sm text-neutral-500">{lang === 'nl' ? 'Grootte' : 'Size'}:</label>
		<div class="flex gap-2">
			{#each [128, 256, 512] as s}
				<button
					onclick={() => size = s}
					class="px-3 py-1.5 text-sm border-2 transition-colors {size === s ? 'bg-neutral-950 text-white border-neutral-950' : 'border-neutral-200 hover:border-neutral-950'}"
				>
					{s}px
				</button>
			{/each}
		</div>
	</div>

	<!-- Download buttons -->
	{#if qrDataUrl}
		<div class="flex gap-3">
			<Button variant="primary" onclick={downloadPNG}>
				{lang === 'nl' ? 'Download PNG' : 'Download PNG'}
			</Button>
			<Button variant="secondary" onclick={downloadQR}>
				{lang === 'nl' ? 'Download SVG' : 'Download SVG'}
			</Button>
		</div>
	{/if}

	<!-- Info -->
	<div class="text-center text-sm text-neutral-500 max-w-md">
		<p>
			{lang === 'nl'
				? 'QR codes kunnen URLs, tekst, contactgegevens, WiFi-instellingen en meer bevatten.'
				: 'QR codes can contain URLs, text, contact info, WiFi settings and more.'}
		</p>
	</div>
</div>
