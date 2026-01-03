import type { ParamMatcher } from '@sveltejs/kit';

/**
 * Matches only valid non-English language codes
 * English is the default (no prefix), so we only match nl, de, es
 */
export const match: ParamMatcher = (param) => {
	return ['nl', 'de', 'es'].includes(param);
};
