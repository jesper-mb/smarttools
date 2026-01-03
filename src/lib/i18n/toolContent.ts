/**
 * Tool Page Content Translations
 *
 * Easy to manage translations for all tool pages.
 * To add a new language: add a new key (e.g., 'fr') to each tool's content object.
 * To add a new tool: copy an existing tool structure and modify.
 */

export type SupportedLanguage = 'en' | 'nl' | 'de' | 'es';

export interface ToolPageContent {
	// Page sections
	sections: {
		howItWorks: {
			title: string;
			content: string;
		};
		shortcuts: {
			title: string;
			items: Array<{ key: string; action: string }>;
		};
		faq: {
			title: string;
			items: Array<{ question: string; answer: string }>;
		};
	};
	// Breadcrumb label
	breadcrumb: string;
}

// Common UI labels used across all tool pages
export const commonLabels: Record<SupportedLanguage, {
	howItWorks: string;
	shortcuts: string;
	faq: string;
	comingSoon: string;
	relatedTools: string;
	startStop: string;
	reset: string;
	copy: string;
	copied: string;
	privacy: string;
}> = {
	en: {
		howItWorks: 'How it works',
		shortcuts: 'Shortcuts',
		faq: 'FAQ',
		comingSoon: 'Coming soon',
		relatedTools: 'Related tools',
		startStop: 'Start/Stop',
		reset: 'Reset',
		copy: 'Copy',
		copied: 'Copied!',
		privacy: 'Your data never leaves your browser'
	},
	nl: {
		howItWorks: 'Hoe het werkt',
		shortcuts: 'Sneltoetsen',
		faq: 'Veelgestelde vragen',
		comingSoon: 'Binnenkort',
		relatedTools: 'Gerelateerde tools',
		startStop: 'Start/Stop',
		reset: 'Reset',
		copy: 'Kopieer',
		copied: 'Gekopieerd!',
		privacy: 'Je data verlaat nooit je browser'
	},
	de: {
		howItWorks: 'So funktioniert es',
		shortcuts: 'Tastenkürzel',
		faq: 'Häufige Fragen',
		comingSoon: 'Demnächst',
		relatedTools: 'Ähnliche Tools',
		startStop: 'Start/Stopp',
		reset: 'Zurücksetzen',
		copy: 'Kopieren',
		copied: 'Kopiert!',
		privacy: 'Deine Daten verlassen nie deinen Browser'
	},
	es: {
		howItWorks: 'Cómo funciona',
		shortcuts: 'Atajos',
		faq: 'Preguntas frecuentes',
		comingSoon: 'Próximamente',
		relatedTools: 'Herramientas relacionadas',
		startStop: 'Iniciar/Detener',
		reset: 'Reiniciar',
		copy: 'Copiar',
		copied: '¡Copiado!',
		privacy: 'Tus datos nunca salen de tu navegador'
	}
};

