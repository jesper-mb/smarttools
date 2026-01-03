/**
 * Category Registry - Central source of truth for all categories
 *
 * Each category defines:
 * - slugs: URL-safe slugs for each language
 * - icon: Icon identifier for UI
 */

import type { SupportedLang } from './types';

export type CategoryKey = 'everyday' | 'tech' | 'social' | 'travel';

export interface CategoryConfig {
	slugs: Record<SupportedLang, string>;
	icon: string;
}

export const categoryRegistry: Record<CategoryKey, CategoryConfig> = {
	everyday: {
		slugs: {
			en: 'everyday',
			nl: 'dagelijks',
			de: 'alltag',
			es: 'cotidiano'
		},
		icon: 'clock'
	},
	tech: {
		slugs: {
			en: 'tech',
			nl: 'tech',
			de: 'tech',
			es: 'tech'
		},
		icon: 'code'
	},
	social: {
		slugs: {
			en: 'social',
			nl: 'social',
			de: 'social',
			es: 'social'
		},
		icon: 'share'
	},
	travel: {
		slugs: {
			en: 'travel',
			nl: 'reizen',
			de: 'reise',
			es: 'viaje'
		},
		icon: 'plane'
	}
};

// Get all category keys
export const categoryKeys = Object.keys(categoryRegistry) as CategoryKey[];
