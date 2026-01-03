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
	category: 'time' | 'text' | 'calc' | 'generators' | 'dev' | 'social' | 'travel';
	slugs: Record<SupportedLang, string>;
}

export const toolRegistry: Record<string, ToolConfig> = {
	// ============================================
	// TIME TOOLS - Timers, countdowns, time tracking
	// ============================================
	stopwatch: {
		component: 'Stopwatch',
		category: 'time',
		slugs: {
			en: 'stopwatch',
			nl: 'stopwatch',
			de: 'stoppuhr',
			es: 'cronometro'
		}
	},
	timer: {
		component: 'Timer',
		category: 'time',
		slugs: {
			en: 'timer',
			nl: 'timer',
			de: 'timer',
			es: 'temporizador'
		}
	},
	pomodoro: {
		component: 'Pomodoro',
		category: 'time',
		slugs: {
			en: 'pomodoro',
			nl: 'pomodoro',
			de: 'pomodoro',
			es: 'pomodoro'
		}
	},
	dateCountdown: {
		component: 'DateCountdown',
		category: 'time',
		slugs: {
			en: 'date-countdown',
			nl: 'datum-aftellen',
			de: 'datums-countdown',
			es: 'cuenta-regresiva'
		}
	},

	// ============================================
	// TEXT TOOLS - Text manipulation and counting
	// ============================================
	wordCounter: {
		component: 'WordCounter',
		category: 'text',
		slugs: {
			en: 'word-counter',
			nl: 'woorden-teller',
			de: 'wort-zahler',
			es: 'contador-palabras'
		}
	},
	characterCounter: {
		component: 'CharacterCounter',
		category: 'text',
		slugs: {
			en: 'character-counter',
			nl: 'karakter-teller',
			de: 'zeichen-zahler',
			es: 'contador-caracteres'
		}
	},
	textCleaner: {
		component: 'TextCleaner',
		category: 'text',
		slugs: {
			en: 'text-cleaner',
			nl: 'tekst-opschonen',
			de: 'text-bereiniger',
			es: 'limpiador-texto'
		}
	},
	sortLines: {
		component: 'SortLines',
		category: 'text',
		slugs: {
			en: 'sort-lines',
			nl: 'regels-sorteren',
			de: 'zeilen-sortieren',
			es: 'ordenar-lineas'
		}
	},
	multiLineEditor: {
		component: 'MultiLineEditor',
		category: 'text',
		slugs: {
			en: 'multi-line-editor',
			nl: 'multi-line-editor',
			de: 'multi-line-editor',
			es: 'editor-multilinea'
		}
	},

	// ============================================
	// CALCULATORS - Math and conversion tools
	// ============================================
	percentageCalc: {
		component: 'PercentageCalculator',
		category: 'calc',
		slugs: {
			en: 'percentage-calculator',
			nl: 'percentage-calculator',
			de: 'prozentrechner',
			es: 'calculadora-porcentajes'
		}
	},
	ageCalc: {
		component: 'AgeCalculator',
		category: 'calc',
		slugs: {
			en: 'age-calculator',
			nl: 'leeftijd-calculator',
			de: 'altersrechner',
			es: 'calculadora-edad'
		}
	},
	unitConverter: {
		component: 'UnitConverter',
		category: 'calc',
		slugs: {
			en: 'unit-converter',
			nl: 'eenheden-omrekenen',
			de: 'einheiten-umrechner',
			es: 'convertidor-unidades'
		}
	},

	// ============================================
	// GENERATORS - Random & generation tools
	// ============================================
	password: {
		component: 'PasswordGenerator',
		category: 'generators',
		slugs: {
			en: 'password-generator',
			nl: 'wachtwoord-generator',
			de: 'passwort-generator',
			es: 'generador-contrasenas'
		}
	},
	uuid: {
		component: 'UuidGenerator',
		category: 'generators',
		slugs: {
			en: 'uuid-generator',
			nl: 'uuid-generator',
			de: 'uuid-generator',
			es: 'generador-uuid'
		}
	},
	qrCode: {
		component: 'QrCodeGenerator',
		category: 'generators',
		slugs: {
			en: 'qr-code-generator',
			nl: 'qr-code-generator',
			de: 'qr-code-generator',
			es: 'generador-qr'
		}
	},
	randomNumber: {
		component: 'RandomNumber',
		category: 'generators',
		slugs: {
			en: 'random-number',
			nl: 'willekeurig-getal',
			de: 'zufallszahl',
			es: 'numero-aleatorio'
		}
	},
	dice: {
		component: 'DiceRoller',
		category: 'generators',
		slugs: {
			en: 'dice-roller',
			nl: 'dobbelsteen',
			de: 'wuerfel',
			es: 'dados'
		}
	},
	coinFlip: {
		component: 'CoinFlip',
		category: 'generators',
		slugs: {
			en: 'coin-flip',
			nl: 'muntje-opgooien',
			de: 'muenze-werfen',
			es: 'lanzar-moneda'
		}
	},
	namePicker: {
		component: 'NamePicker',
		category: 'generators',
		slugs: {
			en: 'name-picker',
			nl: 'naam-picker',
			de: 'namens-picker',
			es: 'selector-nombres'
		}
	},
	wheelSpinner: {
		component: 'WheelSpinner',
		category: 'generators',
		slugs: {
			en: 'wheel-spinner',
			nl: 'rad-van-fortuin',
			de: 'gluecksrad',
			es: 'ruleta-suerte'
		}
	},
	clickCounter: {
		component: 'ClickCounter',
		category: 'generators',
		slugs: {
			en: 'click-counter',
			nl: 'klik-teller',
			de: 'klick-zahler',
			es: 'contador-clics'
		}
	},

	// ============================================
	// DEVELOPER TOOLS - Encoding & formatting
	// ============================================
	base64: {
		component: 'Base64',
		category: 'dev',
		slugs: {
			en: 'base64',
			nl: 'base64',
			de: 'base64',
			es: 'base64'
		}
	},
	jsonFormatter: {
		component: 'JsonFormatter',
		category: 'dev',
		slugs: {
			en: 'json-formatter',
			nl: 'json-formatter',
			de: 'json-formatter',
			es: 'json-formatter'
		}
	},
	hash: {
		component: 'HashGenerator',
		category: 'dev',
		slugs: {
			en: 'hash-generator',
			nl: 'hash-generator',
			de: 'hash-generator',
			es: 'generador-hash'
		}
	},
	urlEncoder: {
		component: 'UrlEncoder',
		category: 'dev',
		slugs: {
			en: 'url-encoder',
			nl: 'url-encoder',
			de: 'url-encoder',
			es: 'codificador-url'
		}
	},
	colorPicker: {
		component: 'ColorPicker',
		category: 'dev',
		slugs: {
			en: 'color-picker',
			nl: 'kleur-picker',
			de: 'farbwaehler',
			es: 'selector-color'
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
