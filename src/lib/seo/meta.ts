import type { Language } from '$lib/i18n';

export type SupportedLang = 'en' | 'nl' | 'de' | 'es';

export interface ToolMeta {
	title: string;
	description: string;
	keywords: string[];
	slug: string;
}

// All 4 languages supported, with fallback to English
export interface ToolMetaByLang {
	en: ToolMeta;
	nl: ToolMeta;
	de?: ToolMeta;
	es?: ToolMeta;
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
		},
		de: {
			title: 'Online Stoppuhr - Kostenloser Timer mit Runden',
			description: 'Kostenlose Online-Stoppuhr mit Rundentimer. Start, Stopp und Reset mit Tastatur. Millisekunden-Präzision. Keine Registrierung erforderlich.',
			keywords: ['online stoppuhr', 'kostenlose stoppuhr', 'stoppuhr timer', 'rundentimer', 'stoppuhr mit runden'],
			slug: 'stopwatch'
		},
		es: {
			title: 'Cronómetro Online - Temporizador Gratis con Vueltas',
			description: 'Cronómetro online gratuito con temporizador de vueltas. Iniciar, detener y reiniciar con atajos de teclado. Precisión de milisegundos. Sin registro.',
			keywords: ['cronómetro online', 'cronómetro gratis', 'temporizador', 'cronómetro con vueltas', 'lap timer'],
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
		},
		de: {
			title: 'Online Timer - Countdown mit Alarm',
			description: 'Kostenloser Countdown-Timer mit Alarm. Minuten und Sekunden einstellen und runterzählen. Perfekt zum Kochen, Sport oder Lernen.',
			keywords: ['online timer', 'countdown timer', 'timer mit alarm', 'kostenloser timer', 'küchentimer'],
			slug: 'timer'
		},
		es: {
			title: 'Temporizador Online - Cuenta Regresiva con Alarma',
			description: 'Temporizador de cuenta regresiva gratuito con alarma. Configura minutos y segundos. Perfecto para cocinar, deportes o estudiar.',
			keywords: ['temporizador online', 'cuenta regresiva', 'temporizador con alarma', 'timer gratis', 'temporizador cocina'],
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
		},
		de: {
			title: 'Pomodoro Timer - Fokus & Produktivität',
			description: 'Kostenloser Pomodoro-Timer für besseren Fokus. 25 Minuten arbeiten, 5 Minuten Pause. Steigern Sie Ihre Produktivität mit der Pomodoro-Technik.',
			keywords: ['pomodoro timer', 'pomodoro technik', 'fokus timer', 'produktivität timer', 'lern timer'],
			slug: 'pomodoro'
		},
		es: {
			title: 'Temporizador Pomodoro - Enfoque y Productividad',
			description: 'Temporizador Pomodoro gratuito para mejor enfoque. 25 minutos de trabajo, 5 minutos de descanso. Mejora tu productividad con la técnica Pomodoro.',
			keywords: ['temporizador pomodoro', 'técnica pomodoro', 'timer enfoque', 'timer productividad', 'timer estudio'],
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
		},
		de: {
			title: 'Wortzähler - Wörter & Zeichen Online Zählen',
			description: 'Zählen Sie sofort Wörter, Zeichen und Sätze in Ihrem Text. Kostenloses Online-Tool für Essays, Artikel und Social-Media-Posts.',
			keywords: ['wortzähler', 'wörter zählen', 'zeichen zählen', 'word count online', 'textzähler'],
			slug: 'word-counter'
		},
		es: {
			title: 'Contador de Palabras - Contar Palabras y Caracteres',
			description: 'Cuenta palabras, caracteres y oraciones al instante. Herramienta gratuita para ensayos, artículos y redes sociales.',
			keywords: ['contador de palabras', 'contar palabras', 'contador de caracteres', 'word count', 'contador texto'],
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
		},
		de: {
			title: 'Zeichenzähler - Zeichen Online Zählen',
			description: 'Zählen Sie Zeichen mit oder ohne Leerzeichen. Perfekt für Twitter, Instagram und andere Social-Media-Plattformen mit Zeichenlimits.',
			keywords: ['zeichenzähler', 'zeichen zählen', 'character count', 'twitter limit', 'textlänge'],
			slug: 'character-counter'
		},
		es: {
			title: 'Contador de Caracteres - Contar Caracteres Online',
			description: 'Cuenta caracteres con o sin espacios. Perfecto para Twitter, Instagram y otras redes sociales con límites de caracteres.',
			keywords: ['contador de caracteres', 'contar caracteres', 'límite twitter', 'longitud texto', 'character count'],
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
		},
		de: {
			title: 'Klickzähler - Online Stückzähler',
			description: 'Einfacher Online-Stückzähler. Zählen mit Klicks oder Tastatur. Perfekt für Inventar, Personenzählung oder Punktestand.',
			keywords: ['klickzähler', 'stückzähler', 'online zähler', 'personenzähler', 'punktezähler'],
			slug: 'click-counter'
		},
		es: {
			title: 'Contador de Clics - Contador Online',
			description: 'Contador online simple. Cuenta con clics o teclado. Perfecto para inventario, contar personas o llevar puntuación.',
			keywords: ['contador de clics', 'contador tally', 'contador online', 'contador personas', 'contador puntos'],
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
		},
		de: {
			title: 'Glücksrad - Drehen & das Schicksal Entscheiden Lassen',
			description: 'Kostenloses Online-Glücksrad. Fügen Sie Ihre eigenen Optionen hinzu und drehen Sie das Rad. Perfekt für Spiele, Verlosungen und Entscheidungen.',
			keywords: ['glücksrad', 'wheel spinner', 'drehrad', 'verlosungsrad', 'zufallsauswahl'],
			slug: 'wheel-spinner'
		},
		es: {
			title: 'Ruleta de la Suerte - Gira y Deja que el Destino Decida',
			description: 'Ruleta online gratuita. Agrega tus opciones y gira la rueda. Perfecto para juegos, sorteos y decisiones.',
			keywords: ['ruleta de la suerte', 'girar ruleta', 'rueda aleatoria', 'rueda de premios', 'rueda de decisiones'],
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
		},
		de: {
			title: 'Würfel Werfen - Virtuelle Würfel Online',
			description: 'Würfeln Sie virtuelle Würfel online. Wählen Sie die Anzahl der Würfel. Perfekt für Brettspiele und D&D.',
			keywords: ['würfel werfen', 'online würfel', 'virtuelle würfel', 'dice roller', 'würfel'],
			slug: 'dice-roller'
		},
		es: {
			title: 'Tirar Dados - Dados Virtuales Online',
			description: 'Tira dados virtuales online. Elige el número de dados. Perfecto para juegos de mesa y D&D.',
			keywords: ['tirar dados', 'dados online', 'dados virtuales', 'dice roller', 'dados'],
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
		},
		de: {
			title: 'Münze Werfen - Kopf oder Zahl Online',
			description: 'Werfen Sie eine virtuelle Münze. Kopf oder Zahl? Lassen Sie den Zufall entscheiden.',
			keywords: ['münze werfen', 'kopf oder zahl', 'coin flip', 'virtuelle münze', 'zufällige wahl'],
			slug: 'coin-flip'
		},
		es: {
			title: 'Lanzar Moneda - Cara o Cruz Online',
			description: 'Lanza una moneda virtual. ¿Cara o cruz? Deja que el azar decida con este coin flip gratuito.',
			keywords: ['lanzar moneda', 'cara o cruz', 'coin flip', 'moneda virtual', 'elección aleatoria'],
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
		},
		de: {
			title: 'Zufallszahlengenerator - Zufallszahlen Generieren',
			description: 'Generieren Sie eine Zufallszahl zwischen zwei Werten. Minimum und Maximum für Zufallszahlen festlegen.',
			keywords: ['zufallszahlengenerator', 'zufallszahl', 'zahlengenerator', 'random picker', 'rng'],
			slug: 'random-number'
		},
		es: {
			title: 'Generador de Números Aleatorios',
			description: 'Genera un número aleatorio entre dos valores. Establece mínimo y máximo para números aleatorios.',
			keywords: ['generador números aleatorios', 'número aleatorio', 'generador de números', 'random picker', 'rng'],
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
		},
		de: {
			title: 'Namenspicker - Zufälligen Namen Ziehen',
			description: 'Ziehen Sie einen zufälligen Namen aus Ihrer Liste. Perfekt für Verlosungen, Gruppenaufteilung und Preisziehungen.',
			keywords: ['namenspicker', 'zufälliger name', 'namen ziehen', 'verlosung', 'zufallsauswahl'],
			slug: 'name-picker'
		},
		es: {
			title: 'Selector de Nombres - Elegir Nombre Aleatorio',
			description: 'Elige un nombre aleatorio de tu lista. Perfecto para sorteos, asignación de grupos y rifas.',
			keywords: ['selector de nombres', 'nombre aleatorio', 'elegir nombre', 'sorteo', 'selector aleatorio'],
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
		},
		de: {
			title: 'Prozentrechner - Prozente Berechnen',
			description: 'Berechnen Sie Prozente schnell und einfach. Was ist X% von Y? Wie viel Prozent ist A von B?',
			keywords: ['prozentrechner', 'prozent berechnen', 'prozent rechner', 'prozent von', 'rabatt berechnen'],
			slug: 'percentage-calculator'
		},
		es: {
			title: 'Calculadora de Porcentajes - Calcular Porcentajes',
			description: 'Calcula porcentajes rápida y fácilmente. ¿Qué es X% de Y? ¿Qué porcentaje es A de B?',
			keywords: ['calculadora porcentajes', 'calcular porcentaje', 'calculadora de porcentaje', 'porcentaje de', 'calcular descuento'],
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
		},
		de: {
			title: 'Datums-Countdown - Countdown zu Besonderen Tagen',
			description: 'Zählen Sie zu Ihrem Geburtstag, Neujahr, Weihnachten oder einem anderen besonderen Datum herunter. Wie viele Tage, Stunden und Minuten noch?',
			keywords: ['datums countdown', 'countdown timer', 'tage bis', 'countdown zu datum', 'neujahr countdown'],
			slug: 'date-countdown'
		},
		es: {
			title: 'Cuenta Regresiva - Countdown a Fechas Especiales',
			description: 'Cuenta regresiva hasta tu cumpleaños, Año Nuevo, Navidad o cualquier fecha especial. ¿Cuántos días, horas y minutos faltan?',
			keywords: ['cuenta regresiva fecha', 'countdown timer', 'días hasta', 'countdown a fecha', 'año nuevo countdown'],
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
		},
		de: {
			title: 'Base64 Encoder/Decoder - Text Online Kodieren',
			description: 'Kodieren oder dekodieren Sie Base64-Text online. Kostenloses Tool für Entwickler und Webmaster.',
			keywords: ['base64 encoder', 'base64 decoder', 'base64 online', 'text kodieren', 'base64 converter'],
			slug: 'base64'
		},
		es: {
			title: 'Base64 Encoder/Decoder - Codificar Texto Online',
			description: 'Codifica o decodifica texto Base64 online. Herramienta gratuita para desarrolladores y webmasters.',
			keywords: ['base64 encoder', 'base64 decoder', 'base64 online', 'codificar texto', 'base64 converter'],
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
		},
		de: {
			title: 'JSON Formatter - JSON Formatieren & Validieren',
			description: 'Formatieren und validieren Sie JSON online. Machen Sie JSON lesbar mit Einrückung. Kostenloser JSON Beautifier.',
			keywords: ['json formatter', 'json beautifier', 'json validator', 'json formatieren', 'json online'],
			slug: 'json-formatter'
		},
		es: {
			title: 'JSON Formatter - Formatear y Validar JSON',
			description: 'Formatea y valida JSON online. Haz JSON legible con sangría. JSON beautifier gratuito.',
			keywords: ['json formatter', 'json beautifier', 'json validator', 'formatear json', 'json online'],
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
		},
		de: {
			title: 'Farbwähler - HEX RGB HSL Konverter',
			description: 'Wählen Sie Farben und konvertieren Sie zwischen HEX, RGB, HSL und CMYK. Kostenloser Online-Farbwähler für Designer.',
			keywords: ['farbwähler', 'color picker', 'hex konverter', 'rgb zu hex', 'farb konverter'],
			slug: 'color-picker'
		},
		es: {
			title: 'Selector de Color - Convertidor HEX RGB HSL',
			description: 'Elige colores y convierte entre HEX, RGB, HSL y CMYK. Selector de color online gratuito para diseñadores.',
			keywords: ['selector de color', 'color picker', 'convertidor hex', 'rgb a hex', 'convertidor de color'],
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
		},
		de: {
			title: 'UUID Generator - Einzigartige IDs Generieren',
			description: 'Generieren Sie UUID v4 Identifikatoren online. Kryptografisch sicher. Kopieren Sie mehrere UUIDs auf einmal.',
			keywords: ['uuid generator', 'guid generator', 'uuid online', 'einzigartige id', 'uuid v4'],
			slug: 'uuid-generator'
		},
		es: {
			title: 'Generador UUID - Generar IDs Únicos',
			description: 'Genera identificadores UUID v4 online. Criptográficamente seguro. Copia múltiples UUIDs a la vez.',
			keywords: ['generador uuid', 'generador guid', 'uuid online', 'id único', 'uuid v4'],
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
		},
		de: {
			title: 'Passwort Generator - Starke Passwörter Erstellen',
			description: 'Generieren Sie starke, sichere Passwörter. Wählen Sie Länge und Zeichentypen. Kryptografisch zufällig.',
			keywords: ['passwort generator', 'starkes passwort', 'sicheres passwort', 'zufälliges passwort', 'passwort erstellen'],
			slug: 'password-generator'
		},
		es: {
			title: 'Generador de Contraseñas - Crear Contraseñas Seguras',
			description: 'Genera contraseñas fuertes y seguras. Elige longitud y tipos de caracteres. Criptográficamente aleatorio.',
			keywords: ['generador contraseñas', 'contraseña segura', 'contraseña fuerte', 'contraseña aleatoria', 'crear contraseña'],
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
		},
		de: {
			title: 'QR-Code Generator - Kostenlose QR-Codes Erstellen',
			description: 'Erstellen Sie kostenlose QR-Codes für URLs, Text, WiFi und mehr. Download als PNG oder SVG.',
			keywords: ['qr code generator', 'qr code erstellen', 'kostenloser qr code', 'qr code maker', 'qr code online'],
			slug: 'qr-code-generator'
		},
		es: {
			title: 'Generador de Códigos QR - Crear Códigos QR Gratis',
			description: 'Crea códigos QR gratuitos para URLs, texto, WiFi y más. Descarga como PNG o SVG.',
			keywords: ['generador código qr', 'crear código qr', 'código qr gratis', 'qr code maker', 'código qr online'],
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
		},
		de: {
			title: 'Altersrechner - Berechnen Sie Ihr Alter',
			description: 'Berechnen Sie Ihr genaues Alter in Jahren, Monaten, Tagen und Stunden. Sehen Sie, wie viele Tage bis zu Ihrem nächsten Geburtstag.',
			keywords: ['altersrechner', 'alter berechnen', 'wie alt bin ich', 'geburtstag rechner', 'alter in tagen'],
			slug: 'age-calculator'
		},
		es: {
			title: 'Calculadora de Edad - Calcula Tu Edad',
			description: 'Calcula tu edad exacta en años, meses, días y horas. Mira cuántos días faltan para tu próximo cumpleaños.',
			keywords: ['calculadora de edad', 'calcular edad', 'cuántos años tengo', 'calculadora cumpleaños', 'edad en días'],
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
		},
		de: {
			title: 'Hash Generator - MD5 SHA256 Online',
			description: 'Generieren Sie MD5, SHA-1, SHA-256, SHA-384 und SHA-512 Hashes online. Kostenloser Hash-Rechner.',
			keywords: ['hash generator', 'md5 generator', 'sha256 generator', 'hash rechner', 'checksum'],
			slug: 'hash-generator'
		},
		es: {
			title: 'Generador de Hash - MD5 SHA256 Online',
			description: 'Genera hashes MD5, SHA-1, SHA-256, SHA-384 y SHA-512 online. Calculadora de hash gratuita.',
			keywords: ['generador hash', 'generador md5', 'generador sha256', 'calculadora hash', 'checksum'],
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
		},
		de: {
			title: 'URL Encoder/Decoder - URLs Online Kodieren',
			description: 'Kodieren oder dekodieren Sie URLs online. Unterstützt URI und URI-Komponenten-Kodierung.',
			keywords: ['url encoder', 'url decoder', 'url kodieren', 'percent encoding', 'uri encoder'],
			slug: 'url-encoder'
		},
		es: {
			title: 'URL Encoder/Decoder - Codificar URLs Online',
			description: 'Codifica o decodifica URLs online. Soporta codificación URI y componentes URI.',
			keywords: ['url encoder', 'url decoder', 'codificar url', 'percent encoding', 'uri encoder'],
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
		},
		de: {
			title: 'Einheitenumrechner - Einheiten Online Umrechnen',
			description: 'Einheiten umrechnen: Länge, Gewicht, Temperatur, Fläche, Volumen, Geschwindigkeit und Daten.',
			keywords: ['einheitenumrechner', 'einheiten umrechnen', 'meter zu fuß', 'kg zu pfund', 'celsius fahrenheit'],
			slug: 'unit-converter'
		},
		es: {
			title: 'Convertidor de Unidades - Convertir Unidades Online',
			description: 'Convierte unidades: longitud, peso, temperatura, área, volumen, velocidad y datos.',
			keywords: ['convertidor unidades', 'convertir unidades', 'metros a pies', 'kg a libras', 'celsius fahrenheit'],
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
		},
		de: {
			title: 'Textbereiniger - Markdown & Formatierung Entfernen',
			description: 'Entfernen Sie Markdown, HTML und Formatierung aus kopiertem Text. Perfekt für LLM-Ausgabe, ChatGPT, Notion und Word.',
			keywords: ['text bereiniger', 'markdown entfernen', 'formatierung entfernen', 'plain text', 'chatgpt ausgabe'],
			slug: 'text-cleaner'
		},
		es: {
			title: 'Limpiador de Texto - Eliminar Markdown y Formato',
			description: 'Elimina markdown, HTML y formato del texto copiado. Perfecto para salida de LLM, ChatGPT, Notion y Word.',
			keywords: ['limpiador texto', 'eliminar markdown', 'eliminar formato', 'texto plano', 'salida chatgpt'],
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
		},
		de: {
			title: 'Zeilen Sortieren - Text Alphabetisch Ordnen',
			description: 'Sortieren Sie Textzeilen alphabetisch. Natürliche Sortierung, Duplikate entfernen, Groß-/Kleinschreibung optional.',
			keywords: ['zeilen sortieren', 'alphabetisch sortieren', 'text sortieren', 'liste sortieren', 'sort lines'],
			slug: 'sort-lines'
		},
		es: {
			title: 'Ordenar Líneas - Ordenar Texto Alfabéticamente',
			description: 'Ordena líneas de texto alfabéticamente. Ordenación natural, eliminar duplicados, mayúsculas/minúsculas opcional.',
			keywords: ['ordenar líneas', 'orden alfabético', 'ordenar texto', 'ordenar lista', 'sort lines'],
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
		},
		de: {
			title: 'Multi-Line Editor - Mehrere Zeilen Gleichzeitig Bearbeiten',
			description: 'Bearbeiten Sie mehrere Textzeilen gleichzeitig. Präfix/Suffix hinzufügen, Suchen & Ersetzen oder Zeilen nummerieren.',
			keywords: ['multi line editor', 'bulk text edit', 'mehrere zeilen', 'prefix suffix', 'batch edit'],
			slug: 'multi-line-editor'
		},
		es: {
			title: 'Editor Multi-Línea - Editar Múltiples Líneas',
			description: 'Edita múltiples líneas de texto simultáneamente. Agrega prefijo/sufijo, buscar y reemplazar o numerar líneas.',
			keywords: ['editor multi línea', 'edición masiva', 'múltiples líneas', 'prefijo sufijo', 'batch edit'],
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
		},
		de: {
			title: 'Social Media Safezone Checker - TikTok, Reels, Shorts',
			description: 'Prüfen Sie, ob Ihr Content in den sicheren Zonen für TikTok, Instagram Reels, YouTube Shorts und Stories liegt.',
			keywords: ['safezone checker', 'tiktok safezone', 'reels safezone', 'shorts safezone', 'content overlay'],
			slug: 'safezone-checker'
		},
		es: {
			title: 'Verificador de Zona Segura - TikTok, Reels, Shorts',
			description: 'Verifica si tu contenido está dentro de las zonas seguras para TikTok, Instagram Reels, YouTube Shorts y Stories.',
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
		},
		de: {
			title: 'Bio Zähler - Social Media Zeichenlimits',
			description: 'Prüfen Sie Zeichenlimits für Instagram Bio, Twitter/X, TikTok, LinkedIn und weitere Social-Media-Plattformen.',
			keywords: ['bio zähler', 'instagram bio limit', 'twitter limit', 'tiktok bio', 'zeichenlimit'],
			slug: 'bio-counter'
		},
		es: {
			title: 'Contador de Bio - Límites de Caracteres de Redes Sociales',
			description: 'Verifica límites de caracteres para bio de Instagram, Twitter/X, TikTok, LinkedIn y más plataformas.',
			keywords: ['contador bio', 'límite bio instagram', 'límite twitter', 'bio tiktok', 'límite caracteres'],
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
		},
		de: {
			title: 'OG Image Tester - Social Media Vorschau',
			description: 'Testen Sie, wie Ihre Links auf Twitter, Facebook, LinkedIn und Discord aussehen. Open Graph Tags Vorschau.',
			keywords: ['og image tester', 'open graph vorschau', 'social vorschau', 'twitter card', 'facebook share'],
			slug: 'og-image-tester'
		},
		es: {
			title: 'Probador de Imagen OG - Vista Previa de Redes Sociales',
			description: 'Prueba cómo se ven tus enlaces en Twitter, Facebook, LinkedIn y Discord. Vista previa de etiquetas Open Graph.',
			keywords: ['og image tester', 'open graph preview', 'vista previa social', 'twitter card', 'facebook share'],
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
		},
		de: {
			title: 'Koffer Größen Guide - Gepäck Vergleich',
			description: 'Vergleichen Sie Koffergrößen visuell. Handgepäck-Maße für verschiedene Airlines prüfen.',
			keywords: ['koffer größen', 'gepäck größen', 'handgepäck maße', 'koffer vergleich', 'airline gepäck'],
			slug: 'luggage-size'
		},
		es: {
			title: 'Guía de Tamaños de Equipaje - Comparador de Maletas',
			description: 'Compara tamaños de maletas visualmente. Verifica dimensiones de equipaje de mano para diferentes aerolíneas.',
			keywords: ['tamaño equipaje', 'tamaño maleta', 'dimensiones equipaje mano', 'comparar maletas', 'equipaje aerolínea'],
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
		},
		de: {
			title: 'Jetlag Planer - Schlafplan Anpassen',
			description: 'Planen Sie Ihren Schlafplan, um Jetlag zu minimieren. Tipps für Ost- und Westreisen.',
			keywords: ['jetlag planer', 'jetlag vermeiden', 'schlafplan', 'zeitzone anpassen', 'reise jetlag'],
			slug: 'jetlag-planner'
		},
		es: {
			title: 'Planificador de Jetlag - Ajustar Horario de Sueño',
			description: 'Planifica tu horario de sueño para minimizar el jetlag. Consejos para viajes hacia el este y oeste.',
			keywords: ['planificador jetlag', 'evitar jetlag', 'horario sueño', 'ajuste zona horaria', 'viaje jetlag'],
			slug: 'jetlag-planner'
		}
	}
};

