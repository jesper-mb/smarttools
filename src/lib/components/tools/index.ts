/**
 * Tool Components Index
 *
 * Maps tool keys to their component imports for dynamic loading.
 */

import type { Component } from 'svelte';

// Lazy-loaded tool components
export const toolComponents: Record<string, () => Promise<{ default: Component }>> = {
	// Everyday tools
	stopwatch: () => import('./Stopwatch.svelte'),
	timer: () => import('./Timer.svelte'),
	pomodoro: () => import('./Pomodoro.svelte'),
	wordCounter: () => import('./WordCounter.svelte'),
	characterCounter: () => import('./CharacterCounter.svelte'),
	clickCounter: () => import('./ClickCounter.svelte'),
	wheelSpinner: () => import('./WheelSpinner.svelte'),
	dice: () => import('./DiceRoller.svelte'),
	coinFlip: () => import('./CoinFlip.svelte'),
	randomNumber: () => import('./RandomNumber.svelte'),
	namePicker: () => import('./NamePicker.svelte'),
	percentageCalc: () => import('./PercentageCalculator.svelte'),
	ageCalc: () => import('./AgeCalculator.svelte'),
	unitConverter: () => import('./UnitConverter.svelte'),
	dateCountdown: () => import('./DateCountdown.svelte'),

	// Tech tools
	base64: () => import('./Base64Tool.svelte'),
	jsonFormatter: () => import('./JsonFormatter.svelte'),
	hash: () => import('./HashGenerator.svelte'),
	uuid: () => import('./UuidGenerator.svelte'),
	password: () => import('./PasswordGenerator.svelte'),
	qrCode: () => import('./QrCodeGenerator.svelte'),
	colorPicker: () => import('./ColorPicker.svelte'),
	urlEncoder: () => import('./UrlEncoder.svelte'),
	textCleaner: () => import('./TextCleaner.svelte'),
	sortLines: () => import('./SortLines.svelte'),
	multiLineEditor: () => import('./MultiLineEditor.svelte'),

	// Social tools
	bioCounter: () => import('./BioCounter.svelte'),
	safezoneChecker: () => import('./SafezoneChecker.svelte'),
	ogImageTester: () => import('./OgImageTester.svelte'),

	// Travel tools
	luggageSize: () => import('./LuggageSize.svelte'),
	jetlagPlanner: () => import('./JetlagPlanner.svelte')
};

/**
 * Get a tool component by key
 */
export async function getToolComponent(toolKey: string): Promise<Component | null> {
	const loader = toolComponents[toolKey];
	if (!loader) return null;

	try {
		const module = await loader();
		return module.default;
	} catch {
		return null;
	}
}
