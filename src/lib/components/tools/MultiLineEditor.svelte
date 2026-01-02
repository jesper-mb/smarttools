<script lang="ts">
	let input = $state('');
	let prefix = $state('');
	let suffix = $state('');
	let findText = $state('');
	let replaceText = $state('');
	let regexMode = $state(false);
	let caseInsensitive = $state(true);

	// Operation type
	type Operation = 'prefix-suffix' | 'find-replace' | 'wrap' | 'number' | 'remove-prefix' | 'remove-suffix';
	let operation = $state<Operation>('prefix-suffix');

	// Wrap options
	let wrapStart = $state('"');
	let wrapEnd = $state('"');

	// Number options
	let numberStart = $state(1);
	let numberSeparator = $state('. ');

	// Remove prefix/suffix length
	let removeCount = $state(1);

	let output = $derived(() => {
		const lines = input.split('\n');

		return lines.map((line, index) => {
			if (line.trim() === '') return line;

			switch (operation) {
				case 'prefix-suffix':
					return prefix + line + suffix;

				case 'find-replace':
					if (findText === '') return line;
					try {
						if (regexMode) {
							const flags = caseInsensitive ? 'gi' : 'g';
							const regex = new RegExp(findText, flags);
							return line.replace(regex, replaceText);
						} else {
							if (caseInsensitive) {
								const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
								return line.replace(regex, replaceText);
							}
							return line.split(findText).join(replaceText);
						}
					} catch {
						return line;
					}

				case 'wrap':
					return wrapStart + line + wrapEnd;

				case 'number':
					return (numberStart + index) + numberSeparator + line;

				case 'remove-prefix':
					return line.slice(removeCount);

				case 'remove-suffix':
					return line.slice(0, -removeCount || undefined);

				default:
					return line;
			}
		}).join('\n');
	});

	function copyOutput() {
		navigator.clipboard.writeText(output());
	}

	let lineCount = $derived(input.split('\n').filter(l => l.trim()).length);
</script>

