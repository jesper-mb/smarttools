<script lang="ts">
	let input = $state('');
	let output = $state('');

	type CleanOption = 'markdown' | 'html' | 'whitespace' | 'linebreaks' | 'bullets' | 'numbers' | 'quotes' | 'all';

	let options = $state<CleanOption[]>(['markdown', 'html', 'whitespace']);

	const cleaningOptions = [
		{ id: 'markdown', label: 'Remove Markdown', description: '**bold**, *italic*, `code`, etc.' },
		{ id: 'html', label: 'Remove HTML', description: '<tags>, &entities;' },
		{ id: 'whitespace', label: 'Fix Whitespace', description: 'Multiple spaces, tabs' },
		{ id: 'linebreaks', label: 'Single Line', description: 'Remove all line breaks' },
		{ id: 'bullets', label: 'Remove Bullets', description: '•, -, *, list markers' },
		{ id: 'numbers', label: 'Remove Numbering', description: '1., 2), a., etc.' },
		{ id: 'quotes', label: 'Smart Quotes → Plain', description: '"" → ""' }
	];

	function toggleOption(opt: CleanOption) {
		if (options.includes(opt)) {
			options = options.filter(o => o !== opt);
		} else {
			options = [...options, opt];
		}
		cleanText();
	}

	function cleanText() {
		let text = input;

		if (options.includes('markdown') || options.includes('all')) {
			// Bold
			text = text.replace(/\*\*(.+?)\*\*/g, '$1');
			text = text.replace(/__(.+?)__/g, '$1');
			// Italic
			text = text.replace(/\*(.+?)\*/g, '$1');
			text = text.replace(/_(.+?)_/g, '$1');
			// Strikethrough
			text = text.replace(/~~(.+?)~~/g, '$1');
			// Code
			text = text.replace(/`{3}[\s\S]*?`{3}/g, '');
			text = text.replace(/`(.+?)`/g, '$1');
			// Headers
			text = text.replace(/^#{1,6}\s*/gm, '');
			// Links
			text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
			// Images
			text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');
			// Blockquotes
			text = text.replace(/^>\s*/gm, '');
			// Horizontal rules
			text = text.replace(/^[-*_]{3,}\s*$/gm, '');
		}

		if (options.includes('html') || options.includes('all')) {
			// HTML tags
			text = text.replace(/<[^>]*>/g, '');
			// HTML entities
			text = text.replace(/&nbsp;/g, ' ');
			text = text.replace(/&amp;/g, '&');
			text = text.replace(/&lt;/g, '<');
			text = text.replace(/&gt;/g, '>');
			text = text.replace(/&quot;/g, '"');
			text = text.replace(/&#(\d+);/g, (_, num) => String.fromCharCode(num));
		}

		if (options.includes('bullets') || options.includes('all')) {
			// Bullet points
			text = text.replace(/^[\s]*[-•●○◦▪▸►]\s*/gm, '');
			text = text.replace(/^[\s]*\*\s+/gm, '');
		}

		if (options.includes('numbers') || options.includes('all')) {
			// Numbered lists
			text = text.replace(/^[\s]*\d+[.)]\s*/gm, '');
			text = text.replace(/^[\s]*[a-z][.)]\s*/gim, '');
		}

		if (options.includes('quotes') || options.includes('all')) {
			// Smart quotes
			text = text.replace(/[""]/g, '"');
			text = text.replace(/['']/g, "'");
			text = text.replace(/…/g, '...');
			text = text.replace(/—/g, '-');
			text = text.replace(/–/g, '-');
		}

		if (options.includes('whitespace') || options.includes('all')) {
			// Multiple spaces
			text = text.replace(/[ \t]+/g, ' ');
			// Trailing whitespace
			text = text.replace(/[ \t]+$/gm, '');
			// Leading whitespace on lines
			text = text.replace(/^[ \t]+/gm, '');
		}

		if (options.includes('linebreaks') || options.includes('all')) {
			text = text.replace(/\n+/g, ' ');
		} else {
			// Multiple line breaks to single
			text = text.replace(/\n{3,}/g, '\n\n');
		}

		output = text.trim();
	}

	function copyOutput() {
		navigator.clipboard.writeText(output);
	}

	function selectAll() {
		options = cleaningOptions.map(o => o.id as CleanOption);
		cleanText();
	}

	function clearAll() {
		options = [];
		cleanText();
	}

	$effect(() => {
		input;
		cleanText();
	});
