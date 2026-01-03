import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import {
	getCategoryBySlug,
	getToolsByCategory,
	categoryRegistry,
	categoryKeys,
	type SupportedLang
} from '$lib/config';

export const load: PageServerLoad = async ({ params }) => {
	const lang: SupportedLang = 'en';
	const { category: categorySlug } = params;

	// Validate category
	const categoryKey = getCategoryBySlug(categorySlug, lang);
	if (!categoryKey) {
		throw error(404, 'Category not found');
	}

	// Get tools in this category
	const tools = getToolsByCategory(categoryKey);

	return {
		lang,
		categoryKey,
		categorySlug,
		tools: tools.map((t) => ({
			key: t.key,
			slug: t.config.slugs[lang],
			category: t.config.category
		}))
	};
};

// Generate all valid category entries for prerendering
export const entries: EntryGenerator = () => {
	return categoryKeys.map((key) => ({
		category: categoryRegistry[key].slugs.en
	}));
};

export const prerender = true;
