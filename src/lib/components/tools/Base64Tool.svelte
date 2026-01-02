<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { t, currentLang } from '$lib/i18n';

	let input = $state('');
	let output = $state('');
	let mode: 'encode' | 'decode' = $state('encode');
	let error = $state('');
	let copied = $state(false);

	let lang = $derived($currentLang);

	function encode() {
		try {
			error = '';
			output = btoa(unescape(encodeURIComponent(input)));
		} catch (e) {
			error = lang === 'nl' ? 'Kon tekst niet encoderen' : 'Could not encode text';
			output = '';
		}
	}

	function decode() {
		try {
			error = '';
			output = decodeURIComponent(escape(atob(input)));
		} catch (e) {
			error = lang === 'nl' ? 'Ongeldige Base64 tekst' : 'Invalid Base64 text';
			output = '';
		}
	}

	function process() {
		if (!input.trim()) {
			output = '';
			error = '';
			return;
		}
		if (mode === 'encode') {
			encode();
		} else {
			decode();
		}
	}

	function swap() {
		const temp = input;
		input = output;
		output = temp;
		mode = mode === 'encode' ? 'decode' : 'encode';
	}

	function copyOutput() {
		if (output) {
			navigator.clipboard.writeText(output);
			copied = true;
			setTimeout(() => copied = false, 2000);
		}
	}

	function clear() {
		input = '';
		output = '';
		error = '';
	}

	// Auto-process on input change
	$effect(() => {
		process();
	});
</script>

<div class="flex flex-col gap-6">
	<!-- Mode toggle -->
	<div class="flex justify-center gap-2">
		<button
			onclick={() => { mode = 'encode'; process(); }}
			class="px-4 py-2 text-sm font-bold border-2 transition-all {mode === 'encode' ? 'bg-neutral-950 text-white border-neutral-950' : 'border-neutral-200 hover:border-neutral-950'}"
		>
			{lang === 'nl' ? 'Encoderen' : 'Encode'}
		</button>
		<button
			onclick={() => { mode = 'decode'; process(); }}
			class="px-4 py-2 text-sm font-bold border-2 transition-all {mode === 'decode' ? 'bg-neutral-950 text-white border-neutral-950' : 'border-neutral-200 hover:border-neutral-950'}"
		>
			{lang === 'nl' ? 'Decoderen' : 'Decode'}
		</button>
	</div>

	<!-- Input/Output -->
	<div class="grid md:grid-cols-2 gap-4">
		<div>
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
				{mode === 'encode' ? (lang === 'nl' ? 'Tekst' : 'Text') : 'Base64'}
			</label>
			<textarea
				bind:value={input}
				placeholder={mode === 'encode'
					? (lang === 'nl' ? 'Voer tekst in om te encoderen...' : 'Enter text to encode...')
					: (lang === 'nl' ? 'Voer Base64 in om te decoderen...' : 'Enter Base64 to decode...')
				}
				class="w-full h-48 px-4 py-3 border-2 border-neutral-200 focus:border-neutral-950 focus:outline-none resize-none font-mono text-sm"
			></textarea>
		</div>

		<div class="relative">
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
				{mode === 'encode' ? 'Base64' : (lang === 'nl' ? 'Tekst' : 'Text')}
			</label>
			<textarea
				readonly
				value={output}
				placeholder={lang === 'nl' ? 'Resultaat verschijnt hier...' : 'Result appears here...'}
				class="w-full h-48 px-4 py-3 border-2 border-neutral-200 bg-neutral-50 font-mono text-sm resize-none"
			></textarea>
			{#if output}
				<button
					onclick={copyOutput}
					class="absolute top-8 right-2 p-2 text-neutral-400 hover:text-neutral-950"
					title={lang === 'nl' ? 'Kopiëren' : 'Copy'}
				>
					{#if copied}
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-600">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
							<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
						</svg>
					{/if}
				</button>
			{/if}
		</div>
	</div>

	{#if error}
		<div class="p-3 bg-red-50 border-2 border-red-200 text-red-700 text-sm">
			{error}
		</div>
	{/if}

	<!-- Actions -->
	<div class="flex justify-center gap-3">
		<Button variant="secondary" onclick={swap} disabled={!output}>
			<span class="flex items-center gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M7 16V4M7 4L3 8M7 4l4 4M17 8v12m0 0 4-4m-4 4-4-4"/>
				</svg>
				{lang === 'nl' ? 'Omwisselen' : 'Swap'}
			</span>
		</Button>
		<Button variant="ghost" onclick={clear}>
			{lang === 'nl' ? 'Wissen' : 'Clear'}
		</Button>
	</div>

	<!-- Stats -->
	{#if input || output}
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
			<div class="p-3 border-2 border-neutral-200">
				<div class="text-xl font-bold tabular-nums">{input.length}</div>
				<div class="text-xs text-neutral-500 uppercase">{lang === 'nl' ? 'Invoer tekens' : 'Input chars'}</div>
			</div>
			<div class="p-3 border-2 border-neutral-200">
				<div class="text-xl font-bold tabular-nums">{output.length}</div>
				<div class="text-xs text-neutral-500 uppercase">{lang === 'nl' ? 'Uitvoer tekens' : 'Output chars'}</div>
			</div>
			<div class="p-3 border-2 border-neutral-200">
				<div class="text-xl font-bold tabular-nums">{new Blob([input]).size}</div>
				<div class="text-xs text-neutral-500 uppercase">{lang === 'nl' ? 'Invoer bytes' : 'Input bytes'}</div>
			</div>
			<div class="p-3 border-2 border-neutral-200">
				<div class="text-xl font-bold tabular-nums">{new Blob([output]).size}</div>
				<div class="text-xs text-neutral-500 uppercase">{lang === 'nl' ? 'Uitvoer bytes' : 'Output bytes'}</div>
			</div>
		</div>
	{/if}
</div>
