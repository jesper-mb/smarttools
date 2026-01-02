import { writable } from 'svelte/store';
import { browser } from '$app/environment';

interface Preferences {
	soundEnabled: boolean;
	vibrationEnabled: boolean;
}

const defaultPreferences: Preferences = {
	soundEnabled: true,
	vibrationEnabled: true
};

function createPreferencesStore() {
	const stored = browser ? localStorage.getItem('preferences') : null;
	const initial: Preferences = stored ? JSON.parse(stored) : defaultPreferences;

	const { subscribe, set, update } = writable<Preferences>(initial);

	return {
		subscribe,
		set: (value: Preferences) => {
			if (browser) {
				localStorage.setItem('preferences', JSON.stringify(value));
			}
			set(value);
		},
		update: (fn: (value: Preferences) => Preferences) => {
			update((current) => {
				const newValue = fn(current);
				if (browser) {
					localStorage.setItem('preferences', JSON.stringify(newValue));
				}
				return newValue;
			});
		},
		toggleSound: () => {
			update((p) => {
				const newValue = { ...p, soundEnabled: !p.soundEnabled };
				if (browser) {
					localStorage.setItem('preferences', JSON.stringify(newValue));
				}
				return newValue;
			});
		},
		toggleVibration: () => {
			update((p) => {
				const newValue = { ...p, vibrationEnabled: !p.vibrationEnabled };
				if (browser) {
					localStorage.setItem('preferences', JSON.stringify(newValue));
				}
				return newValue;
			});
		}
	};
}

export const preferences = createPreferencesStore();

export function vibrate(pattern: number | number[] = 50) {
	if (browser && 'vibrate' in navigator) {
		const prefs = localStorage.getItem('preferences');
		if (prefs) {
			const parsed = JSON.parse(prefs);
			if (parsed.vibrationEnabled) {
				navigator.vibrate(pattern);
			}
		}
	}
}
