import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import {
	getCategoryBySlug,
	getToolBySlug,
	toolRegistry,
	categoryRegistry,
	type SupportedLang
} from '$lib/config';

export const load: PageServerLoad = async ({ params }) => {
	const lang: SupportedLang = 'en';
	const { category: categorySlug, tool: toolSlug } = params;

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
	const entries: Array<{ category: string; tool: string }> = [];

	for (const [_, config] of Object.entries(toolRegistry)) {
		const categorySlug = categoryRegistry[config.category].slugs.en;
		const toolSlug = config.slugs.en;

		entries.push({
			category: categorySlug,
			tool: toolSlug
		});
	}

	return entries;
};

export const prerender = true;
