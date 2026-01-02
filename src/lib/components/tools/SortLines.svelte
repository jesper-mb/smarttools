<script lang="ts">
	let input = $state('');
	let sortOrder = $state<'asc' | 'desc'>('asc');
	let caseSensitive = $state(false);
	let removeDuplicates = $state(false);
	let removeEmpty = $state(true);
	let trimLines = $state(true);
	let naturalSort = $state(true);

	let output = $derived(() => {
		let lines = input.split('\n');

		if (trimLines) {
			lines = lines.map(line => line.trim());
		}

		if (removeEmpty) {
			lines = lines.filter(line => line.length > 0);
		}

		if (removeDuplicates) {
			const seen = new Set<string>();
			lines = lines.filter(line => {
				const key = caseSensitive ? line : line.toLowerCase();
				if (seen.has(key)) return false;
				seen.add(key);
				return true;
			});
		}

		// Sort
		lines.sort((a, b) => {
			let compareA = caseSensitive ? a : a.toLowerCase();
			let compareB = caseSensitive ? b : b.toLowerCase();

			if (naturalSort) {
				// Natural sort (numbers sorted correctly)
				return compareA.localeCompare(compareB, undefined, { numeric: true, sensitivity: caseSensitive ? 'case' : 'base' });
			}

			if (compareA < compareB) return -1;
			if (compareA > compareB) return 1;
			return 0;
		});

		if (sortOrder === 'desc') {
			lines.reverse();
		}

		return lines.join('\n');
	});

	let lineCount = $derived(input.split('\n').filter(l => l.trim()).length);
	let outputLineCount = $derived(output().split('\n').filter(l => l.trim()).length);

	function copyOutput() {
		navigator.clipboard.writeText(output());
	}

	function shuffle() {
		const lines = input.split('\n').filter(l => l.trim());
		for (let i = lines.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[lines[i], lines[j]] = [lines[j], lines[i]];
		}
		input = lines.join('\n');
	}

	function reverse() {
		input = input.split('\n').reverse().join('\n');
	}
</script>

<div class="grid lg:grid-cols-2 gap-6">
	<!-- Input -->
	<div>
		<div class="flex items-center justify-between mb-2">
			<label class="text-xs font-bold uppercase tracking-wider text-neutral-400">Input Lines</label>
			<span class="text-xs text-neutral-400">{lineCount} lines</span>
		</div>
		<textarea
			bind:value={input}
			placeholder="Enter text (one item per line)...

Apple
Banana
Cherry
1. First
2. Second
10. Tenth"
			class="w-full h-80 p-4 border-2 border-neutral-200 focus:border-blue-500 outline-none font-mono text-sm resize-none"
		></textarea>
	</div>

	<!-- Output -->
	<div>
		<div class="flex items-center justify-between mb-2">
			<label class="text-xs font-bold uppercase tracking-wider text-neutral-400">Sorted Output</label>
			<button
				onclick={copyOutput}
				class="text-xs px-2 py-1 bg-blue-500 text-white hover:bg-blue-600"
			>
				Copy
			</button>
		</div>
		<textarea
			value={output()}
			readonly
			class="w-full h-80 p-4 border-2 border-neutral-200 bg-neutral-50 font-mono text-sm resize-none"
		></textarea>
	</div>
</div>

<!-- Options -->
<div class="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
	<div>
		<label class="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 block">Sort Order</label>
		<div class="flex">
			<button
				onclick={() => sortOrder = 'asc'}
				class="flex-1 px-3 py-2 text-sm border-2 border-r-0 {sortOrder === 'asc' ? 'border-blue-500 bg-blue-50' : 'border-neutral-200'}"
			>
				A→Z
			</button>
			<button
				onclick={() => sortOrder = 'desc'}
				class="flex-1 px-3 py-2 text-sm border-2 {sortOrder === 'desc' ? 'border-blue-500 bg-blue-50' : 'border-neutral-200'}"
			>
				Z→A
			</button>
		</div>
	</div>

	<label class="flex items-center gap-2 cursor-pointer p-3 border-2 {caseSensitive ? 'border-blue-500 bg-blue-50' : 'border-neutral-200'}">
		<input type="checkbox" bind:checked={caseSensitive} class="w-4 h-4 accent-blue-500" />
		<span class="text-sm">Case sensitive</span>
	</label>

	<label class="flex items-center gap-2 cursor-pointer p-3 border-2 {naturalSort ? 'border-blue-500 bg-blue-50' : 'border-neutral-200'}">
		<input type="checkbox" bind:checked={naturalSort} class="w-4 h-4 accent-blue-500" />
		<span class="text-sm">Natural sort</span>
	</label>

	<label class="flex items-center gap-2 cursor-pointer p-3 border-2 {removeDuplicates ? 'border-blue-500 bg-blue-50' : 'border-neutral-200'}">
		<input type="checkbox" bind:checked={removeDuplicates} class="w-4 h-4 accent-blue-500" />
		<span class="text-sm">Remove duplicates</span>
	</label>

	<label class="flex items-center gap-2 cursor-pointer p-3 border-2 {removeEmpty ? 'border-blue-500 bg-blue-50' : 'border-neutral-200'}">
		<input type="checkbox" bind:checked={removeEmpty} class="w-4 h-4 accent-blue-500" />
		<span class="text-sm">Remove empty</span>
	</label>

	<label class="flex items-center gap-2 cursor-pointer p-3 border-2 {trimLines ? 'border-blue-500 bg-blue-50' : 'border-neutral-200'}">
		<input type="checkbox" bind:checked={trimLines} class="w-4 h-4 accent-blue-500" />
		<span class="text-sm">Trim lines</span>
	</label>
</div>

<!-- Quick Actions -->
<div class="mt-4 flex gap-2">
	<button onclick={shuffle} class="px-4 py-2 text-sm border-2 border-neutral-200 hover:border-neutral-400">
		🎲 Shuffle
	</button>
	<button onclick={reverse} class="px-4 py-2 text-sm border-2 border-neutral-200 hover:border-neutral-400">
		↕️ Reverse
	</button>
</div>

<!-- Stats -->
<div class="mt-6 p-4 bg-neutral-50 border-2 border-neutral-200">
	<div class="grid grid-cols-3 gap-4 text-center">
		<div>
			<div class="text-2xl font-bold font-mono">{lineCount}</div>
			<div class="text-xs text-neutral-500">Input lines</div>
		</div>
		<div>
			<div class="text-2xl font-bold font-mono">{outputLineCount}</div>
			<div class="text-xs text-neutral-500">Output lines</div>
		</div>
		<div>
			<div class="text-2xl font-bold font-mono text-green-600">{lineCount - outputLineCount}</div>
			<div class="text-xs text-neutral-500">Removed</div>
		</div>
	</div>
</div>
