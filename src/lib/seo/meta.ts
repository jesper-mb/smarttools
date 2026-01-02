import type { Language } from '$lib/i18n';

export interface ToolMeta {
	title: string;
	description: string;
	keywords: string[];
	slug: string;
}

export interface ToolMetaByLang {
	nl: ToolMeta;
	en: ToolMeta;
}

export const toolsMeta: Record<string, ToolMetaByLang> = {
	stopwatch: {
		nl: {
			title: 'Online Stopwatch - Gratis Timer met Rondes',
			description: 'Gratis online stopwatch met lap timer. Start, stop en reset met je toetsenbord. Precisie tot op de milliseconde. Geen registratie nodig.',
			keywords: ['stopwatch online', 'online stopwatch', 'gratis stopwatch', 'stopwatch met rondes', 'lap timer'],
			slug: 'stopwatch'
		},
		en: {
			title: 'Online Stopwatch - Free Timer with Laps',
			description: 'Free online stopwatch with lap timer. Start, stop and reset with keyboard shortcuts. Millisecond precision. No registration required.',
			keywords: ['online stopwatch', 'free stopwatch', 'stopwatch timer', 'lap timer', 'stopwatch with laps'],
			slug: 'stopwatch'
		}
	},
	timer: {
		nl: {
			title: 'Online Timer - Countdown Aftellen met Alarm',
			description: 'Gratis countdown timer met alarm. Stel minuten en seconden in en start het aftellen. Perfect voor koken, sporten of studeren.',
			keywords: ['online timer', 'countdown timer', 'aftellen', 'timer met alarm', 'kookwekker online'],
			slug: 'timer'
		},
		en: {
			title: 'Online Timer - Countdown with Alarm',
			description: 'Free countdown timer with alarm. Set minutes and seconds and start counting down. Perfect for cooking, sports or studying.',
			keywords: ['online timer', 'countdown timer', 'timer with alarm', 'free timer', 'cooking timer'],
			slug: 'timer'
		}
	},
	pomodoro: {
		nl: {
			title: 'Pomodoro Timer - Focus & Productiviteit',
			description: 'Gratis Pomodoro timer voor betere focus. 25 minuten werken, 5 minuten pauze. Verhoog je productiviteit met de Pomodoro techniek.',
			keywords: ['pomodoro timer', 'pomodoro techniek', 'focus timer', 'productiviteit timer', 'studie timer'],
			slug: 'pomodoro'
		},
		en: {
			title: 'Pomodoro Timer - Focus & Productivity',
			description: 'Free Pomodoro timer for better focus. 25 minutes work, 5 minutes break. Boost your productivity with the Pomodoro technique.',
			keywords: ['pomodoro timer', 'pomodoro technique', 'focus timer', 'productivity timer', 'study timer'],
			slug: 'pomodoro'
		}
	},
	wordCounter: {
		nl: {
			title: 'Woorden Teller - Tel Woorden & Karakters Online',
			description: 'Tel direct het aantal woorden, karakters en zinnen in je tekst. Gratis online tool voor essays, artikelen en social media posts.',
			keywords: ['woorden tellen', 'woorden teller', 'aantal woorden', 'karakters tellen', 'word count'],
			slug: 'woorden-teller'
		},
		en: {
			title: 'Word Counter - Count Words & Characters Online',
			description: 'Instantly count words, characters and sentences in your text. Free online tool for essays, articles and social media posts.',
			keywords: ['word counter', 'count words', 'character counter', 'word count online', 'text counter'],
			slug: 'word-counter'
		}
	},
	characterCounter: {
		nl: {
			title: 'Karakter Teller - Tel Tekens Online',
			description: 'Tel karakters met of zonder spaties. Perfect voor Twitter, Instagram en andere social media met karakter limieten.',
			keywords: ['karakter teller', 'tekens tellen', 'karakters tellen', 'character count', 'twitter limiet'],
			slug: 'karakter-teller'
		},
		en: {
			title: 'Character Counter - Count Characters Online',
			description: 'Count characters with or without spaces. Perfect for Twitter, Instagram and other social media with character limits.',
			keywords: ['character counter', 'count characters', 'character count', 'twitter limit', 'text length'],
			slug: 'character-counter'
		}
	},
	clickCounter: {
		nl: {
			title: 'Klik Teller - Online Tally Counter',
			description: 'Simpele online tally counter. Tel met klikken of toetsenbord. Perfect voor inventaris, mensen tellen of score bijhouden.',
			keywords: ['klik teller', 'tally counter', 'online teller', 'mensen tellen', 'score teller'],
			slug: 'klik-teller'
		},
		en: {
			title: 'Click Counter - Online Tally Counter',
			description: 'Simple online tally counter. Count with clicks or keyboard. Perfect for inventory, counting people or keeping score.',
			keywords: ['click counter', 'tally counter', 'online counter', 'people counter', 'score counter'],
			slug: 'click-counter'
		}
	},
	wheelSpinner: {
		nl: {
			title: 'Rad van Fortuin - Draai & Laat het Lot Beslissen',
			description: 'Gratis online rad van fortuin. Voeg je eigen opties toe en draai aan het wiel. Perfect voor spelletjes, loterijen en beslissingen.',
			keywords: ['rad van fortuin', 'wheel spinner', 'draaiwiel', 'loterij wiel', 'random picker'],
			slug: 'rad-van-fortuin'
		},
		en: {
			title: 'Wheel Spinner - Spin & Let Fate Decide',
			description: 'Free online wheel spinner. Add your own options and spin the wheel. Perfect for games, raffles and decisions.',
			keywords: ['wheel spinner', 'spin the wheel', 'random wheel', 'prize wheel', 'decision wheel'],
			slug: 'wheel-spinner'
		}
	},
	dice: {
		nl: {
			title: 'Dobbelsteen Gooien - Virtuele Dobbelstenen Online',
			description: 'Gooi virtuele dobbelstenen online. Kies het aantal dobbelstenen. Perfect voor bordspellen en D&D.',
			keywords: ['dobbelsteen gooien', 'online dobbelsteen', 'virtuele dobbelsteen', 'dice roller', 'dobbelstenen'],
			slug: 'dobbelsteen'
		},
		en: {
			title: 'Dice Roller - Roll Virtual Dice Online',
			description: 'Roll virtual dice online. Choose the number of dice. Perfect for board games and D&D.',
			keywords: ['dice roller', 'roll dice online', 'virtual dice', 'online dice', 'd20 roller'],
			slug: 'dice-roller'
		}
	},
	coinFlip: {
		nl: {
			title: 'Muntje Opgooien - Kop of Munt Online',
			description: 'Gooi een virtuele munt op. Kop of munt? Laat het toeval beslissen met deze gratis online coin flip.',
			keywords: ['muntje opgooien', 'kop of munt', 'coin flip', 'virtuele munt', 'random keuze'],
			slug: 'muntje-opgooien'
		},
		en: {
			title: 'Coin Flip - Heads or Tails Online',
			description: 'Flip a virtual coin. Heads or tails? Let chance decide with this free online coin flip.',
			keywords: ['coin flip', 'heads or tails', 'flip a coin', 'virtual coin', 'random choice'],
			slug: 'coin-flip'
		}
	},
	randomNumber: {
		nl: {
			title: 'Willekeurig Getal Generator - Random Number',
			description: 'Genereer een willekeurig getal tussen twee waarden. Stel minimum en maximum in voor random getallen.',
			keywords: ['willekeurig getal', 'random number', 'getal generator', 'random getal', 'nummer generator'],
			slug: 'willekeurig-getal'
		},
		en: {
			title: 'Random Number Generator - Generate Random Numbers',
			description: 'Generate a random number between two values. Set minimum and maximum for random numbers.',
			keywords: ['random number generator', 'random number', 'number generator', 'random picker', 'rng'],
			slug: 'random-number'
		}
	},
	namePicker: {
		nl: {
			title: 'Naam Picker - Trek een Willekeurige Naam',
			description: 'Trek een willekeurige naam uit je lijst. Perfect voor loterijen, groepsindeling en prijstrekking.',
			keywords: ['naam picker', 'random naam', 'naam trekken', 'loterij trekking', 'willekeurige naam'],
			slug: 'naam-picker'
		},
		en: {
			title: 'Name Picker - Pick a Random Name',
			description: 'Pick a random name from your list. Perfect for raffles, group assignments and prize drawings.',
			keywords: ['name picker', 'random name', 'pick a name', 'raffle picker', 'random selector'],
			slug: 'name-picker'
		}
	},
	percentageCalc: {
		nl: {
			title: 'Percentage Calculator - Bereken Percentages',
			description: 'Bereken percentages snel en makkelijk. Wat is X% van Y? Hoeveel procent is A van B?',
			keywords: ['percentage calculator', 'percentage berekenen', 'procent uitrekenen', 'percentage van', 'korting berekenen'],
			slug: 'percentage-calculator'
		},
		en: {
			title: 'Percentage Calculator - Calculate Percentages',
			description: 'Calculate percentages quickly and easily. What is X% of Y? What percent is A of B?',
			keywords: ['percentage calculator', 'calculate percentage', 'percent calculator', 'percentage of', 'discount calculator'],
			slug: 'percentage-calculator'
		}
	},
	dateCountdown: {
		nl: {
			title: 'Datum Aftellen - Countdown naar Speciale Dagen',
			description: 'Tel af naar je verjaardag, Nieuwjaar, Kerst of andere speciale datum. Hoeveel dagen, uren en minuten nog?',
			keywords: ['datum aftellen', 'countdown', 'aftellen naar datum', 'dagen tot', 'nieuwjaar countdown'],
			slug: 'datum-aftellen'
		},
		en: {
			title: 'Date Countdown - Countdown to Special Dates',
			description: 'Count down to your birthday, New Year, Christmas or any special date. How many days, hours and minutes left?',
			keywords: ['date countdown', 'countdown timer', 'days until', 'countdown to date', 'new year countdown'],
			slug: 'date-countdown'
		}
	},
	base64: {
		nl: {
			title: 'Base64 Encoder/Decoder - Tekst Encoderen Online',
			description: 'Encodeer of decodeer Base64 tekst online. Gratis tool voor ontwikkelaars en webmasters.',
			keywords: ['base64 encoder', 'base64 decoder', 'base64 online', 'tekst encoderen', 'base64 converter'],
			slug: 'base64'
		},
		en: {
			title: 'Base64 Encoder/Decoder - Encode Text Online',
			description: 'Encode or decode Base64 text online. Free tool for developers and webmasters.',
			keywords: ['base64 encoder', 'base64 decoder', 'base64 online', 'encode text', 'base64 converter'],
			slug: 'base64'
		}
	},
	jsonFormatter: {
		nl: {
			title: 'JSON Formatter - JSON Formatteren & Valideren',
			description: 'Formatteer en valideer JSON online. Maak JSON leesbaar met inspringing. Gratis JSON beautifier.',
			keywords: ['json formatter', 'json beautifier', 'json validator', 'json formatteren', 'json online'],
			slug: 'json-formatter'
		},
		en: {
			title: 'JSON Formatter - Format & Validate JSON',
			description: 'Format and validate JSON online. Make JSON readable with indentation. Free JSON beautifier.',
			keywords: ['json formatter', 'json beautifier', 'json validator', 'format json', 'json online'],
			slug: 'json-formatter'
		}
	},
	colorPicker: {
		nl: {
			title: 'Kleur Picker - HEX RGB HSL Converter',
			description: 'Kies kleuren en converteer tussen HEX, RGB, HSL en CMYK. Gratis online kleur picker voor designers.',
			keywords: ['kleur picker', 'color picker', 'hex converter', 'rgb naar hex', 'kleur converter'],
			slug: 'kleur-picker'
		},
		en: {
			title: 'Color Picker - HEX RGB HSL Converter',
			description: 'Pick colors and convert between HEX, RGB, HSL and CMYK. Free online color picker for designers.',
			keywords: ['color picker', 'hex converter', 'rgb to hex', 'color converter', 'hsl converter'],
			slug: 'color-picker'
		}
	},
	uuid: {
		nl: {
			title: 'UUID Generator - Genereer Unieke IDs',
			description: 'Genereer UUID v4 identifiers online. Cryptografisch veilig. Kopieer meerdere UUIDs tegelijk.',
			keywords: ['uuid generator', 'guid generator', 'uuid online', 'unieke id', 'uuid v4'],
			slug: 'uuid-generator'
		},
		en: {
			title: 'UUID Generator - Generate Unique IDs',
			description: 'Generate UUID v4 identifiers online. Cryptographically secure. Copy multiple UUIDs at once.',
			keywords: ['uuid generator', 'guid generator', 'uuid online', 'unique id', 'uuid v4'],
			slug: 'uuid-generator'
		}
	},
	password: {
		nl: {
			title: 'Wachtwoord Generator - Sterke Wachtwoorden Maken',
			description: 'Genereer sterke, veilige wachtwoorden. Kies lengte en karaktertypes. Cryptografisch willekeurig.',
			keywords: ['wachtwoord generator', 'password generator', 'sterk wachtwoord', 'veilig wachtwoord', 'wachtwoord maken'],
			slug: 'wachtwoord-generator'
		},
		en: {
			title: 'Password Generator - Create Strong Passwords',
			description: 'Generate strong, secure passwords. Choose length and character types. Cryptographically random.',
			keywords: ['password generator', 'strong password', 'secure password', 'random password', 'password maker'],
			slug: 'password-generator'
		}
	},
	qrCode: {
		nl: {
			title: 'QR Code Generator - Maak Gratis QR Codes',
			description: 'Maak gratis QR codes voor URLs, tekst, WiFi en meer. Download als PNG of SVG.',
			keywords: ['qr code generator', 'qr code maken', 'gratis qr code', 'qr code creator', 'qr code online'],
			slug: 'qr-code-generator'
		},
		en: {
			title: 'QR Code Generator - Create Free QR Codes',
			description: 'Create free QR codes for URLs, text, WiFi and more. Download as PNG or SVG.',
			keywords: ['qr code generator', 'create qr code', 'free qr code', 'qr code maker', 'qr code online'],
			slug: 'qr-code-generator'
		}
	},
	ageCalc: {
		nl: {
			title: 'Leeftijd Calculator - Bereken Je Leeftijd',
			description: 'Bereken je exacte leeftijd in jaren, maanden, dagen en uren. Zie hoeveel dagen tot je volgende verjaardag.',
			keywords: ['leeftijd calculator', 'leeftijd berekenen', 'hoe oud ben ik', 'age calculator', 'geboortedatum'],
			slug: 'leeftijd-calculator'
		},
		en: {
			title: 'Age Calculator - Calculate Your Age',
			description: 'Calculate your exact age in years, months, days and hours. See how many days until your next birthday.',
			keywords: ['age calculator', 'calculate age', 'how old am i', 'birthday calculator', 'age in days'],
			slug: 'age-calculator'
		}
	},
	hash: {
		nl: {
			title: 'Hash Generator - MD5 SHA256 Online',
			description: 'Genereer MD5, SHA-1, SHA-256, SHA-384 en SHA-512 hashes online. Gratis hash calculator.',
			keywords: ['hash generator', 'md5 generator', 'sha256 generator', 'hash calculator', 'checksum'],
			slug: 'hash-generator'
		},
		en: {
			title: 'Hash Generator - MD5 SHA256 Online',
			description: 'Generate MD5, SHA-1, SHA-256, SHA-384 and SHA-512 hashes online. Free hash calculator.',
			keywords: ['hash generator', 'md5 generator', 'sha256 generator', 'hash calculator', 'checksum'],
			slug: 'hash-generator'
		}
	},
	urlEncoder: {
		nl: {
			title: 'URL Encoder/Decoder - URL Encoderen Online',
			description: 'Encodeer of decodeer URLs online. Ondersteunt URI en URI component encoding.',
			keywords: ['url encoder', 'url decoder', 'url encoderen', 'percent encoding', 'uri encoder'],
			slug: 'url-encoder'
		},
		en: {
			title: 'URL Encoder/Decoder - Encode URLs Online',
			description: 'Encode or decode URLs online. Supports URI and URI component encoding.',
			keywords: ['url encoder', 'url decoder', 'encode url', 'percent encoding', 'uri encoder'],
			slug: 'url-encoder'
		}
	},
	unitConverter: {
		nl: {
			title: 'Eenheden Omrekenen - Unit Converter',
			description: 'Reken eenheden om: lengte, gewicht, temperatuur, oppervlakte, volume, snelheid en data.',
			keywords: ['eenheden omrekenen', 'unit converter', 'meters naar feet', 'kg naar pounds', 'celsius fahrenheit'],
			slug: 'eenheden-omrekenen'
		},
		en: {
			title: 'Unit Converter - Convert Units Online',
			description: 'Convert units: length, weight, temperature, area, volume, speed and data.',
			keywords: ['unit converter', 'convert units', 'meters to feet', 'kg to pounds', 'celsius fahrenheit'],
			slug: 'unit-converter'
		}
	},
	textCleaner: {
		nl: {
			title: 'Tekst Opschonen - Verwijder Markdown & Opmaak',
			description: 'Verwijder markdown, HTML en opmaak van gekopieerde tekst. Perfect voor LLM output, ChatGPT, Notion en Word.',
			keywords: ['tekst opschonen', 'markdown verwijderen', 'opmaak verwijderen', 'plain text', 'chatgpt output'],
			slug: 'tekst-opschonen'
		},
		en: {
			title: 'Text Cleaner - Remove Markdown & Formatting',
			description: 'Remove markdown, HTML and formatting from copied text. Perfect for LLM output, ChatGPT, Notion and Word.',
			keywords: ['text cleaner', 'remove markdown', 'remove formatting', 'plain text', 'chatgpt output'],
			slug: 'text-cleaner'
		}
	},
	sortLines: {
		nl: {
			title: 'Regels Sorteren - Alfabetisch Ordenen Online',
			description: 'Sorteer regels tekst alfabetisch. Natuurlijke sortering, duplicaten verwijderen, hoofdlettergevoelig optioneel.',
			keywords: ['regels sorteren', 'alfabetisch sorteren', 'tekst sorteren', 'lijsten sorteren', 'sort lines'],
			slug: 'regels-sorteren'
		},
		en: {
			title: 'Sort Lines - Alphabetically Order Text Online',
			description: 'Sort lines of text alphabetically. Natural sorting, remove duplicates, case sensitive optional.',
			keywords: ['sort lines', 'alphabetical sort', 'sort text', 'sort list', 'order lines'],
			slug: 'sort-lines'
		}
	},
	multiLineEditor: {
		nl: {
			title: 'Multi-Line Editor - Meerdere Regels Bewerken',
			description: 'Bewerk meerdere regels tekst tegelijk. Voeg prefix/suffix toe, zoek & vervang, of nummer regels.',
			keywords: ['multi line editor', 'bulk text edit', 'meerdere regels', 'prefix suffix', 'batch edit'],
			slug: 'multi-line-editor'
		},
		en: {
			title: 'Multi-Line Editor - Edit Multiple Lines at Once',
			description: 'Edit multiple lines of text simultaneously. Add prefix/suffix, find & replace, or number lines.',
			keywords: ['multi line editor', 'bulk text edit', 'multiple lines', 'prefix suffix', 'batch edit'],
			slug: 'multi-line-editor'
		}
	},
	safezoneChecker: {
		nl: {
			title: 'Social Media Safezone Checker - TikTok, Reels, Shorts',
			description: 'Controleer of je content binnen de veilige zones valt voor TikTok, Instagram Reels, YouTube Shorts en Stories.',
			keywords: ['safezone checker', 'tiktok safezone', 'reels safezone', 'shorts safezone', 'content overlay'],
			slug: 'safezone-checker'
		},
		en: {
			title: 'Social Media Safezone Checker - TikTok, Reels, Shorts',
			description: 'Check if your content falls within safe zones for TikTok, Instagram Reels, YouTube Shorts and Stories.',
			keywords: ['safezone checker', 'tiktok safezone', 'reels safezone', 'shorts safezone', 'content overlay'],
			slug: 'safezone-checker'
		}
	},
	bioCounter: {
		nl: {
			title: 'Bio Teller - Social Media Karakter Limieten',
			description: 'Check karakter limieten voor Instagram bio, Twitter/X, TikTok, LinkedIn en meer sociale platforms.',
			keywords: ['bio teller', 'instagram bio limiet', 'twitter limiet', 'tiktok bio', 'karakter limiet'],
			slug: 'bio-teller'
		},
		en: {
			title: 'Bio Counter - Social Media Character Limits',
			description: 'Check character limits for Instagram bio, Twitter/X, TikTok, LinkedIn and more social platforms.',
			keywords: ['bio counter', 'instagram bio limit', 'twitter limit', 'tiktok bio', 'character limit'],
			slug: 'bio-counter'
		}
	},
	ogImageTester: {
		nl: {
			title: 'OG Image Tester - Preview Social Media Shares',
			description: 'Test hoe je links eruitzien op Twitter, Facebook, LinkedIn en Discord. Preview Open Graph tags.',
			keywords: ['og image tester', 'open graph preview', 'social preview', 'twitter card', 'facebook share'],
			slug: 'og-image-tester'
		},
		en: {
			title: 'OG Image Tester - Preview Social Media Shares',
			description: 'Test how your links look on Twitter, Facebook, LinkedIn and Discord. Preview Open Graph tags.',
			keywords: ['og image tester', 'open graph preview', 'social preview', 'twitter card', 'facebook share'],
			slug: 'og-image-tester'
		}
	},
	luggageSize: {
		nl: {
			title: 'Koffer Maten Gids - Bagage Vergelijker',
			description: 'Vergelijk koffer maten visueel. Check handbagage afmetingen voor verschillende airlines.',
			keywords: ['koffer maten', 'bagage maten', 'handbagage afmetingen', 'koffer vergelijken', 'airline bagage'],
			slug: 'koffer-maten'
		},
		en: {
			title: 'Luggage Size Guide - Baggage Comparison',
			description: 'Compare luggage sizes visually. Check carry-on dimensions for different airlines.',
			keywords: ['luggage size', 'baggage size', 'carry-on dimensions', 'luggage comparison', 'airline baggage'],
			slug: 'luggage-size'
		}
	},
	jetlagPlanner: {
		nl: {
			title: 'Jetlag Planner - Slaapschema Aanpassen',
			description: 'Plan je slaapschema om jetlag te minimaliseren. Tips voor oost- en westwaarts reizen.',
			keywords: ['jetlag planner', 'jetlag voorkomen', 'slaapschema', 'tijdzone aanpassen', 'reizen jetlag'],
			slug: 'jetlag-planner'
		},
		en: {
			title: 'Jetlag Planner - Adjust Sleep Schedule',
			description: 'Plan your sleep schedule to minimize jetlag. Tips for eastward and westward travel.',
			keywords: ['jetlag planner', 'avoid jetlag', 'sleep schedule', 'timezone adjustment', 'travel jetlag'],
			slug: 'jetlag-planner'
		}
	}
};

