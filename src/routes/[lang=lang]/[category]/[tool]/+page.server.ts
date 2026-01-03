import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import {
	getCategoryBySlug,
	getToolBySlug,
	toolRegistry,
	categoryRegistry,
	isSupportedLang,
	supportedLanguages,
	type SupportedLang
} from '$lib/config';

export const load: PageServerLoad = async ({ params }) => {
	const { lang: langParam, category: categorySlug, tool: toolSlug } = params;

	// Validate language (should not be 'en' - that's handled by parent routes)
	if (!isSupportedLang(langParam) || langParam === 'en') {
		throw error(404, 'Page not found');
	}

	const lang: SupportedLang = langParam;

	// Validate category
	const categoryKey = getCategoryBySlug(categorySlug, lang);
	if (!categoryKey) {
		throw error(404, 'Category not found');
	}

	// Validate tool
	const toolResult = getToolBySlug(toolSlug, lang);
	if (!toolResult) {
		throw error(404, 'Tool not found');
	}

	// Verify tool belongs to this category
	if (toolResult.config.category !== categoryKey) {
		throw error(404, 'Tool not found in this category');
	}

	return {
		lang,
		categoryKey,
		toolKey: toolResult.key,
		toolSlug,
		categorySlug
	};
};

// Generate all valid route entries for prerendering
export const entries: EntryGenerator = () => {
	const entries: Array<{ lang: string; category: string; tool: string }> = [];

	// For each non-English language
	for (const lang of supportedLanguages) {
		if (lang === 'en') continue; // English uses non-prefixed routes

		for (const [_, config] of Object.entries(toolRegistry)) {
			const categorySlug = categoryRegistry[config.category].slugs[lang];
			const toolSlug = config.slugs[lang];

			entries.push({
				lang,
				category: categorySlug,
				tool: toolSlug
			});
		}
	}

	return entries;
};

export const prerender = true;
