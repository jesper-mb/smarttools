/**
 * Category Registry - Central source of truth for all categories
 *
 * Each category defines:
 * - slugs: URL-safe slugs for each language
 * - icon: Icon identifier for UI
 */

import type { SupportedLang } from './types';

export type CategoryKey = 'time' | 'text' | 'calc' | 'generators' | 'dev' | 'social' | 'travel';

export interface CategoryConfig {
	slugs: Record<SupportedLang, string>;
	icon: string;
}

export const categoryRegistry: Record<CategoryKey, CategoryConfig> = {
	time: {
		slugs: {
			en: 'time',
			nl: 'tijd',
			de: 'zeit',
			es: 'tiempo'
		},
		icon: 'clock'
	},
	text: {
		slugs: {
			en: 'text',
			nl: 'tekst',
			de: 'text',
			es: 'texto'
		},
		icon: 'type'
	},
	calc: {
		slugs: {
			en: 'calculators',
			nl: 'rekenmachines',
			de: 'rechner',
			es: 'calculadoras'
		},
		icon: 'calculator'
	},
	generators: {
		slugs: {
			en: 'generators',
			nl: 'generatoren',
			de: 'generatoren',
			es: 'generadores'
		},
		icon: 'sparkles'
	},
	dev: {
		slugs: {
			en: 'developer',
			nl: 'developer',
			de: 'entwickler',
			es: 'desarrollador'
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
