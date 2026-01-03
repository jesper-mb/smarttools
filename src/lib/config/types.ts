/**
 * Shared types for the configuration system
 */

export type SupportedLang = 'en' | 'nl' | 'de' | 'es';

export const supportedLanguages: SupportedLang[] = ['en', 'nl', 'de', 'es'];

export function isSupportedLang(lang: string): lang is SupportedLang {
	return supportedLanguages.includes(lang as SupportedLang);
}