export const siteMeta: Record<SupportedLang, { name: string; title: string; description: string; url: string }> = {
	nl: {
		name: 'IttyTools',
		title: 'IttyTools - Gratis Online Tools',
		description: 'Gratis online tools voor tech, social media en reizen. Simpele tools die gewoon werken. Geen registratie, geen advertenties.',
		url: 'https://ittytools.com/nl'
	},
	en: {
		name: 'IttyTools',
		title: 'IttyTools - Free Online Tools',
		description: 'Free online tools for tech, social media, and travel. Simple tools that just work. No registration, no ads.',
		url: 'https://ittytools.com'
	},
	de: {
		name: 'IttyTools',
		title: 'IttyTools - Kostenlose Online-Tools',
		description: 'Kostenlose Online-Tools für Tech, Social Media und Reisen. Einfache Tools, die einfach funktionieren. Keine Registrierung, keine Werbung.',
		url: 'https://ittytools.com/de'
	},
	es: {
		name: 'IttyTools',
		title: 'IttyTools - Herramientas Online Gratis',
		description: 'Herramientas online gratuitas para tech, redes sociales y viajes. Herramientas simples que funcionan. Sin registro, sin anuncios.',
		url: 'https://ittytools.com/es'
	}
};

// Category definitions
interface CategoryMeta {
	name: string;
	title: string;
	description: string;
	slug: string;
}

