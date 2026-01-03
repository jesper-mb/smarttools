<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { getCategoryMeta, getToolMeta } from '$lib/seo/meta';
	import { getToolPath, getCategoryPath, getCategoryAlternateUrls } from '$lib/config';
	import { t } from '$lib/i18n';

	interface Props {
		data: {
			lang: 'en' | 'nl' | 'de' | 'es';
			categoryKey: string;
			categorySlug: string;
			tools: Array<{ key: string; slug: string; category: string }>;
		};
	}

	let { data }: Props = $props();

	// Use $derived for reactive values
	let lang = $derived(data.lang);
	let categoryKey = $derived(data.categoryKey);
	let categorySlug = $derived(data.categorySlug);
	let tools = $derived(data.tools);

	// Get metadata - all derived
	let categoryMeta = $derived(getCategoryMeta(categoryKey, lang)!);
	let canonicalPath = $derived(getCategoryPath(categoryKey as any, lang));
	let alternateUrls = $derived(getCategoryAlternateUrls(categoryKey as any));

	// Category-specific descriptions for SEO
	const categoryDescriptions: Record<string, Record<string, string>> = {
		time: {
			en: 'From precise stopwatches and countdown timers to Pomodoro sessions, these time tools help you stay productive. Track time with millisecond precision, set countdown alarms, or boost your focus with proven time management techniques. Everything works instantly in your browser.',
			nl: 'Van precieze stopwatches en countdown timers tot Pomodoro sessies, deze tijdtools helpen je productief te blijven. Houd tijd bij met milliseconde precisie, stel countdown alarmen in, of verbeter je focus met bewezen tijdmanagement technieken. Alles werkt direct in je browser.',
			de: 'Von präzisen Stoppuhren und Countdown-Timern bis hin zu Pomodoro-Sitzungen - diese Zeittools helfen Ihnen produktiv zu bleiben. Messen Sie Zeit mit Millisekunden-Präzision, stellen Sie Countdown-Alarme ein oder steigern Sie Ihren Fokus mit bewährten Zeitmanagement-Techniken.',
			es: 'Desde cronómetros precisos y temporizadores de cuenta regresiva hasta sesiones Pomodoro, estas herramientas de tiempo te ayudan a mantenerte productivo. Mide el tiempo con precisión de milisegundos, configura alarmas de cuenta regresiva o mejora tu enfoque con técnicas probadas de gestión del tiempo.'
		},
		text: {
			en: 'Count words, characters, and sentences instantly. Clean up messy text, sort lines alphabetically, or edit multiple lines at once. Perfect for writers, students, and content creators who need quick text analysis and manipulation tools.',
			nl: 'Tel woorden, karakters en zinnen direct. Ruim rommelige tekst op, sorteer regels alfabetisch of bewerk meerdere regels tegelijk. Perfect voor schrijvers, studenten en content creators die snelle tekstanalyse en bewerkingstools nodig hebben.',
			de: 'Zählen Sie Wörter, Zeichen und Sätze sofort. Bereinigen Sie unordentlichen Text, sortieren Sie Zeilen alphabetisch oder bearbeiten Sie mehrere Zeilen gleichzeitig. Perfekt für Autoren, Studenten und Content Creator.',
			es: 'Cuenta palabras, caracteres y oraciones al instante. Limpia texto desordenado, ordena líneas alfabéticamente o edita múltiples líneas a la vez. Perfecto para escritores, estudiantes y creadores de contenido.'
		},
		calc: {
			en: 'Calculate percentages, convert units, and compute age in seconds. From simple percentage calculations to comprehensive unit conversions across length, weight, temperature, and more. Quick calculations without the clutter.',
			nl: 'Bereken percentages, converteer eenheden en bereken leeftijd in seconden. Van eenvoudige percentage berekeningen tot uitgebreide eenheid conversies voor lengte, gewicht, temperatuur en meer. Snelle berekeningen zonder rommel.',
			de: 'Berechnen Sie Prozente, konvertieren Sie Einheiten und ermitteln Sie das Alter in Sekunden. Von einfachen Prozentberechnungen bis hin zu umfassenden Einheitenumrechnungen für Länge, Gewicht, Temperatur und mehr.',
			es: 'Calcula porcentajes, convierte unidades y calcula la edad en segundos. Desde cálculos de porcentaje simples hasta conversiones completas de unidades para longitud, peso, temperatura y más.'
		},
		generators: {
			en: 'Generate random numbers, pick names from a list, spin a wheel, flip a coin, or roll dice. Perfect for games, raffles, and making quick decisions. All generators use cryptographically secure randomness for fair results.',
			nl: 'Genereer willekeurige getallen, kies namen uit een lijst, draai aan een rad, gooi een munt of rol dobbelstenen. Perfect voor spelletjes, loterijen en snelle beslissingen. Alle generators gebruiken cryptografisch veilige willekeurigheid.',
			de: 'Generieren Sie Zufallszahlen, wählen Sie Namen aus einer Liste, drehen Sie ein Rad, werfen Sie eine Münze oder würfeln Sie. Perfekt für Spiele, Verlosungen und schnelle Entscheidungen. Alle Generatoren verwenden kryptografisch sichere Zufälligkeit.',
			es: 'Genera números aleatorios, elige nombres de una lista, gira una ruleta, lanza una moneda o tira dados. Perfecto para juegos, sorteos y decisiones rápidas. Todos los generadores usan aleatoriedad criptográficamente segura.'
		},
		dev: {
			en: 'Developer-focused utilities for encoding, formatting, and generating data. Encode text to Base64, format JSON with proper indentation, generate secure passwords and UUIDs, create QR codes, or compute hashes. All processing happens locally in your browser for maximum privacy and speed.',
			nl: 'Developer-gerichte tools voor encoderen, formatteren en genereren van data. Encodeer tekst naar Base64, formatteer JSON met correcte indentatie, genereer veilige wachtwoorden en UUIDs, maak QR-codes of bereken hashes. Alle verwerking gebeurt lokaal in je browser.',
			de: 'Entwicklerorientierte Werkzeuge zum Kodieren, Formatieren und Generieren von Daten. Kodieren Sie Text in Base64, formatieren Sie JSON mit korrekter Einrückung, generieren Sie sichere Passwörter und UUIDs, erstellen Sie QR-Codes oder berechnen Sie Hashes.',
			es: 'Utilidades enfocadas en desarrolladores para codificar, formatear y generar datos. Codifica texto a Base64, formatea JSON con la indentación correcta, genera contraseñas seguras y UUIDs, crea códigos QR o calcula hashes.'
		},
		social: {
			en: 'Optimize your social media presence with tools designed for content creators. Check if your videos fit within TikTok and Reels safe zones, ensure your bio fits platform character limits, and preview how your links will appear when shared on Twitter, Facebook, and LinkedIn.',
			nl: 'Optimaliseer je social media aanwezigheid met tools ontworpen voor content creators. Controleer of je videos binnen TikTok en Reels safe zones vallen, zorg dat je bio binnen platform karakterlimieten past, en bekijk hoe je links eruitzien wanneer gedeeld op Twitter, Facebook en LinkedIn.',
			de: 'Optimieren Sie Ihre Social-Media-Präsenz mit Tools für Content Creator. Prüfen Sie, ob Ihre Videos in TikTok- und Reels-Safezones passen, stellen Sie sicher, dass Ihre Bio innerhalb der Zeichenlimits liegt, und sehen Sie eine Vorschau, wie Ihre Links erscheinen.',
			es: 'Optimiza tu presencia en redes sociales con herramientas diseñadas para creadores de contenido. Verifica si tus videos caben dentro de las zonas seguras de TikTok y Reels, asegúrate de que tu bio cumple con los límites de caracteres.'
		},
		travel: {
			en: 'Plan smarter trips with practical travel utilities. Compare luggage sizes to find the perfect suitcase, check if your bag meets airline carry-on requirements, and prepare for timezone changes with our jetlag planner. Essential tools for frequent flyers and vacation planners alike.',
			nl: 'Plan slimmere reizen met praktische reis-tools. Vergelijk koffer maten om de perfecte koffer te vinden, controleer of je tas voldoet aan airline handbagage-eisen, en bereid je voor op tijdzone veranderingen met onze jetlag planner.',
			de: 'Planen Sie klügere Reisen mit praktischen Reise-Tools. Vergleichen Sie Koffergrößen, um den perfekten Koffer zu finden, prüfen Sie, ob Ihre Tasche den Handgepäck-Anforderungen entspricht, und bereiten Sie sich auf Zeitzonenänderungen vor.',
			es: 'Planifica viajes más inteligentes con utilidades prácticas de viaje. Compara tamaños de equipaje para encontrar la maleta perfecta, verifica si tu bolso cumple con los requisitos de equipaje de mano.'
		}
	};

	let categoryDescription = $derived(categoryDescriptions[categoryKey]?.[lang] || categoryDescriptions[categoryKey]?.en || '');

	// Get tool metadata
	function getToolInfo(toolKey: string) {
		const meta = getToolMeta(toolKey, lang);
		return {
			name: meta?.title.split(' - ')[0] || toolKey,
			description: meta?.description || ''
		};
	}