export const siteMeta = {
	nl: {
		name: 'IttyTools',
		title: 'IttyTools - Gratis Online Tools',
		description: 'Gratis online tools voor tech, social media en reizen. Simpele tools die gewoon werken. Geen registratie, geen advertenties.',
		url: 'https://ittytools.com'
	},
	en: {
		name: 'IttyTools',
		title: 'IttyTools - Free Online Tools',
		description: 'Free online tools for tech, social media, and travel. Simple tools that just work. No registration, no ads.',
		url: 'https://ittytools.com/en'
	}
};

// Category definitions
export const categories = {
	tech: {
		nl: {
			name: 'Tech Tools',
			title: 'Tech Tools - Developer & Encoding Tools',
			description: 'Gratis developer tools: Base64, JSON formatter, hash generator, UUID, wachtwoord generator en meer.',
			slug: 'tech'
		},
		en: {
			name: 'Tech Tools',
			title: 'Tech Tools - Developer & Encoding Tools',
			description: 'Free developer tools: Base64, JSON formatter, hash generator, UUID, password generator and more.',
			slug: 'tech'
		}
	},
	social: {
		nl: {
			name: 'Social Tools',
			title: 'Social Media Tools - Content & Preview Tools',
			description: 'Gratis social media tools: safezone checker, bio lengte teller, OG image tester en meer.',
			slug: 'social'
		},
		en: {
			name: 'Social Tools',
			title: 'Social Media Tools - Content & Preview Tools',
			description: 'Free social media tools: safezone checker, bio length counter, OG image tester and more.',
			slug: 'social'
		}
	},
	travel: {
		nl: {
			name: 'Travel Tools',
			title: 'Reis Tools - Bagage & Planning Tools',
			description: 'Gratis reis tools: koffer maten, gewicht schatter, jetlag planner en meer.',
			slug: 'travel'
		},
		en: {
			name: 'Travel Tools',
			title: 'Travel Tools - Luggage & Planning Tools',
			description: 'Free travel tools: luggage size guide, weight estimator, jetlag planner and more.',
			slug: 'travel'
		}
	},
	everyday: {
		nl: {
			name: 'Dagelijks',
			title: 'Dagelijkse Tools - Timers, Tellers & Meer',
			description: 'Gratis dagelijkse tools: stopwatch, timer, woorden teller, calculators en meer.',
			slug: 'everyday'
		},
		en: {
			name: 'Everyday',
			title: 'Everyday Tools - Timers, Counters & More',
			description: 'Free everyday tools: stopwatch, timer, word counter, calculators and more.',
			slug: 'everyday'
		}
	}
};

export function getToolMeta(toolKey: string, lang: Language): ToolMeta | undefined {
	return toolsMeta[toolKey]?.[lang];
}

export function getSiteMeta(lang: Language) {
	return siteMeta[lang];
}

export function getAllToolsForLang(lang: Language): Array<ToolMeta & { key: string }> {
	return Object.entries(toolsMeta).map(([key, meta]) => ({
		key,
		...meta[lang]
	}));
}
