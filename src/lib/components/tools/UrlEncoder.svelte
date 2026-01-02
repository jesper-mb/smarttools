<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { currentLang } from '$lib/i18n';

	let input = $state('');
	let output = $state('');
	let mode: 'encode' | 'decode' = $state('encode');
	let encodeType: 'uri' | 'component' = $state('component');
	let error = $state('');
	let copied = $state(false);

	let lang = $derived($currentLang);

	function encode() {
		try {
			error = '';
			if (encodeType === 'uri') {
				output = encodeURI(input);
			} else {
				output = encodeURIComponent(input);
			}
		} catch (e) {
			error = lang === 'nl' ? 'Kon tekst niet encoderen' : 'Could not encode text';
			output = '';
		}
	}

	function decode() {
		try {
			error = '';
			if (encodeType === 'uri') {
				output = decodeURI(input);
			} else {
				output = decodeURIComponent(input);
			}
		} catch (e) {
			error = lang === 'nl' ? 'Ongeldige gecodeerde tekst' : 'Invalid encoded text';
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

	// Example URLs
	const examples = [
		{ label: lang === 'nl' ? 'URL met parameters' : 'URL with params', value: 'https://example.com/search?q=hello world&lang=nl' },
		{ label: lang === 'nl' ? 'Speciale tekens' : 'Special chars', value: 'Hello! How are you? 100% ready!' },
		{ label: lang === 'nl' ? 'Unicode' : 'Unicode', value: 'Café résumé naïve' }
	];
</script>

<div class="flex flex-col gap-6">
	<!-- Mode toggle -->
	<div class="flex flex-wrap justify-center gap-2">
		<div class="flex">
			<button
				onclick={() => { mode = 'encode'; process(); }}
				class="px-4 py-2 text-sm font-bold border-2 border-r-0 transition-all {mode === 'encode' ? 'bg-neutral-950 text-white border-neutral-950' : 'border-neutral-200 hover:border-neutral-950'}"
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

		<div class="flex">
			<button
				onclick={() => { encodeType = 'component'; process(); }}
				class="px-4 py-2 text-sm border-2 border-r-0 transition-all {encodeType === 'component' ? 'bg-orange-600 text-white border-orange-600' : 'border-neutral-200 hover:border-neutral-950'}"
				title="encodeURIComponent - encodes everything except A-Z a-z 0-9 - _ . ! ~ * ' ( )"
			>
				Component
			</button>
			<button
				onclick={() => { encodeType = 'uri'; process(); }}
				class="px-4 py-2 text-sm border-2 transition-all {encodeType === 'uri' ? 'bg-orange-600 text-white border-orange-600' : 'border-neutral-200 hover:border-neutral-950'}"
				title="encodeURI - preserves URL structure characters like : / ? # [ ] @"
			>
				URI
			</button>
		</div>
	</div>

	<!-- Input/Output -->
	<div class="grid md:grid-cols-2 gap-4">
		<div>
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
				{mode === 'encode' ? (lang === 'nl' ? 'Tekst' : 'Text') : (lang === 'nl' ? 'Gecodeerde tekst' : 'Encoded text')}
			</label>
			<textarea
				bind:value={input}
				placeholder={mode === 'encode'
					? (lang === 'nl' ? 'Voer tekst in om te encoderen...' : 'Enter text to encode...')
					: (lang === 'nl' ? 'Voer gecodeerde tekst in...' : 'Enter encoded text...')
				}
				class="w-full h-40 px-4 py-3 border-2 border-neutral-200 focus:border-neutral-950 focus:outline-none resize-none font-mono text-sm"
			></textarea>
		</div>

		<div class="relative">
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
				{mode === 'encode' ? (lang === 'nl' ? 'Gecodeerd' : 'Encoded') : (lang === 'nl' ? 'Gedecodeerd' : 'Decoded')}
			</label>
			<textarea
				readonly
				value={output}
				placeholder={lang === 'nl' ? 'Resultaat verschijnt hier...' : 'Result appears here...'}
				class="w-full h-40 px-4 py-3 border-2 border-neutral-200 bg-neutral-50 font-mono text-sm resize-none"
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

	<!-- Examples -->
	<div class="border-t-2 border-neutral-200 pt-6">
		<div class="text-xs text-neutral-400 uppercase tracking-wider mb-3 text-center">
			{lang === 'nl' ? 'Voorbeelden' : 'Examples'}
		</div>
		<div class="flex flex-wrap justify-center gap-2">
			{#each examples as example}
				<button
					onclick={() => { input = example.value; mode = 'encode'; }}
					class="px-3 py-1.5 text-sm border-2 border-neutral-200 hover:border-neutral-950 transition-colors"
				>
					{example.label}
				</button>
			{/each}
		</div>
	</div>

	<!-- Info -->
	<div class="text-center text-sm text-neutral-500">
		<p class="mb-2">
			<strong>Component:</strong> {lang === 'nl' ? 'Encodeert alles behalve' : 'Encodes everything except'} A-Z a-z 0-9 - _ . ! ~ * ' ( )
		</p>
		<p>
			<strong>URI:</strong> {lang === 'nl' ? 'Behoudt URL structuur tekens' : 'Preserves URL structure chars'} : / ? # [ ] @
		</p>
	</div>
</div>
