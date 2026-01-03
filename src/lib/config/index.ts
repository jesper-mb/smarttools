/**
 * Config Index - Exports registries and helper functions
 *
 * This module provides the central routing logic for the multi-language site.
 */

export { toolRegistry, toolKeys, getToolsByCategory } from './toolRegistry';
export type { ToolConfig } from './toolRegistry';

export { categoryRegistry, categoryKeys } from './categoryRegistry';
export type { CategoryKey, CategoryConfig } from './categoryRegistry';

export { supportedLanguages, isSupportedLang } from './types';
export type { SupportedLang } from './types';

import { toolRegistry } from './toolRegistry';
import type { ToolConfig } from './toolRegistry';
import { categoryRegistry, type CategoryKey } from './categoryRegistry';
import type { SupportedLang } from './types';

// ============================================
// TOOL LOOKUP FUNCTIONS
// ============================================

/**
 * Find a tool by its localized slug
 * @param slug - The URL slug (e.g., 'woorden-teller')
 * @param lang - The language to search in
 * @returns Tool key and config, or null if not found
 */
export function getToolBySlug(
	slug: string,
	lang: SupportedLang
): { key: string; config: ToolConfig } | null {
	for (const [key, config] of Object.entries(toolRegistry)) {
		if (config.slugs[lang] === slug) {
			return { key, config };
		}
	}
	return null;
}

/**
 * Find a tool key from any language slug
 * Useful for resolving a slug when language is unknown
 * @param slug - The URL slug
 * @returns Tool key and detected language, or null if not found
 */
export function getToolByAnySlug(
	slug: string
): { key: string; lang: SupportedLang; config: ToolConfig } | null {
	for (const [key, config] of Object.entries(toolRegistry)) {
		for (const [lang, toolSlug] of Object.entries(config.slugs)) {
			if (toolSlug === slug) {
				return { key, lang: lang as SupportedLang, config };
			}
		}
	}
	return null;
}

/**
 * Get the tool config by key
 */
export function getToolByKey(key: string): ToolConfig | null {
	return toolRegistry[key] || null;
}

// ============================================
// CATEGORY LOOKUP FUNCTIONS
// ============================================

/**
 * Find a category by its localized slug
 * @param slug - The URL slug (e.g., 'dagelijks')
 * @param lang - The language to search in
 * @returns Category key, or null if not found
 */
export function getCategoryBySlug(slug: string, lang: SupportedLang): CategoryKey | null {
	for (const [key, config] of Object.entries(categoryRegistry)) {
		if (config.slugs[lang] === slug) {
			return key as CategoryKey;
		}
	}
	return null;
}

/**
 * Get the category slug for a given language
 */
export function getCategorySlug(category: CategoryKey, lang: SupportedLang): string {
	return categoryRegistry[category].slugs[lang];
}

// ============================================
// PATH GENERATION FUNCTIONS
// ============================================

/**
 * Get the full URL path for a tool
 * @param toolKey - The tool key (e.g., 'wordCounter')
 * @param lang - Target language
 * @returns Full path (e.g., '/nl/dagelijks/woorden-teller')
 */
export function getToolPath(toolKey: string, lang: SupportedLang): string {
	const tool = toolRegistry[toolKey];
	if (!tool) return '/';

	const categorySlug = categoryRegistry[tool.category].slugs[lang];
	const toolSlug = tool.slugs[lang];

	if (lang === 'en') {
		return `/${categorySlug}/${toolSlug}`;
	}
	return `/${lang}/${categorySlug}/${toolSlug}`;
}

/**
 * Get the full URL path for a category
 * @param category - The category key
 * @param lang - Target language
 * @returns Full path (e.g., '/nl/dagelijks')
 */
export function getCategoryPath(category: CategoryKey, lang: SupportedLang): string {
	const categorySlug = categoryRegistry[category].slugs[lang];

	if (lang === 'en') {
		return `/${categorySlug}`;
	}
	return `/${lang}/${categorySlug}`;
}