</script>

<SEOHead
	title={categoryMeta.title}
	description={categoryMeta.description}
	{lang}
	{canonicalPath}
	{alternateUrls}
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: categoryMeta.name }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-orange-600">
				{#if categoryKey === 'time'}⏱{:else if categoryKey === 'text'}¶{:else if categoryKey === 'calc'}%{:else if categoryKey === 'generators'}⚄{:else if categoryKey === 'dev'}&lt;/&gt;{:else if categoryKey === 'social'}@{:else if categoryKey === 'travel'}✈{/if}
			</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				{categoryMeta.name}
			</h1>
		</div>
		<p class="text-neutral-600 font-sans max-w-3xl leading-relaxed">
			{categoryDescription}
		</p>
	</div>

	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
		{#each tools as tool}
			{@const info = getToolInfo(tool.key)}
			<a
				href={getToolPath(tool.key, lang)}
				class="group p-6 border-2 border-neutral-200 hover:border-orange-400 bg-white transition-all hover:shadow-lg"
			>
				<h3 class="font-bold text-neutral-950 mb-1 group-hover:text-orange-600">
					{info.name}
				</h3>
				<p class="text-sm text-neutral-500 line-clamp-2">{info.description}</p>
			</a>
		{/each}
	</div>

	<div class="mt-8 p-8 bg-orange-50 border-2 border-orange-200">
		<h2 class="text-xl font-bold text-neutral-950 mb-4">
			{lang === 'nl' ? 'Over deze tools' : lang === 'de' ? 'Über diese Tools' : lang === 'es' ? 'Sobre estas herramientas' : 'About these tools'}
		</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				{#if lang === 'nl'}
					Deze tools zijn ontworpen voor snelheid en eenvoud. Geen registratie, geen downloads, geen advertenties. Gebruik ze direct in je browser met volledige toetsenbordondersteuning.
				{:else if lang === 'de'}
					Diese Tools sind für Geschwindigkeit und Einfachheit konzipiert. Keine Registrierung, keine Downloads, keine Werbung. Nutzen Sie sie direkt im Browser mit voller Tastaturunterstützung.
				{:else if lang === 'es'}
					Estas herramientas están diseñadas para rapidez y simplicidad. Sin registro, sin descargas, sin anuncios. Úsalas directamente en tu navegador con soporte completo de teclado.
				{:else}
					These tools are designed for speed and simplicity. No registration, no downloads, no ads. Use them directly in your browser with full keyboard support.
				{/if}
			</p>
			<p class="mt-4">
				<strong>{lang === 'nl' ? 'Pro tip:' : lang === 'de' ? 'Profi-Tipp:' : lang === 'es' ? 'Consejo:' : 'Pro tip:'}</strong>
				{lang === 'nl' ? 'Druk op' : lang === 'de' ? 'Drücke' : lang === 'es' ? 'Presiona' : 'Press'}
				<kbd class="px-1.5 py-0.5 bg-white border border-neutral-300 text-xs">K</kbd>
				{lang === 'nl' ? 'om snel te zoeken.' : lang === 'de' ? 'um schnell zu suchen.' : lang === 'es' ? 'para buscar rápidamente.' : 'to search quickly.'}
			</p>
		</div>
	</div>
</div>
