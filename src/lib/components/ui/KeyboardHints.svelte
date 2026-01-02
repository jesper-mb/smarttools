<script lang="ts">
	interface KeyHint {
		key: string;
		action: string;
	}

	interface Props {
		hints: KeyHint[];
		show?: boolean;
	}

	let { hints, show = true }: Props = $props();
</script>

{#if show && hints.length > 0}
	<div class="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 uppercase tracking-wider">
		{#each hints as hint}
			<div class="flex items-center gap-2">
				<kbd class="px-2 py-1 bg-neutral-100 border border-neutral-300 text-neutral-600 font-medium">
					{hint.key}
				</kbd>
				<span>{hint.action}</span>
			</div>
		{/each}
	</div>
{/if}