/**
 * Get the homepage path for a language
 */
export function getHomePath(lang: SupportedLang): string {
	if (lang === 'en') return '/';
	return `/${lang}`;
}

// ============================================
// ALTERNATE URLs FOR SEO (hreflang)
// ============================================

/**
 * Get all alternate URLs for a tool (for hreflang tags)
 * @param toolKey - The tool key
 * @returns Record of language -> full URL path
 */
export function getToolAlternateUrls(toolKey: string): Record<SupportedLang, string> {
	return {
		en: getToolPath(toolKey, 'en'),
		nl: getToolPath(toolKey, 'nl'),
		de: getToolPath(toolKey, 'de'),
		es: getToolPath(toolKey, 'es')
	};
}

/**
 * Get all alternate URLs for a category (for hreflang tags)
 * @param category - The category key
 * @returns Record of language -> full URL path
 */
export function getCategoryAlternateUrls(category: CategoryKey): Record<SupportedLang, string> {
	return {
		en: getCategoryPath(category, 'en'),
		nl: getCategoryPath(category, 'nl'),
		de: getCategoryPath(category, 'de'),
		es: getCategoryPath(category, 'es')
	};
}

/**
 * Get all alternate URLs for the homepage (for hreflang tags)
 */
export function getHomeAlternateUrls(): Record<SupportedLang, string> {
	return {
		en: '/',
		nl: '/nl',
		de: '/de',
		es: '/es'
	};
}

// ============================================
// PATH PARSING FUNCTIONS
// ============================================

/**
 * Parse a URL pathname to extract language, category, and tool
 * @param pathname - The URL pathname (e.g., '/nl/dagelijks/woorden-teller')
 * @returns Parsed route info
 */
export function parsePathname(pathname: string): {
	lang: SupportedLang;
	categoryKey: CategoryKey | null;
	categorySlug: string | null;
	toolKey: string | null;
	toolSlug: string | null;
	isHome: boolean;
} {
	const segments = pathname.split('/').filter(Boolean);

	// Detect language from first segment
	let lang: SupportedLang = 'en';
	let startIndex = 0;

	if (segments[0] && ['nl', 'de', 'es'].includes(segments[0])) {
		lang = segments[0] as SupportedLang;
		startIndex = 1;
	}

	const remainingSegments = segments.slice(startIndex);

	// Homepage
	if (remainingSegments.length === 0) {
		return { lang, categoryKey: null, categorySlug: null, toolKey: null, toolSlug: null, isHome: true };
	}

	// Category page or tool page
	const categorySlug = remainingSegments[0];
	const categoryKey = getCategoryBySlug(categorySlug, lang);

	if (remainingSegments.length === 1) {
		// Category page
		return { lang, categoryKey, categorySlug, toolKey: null, toolSlug: null, isHome: false };
	}

	// Tool page
	const toolSlug = remainingSegments[1];
	const tool = getToolBySlug(toolSlug, lang);

	return {
		lang,
		categoryKey,
		categorySlug,
		toolKey: tool?.key || null,
		toolSlug,
		isHome: false
	};
}

/**
 * Get the equivalent path in another language
 * Used by language switcher to navigate to translated page
 * @param currentPath - Current URL pathname
 * @param targetLang - Target language
 * @returns Translated path
 */
export function getTranslatedPath(currentPath: string, targetLang: SupportedLang): string {
	const parsed = parsePathname(currentPath);

	// Homepage
	if (parsed.isHome) {
		return getHomePath(targetLang);
	}

	// Tool page
	if (parsed.toolKey) {
		return getToolPath(parsed.toolKey, targetLang);
	}

	// Category page
	if (parsed.categoryKey) {
		return getCategoryPath(parsed.categoryKey, targetLang);
	}

	// Fallback to homepage
	return getHomePath(targetLang);
}
