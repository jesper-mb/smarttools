<script lang="ts">
	import { currentLang, t } from '$lib/i18n';
	import { getToolsByCategory, getToolPath, toolRegistry, type ToolConfig } from '$lib/config';
	import { getToolMeta } from '$lib/seo/meta';

	interface Props {
		currentToolKey: string;
		category: 'everyday' | 'tech' | 'social' | 'travel';
		limit?: number;
	}

	let { currentToolKey, category, limit = 3 }: Props = $props();

	let lang = $derived($currentLang);

	let relatedTools = $derived(() => {
		// Get tools from the same category, excluding current
		const categoryTools = getToolsByCategory(category);
		let related = categoryTools.filter((tool) => tool.key !== currentToolKey);

		// If not enough from same category, add from other categories
		if (related.length < limit) {
			const allCategories: ToolConfig['category'][] = ['everyday', 'tech', 'social', 'travel'];
			for (const cat of allCategories) {
				if (cat === category) continue;
				const otherTools = getToolsByCategory(cat);
				for (const tool of otherTools) {
					if (!related.some((r) => r.key === tool.key)) {
						related.push(tool);
					}
					if (related.length >= limit) break;
				}
				if (related.length >= limit) break;
			}
		}

		return related.slice(0, limit);
	});

	function getToolDisplay(toolKey: string): { title: string; description: string } {
		// Try translations first
		const toolTranslations = ($t as any).tools?.[toolKey];
		if (toolTranslations?.name && toolTranslations?.description) {
			return { title: toolTranslations.name, description: toolTranslations.description };
		}

		// Fallback to meta
		const meta = getToolMeta(toolKey, lang);
		if (meta) {
			return { title: meta.title.split(' - ')[0], description: meta.description };
		}

		// Last resort: format toolKey
		return {
			title: toolKey.replace(/([A-Z])/g, ' $1').trim(),
			description: ''
		};
	}
</script>

{#if relatedTools().length > 0}
	<section class="mt-16 pt-8 border-t-2 border-neutral-200">
		<h2 class="section-header">
			{lang === 'nl'
				? 'Gerelateerde tools'
				: lang === 'de'
					? 'Verwandte Tools'
					: lang === 'es'
						? 'Herramientas relacionadas'
						: 'Related tools'}
		</h2>

		<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
			{#each relatedTools() as tool}
				{@const display = getToolDisplay(tool.key)}
				<a href={getToolPath(tool.key, lang)} class="tool-card">
					<h3 class="tool-card-title">{display.title}</h3>
					<p class="tool-card-description line-clamp-2">{display.description}</p>
					<span class="tool-card-arrow"
						>{lang === 'nl'
							? 'Openen'
							: lang === 'de'
								? 'Öffnen'
								: lang === 'es'
									? 'Abrir'
									: 'Open'} →</span
					>
				</a>
			{/each}
		</div>
	</section>
{/if}
