<script lang="ts">
	import { t } from '$lib/i18n';

	let text = $state('');

	const platforms = [
		{ name: 'Twitter/X Bio', limit: 160, icon: '𝕏', color: 'neutral' },
		{ name: 'Twitter/X Name', limit: 50, icon: '𝕏', color: 'neutral' },
		{ name: 'Instagram Bio', limit: 150, icon: '📷', color: 'pink' },
		{ name: 'Instagram Name', limit: 30, icon: '📷', color: 'pink' },
		{ name: 'TikTok Bio', limit: 80, icon: '♪', color: 'neutral' },
		{ name: 'TikTok Name', limit: 30, icon: '♪', color: 'neutral' },
		{ name: 'LinkedIn Headline', limit: 220, icon: 'in', color: 'blue' },
		{ name: 'LinkedIn Summary', limit: 2600, icon: 'in', color: 'blue' },
		{ name: 'YouTube Description', limit: 1000, icon: '▶', color: 'red' },
		{ name: 'YouTube Title', limit: 100, icon: '▶', color: 'red' },
		{ name: 'Facebook Bio', limit: 101, icon: 'f', color: 'blue' },
		{ name: 'Pinterest Bio', limit: 500, icon: 'P', color: 'red' },
		{ name: 'Threads Bio', limit: 150, icon: '@', color: 'neutral' },
		{ name: 'Discord About Me', limit: 190, icon: '🎮', color: 'purple' },
		{ name: 'Twitch Bio', limit: 300, icon: '📺', color: 'purple' }
	];

	let charCount = $derived(text.length);
	let wordCount = $derived(text.trim() ? text.trim().split(/\s+/).length : 0);

	function getStatus(limit: number) {
		const percentage = (charCount / limit) * 100;
		if (percentage >= 100) return 'over';
		if (percentage >= 90) return 'warning';
		return 'ok';
	}

	function getProgressColor(limit: number) {
		const status = getStatus(limit);
		if (status === 'over') return 'bg-red-500';
		if (status === 'warning') return 'bg-yellow-500';
		return 'bg-green-500';
	}
</script>

<div class="space-y-8">
	<!-- Input -->
	<div>
		<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Your Bio Text</label>
		<textarea
			bind:value={text}
			placeholder="Type or paste your bio here..."
			class="w-full h-32 p-4 border-2 border-neutral-200 focus:border-pink-500 outline-none font-sans resize-none"
		></textarea>
		<div class="flex justify-between mt-2 text-sm text-neutral-500">
			<span>{charCount} characters</span>
			<span>{wordCount} words</span>
		</div>
	</div>

	<!-- Platform Grid -->
	<div>
		<h2 class="section-header">Platform Limits</h2>
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each platforms as platform}
				{@const status = getStatus(platform.limit)}
				{@const remaining = platform.limit - charCount}
				<div class="p-4 border-2 transition-colors {status === 'over' ? 'border-red-300 bg-red-50' : status === 'warning' ? 'border-yellow-300 bg-yellow-50' : 'border-neutral-200'}">
					<div class="flex items-center justify-between mb-2">
						<div class="flex items-center gap-2">
							<span class="text-lg">{platform.icon}</span>
							<span class="font-medium text-sm">{platform.name}</span>
						</div>
						<span class="text-xs font-mono {status === 'over' ? 'text-red-600' : status === 'warning' ? 'text-yellow-600' : 'text-neutral-500'}">
							{charCount}/{platform.limit}
						</span>
					</div>

					<!-- Progress bar -->
					<div class="h-2 bg-neutral-200 rounded-full overflow-hidden">
						<div
							class="h-full transition-all {getProgressColor(platform.limit)}"
							style="width: {Math.min((charCount / platform.limit) * 100, 100)}%"
						></div>
					</div>

					<div class="mt-2 text-xs {status === 'over' ? 'text-red-600 font-bold' : 'text-neutral-500'}">
						{#if status === 'over'}
							{Math.abs(remaining)} characters over limit
						{:else}
							{remaining} characters remaining
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Quick Stats -->
	<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
		<div class="p-4 bg-neutral-50 border-2 border-neutral-200 text-center">
			<div class="text-3xl font-bold font-mono">{charCount}</div>
			<div class="text-xs text-neutral-500 uppercase tracking-wider">Characters</div>
		</div>
		<div class="p-4 bg-neutral-50 border-2 border-neutral-200 text-center">
			<div class="text-3xl font-bold font-mono">{text.replace(/\s/g, '').length}</div>
			<div class="text-xs text-neutral-500 uppercase tracking-wider">No Spaces</div>
		</div>
		<div class="p-4 bg-neutral-50 border-2 border-neutral-200 text-center">
			<div class="text-3xl font-bold font-mono">{wordCount}</div>
			<div class="text-xs text-neutral-500 uppercase tracking-wider">Words</div>
		</div>
		<div class="p-4 bg-neutral-50 border-2 border-neutral-200 text-center">
			<div class="text-3xl font-bold font-mono">{text.split('\n').length}</div>
			<div class="text-xs text-neutral-500 uppercase tracking-wider">Lines</div>
		</div>
	</div>

	<!-- Tips -->
	<div class="p-6 bg-pink-50 border-2 border-pink-200">
		<h3 class="font-bold mb-2">Bio Writing Tips</h3>
		<ul class="text-sm text-neutral-600 space-y-1 list-disc list-inside">
			<li>Start with your main value proposition</li>
			<li>Use keywords relevant to your niche</li>
			<li>Include a call-to-action if space allows</li>
			<li>Emojis can save space while adding personality</li>
			<li>Test how your bio looks on mobile before publishing</li>
		</ul>
	</div>
</div>