export const categories: Record<string, Record<SupportedLang, CategoryMeta>> = {
	time: {
		nl: {
			name: 'Tijd',
			title: 'Tijd Tools - Timers, Stopwatch & Countdown',
			description: 'Gratis tijd tools: stopwatch, timer, pomodoro timer, countdown naar belangrijke data en meer.',
			slug: 'tijd'
		},
		en: {
			name: 'Time',
			title: 'Time Tools - Timers, Stopwatch & Countdown',
			description: 'Free time tools: stopwatch, timer, pomodoro timer, countdown to important dates and more.',
			slug: 'time'
		},
		de: {
			name: 'Zeit',
			title: 'Zeit Tools - Timer, Stoppuhr & Countdown',
			description: 'Kostenlose Zeit-Tools: Stoppuhr, Timer, Pomodoro-Timer, Countdown zu wichtigen Daten und mehr.',
			slug: 'zeit'
		},
		es: {
			name: 'Tiempo',
			title: 'Herramientas de Tiempo - Temporizadores, Cronómetro y Cuenta Regresiva',
			description: 'Herramientas de tiempo gratuitas: cronómetro, temporizador, pomodoro, cuenta regresiva y más.',
			slug: 'tiempo'
		}
	},
	text: {
		nl: {
			name: 'Tekst',
			title: 'Tekst Tools - Woorden Tellen, Sorteren & Bewerken',
			description: 'Gratis tekst tools: woorden teller, karakter teller, tekst opschonen, regels sorteren en meer.',
			slug: 'tekst'
		},
		en: {
			name: 'Text',
			title: 'Text Tools - Word Count, Sort & Edit',
			description: 'Free text tools: word counter, character counter, text cleaner, sort lines and more.',
			slug: 'text'
		},
		de: {
			name: 'Text',
			title: 'Text Tools - Wörter Zählen, Sortieren & Bearbeiten',
			description: 'Kostenlose Text-Tools: Wortzähler, Zeichenzähler, Textbereiniger, Zeilen sortieren und mehr.',
			slug: 'text'
		},
		es: {
			name: 'Texto',
			title: 'Herramientas de Texto - Contar Palabras, Ordenar y Editar',
			description: 'Herramientas de texto gratuitas: contador de palabras, contador de caracteres, limpiador de texto, ordenar líneas y más.',
			slug: 'texto'
		}
	},
	calc: {
		nl: {
			name: 'Rekenmachines',
			title: 'Rekenmachines - Percentage, Leeftijd & Eenheden',
			description: 'Gratis rekenmachines: percentage calculator, leeftijd calculator, eenheden omrekenen en meer.',
			slug: 'rekenmachines'
		},
		en: {
			name: 'Calculators',
			title: 'Calculators - Percentage, Age & Unit Conversion',
			description: 'Free calculators: percentage calculator, age calculator, unit converter and more.',
			slug: 'calculators'
		},
		de: {
			name: 'Rechner',
			title: 'Rechner - Prozent, Alter & Einheiten',
			description: 'Kostenlose Rechner: Prozentrechner, Altersrechner, Einheitenumrechner und mehr.',
			slug: 'rechner'
		},
		es: {
			name: 'Calculadoras',
			title: 'Calculadoras - Porcentaje, Edad y Conversión de Unidades',
			description: 'Calculadoras gratuitas: calculadora de porcentajes, calculadora de edad, convertidor de unidades y más.',
			slug: 'calculadoras'
		}
	},
	generators: {
		nl: {
			name: 'Generatoren',
			title: 'Generatoren - Random, Wachtwoord, QR Code & Meer',
			description: 'Gratis generatoren: wachtwoord generator, UUID generator, QR code, dobbelstenen, muntje opgooien en meer.',
			slug: 'generatoren'
		},
		en: {
			name: 'Generators',
			title: 'Generators - Random, Password, QR Code & More',
			description: 'Free generators: password generator, UUID generator, QR code, dice roller, coin flip and more.',
			slug: 'generators'
		},
		de: {
			name: 'Generatoren',
			title: 'Generatoren - Zufalls, Passwort, QR-Code & Mehr',
			description: 'Kostenlose Generatoren: Passwort-Generator, UUID-Generator, QR-Code, Würfel, Münze werfen und mehr.',
			slug: 'generatoren'
		},
		es: {
			name: 'Generadores',
			title: 'Generadores - Aleatorio, Contraseña, Código QR y Más',
			description: 'Generadores gratuitos: generador de contraseñas, generador UUID, código QR, dados, lanzar moneda y más.',
			slug: 'generadores'
		}
	},
	dev: {
		nl: {
			name: 'Developer',
			title: 'Developer Tools - Encoding, Formatting & Conversie',
			description: 'Gratis developer tools: Base64, JSON formatter, hash generator, URL encoder, kleur picker en meer.',
			slug: 'developer'
		},
		en: {
			name: 'Developer',
			title: 'Developer Tools - Encoding, Formatting & Conversion',
			description: 'Free developer tools: Base64, JSON formatter, hash generator, URL encoder, color picker and more.',
			slug: 'developer'
		},
		de: {
			name: 'Entwickler',
			title: 'Entwickler Tools - Encoding, Formatierung & Konvertierung',
			description: 'Kostenlose Entwickler-Tools: Base64, JSON Formatter, Hash Generator, URL Encoder, Farbwähler und mehr.',
			slug: 'entwickler'
		},
		es: {
			name: 'Desarrollador',
			title: 'Herramientas de Desarrollador - Codificación, Formato y Conversión',
			description: 'Herramientas gratuitas para desarrolladores: Base64, JSON formatter, generador de hash, codificador URL, selector de color y más.',
			slug: 'desarrollador'
		}
	},
	social: {
		nl: {
			name: 'Social Media',
			title: 'Social Media Tools - Content & Preview Tools',
			description: 'Gratis social media tools: safezone checker, bio lengte teller, OG image tester en meer.',
			slug: 'social'
		},
		en: {
			name: 'Social Media',
			title: 'Social Media Tools - Content & Preview Tools',
			description: 'Free social media tools: safezone checker, bio length counter, OG image tester and more.',
			slug: 'social'
		},
		de: {
			name: 'Social Media',
			title: 'Social Media Tools - Content & Preview Tools',
			description: 'Kostenlose Social-Media-Tools: Safezone Checker, Bio-Längen-Zähler, OG Image Tester und mehr.',
			slug: 'social'
		},
		es: {
			name: 'Redes Sociales',
			title: 'Herramientas de Redes Sociales - Contenido y Vista Previa',
			description: 'Herramientas gratuitas de redes sociales: verificador de safezone, contador de bio, probador de imagen OG y más.',
			slug: 'social'
		}
	},
	travel: {
		nl: {
			name: 'Reizen',
			title: 'Reis Tools - Bagage & Jetlag Planning',
			description: 'Gratis reis tools: koffer maten gids, jetlag planner en meer.',
			slug: 'reizen'
		},
		en: {
			name: 'Travel',
			title: 'Travel Tools - Luggage & Jetlag Planning',
			description: 'Free travel tools: luggage size guide, jetlag planner and more.',
			slug: 'travel'
		},
		de: {
			name: 'Reise',
			title: 'Reise Tools - Gepäck & Jetlag Planung',
			description: 'Kostenlose Reise-Tools: Koffer-Größen-Guide, Jetlag-Planer und mehr.',
			slug: 'reise'
		},
		es: {
			name: 'Viaje',
			title: 'Herramientas de Viaje - Equipaje y Planificación de Jetlag',
			description: 'Herramientas de viaje gratuitas: guía de tamaños de equipaje, planificador de jetlag y más.',
			slug: 'viaje'
		}
	}
};

// Helper function to get tool meta with fallback to English
export function getToolMeta(toolKey: string, lang: SupportedLang): ToolMeta | undefined {
	const toolMeta = toolsMeta[toolKey];
	if (!toolMeta) return undefined;

	// Return requested language or fallback to English
	return toolMeta[lang] || toolMeta.en;
}

// Helper function to get site meta with fallback to English
export function getSiteMeta(lang: SupportedLang) {
	return siteMeta[lang] || siteMeta.en;
}

// Helper function to get category meta with fallback to English
export function getCategoryMeta(categoryKey: string, lang: SupportedLang): CategoryMeta | undefined {
	const category = categories[categoryKey];
	if (!category) return undefined;

	return category[lang] || category.en;
}

// Helper function to get all tools for a language with fallback to English
export function getAllToolsForLang(lang: SupportedLang): Array<ToolMeta & { key: string }> {
	return Object.entries(toolsMeta).map(([key, meta]) => ({
		key,
		...(meta[lang] || meta.en)
	}));
}

// Helper to check if a language is supported
export function isSupportedLang(lang: string): lang is SupportedLang {
	return ['en', 'nl', 'de', 'es'].includes(lang);
}
