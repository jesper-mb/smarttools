/**
 * Tool Registry - Central source of truth for all tools
 *
 * Each tool defines:
 * - component: The Svelte component name (in $lib/components/tools/)
 * - category: Which category the tool belongs to
 * - slugs: URL-safe slugs for each language (used in routing)
 */

import type { SupportedLang } from './types';

export interface ToolConfig {
	component: string;
	category: 'everyday' | 'tech' | 'social' | 'travel';
	slugs: Record<SupportedLang, string>;
}

export const toolRegistry: Record<string, ToolConfig> = {
	// ============================================
	// EVERYDAY TOOLS - Timers, counters, random
	// ============================================
	stopwatch: {
		component: 'Stopwatch',
		category: 'everyday',
		slugs: {
			en: 'stopwatch',
			nl: 'stopwatch',
			de: 'stoppuhr',
			es: 'cronometro'
		}
	},
	timer: {
		component: 'Timer',
		category: 'everyday',
		slugs: {
			en: 'timer',
			nl: 'timer',
			de: 'timer',
			es: 'temporizador'
		}
	},
	pomodoro: {
		component: 'Pomodoro',
		category: 'everyday',
		slugs: {
			en: 'pomodoro',
			nl: 'pomodoro',
			de: 'pomodoro',
			es: 'pomodoro'
		}
	},
	wordCounter: {
		component: 'WordCounter',
		category: 'everyday',
		slugs: {
			en: 'word-counter',
			nl: 'woorden-teller',
			de: 'wort-zahler',
			es: 'contador-palabras'
		}
	},
	characterCounter: {
		component: 'CharacterCounter',
		category: 'everyday',
		slugs: {
			en: 'character-counter',
			nl: 'karakter-teller',
			de: 'zeichen-zahler',
			es: 'contador-caracteres'
		}
	},
	clickCounter: {
		component: 'ClickCounter',
		category: 'everyday',
		slugs: {
			en: 'click-counter',
			nl: 'klik-teller',
			de: 'klick-zahler',
			es: 'contador-clics'
		}
	},
	wheelSpinner: {
		component: 'WheelSpinner',
		category: 'everyday',
		slugs: {
			en: 'wheel-spinner',
			nl: 'rad-van-fortuin',
			de: 'gluecksrad',
			es: 'ruleta-suerte'
		}
	},
	dice: {
		component: 'DiceRoller',
		category: 'everyday',
		slugs: {
			en: 'dice-roller',
			nl: 'dobbelsteen',
			de: 'wuerfel',
			es: 'dados'
		}
	},
	coinFlip: {
		component: 'CoinFlip',
		category: 'everyday',
		slugs: {
			en: 'coin-flip',
			nl: 'muntje-opgooien',
			de: 'muenze-werfen',
			es: 'lanzar-moneda'
		}
	},
	randomNumber: {
		component: 'RandomNumber',
		category: 'everyday',
		slugs: {
			en: 'random-number',
			nl: 'willekeurig-getal',
			de: 'zufallszahl',
			es: 'numero-aleatorio'
		}
	},
	namePicker: {
		component: 'NamePicker',
		category: 'everyday',
		slugs: {
			en: 'name-picker',
			nl: 'naam-picker',
			de: 'namens-picker',
			es: 'selector-nombres'
		}
	},
	percentageCalc: {
		component: 'PercentageCalculator',
		category: 'everyday',
		slugs: {
			en: 'percentage-calculator',
			nl: 'percentage-calculator',
			de: 'prozentrechner',
			es: 'calculadora-porcentajes'
		}
	},
	ageCalc: {
		component: 'AgeCalculator',
		category: 'everyday',
		slugs: {
			en: 'age-calculator',
			nl: 'leeftijd-calculator',
			de: 'altersrechner',
			es: 'calculadora-edad'
		}
	},
	unitConverter: {
		component: 'UnitConverter',
		category: 'everyday',
		slugs: {
			en: 'unit-converter',
			nl: 'eenheden-omrekenen',
			de: 'einheiten-umrechner',
			es: 'convertidor-unidades'
		}
	},
	dateCountdown: {
		component: 'DateCountdown',
		category: 'everyday',
		slugs: {
			en: 'date-countdown',
			nl: 'datum-aftellen',
			de: 'datums-countdown',
			es: 'cuenta-regresiva'
		}
	},

	// ============================================
	// TECH TOOLS - Developer & encoding
	// ============================================
	base64: {
		component: 'Base64',
		category: 'tech',
		slugs: {
			en: 'base64',
			nl: 'base64',
			de: 'base64',
			es: 'base64'
		}
	},
	jsonFormatter: {
		component: 'JsonFormatter',
		category: 'tech',
		slugs: {
			en: 'json-formatter',
			nl: 'json-formatter',
			de: 'json-formatter',
			es: 'json-formatter'
		}
	},
	hash: {
		component: 'HashGenerator',
		category: 'tech',
		slugs: {
			en: 'hash-generator',
			nl: 'hash-generator',
			de: 'hash-generator',
			es: 'generador-hash'
		}
	},
	uuid: {
		component: 'UuidGenerator',
		category: 'tech',
		slugs: {
			en: 'uuid-generator',
			nl: 'uuid-generator',
			de: 'uuid-generator',
			es: 'generador-uuid'
		}
	},
	password: {
		component: 'PasswordGenerator',
		category: 'tech',
		slugs: {
			en: 'password-generator',
			nl: 'wachtwoord-generator',
			de: 'passwort-generator',
			es: 'generador-contrasenas'
		}
	},
	qrCode: {
		component: 'QrCodeGenerator',
		category: 'tech',
		slugs: {
			en: 'qr-code-generator',
			nl: 'qr-code-generator',
			de: 'qr-code-generator',
			es: 'generador-qr'
		}
	},
	colorPicker: {
		component: 'ColorPicker',
		category: 'tech',
		slugs: {
			en: 'color-picker',
			nl: 'kleur-picker',
			de: 'farbwaehler',
			es: 'selector-color'
		}
	},
	urlEncoder: {
		component: 'UrlEncoder',
		category: 'tech',
		slugs: {
			en: 'url-encoder',
			nl: 'url-encoder',
			de: 'url-encoder',
			es: 'codificador-url'
		}
	},
	textCleaner: {
		component: 'TextCleaner',
		category: 'tech',
		slugs: {
			en: 'text-cleaner',
			nl: 'tekst-opschonen',
			de: 'text-bereiniger',
			es: 'limpiador-texto'
		}
	},
	sortLines: {
		component: 'SortLines',
		category: 'tech',
		slugs: {
			en: 'sort-lines',
			nl: 'regels-sorteren',
			de: 'zeilen-sortieren',
			es: 'ordenar-lineas'
		}
	},
	multiLineEditor: {
		component: 'MultiLineEditor',
		category: 'tech',
		slugs: {
			en: 'multi-line-editor',
			nl: 'multi-line-editor',
			de: 'multi-line-editor',
			es: 'editor-multilinea'
		}
	},

	// ============================================
	// SOCIAL TOOLS - Social media content
	// ============================================
	bioCounter: {
		component: 'BioCounter',
		category: 'social',
		slugs: {
			en: 'bio-counter',
			nl: 'bio-teller',
			de: 'bio-zaehler',
			es: 'contador-bio'
		}
	},
	safezoneChecker: {
		component: 'TiktokSafezone',
		category: 'social',
		slugs: {
			en: 'tiktok-safezone',
			nl: 'tiktok-safezone',
			de: 'tiktok-safezone',
			es: 'tiktok-safezone'
		}
	},
	ogImageTester: {
		component: 'OgImageTester',
		category: 'social',
		slugs: {
			en: 'og-image-tester',
			nl: 'og-image-tester',
			de: 'og-image-tester',
			es: 'probador-og'
		}
	},

	// ============================================
	// TRAVEL TOOLS - Travel & luggage
	// ============================================
	luggageSize: {
		component: 'LuggageSize',
		category: 'travel',
		slugs: {
			en: 'luggage-size',
			nl: 'koffer-maten',
			de: 'koffer-groessen',
			es: 'tamano-equipaje'
		}
	},
	jetlagPlanner: {
		component: 'JetlagPlanner',
		category: 'travel',
		slugs: {
			en: 'jetlag-planner',
			nl: 'jetlag-planner',
			de: 'jetlag-planer',
			es: 'planificador-jetlag'
		}
	}
};

// Get all tool keys
export const toolKeys = Object.keys(toolRegistry) as Array<keyof typeof toolRegistry>;

// Get tools by category
export function getToolsByCategory(category: ToolConfig['category']): Array<{ key: string; config: ToolConfig }> {
	return Object.entries(toolRegistry)
		.filter(([_, config]) => config.category === category)
		.map(([key, config]) => ({ key, config }));
}