</script>

<div class="grid lg:grid-cols-2 gap-6">
	<!-- Input -->
	<div>
		<div class="flex items-center justify-between mb-2">
			<label class="text-xs font-bold uppercase tracking-wider text-neutral-400">Paste Text</label>
			<span class="text-xs text-neutral-400">{input.length} chars</span>
		</div>
		<textarea
			bind:value={input}
			placeholder="Paste formatted text from ChatGPT, Notion, Word, etc..."
			class="w-full h-64 p-4 border-2 border-neutral-200 focus:border-blue-500 outline-none font-mono text-sm resize-none"
		></textarea>
	</div>

	<!-- Output -->
	<div>
		<div class="flex items-center justify-between mb-2">
			<label class="text-xs font-bold uppercase tracking-wider text-neutral-400">Clean Output</label>
			<button
				onclick={copyOutput}
				class="text-xs px-2 py-1 bg-blue-500 text-white hover:bg-blue-600"
			>
				Copy
			</button>
		</div>
		<textarea
			bind:value={output}
			readonly
			class="w-full h-64 p-4 border-2 border-neutral-200 bg-neutral-50 font-mono text-sm resize-none"
		></textarea>
	</div>
</div>

<!-- Options -->
<div class="mt-6">
	<div class="flex items-center justify-between mb-3">
		<label class="text-xs font-bold uppercase tracking-wider text-neutral-400">Cleaning Options</label>
		<div class="flex gap-2">
			<button onclick={selectAll} class="text-xs text-blue-600 hover:underline">Select all</button>
			<span class="text-neutral-300">|</span>
			<button onclick={clearAll} class="text-xs text-blue-600 hover:underline">Clear all</button>
		</div>
	</div>

	<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
		{#each cleaningOptions as opt}
			<button
				onclick={() => toggleOption(opt.id as CleanOption)}
				class="p-3 text-left border-2 transition-colors {options.includes(opt.id as CleanOption) ? 'border-blue-500 bg-blue-50' : 'border-neutral-200 hover:border-neutral-400'}"
			>
				<div class="font-medium text-sm">{opt.label}</div>
				<div class="text-xs text-neutral-500">{opt.description}</div>
			</button>
		{/each}
	</div>
</div>

<!-- Quick Stats -->
<div class="mt-6 grid grid-cols-4 gap-4">
	<div class="p-3 bg-neutral-50 border-2 border-neutral-200 text-center">
		<div class="text-xl font-bold font-mono">{input.length}</div>
		<div class="text-xs text-neutral-500">Input chars</div>
	</div>
	<div class="p-3 bg-neutral-50 border-2 border-neutral-200 text-center">
		<div class="text-xl font-bold font-mono">{output.length}</div>
		<div class="text-xs text-neutral-500">Output chars</div>
	</div>
	<div class="p-3 bg-neutral-50 border-2 border-neutral-200 text-center">
		<div class="text-xl font-bold font-mono text-green-600">{input.length - output.length}</div>
		<div class="text-xs text-neutral-500">Removed</div>
	</div>
	<div class="p-3 bg-neutral-50 border-2 border-neutral-200 text-center">
		<div class="text-xl font-bold font-mono">{input.length > 0 ? Math.round((1 - output.length / input.length) * 100) : 0}%</div>
		<div class="text-xs text-neutral-500">Reduction</div>
	</div>
</div>
