<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { currentLang } from '$lib/i18n';

	let input = $state('');
	let output = $state('');
	let error = $state('');
	let copied = $state(false);
	let indentSize = $state(2);

	let lang = $derived($currentLang);

	function format() {
		if (!input.trim()) {
			output = '';
			error = '';
			return;
		}
		try {
			error = '';
			const parsed = JSON.parse(input);
			output = JSON.stringify(parsed, null, indentSize);
		} catch (e) {
			error = lang === 'nl' ? 'Ongeldige JSON' : 'Invalid JSON';
			output = '';
		}
	}

	function minify() {
		if (!input.trim()) {
			output = '';
			error = '';
			return;
		}
		try {
			error = '';
			const parsed = JSON.parse(input);
			output = JSON.stringify(parsed);
		} catch (e) {
			error = lang === 'nl' ? 'Ongeldige JSON' : 'Invalid JSON';
			output = '';
		}
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

	function loadSample() {
		input = JSON.stringify({
			name: "SmartTools",
			version: "1.0.0",
			features: ["timers", "counters", "random", "calculators"],
			settings: {
				language: "nl",
				theme: "light",
				notifications: true
			},
			stats: {
				users: 1000,
				tools: 15
			}
		});
		format();
	}

	// Stats
	let stats = $derived(() => {
		if (!output) return null;
		try {
			const parsed = JSON.parse(output);
			const countItems = (obj: any): { keys: number; values: number; depth: number } => {
				let keys = 0;
				let values = 0;
				let maxDepth = 0;

				const traverse = (o: any, depth: number) => {
					if (depth > maxDepth) maxDepth = depth;
					if (typeof o === 'object' && o !== null) {
						if (Array.isArray(o)) {
							values += o.length;
							o.forEach(item => traverse(item, depth + 1));
						} else {
							const objKeys = Object.keys(o);
							keys += objKeys.length;
							objKeys.forEach(key => traverse(o[key], depth + 1));
						}
					} else {
						values++;
					}
				};
				traverse(obj, 0);
				return { keys, values, depth: maxDepth };
			};
			return countItems(parsed);
		} catch {
			return null;
		}
	});
</script>

<div class="flex flex-col gap-6">
	<!-- Controls -->
	<div class="flex flex-wrap justify-center gap-3">
		<Button variant="primary" onclick={format}>
			{lang === 'nl' ? 'Formatteren' : 'Format'}
		</Button>
		<Button variant="secondary" onclick={minify}>
			{lang === 'nl' ? 'Minify' : 'Minify'}
		</Button>
		<div class="flex items-center gap-2 px-3 border-2 border-neutral-200">
			<span class="text-xs text-neutral-500 uppercase">{lang === 'nl' ? 'Inspringing' : 'Indent'}</span>
			<select
				bind:value={indentSize}
				onchange={format}
				class="py-2 bg-transparent border-none font-bold text-sm focus:outline-none"
			>
				<option value={2}>2</option>
				<option value={4}>4</option>
				<option value={8}>8</option>
			</select>
		</div>
		<Button variant="ghost" onclick={loadSample}>
			{lang === 'nl' ? 'Voorbeeld laden' : 'Load sample'}
		</Button>
	</div>

	<!-- Input/Output -->
	<div class="grid md:grid-cols-2 gap-4">
		<div>
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
				{lang === 'nl' ? 'Invoer JSON' : 'Input JSON'}
			</label>
			<textarea
				bind:value={input}
				placeholder={lang === 'nl' ? 'Plak je JSON hier...' : 'Paste your JSON here...'}
				class="w-full h-80 px-4 py-3 border-2 border-neutral-200 focus:border-neutral-950 focus:outline-none resize-none font-mono text-sm"
				spellcheck="false"
			></textarea>
		</div>

		<div class="relative">
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
				{lang === 'nl' ? 'Geformatteerd' : 'Formatted'}
			</label>
			<textarea
				readonly
				value={output}
				placeholder={lang === 'nl' ? 'Resultaat verschijnt hier...' : 'Result appears here...'}
				class="w-full h-80 px-4 py-3 border-2 border-neutral-200 bg-neutral-50 font-mono text-sm resize-none"
				spellcheck="false"
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
		<div class="p-3 bg-red-50 border-2 border-red-200 text-red-700 text-sm font-mono">
			{error}
		</div>
	{/if}

	<!-- Clear button -->
	{#if input || output}
		<div class="flex justify-center">
			<Button variant="ghost" onclick={clear}>
				{lang === 'nl' ? 'Wissen' : 'Clear'}
			</Button>
		</div>
	{/if}

	<!-- Stats -->
	{#if stats()}
		<div class="grid grid-cols-3 gap-4 text-center text-sm">
			<div class="p-3 border-2 border-neutral-200">
				<div class="text-xl font-bold tabular-nums">{stats()?.keys}</div>
				<div class="text-xs text-neutral-500 uppercase">{lang === 'nl' ? 'Sleutels' : 'Keys'}</div>
			</div>
			<div class="p-3 border-2 border-neutral-200">
				<div class="text-xl font-bold tabular-nums">{stats()?.values}</div>
				<div class="text-xs text-neutral-500 uppercase">{lang === 'nl' ? 'Waarden' : 'Values'}</div>
			</div>
			<div class="p-3 border-2 border-neutral-200">
				<div class="text-xl font-bold tabular-nums">{stats()?.depth}</div>
				<div class="text-xs text-neutral-500 uppercase">{lang === 'nl' ? 'Diepte' : 'Depth'}</div>
			</div>
		</div>
	{/if}
</div>
