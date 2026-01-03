import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import {
	getCategoryBySlug,
	getToolsByCategory,
	categoryRegistry,
	categoryKeys,
	isSupportedLang,
	supportedLanguages,
	type SupportedLang
} from '$lib/config';

export const load: PageServerLoad = async ({ params }) => {
	const { lang: langParam, category: categorySlug } = params;

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
	const entries: Array<{ lang: string; category: string }> = [];

	// For each non-English language
	for (const lang of supportedLanguages) {
		if (lang === 'en') continue;

		for (const key of categoryKeys) {
			entries.push({
				lang,
				category: categoryRegistry[key].slugs[lang]
			});
		}
	}

	return entries;
};

export const prerender = true;
