<script lang="ts">
	import { t } from '$lib/i18n';

	let text = $state('');

	let stats = $derived(() => {
		const chars = text.length;
		const charsNoSpaces = text.replace(/\s/g, '').length;
		const words = text.trim() ? text.trim().split(/\s+/).length : 0;
		const lines = text ? text.split('\n').length : 0;

		return { chars, charsNoSpaces, words, lines };
	});

	// Platform limits
	const limits = [
		{ name: 'Twitter/X', limit: 280, color: 'bg-sky-500' },
		{ name: 'Instagram Bio', limit: 150, color: 'bg-pink-500' },
		{ name: 'TikTok Bio', limit: 80, color: 'bg-neutral-900' },
		{ name: 'LinkedIn Post', limit: 3000, color: 'bg-blue-600' },
		{ name: 'YouTube Title', limit: 100, color: 'bg-red-600' },
		{ name: 'Meta Description', limit: 160, color: 'bg-green-600' },
	];

	function getPercentage(limit: number): number {
		return Math.min((stats().chars / limit) * 100, 100);
	}

	function isOverLimit(limit: number): boolean {
		return stats().chars > limit;
	}

	function clearText() {
		text = '';
	}

	function copyText() {
		navigator.clipboard.writeText(text);
	}
</script>

<div class="flex flex-col gap-8">
	<!-- Stats grid -->
	<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
		<div class="text-center p-4 border-2 border-neutral-200">
			<div class="text-3xl font-bold text-neutral-950 tabular-nums">{stats().chars}</div>
			<div class="text-xs text-neutral-500 uppercase tracking-wider mt-1">{$t.tools.characterCounter.characters}</div>
		</div>
		<div class="text-center p-4 border-2 border-neutral-200">
			<div class="text-3xl font-bold text-neutral-950 tabular-nums">{stats().charsNoSpaces}</div>
			<div class="text-xs text-neutral-500 uppercase tracking-wider mt-1">{$t.tools.characterCounter.noSpaces}</div>
		</div>
		<div class="text-center p-4 border-2 border-neutral-200">
			<div class="text-3xl font-bold text-neutral-950 tabular-nums">{stats().words}</div>
			<div class="text-xs text-neutral-500 uppercase tracking-wider mt-1">{$t.tools.wordCounter.words}</div>
		</div>
		<div class="text-center p-4 border-2 border-neutral-200">
			<div class="text-3xl font-bold text-neutral-950 tabular-nums">{stats().lines}</div>
			<div class="text-xs text-neutral-500 uppercase tracking-wider mt-1">{$t.tools.characterCounter.lines}</div>
		</div>
	</div>

	<!-- Text input -->
	<div class="relative">
		<textarea
			bind:value={text}
			placeholder={$t.tools.wordCounter.placeholder}
			class="w-full h-48 px-4 py-3 border-2 border-neutral-200 focus:border-neutral-950 focus:outline-none resize-none font-sans text-base"
		></textarea>
		{#if text}
			<div class="absolute top-2 right-2 flex gap-1">
				<button
					onclick={copyText}
					class="p-1 text-neutral-400 hover:text-neutral-950"
					title="Copy"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
						<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
					</svg>
				</button>
				<button
					onclick={clearText}
					class="p-1 text-neutral-400 hover:text-neutral-950"
					title="Clear"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
			</div>
		{/if}
	</div>

	<!-- Platform limits -->
	<div class="space-y-3">
		<h3 class="text-xs text-neutral-400 uppercase tracking-wider">{$t.tools.characterCounter.platformLimits}</h3>
		<div class="grid gap-2">
			{#each limits as platform}
				<div class="flex items-center gap-3">
					<div class="w-28 text-sm text-neutral-600 truncate">{platform.name}</div>
					<div class="flex-1 h-2 bg-neutral-100 border border-neutral-200">
						<div
							class="h-full transition-all {isOverLimit(platform.limit) ? 'bg-red-500' : platform.color}"
							style="width: {getPercentage(platform.limit)}%"
						></div>
					</div>
					<div class="w-20 text-right text-xs tabular-nums {isOverLimit(platform.limit) ? 'text-red-600 font-bold' : 'text-neutral-500'}">
						{stats().chars}/{platform.limit}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
