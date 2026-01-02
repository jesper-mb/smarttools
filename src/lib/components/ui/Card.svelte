<script lang="ts">
	import type { Snippet } from 'svelte';
	import { currentLang } from '$lib/i18n';

	interface Props {
		children: Snippet;
		class?: string;
		padding?: 'sm' | 'md' | 'lg';
		fullscreen?: boolean;
	}

	let { children, class: className = '', padding = 'lg', fullscreen = false }: Props = $props();

	let isFullscreen = $state(false);
	let containerEl: HTMLDivElement;
	let lang = $derived($currentLang);

	const paddingClasses = {
		sm: 'p-4',
		md: 'p-6',
		lg: 'p-8 sm:p-12'
	};

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
		if (!fullscreen) return;
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
	class="content-card {paddingClasses[padding]} {className} {isFullscreen ? '!p-8 flex items-center justify-center min-h-screen' : ''}"
>
	<div class={isFullscreen ? 'w-full max-w-4xl' : ''}>
		{@render children()}
	</div>

	{#if fullscreen}
		<button
			onclick={toggleFullscreen}
			class="absolute top-4 right-4 p-2 border-2 border-neutral-200 bg-white hover:border-neutral-950 transition-colors text-sm z-10"
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
	{/if}
</div>