// Tool-specific page content
export const toolContent: Record<string, Record<SupportedLanguage, ToolPageContent>> = {
	stopwatch: {
		en: {
			breadcrumb: 'Stopwatch',
			sections: {
				howItWorks: {
					title: 'How it works',
					content: 'This free online stopwatch is perfect for accurately measuring time. Whether you\'re doing a workout, cooking, or timing a presentation - our stopwatch is accurate to the hundredth of a second.'
				},
				shortcuts: {
					title: 'Shortcuts',
					items: [
						{ key: 'SPACE', action: 'Start/Stop' },
						{ key: 'R', action: 'Reset' },
						{ key: 'L', action: 'Lap' }
					]
				},
				faq: {
					title: 'FAQ',
					items: [
						{ question: 'Does the stopwatch keep running if I close the tab?', answer: 'Yes, the stopwatch continues to run accurately as long as you don\'t completely close the browser.' },
						{ question: 'Can I track lap times?', answer: 'Yes! Press the L key to record the current time without stopping the stopwatch.' },
						{ question: 'How accurate is the stopwatch?', answer: 'The stopwatch is accurate to the hundredth of a second, perfect for timing any activity.' }
					]
				}
			}
		},
		nl: {
			breadcrumb: 'Stopwatch',
			sections: {
				howItWorks: {
					title: 'Hoe het werkt',
					content: 'Deze gratis online stopwatch is perfect voor het nauwkeurig meten van tijd. Of je nu traint, kookt of een presentatie timet - onze stopwatch is nauwkeurig tot op de honderdste van een seconde.'
				},
				shortcuts: {
					title: 'Sneltoetsen',
					items: [
						{ key: 'SPATIE', action: 'Start/Stop' },
						{ key: 'R', action: 'Reset' },
						{ key: 'L', action: 'Ronde' }
					]
				},
				faq: {
					title: 'Veelgestelde vragen',
					items: [
						{ question: 'Blijft de stopwatch lopen als ik de tab sluit?', answer: 'Ja, de stopwatch blijft nauwkeurig doorlopen zolang je de browser niet volledig sluit.' },
						{ question: 'Kan ik rondetijden bijhouden?', answer: 'Ja! Druk op L om de huidige tijd vast te leggen zonder de stopwatch te stoppen.' },
						{ question: 'Hoe nauwkeurig is de stopwatch?', answer: 'De stopwatch is nauwkeurig tot op de honderdste van een seconde, perfect voor het timen van elke activiteit.' }
					]
				}
			}
		},
		de: {
			breadcrumb: 'Stoppuhr',
			sections: {
				howItWorks: {
					title: 'So funktioniert es',
					content: 'Diese kostenlose Online-Stoppuhr ist perfekt für die genaue Zeitmessung. Ob Training, Kochen oder Präsentation - unsere Stoppuhr ist auf die Hundertstelsekunde genau.'
				},
				shortcuts: {
					title: 'Tastenkürzel',
					items: [
						{ key: 'LEERTASTE', action: 'Start/Stopp' },
						{ key: 'R', action: 'Zurücksetzen' },
						{ key: 'L', action: 'Runde' }
					]
				},
				faq: {
					title: 'Häufige Fragen',
					items: [
						{ question: 'Läuft die Stoppuhr weiter, wenn ich den Tab schließe?', answer: 'Ja, die Stoppuhr läuft genau weiter, solange Sie den Browser nicht vollständig schließen.' },
						{ question: 'Kann ich Rundenzeiten erfassen?', answer: 'Ja! Drücken Sie L, um die aktuelle Zeit zu speichern, ohne die Stoppuhr anzuhalten.' },
						{ question: 'Wie genau ist die Stoppuhr?', answer: 'Die Stoppuhr ist auf die Hundertstelsekunde genau, perfekt für jede Zeitmessung.' }
					]
				}
			}
		},
		es: {
			breadcrumb: 'Cronómetro',
			sections: {
				howItWorks: {
					title: 'Cómo funciona',
					content: 'Este cronómetro online gratuito es perfecto para medir el tiempo con precisión. Ya sea para entrenar, cocinar o cronometrar una presentación - nuestro cronómetro es preciso hasta la centésima de segundo.'
				},
				shortcuts: {
					title: 'Atajos',
					items: [
						{ key: 'ESPACIO', action: 'Iniciar/Detener' },
						{ key: 'R', action: 'Reiniciar' },
						{ key: 'L', action: 'Vuelta' }
					]
				},
				faq: {
					title: 'Preguntas frecuentes',
					items: [
						{ question: '¿El cronómetro sigue funcionando si cierro la pestaña?', answer: 'Sí, el cronómetro sigue funcionando con precisión mientras no cierres completamente el navegador.' },
						{ question: '¿Puedo registrar tiempos de vuelta?', answer: '¡Sí! Presiona L para registrar el tiempo actual sin detener el cronómetro.' },
						{ question: '¿Qué tan preciso es el cronómetro?', answer: 'El cronómetro es preciso hasta la centésima de segundo, perfecto para cronometrar cualquier actividad.' }
					]
				}
			}
		}
	},
	timer: {
		en: {
			breadcrumb: 'Timer',
			sections: {
				howItWorks: {
					title: 'How it works',
					content: 'Set your desired time and start the countdown. When the timer reaches zero, you\'ll hear an alarm. Perfect for cooking, workouts, or any timed activity.'
				},
				shortcuts: {
					title: 'Shortcuts',
					items: [
						{ key: 'SPACE', action: 'Start/Pause' },
						{ key: 'R', action: 'Reset' },
						{ key: '↑↓', action: 'Adjust time' }
					]
				},
				faq: {
					title: 'FAQ',
					items: [
						{ question: 'Will I hear an alarm when the timer ends?', answer: 'Yes, a sound will play when the countdown reaches zero.' },
						{ question: 'Can I set custom times?', answer: 'Yes, you can set any time from seconds to hours using the input fields or arrow keys.' }
					]
				}
			}
		},
		nl: {
			breadcrumb: 'Timer',
			sections: {
				howItWorks: {
					title: 'Hoe het werkt',
					content: 'Stel je gewenste tijd in en start het aftellen. Wanneer de timer nul bereikt, hoor je een alarm. Perfect voor koken, workouts of elke getimede activiteit.'
				},
				shortcuts: {
					title: 'Sneltoetsen',
					items: [
						{ key: 'SPATIE', action: 'Start/Pauze' },
						{ key: 'R', action: 'Reset' },
						{ key: '↑↓', action: 'Tijd aanpassen' }
					]
				},
				faq: {
					title: 'Veelgestelde vragen',
					items: [
						{ question: 'Hoor ik een alarm als de timer eindigt?', answer: 'Ja, er klinkt een geluid wanneer het aftellen nul bereikt.' },
						{ question: 'Kan ik aangepaste tijden instellen?', answer: 'Ja, je kunt elke tijd instellen van seconden tot uren met de invoervelden of pijltjestoetsen.' }
					]
				}
			}
		},
		de: {
			breadcrumb: 'Timer',
			sections: {
				howItWorks: {
					title: 'So funktioniert es',
					content: 'Stellen Sie Ihre gewünschte Zeit ein und starten Sie den Countdown. Wenn der Timer Null erreicht, ertönt ein Alarm. Perfekt zum Kochen, Training oder jede zeitgesteuerte Aktivität.'
				},
				shortcuts: {
					title: 'Tastenkürzel',
					items: [
						{ key: 'LEERTASTE', action: 'Start/Pause' },
						{ key: 'R', action: 'Zurücksetzen' },
						{ key: '↑↓', action: 'Zeit anpassen' }
					]
				},
				faq: {
					title: 'Häufige Fragen',
					items: [
						{ question: 'Höre ich einen Alarm wenn der Timer endet?', answer: 'Ja, ein Ton ertönt wenn der Countdown Null erreicht.' },
						{ question: 'Kann ich eigene Zeiten einstellen?', answer: 'Ja, Sie können jede Zeit von Sekunden bis Stunden mit den Eingabefeldern oder Pfeiltasten einstellen.' }
					]
				}
			}
		},
		es: {
			breadcrumb: 'Temporizador',
			sections: {
				howItWorks: {
					title: 'Cómo funciona',
					content: 'Configura el tiempo deseado y comienza la cuenta regresiva. Cuando el temporizador llegue a cero, escucharás una alarma. Perfecto para cocinar, entrenar o cualquier actividad cronometrada.'
				},
				shortcuts: {
					title: 'Atajos',
					items: [
						{ key: 'ESPACIO', action: 'Iniciar/Pausar' },
						{ key: 'R', action: 'Reiniciar' },
						{ key: '↑↓', action: 'Ajustar tiempo' }
					]
				},
				faq: {
					title: 'Preguntas frecuentes',
					items: [
						{ question: '¿Escucharé una alarma cuando termine el temporizador?', answer: 'Sí, sonará un sonido cuando la cuenta regresiva llegue a cero.' },
						{ question: '¿Puedo configurar tiempos personalizados?', answer: 'Sí, puedes configurar cualquier tiempo desde segundos hasta horas usando los campos de entrada o las flechas.' }
					]
				}
			}
		}
	},
	'base64': {
		en: {
			breadcrumb: 'Base64',
			sections: {
				howItWorks: {
					title: 'How it works',
					content: 'Base64 encoding converts binary data to ASCII text. Paste your text to encode it, or paste Base64 to decode it. All processing happens locally in your browser.'
				},
				shortcuts: {
					title: 'Shortcuts',
					items: [
						{ key: 'CTRL+V', action: 'Paste' },
						{ key: 'CTRL+C', action: 'Copy result' }
					]
				},
				faq: {
					title: 'FAQ',
					items: [
						{ question: 'Is my data sent to a server?', answer: 'No, all encoding and decoding happens locally in your browser. Your data never leaves your device.' },
						{ question: 'What is Base64 used for?', answer: 'Base64 is commonly used to encode binary data in emails, embed images in HTML/CSS, and transmit data in URLs.' }
					]
				}
			}
		},
		nl: {
			breadcrumb: 'Base64',
			sections: {
				howItWorks: {
					title: 'Hoe het werkt',
					content: 'Base64 encoding converteert binaire data naar ASCII tekst. Plak je tekst om te encoderen, of plak Base64 om te decoderen. Alle verwerking gebeurt lokaal in je browser.'
				},
				shortcuts: {
					title: 'Sneltoetsen',
					items: [
						{ key: 'CTRL+V', action: 'Plakken' },
						{ key: 'CTRL+C', action: 'Resultaat kopiëren' }
					]
				},
				faq: {
					title: 'Veelgestelde vragen',
					items: [
						{ question: 'Wordt mijn data naar een server gestuurd?', answer: 'Nee, alle encoding en decoding gebeurt lokaal in je browser. Je data verlaat nooit je apparaat.' },
						{ question: 'Waar wordt Base64 voor gebruikt?', answer: 'Base64 wordt vaak gebruikt om binaire data te encoderen in emails, afbeeldingen in te sluiten in HTML/CSS, en data te verzenden in URLs.' }
					]
				}
			}
		},
		de: {
			breadcrumb: 'Base64',
			sections: {
				howItWorks: {
					title: 'So funktioniert es',
					content: 'Base64-Kodierung wandelt Binärdaten in ASCII-Text um. Fügen Sie Text zum Kodieren ein oder Base64 zum Dekodieren. Alle Verarbeitung erfolgt lokal in Ihrem Browser.'
				},
				shortcuts: {
					title: 'Tastenkürzel',
					items: [
						{ key: 'STRG+V', action: 'Einfügen' },
						{ key: 'STRG+C', action: 'Ergebnis kopieren' }
					]
				},
				faq: {
					title: 'Häufige Fragen',
					items: [
						{ question: 'Werden meine Daten an einen Server gesendet?', answer: 'Nein, alle Kodierung und Dekodierung erfolgt lokal in Ihrem Browser. Ihre Daten verlassen nie Ihr Gerät.' },
						{ question: 'Wofür wird Base64 verwendet?', answer: 'Base64 wird häufig verwendet, um Binärdaten in E-Mails zu kodieren, Bilder in HTML/CSS einzubetten und Daten in URLs zu übertragen.' }
					]
				}
			}
		},
		es: {
			breadcrumb: 'Base64',
			sections: {
				howItWorks: {
					title: 'Cómo funciona',
					content: 'La codificación Base64 convierte datos binarios en texto ASCII. Pega tu texto para codificarlo, o pega Base64 para decodificarlo. Todo el procesamiento ocurre localmente en tu navegador.'
				},
				shortcuts: {
					title: 'Atajos',
					items: [
						{ key: 'CTRL+V', action: 'Pegar' },
						{ key: 'CTRL+C', action: 'Copiar resultado' }
					]
				},
				faq: {
					title: 'Preguntas frecuentes',
					items: [
						{ question: '¿Se envían mis datos a un servidor?', answer: 'No, toda la codificación y decodificación ocurre localmente en tu navegador. Tus datos nunca salen de tu dispositivo.' },
						{ question: '¿Para qué se usa Base64?', answer: 'Base64 se usa comúnmente para codificar datos binarios en correos electrónicos, incrustar imágenes en HTML/CSS y transmitir datos en URLs.' }
					]
				}
			}
		}
	},
	'json-formatter': {
		en: {
			breadcrumb: 'JSON Formatter',
			sections: {
				howItWorks: {
					title: 'How it works',
					content: 'Paste your JSON to format and validate it. The tool will automatically detect errors and show you exactly where they are. You can also minify JSON for production use.'
				},
				shortcuts: {
					title: 'Shortcuts',
					items: [
						{ key: 'CTRL+V', action: 'Paste JSON' },
						{ key: 'CTRL+C', action: 'Copy formatted' }
					]
				},
				faq: {
					title: 'FAQ',
					items: [
						{ question: 'Is my JSON data secure?', answer: 'Yes, all processing happens locally in your browser. Your JSON data is never sent to any server.' },
						{ question: 'Can I minify JSON?', answer: 'Yes, you can switch between formatted (pretty) and minified output.' }
					]
				}
			}
		},
		nl: {
			breadcrumb: 'JSON Formatter',
			sections: {
				howItWorks: {
					title: 'Hoe het werkt',
					content: 'Plak je JSON om te formatteren en valideren. De tool detecteert automatisch fouten en toont precies waar ze zijn. Je kunt JSON ook minificeren voor productie.'
				},
				shortcuts: {
					title: 'Sneltoetsen',
					items: [
						{ key: 'CTRL+V', action: 'JSON plakken' },
						{ key: 'CTRL+C', action: 'Geformatteerd kopiëren' }
					]
				},
				faq: {
					title: 'Veelgestelde vragen',
					items: [
						{ question: 'Is mijn JSON data veilig?', answer: 'Ja, alle verwerking gebeurt lokaal in je browser. Je JSON data wordt nooit naar een server gestuurd.' },
						{ question: 'Kan ik JSON minificeren?', answer: 'Ja, je kunt wisselen tussen geformatteerde (pretty) en geminificeerde output.' }
					]
				}
			}
		},
		de: {
			breadcrumb: 'JSON Formatter',
			sections: {
				howItWorks: {
					title: 'So funktioniert es',
					content: 'Fügen Sie Ihr JSON ein, um es zu formatieren und zu validieren. Das Tool erkennt automatisch Fehler und zeigt genau, wo sie sind. Sie können JSON auch für die Produktion minimieren.'
				},
				shortcuts: {
					title: 'Tastenkürzel',
					items: [
						{ key: 'STRG+V', action: 'JSON einfügen' },
						{ key: 'STRG+C', action: 'Formatiert kopieren' }
					]
				},
				faq: {
					title: 'Häufige Fragen',
					items: [
						{ question: 'Sind meine JSON-Daten sicher?', answer: 'Ja, alle Verarbeitung erfolgt lokal in Ihrem Browser. Ihre JSON-Daten werden nie an einen Server gesendet.' },
						{ question: 'Kann ich JSON minimieren?', answer: 'Ja, Sie können zwischen formatierter (pretty) und minimierter Ausgabe wechseln.' }
					]
				}
			}
		},
		es: {
			breadcrumb: 'JSON Formatter',
			sections: {
				howItWorks: {
					title: 'Cómo funciona',
					content: 'Pega tu JSON para formatearlo y validarlo. La herramienta detectará automáticamente errores y te mostrará exactamente dónde están. También puedes minificar JSON para producción.'
				},
				shortcuts: {
					title: 'Atajos',
					items: [
						{ key: 'CTRL+V', action: 'Pegar JSON' },
						{ key: 'CTRL+C', action: 'Copiar formateado' }
					]
				},
				faq: {
					title: 'Preguntas frecuentes',
					items: [
						{ question: '¿Están seguros mis datos JSON?', answer: 'Sí, todo el procesamiento ocurre localmente en tu navegador. Tus datos JSON nunca se envían a ningún servidor.' },
						{ question: '¿Puedo minificar JSON?', answer: 'Sí, puedes cambiar entre salida formateada (pretty) y minificada.' }
					]
				}
			}
		}
	},
	'password-generator': {
		en: {
			breadcrumb: 'Password Generator',
			sections: {
				howItWorks: {
					title: 'How it works',
					content: 'Generate secure, random passwords with customizable length and character types. All passwords are generated locally in your browser using cryptographically secure random numbers.'
				},
				shortcuts: {
					title: 'Shortcuts',
					items: [
						{ key: 'SPACE', action: 'Generate new' },
						{ key: 'C', action: 'Copy password' }
					]
				},
				faq: {
					title: 'FAQ',
					items: [
						{ question: 'Are the passwords truly random?', answer: 'Yes, we use the Web Crypto API which provides cryptographically secure random numbers.' },
						{ question: 'Is my password stored anywhere?', answer: 'No, passwords are generated locally and never sent to any server or stored anywhere.' }
					]
				}
			}
		},
		nl: {
			breadcrumb: 'Wachtwoord Generator',
			sections: {
				howItWorks: {
					title: 'Hoe het werkt',
					content: 'Genereer veilige, willekeurige wachtwoorden met aanpasbare lengte en tekentypes. Alle wachtwoorden worden lokaal in je browser gegenereerd met cryptografisch veilige willekeurige getallen.'
				},
				shortcuts: {
					title: 'Sneltoetsen',
					items: [
						{ key: 'SPATIE', action: 'Nieuw genereren' },
						{ key: 'C', action: 'Wachtwoord kopiëren' }
					]
				},
				faq: {
					title: 'Veelgestelde vragen',
					items: [
						{ question: 'Zijn de wachtwoorden echt willekeurig?', answer: 'Ja, we gebruiken de Web Crypto API die cryptografisch veilige willekeurige getallen levert.' },
						{ question: 'Wordt mijn wachtwoord ergens opgeslagen?', answer: 'Nee, wachtwoorden worden lokaal gegenereerd en nooit naar een server gestuurd of ergens opgeslagen.' }
					]
				}
			}
		},
		de: {
			breadcrumb: 'Passwort Generator',
			sections: {
				howItWorks: {
					title: 'So funktioniert es',
					content: 'Generieren Sie sichere, zufällige Passwörter mit anpassbarer Länge und Zeichentypen. Alle Passwörter werden lokal in Ihrem Browser mit kryptografisch sicheren Zufallszahlen generiert.'
				},
				shortcuts: {
					title: 'Tastenkürzel',
					items: [
						{ key: 'LEERTASTE', action: 'Neu generieren' },
						{ key: 'C', action: 'Passwort kopieren' }
					]
				},
				faq: {
					title: 'Häufige Fragen',
					items: [
						{ question: 'Sind die Passwörter wirklich zufällig?', answer: 'Ja, wir verwenden die Web Crypto API, die kryptografisch sichere Zufallszahlen liefert.' },
						{ question: 'Wird mein Passwort irgendwo gespeichert?', answer: 'Nein, Passwörter werden lokal generiert und nie an einen Server gesendet oder irgendwo gespeichert.' }
					]
				}
			}
		},
		es: {
			breadcrumb: 'Generador de Contraseñas',
			sections: {
				howItWorks: {
					title: 'Cómo funciona',
					content: 'Genera contraseñas seguras y aleatorias con longitud y tipos de caracteres personalizables. Todas las contraseñas se generan localmente en tu navegador usando números aleatorios criptográficamente seguros.'
				},
				shortcuts: {
					title: 'Atajos',
					items: [
						{ key: 'ESPACIO', action: 'Generar nuevo' },
						{ key: 'C', action: 'Copiar contraseña' }
					]
				},
				faq: {
					title: 'Preguntas frecuentes',
					items: [
						{ question: '¿Las contraseñas son realmente aleatorias?', answer: 'Sí, usamos la API Web Crypto que proporciona números aleatorios criptográficamente seguros.' },
						{ question: '¿Se almacena mi contraseña en algún lugar?', answer: 'No, las contraseñas se generan localmente y nunca se envían a ningún servidor ni se almacenan.' }
					]
				}
			}
		}
	}
};

// Helper function to get tool content with fallback to English
export function getToolContent(toolSlug: string, lang: SupportedLanguage): ToolPageContent | null {
	const tool = toolContent[toolSlug];
	if (!tool) return null;
	return tool[lang] || tool['en'];
}

// Helper function to get common labels
export function getCommonLabels(lang: SupportedLanguage) {
	return commonLabels[lang] || commonLabels['en'];
}