<div class="space-y-6">
	<!-- Operation Selector -->
	<div>
		<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Operation</label>
		<div class="flex flex-wrap gap-2">
			<button
				onclick={() => operation = 'prefix-suffix'}
				class="px-4 py-2 text-sm font-medium border-2 transition-colors {operation === 'prefix-suffix' ? 'border-blue-500 bg-blue-50' : 'border-neutral-200 hover:border-neutral-400'}"
			>
				Add Prefix/Suffix
			</button>
			<button
				onclick={() => operation = 'find-replace'}
				class="px-4 py-2 text-sm font-medium border-2 transition-colors {operation === 'find-replace' ? 'border-blue-500 bg-blue-50' : 'border-neutral-200 hover:border-neutral-400'}"
			>
				Find & Replace
			</button>
			<button
				onclick={() => operation = 'wrap'}
				class="px-4 py-2 text-sm font-medium border-2 transition-colors {operation === 'wrap' ? 'border-blue-500 bg-blue-50' : 'border-neutral-200 hover:border-neutral-400'}"
			>
				Wrap Lines
			</button>
			<button
				onclick={() => operation = 'number'}
				class="px-4 py-2 text-sm font-medium border-2 transition-colors {operation === 'number' ? 'border-blue-500 bg-blue-50' : 'border-neutral-200 hover:border-neutral-400'}"
			>
				Add Numbers
			</button>
			<button
				onclick={() => operation = 'remove-prefix'}
				class="px-4 py-2 text-sm font-medium border-2 transition-colors {operation === 'remove-prefix' ? 'border-blue-500 bg-blue-50' : 'border-neutral-200 hover:border-neutral-400'}"
			>
				Remove Prefix
			</button>
			<button
				onclick={() => operation = 'remove-suffix'}
				class="px-4 py-2 text-sm font-medium border-2 transition-colors {operation === 'remove-suffix' ? 'border-blue-500 bg-blue-50' : 'border-neutral-200 hover:border-neutral-400'}"
			>
				Remove Suffix
			</button>
		</div>
	</div>

	<!-- Operation Options -->
	<div class="p-4 bg-neutral-50 border-2 border-neutral-200">
		{#if operation === 'prefix-suffix'}
			<div class="grid sm:grid-cols-2 gap-4">
				<div>
					<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Prefix</label>
					<input
						type="text"
						bind:value={prefix}
						placeholder="Add before each line..."
						class="w-full px-3 py-2 border-2 border-neutral-200 focus:border-blue-500 outline-none font-mono"
					/>
				</div>
				<div>
					<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Suffix</label>
					<input
						type="text"
						bind:value={suffix}
						placeholder="Add after each line..."
						class="w-full px-3 py-2 border-2 border-neutral-200 focus:border-blue-500 outline-none font-mono"
					/>
				</div>
			</div>

		{:else if operation === 'find-replace'}
			<div class="space-y-4">
				<div class="grid sm:grid-cols-2 gap-4">
					<div>
						<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Find</label>
						<input
							type="text"
							bind:value={findText}
							placeholder="Text to find..."
							class="w-full px-3 py-2 border-2 border-neutral-200 focus:border-blue-500 outline-none font-mono"
						/>
					</div>
					<div>
						<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Replace</label>
						<input
							type="text"
							bind:value={replaceText}
							placeholder="Replace with..."
							class="w-full px-3 py-2 border-2 border-neutral-200 focus:border-blue-500 outline-none font-mono"
						/>
					</div>
				</div>
				<div class="flex gap-4">
					<label class="flex items-center gap-2 cursor-pointer">
						<input type="checkbox" bind:checked={regexMode} class="w-4 h-4 accent-blue-500" />
						<span class="text-sm">Use regex</span>
					</label>
					<label class="flex items-center gap-2 cursor-pointer">
						<input type="checkbox" bind:checked={caseInsensitive} class="w-4 h-4 accent-blue-500" />
						<span class="text-sm">Case insensitive</span>
					</label>
				</div>
			</div>

		{:else if operation === 'wrap'}
			<div class="grid sm:grid-cols-2 gap-4">
				<div>
					<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Start Wrapper</label>
					<input
						type="text"
						bind:value={wrapStart}
						class="w-full px-3 py-2 border-2 border-neutral-200 focus:border-blue-500 outline-none font-mono"
					/>
				</div>
				<div>
					<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">End Wrapper</label>
					<input
						type="text"
						bind:value={wrapEnd}
						class="w-full px-3 py-2 border-2 border-neutral-200 focus:border-blue-500 outline-none font-mono"
					/>
				</div>
			</div>
			<div class="flex gap-2 mt-3">
				<button onclick={() => { wrapStart = '"'; wrapEnd = '"'; }} class="px-3 py-1 text-xs border border-neutral-300 hover:bg-neutral-100">"quotes"</button>
				<button onclick={() => { wrapStart = "'"; wrapEnd = "'"; }} class="px-3 py-1 text-xs border border-neutral-300 hover:bg-neutral-100">'single'</button>
				<button onclick={() => { wrapStart = '('; wrapEnd = ')'; }} class="px-3 py-1 text-xs border border-neutral-300 hover:bg-neutral-100">(parens)</button>
				<button onclick={() => { wrapStart = '['; wrapEnd = ']'; }} class="px-3 py-1 text-xs border border-neutral-300 hover:bg-neutral-100">[brackets]</button>
				<button onclick={() => { wrapStart = '<li>'; wrapEnd = '</li>'; }} class="px-3 py-1 text-xs border border-neutral-300 hover:bg-neutral-100">&lt;li&gt;</button>
			</div>

		{:else if operation === 'number'}
			<div class="grid sm:grid-cols-2 gap-4">
				<div>
					<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Start Number</label>
					<input
						type="number"
						bind:value={numberStart}
						min="0"
						class="w-full px-3 py-2 border-2 border-neutral-200 focus:border-blue-500 outline-none font-mono"
					/>
				</div>
				<div>
					<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Separator</label>
					<input
						type="text"
						bind:value={numberSeparator}
						class="w-full px-3 py-2 border-2 border-neutral-200 focus:border-blue-500 outline-none font-mono"
					/>
				</div>
			</div>

		{:else if operation === 'remove-prefix' || operation === 'remove-suffix'}
			<div>
				<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Characters to Remove</label>
				<input
					type="number"
					bind:value={removeCount}
					min="1"
					max="100"
					class="w-32 px-3 py-2 border-2 border-neutral-200 focus:border-blue-500 outline-none font-mono"
				/>
			</div>
		{/if}
	</div>

	<!-- Input/Output -->
	<div class="grid lg:grid-cols-2 gap-6">
		<div>
			<div class="flex items-center justify-between mb-2">
				<label class="text-xs font-bold uppercase tracking-wider text-neutral-400">Input ({lineCount} lines)</label>
			</div>
			<textarea
				bind:value={input}
				placeholder="Enter text (one item per line)...

apple
banana
cherry"
				class="w-full h-64 p-4 border-2 border-neutral-200 focus:border-blue-500 outline-none font-mono text-sm resize-none"
			></textarea>
		</div>

		<div>
			<div class="flex items-center justify-between mb-2">
				<label class="text-xs font-bold uppercase tracking-wider text-neutral-400">Output</label>
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
				class="w-full h-64 p-4 border-2 border-neutral-200 bg-neutral-50 font-mono text-sm resize-none"
			></textarea>
		</div>
	</div>
</div>
