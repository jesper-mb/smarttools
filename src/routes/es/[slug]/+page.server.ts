import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Map of slug to tool key for meta lookup
const slugToToolKey: Record<string, string> = {
	'stopwatch': 'stopwatch',
	'timer': 'timer',
	'pomodoro': 'pomodoro',
	'word-counter': 'wordCounter',
	'character-counter': 'characterCounter',
	'click-counter': 'clickCounter',
	'wheel-spinner': 'wheelSpinner',
	'dice-roller': 'dice',
	'coin-flip': 'coinFlip',
	'random-number': 'randomNumber',
	'name-picker': 'namePicker',
	'percentage-calculator': 'percentageCalc',
	'date-countdown': 'dateCountdown',
	'base64': 'base64',
	'json-formatter': 'jsonFormatter',
	'color-picker': 'colorPicker',
	'uuid-generator': 'uuid',
	'password-generator': 'password',
	'qr-code-generator': 'qrCode',
	'age-calculator': 'ageCalc',
	'hash-generator': 'hash',
	'url-encoder': 'urlEncoder',
	'unit-converter': 'unitConverter',
	'text-cleaner': 'textCleaner',
	'sort-lines': 'sortLines',
	'multi-line-editor': 'multiLineEditor'
};

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	if (!slugToToolKey[slug]) {
		error(404, 'Tool not found');
	}

	return {
		slug,
		toolKey: slugToToolKey[slug]
	};
};
