<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { currentLang } from '$lib/i18n';
	import { vibrate } from '$lib/stores/preferences';

	let uuids = $state<string[]>([]);
	let count = $state(1);
	let uppercase = $state(false);
	let noDashes = $state(false);
	let copied = $state<number | null>(null);
	let allCopied = $state(false);

	let lang = $derived($currentLang);

	function generateUUID(): string {
		// Use crypto API for secure random generation
		let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			const r = crypto.getRandomValues(new Uint8Array(1))[0] % 16;
			const v = c === 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});

		if (uppercase) uuid = uuid.toUpperCase();
		if (noDashes) uuid = uuid.replace(/-/g, '');

		return uuid;
	}

	function generate() {
		vibrate(30);
		uuids = Array.from({ length: count }, () => generateUUID());
	}

	function copyOne(uuid: string, index: number) {
		navigator.clipboard.writeText(uuid);
		copied = index;
		setTimeout(() => copied = null, 2000);
	}

	function copyAll() {
		navigator.clipboard.writeText(uuids.join('\n'));
		allCopied = true;
		setTimeout(() => allCopied = false, 2000);
	}

	function clear() {
		uuids = [];
	}

	// Generate initial UUID
	$effect(() => {
		if (uuids.length === 0) {
			generate();
		}
	});
</script>

<div class="flex flex-col items-center gap-8">
	<!-- Generated UUIDs -->
	{#if uuids.length > 0}
		<div class="w-full max-w-2xl space-y-2">
			{#each uuids as uuid, i}
				<div class="flex items-center gap-2">
					<code class="flex-1 px-4 py-3 bg-neutral-50 border-2 border-neutral-200 font-mono text-sm break-all select-all">
						{uuid}
					</code>
					<button
						onclick={() => copyOne(uuid, i)}
						class="p-3 border-2 border-neutral-200 hover:border-neutral-950 transition-colors"
						title={lang === 'nl' ? 'Kopiëren' : 'Copy'}
					>
						{#if copied === i}
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
				</div>
			{/each}
		</div>

		{#if uuids.length > 1}
			<Button variant="secondary" onclick={copyAll}>
				{allCopied ? (lang === 'nl' ? 'Gekopieerd!' : 'Copied!') : (lang === 'nl' ? 'Alles kopiëren' : 'Copy all')}
			</Button>
		{/if}
	{/if}

	<!-- Options -->
	<div class="flex flex-wrap justify-center gap-4">
		<div class="flex items-center gap-2 px-4 py-2 border-2 border-neutral-200">
			<label class="text-sm">{lang === 'nl' ? 'Aantal' : 'Count'}:</label>
			<select
				bind:value={count}
				class="bg-transparent border-none font-bold focus:outline-none"
			>
				<option value={1}>1</option>
				<option value={5}>5</option>
				<option value={10}>10</option>
				<option value={25}>25</option>
				<option value={50}>50</option>
			</select>
		</div>

		<label class="flex items-center gap-2 px-4 py-2 border-2 border-neutral-200 cursor-pointer hover:border-neutral-950">
			<input type="checkbox" bind:checked={uppercase} class="w-4 h-4" />
			<span class="text-sm">{lang === 'nl' ? 'Hoofdletters' : 'Uppercase'}</span>
		</label>

		<label class="flex items-center gap-2 px-4 py-2 border-2 border-neutral-200 cursor-pointer hover:border-neutral-950">
			<input type="checkbox" bind:checked={noDashes} class="w-4 h-4" />
			<span class="text-sm">{lang === 'nl' ? 'Zonder streepjes' : 'No dashes'}</span>
		</label>
	</div>

	<!-- Actions -->
	<div class="flex gap-3">
		<Button variant="primary" size="lg" onclick={generate}>
			{lang === 'nl' ? 'Genereren' : 'Generate'}
		</Button>
		{#if uuids.length > 0}
			<Button variant="ghost" onclick={clear}>
				{lang === 'nl' ? 'Wissen' : 'Clear'}
			</Button>
		{/if}
	</div>

	<!-- Info -->
	<div class="text-center text-sm text-neutral-500 max-w-md">
		<p>
			{lang === 'nl'
				? 'UUID v4 gegenereerd met cryptografisch veilige random getallen.'
				: 'UUID v4 generated using cryptographically secure random numbers.'}
		</p>
	</div>
</div>
