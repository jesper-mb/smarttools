<script lang="ts">
	import type { Snippet } from 'svelte';
	import { t, currentLang } from '$lib/i18n';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	let isFullscreen = $state(false);
	let containerEl: HTMLDivElement;
	let lang = $derived($currentLang);

	function toggleFullscreen() {
		if (!document.fullscreenElement) {
			containerEl?.requestFullscreen();
			isFullscreen = true;
		} else {
			document.exitFullscreen();
			isFullscreen = false;
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
			return;
		}

		if (e.key === 'f' && !e.metaKey && !e.ctrlKey) {
			e.preventDefault();
			toggleFullscreen();
		}
	}

	function handleFullscreenChange() {
		isFullscreen = !!document.fullscreenElement;
	}
</script>

<svelte:window onkeydown={handleKeydown} />
<svelte:document onfullscreenchange={handleFullscreenChange} />

<div
	bind:this={containerEl}
	class="relative {isFullscreen ? 'bg-white flex items-center justify-center min-h-screen p-8' : ''}"
>
	{@render children()}

	<button
		onclick={toggleFullscreen}
		class="absolute top-4 right-4 p-2 border-2 border-neutral-200 bg-white hover:border-neutral-950 transition-colors text-sm"
		title={isFullscreen
			? (lang === 'nl' ? 'Sluit volledig scherm (F)' : 'Exit fullscreen (F)')
			: (lang === 'nl' ? 'Volledig scherm (F)' : 'Fullscreen (F)')}
	>
		{#if isFullscreen}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<polyline points="4 14 10 14 10 20"></polyline>
				<polyline points="20 10 14 10 14 4"></polyline>
				<line x1="14" y1="10" x2="21" y2="3"></line>
				<line x1="3" y1="21" x2="10" y2="14"></line>
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<polyline points="15 3 21 3 21 9"></polyline>
				<polyline points="9 21 3 21 3 15"></polyline>
				<line x1="21" y1="3" x2="14" y2="10"></line>
				<line x1="3" y1="21" x2="10" y2="14"></line>
			</svg>
		{/if}
	</button>
</div>
