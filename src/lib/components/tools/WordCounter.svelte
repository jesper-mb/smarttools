<script lang="ts">
	import { t } from '$lib/i18n';

	let text = $state('');

	let stats = $derived({
		characters: text.length,
		charactersNoSpaces: text.replace(/\s/g, '').length,
		words: text.trim() === '' ? 0 : text.trim().split(/\s+/).length,
		sentences: text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim()).length,
		paragraphs: text.trim() === '' ? 0 : text.split(/\n\n+/).filter(p => p.trim()).length,
		readingTime: Math.ceil((text.trim() === '' ? 0 : text.trim().split(/\s+/).length) / 200)
	});
</script>

<div class="space-y-6">
	<textarea
		bind:value={text}
		placeholder={$t.tools.wordCounter.placeholder}
		class="w-full h-48 p-4 border-2 border-neutral-200 resize-none focus:border-neutral-950 focus:outline-none text-neutral-950 placeholder-neutral-400 font-sans"
	></textarea>

	<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-neutral-200">
		<div class="bg-white p-4 text-center">
			<div class="text-3xl font-bold text-neutral-950 tabular-nums">{stats.words}</div>
			<div class="text-xs uppercase tracking-wider text-neutral-400 mt-1">{$t.tools.wordCounter.words}</div>
		</div>
		<div class="bg-white p-4 text-center">
			<div class="text-3xl font-bold text-neutral-950 tabular-nums">{stats.characters}</div>
			<div class="text-xs uppercase tracking-wider text-neutral-400 mt-1">{$t.tools.wordCounter.characters}</div>
		</div>
		<div class="bg-white p-4 text-center">
			<div class="text-3xl font-bold text-neutral-950 tabular-nums">{stats.charactersNoSpaces}</div>
			<div class="text-xs uppercase tracking-wider text-neutral-400 mt-1">{$t.tools.characterCounter.withoutSpaces}</div>
		</div>
		<div class="bg-white p-4 text-center">
			<div class="text-3xl font-bold text-neutral-950 tabular-nums">{stats.sentences}</div>
			<div class="text-xs uppercase tracking-wider text-neutral-400 mt-1">{$t.tools.wordCounter.sentences}</div>
		</div>
		<div class="bg-white p-4 text-center">
			<div class="text-3xl font-bold text-neutral-950 tabular-nums">{stats.paragraphs}</div>
			<div class="text-xs uppercase tracking-wider text-neutral-400 mt-1">{$t.tools.wordCounter.paragraphs}</div>
		</div>
		<div class="bg-white p-4 text-center">
			<div class="text-3xl font-bold text-neutral-950 tabular-nums">{stats.readingTime}</div>
			<div class="text-xs uppercase tracking-wider text-neutral-400 mt-1">min</div>
		</div>
	</div>
</div>
