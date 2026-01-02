<script lang="ts">
	import { currentLang } from '$lib/i18n';
	import { getAllToolsForLang, type ToolMeta } from '$lib/seo/meta';

	interface Props {
		currentSlug: string;
		category?: 'timers' | 'counters' | 'random' | 'calculators';
		limit?: number;
	}

	let { currentSlug, category, limit = 3 }: Props = $props();

	let lang = $derived($currentLang);
	let allTools = $derived(getAllToolsForLang(lang));

	// Define tool categories
	const categories: Record<string, string[]> = {
		timers: ['stopwatch', 'timer', 'pomodoro', 'datum-aftellen', 'date-countdown'],
		counters: ['woorden-teller', 'word-counter', 'karakter-teller', 'character-counter', 'klik-teller', 'click-counter'],
		random: ['rad-van-fortuin', 'wheel-spinner', 'dobbelsteen', 'dice-roller', 'muntje-opgooien', 'coin-flip', 'willekeurig-getal', 'random-number', 'naam-picker', 'name-picker'],
		calculators: ['percentage-calculator', 'leeftijd-calculator', 'age-calculator', 'eenheden-omrekenen', 'unit-converter'],
		developers: ['base64', 'json-formatter', 'uuid-generator', 'hash-generator', 'url-encoder', 'kleur-picker', 'color-picker'],
		generators: ['wachtwoord-generator', 'password-generator', 'qr-code-generator']
	};

	let relatedTools = $derived(() => {
		// Find current tool's category
		let currentCategory = category;
		if (!currentCategory) {
			for (const [cat, slugs] of Object.entries(categories)) {
				if (slugs.includes(currentSlug)) {
					currentCategory = cat as 'timers' | 'counters' | 'random' | 'calculators';
					break;
				}
			}
		}

		// Get tools from the same category, excluding current
		let related = allTools.filter(tool => {
			if (tool.slug === currentSlug) return false;
			if (currentCategory && categories[currentCategory]) {
				return categories[currentCategory].includes(tool.slug);
			}
			return true;
		});

		// If not enough from same category, add others
		if (related.length < limit) {
			const others = allTools.filter(tool =>
				tool.slug !== currentSlug && !related.some(r => r.slug === tool.slug)
			);
			related = [...related, ...others];
		}

		return related.slice(0, limit);
	});

	function getToolPath(slug: string): string {
		return lang === 'en' ? `/en/${slug}` : `/${slug}`;
	}
</script>

{#if relatedTools().length > 0}
	<section class="mt-16 pt-8 border-t-2 border-neutral-200">
		<h2 class="section-header">
			{lang === 'nl' ? 'Gerelateerde tools' : 'Related tools'}
		</h2>

		<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
			{#each relatedTools() as tool}
				<a href={getToolPath(tool.slug)} class="tool-card">
					<h3 class="tool-card-title">{tool.title.split(' - ')[0]}</h3>
					<p class="tool-card-description line-clamp-2">{tool.description}</p>
					<span class="tool-card-arrow">{lang === 'nl' ? 'Openen' : 'Open'} →</span>
				</a>
			{/each}
		</div>
	</section>
{/if}
