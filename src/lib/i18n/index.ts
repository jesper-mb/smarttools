import { writable, derived } from 'svelte/store';
import { translations, type Language } from './translations';

export const currentLang = writable<Language>('en');

export const t = derived(currentLang, ($lang) => translations[$lang]);

export function setLanguage(lang: Language) {
	currentLang.set(lang);
	if (typeof document !== 'undefined') {
		document.documentElement.lang = lang;
	}
}

export function getLanguageFromPath(path: string): Language {
	if (path.startsWith('/nl')) {
		return 'nl';
	}
	if (path.startsWith('/de')) {
		return 'de';
	}
	if (path.startsWith('/es')) {
		return 'es';
	}
	return 'en'; // Default to English
}

export { translations, type Language };
